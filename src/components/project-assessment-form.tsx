"use client";

import {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { ArrowRight, CheckCircle2, Loader2, LockKeyhole, Paperclip } from "lucide-react";
import { uploadPresigned } from "@vercel/blob/client";
import {
  chinaEntryModels,
  chinaInterestOptions,
  chinaRegulatoryStatuses,
  clinicalEvidenceOptions,
  existingChinaActivityOptions,
  getProjectAssessmentFieldErrors,
  organizationTypes,
  productCategories,
  productLifecycleStages,
  projectAssessmentSubmissionSchema,
  regulatoryStatuses,
  targetTimelines,
} from "@/lib/project-assessment";
import {
  createProjectAssessmentUploadPath,
  MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES,
  PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES,
} from "@/lib/project-assessment-upload";
import { TurnstileWidget } from "@/components/turnstile-widget";

type FieldErrors = Record<string, string>;

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:bg-slate-100";

function RequiredMark() {
  return (
    <span className="text-cyan-700" aria-hidden="true">
      *
    </span>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  return error ? (
    <p id={id} className="mt-2 text-sm font-medium text-red-700">
      {error}
    </p>
  ) : null;
}

function InputField({
  name,
  label,
  error,
  required = false,
  type = "text",
  placeholder,
  autoComplete,
}: {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  type?: "text" | "email" | "url";
  placeholder?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-slate-900">
        {label} {required ? <RequiredMark /> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
      />
      <ErrorText id={errorId} error={error} />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  error,
  required = false,
  onChange,
}: {
  name: string;
  label: string;
  options: readonly string[];
  error?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-slate-900">
        {label} {required ? <RequiredMark /> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        onChange={(event) => onChange?.(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
      >
        <option value="">{required ? "Select an option" : "Not provided"}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ErrorText id={errorId} error={error} />
    </div>
  );
}

function TextAreaField({
  name,
  label,
  error,
  required = false,
  placeholder,
  rows = 5,
}: {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-slate-900">
        {label} {required ? <RequiredMark /> : null}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${inputClass} resize-y leading-6`}
      />
      <ErrorText id={errorId} error={error} />
    </div>
  );
}

function CheckboxGroup({
  name,
  label,
  options,
  error,
  required = false,
  onOtherChange,
}: {
  name: string;
  label: string;
  options: readonly string[];
  error?: string;
  required?: boolean;
  onOtherChange?: (checked: boolean) => void;
}) {
  const errorId = `${name}-error`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="text-sm font-semibold text-slate-900">
        {label} {required ? <RequiredMark /> : null}
      </legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex min-h-11 items-start gap-3 rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm leading-5 text-slate-700 transition hover:border-cyan-300"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              onChange={
                option === "Other"
                  ? (event) => onOtherChange?.(event.target.checked)
                  : undefined
              }
              className="mt-0.5 h-4 w-4 flex-none accent-cyan-700"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <ErrorText id={errorId} error={error} />
    </fieldset>
  );
}

function FormSection({
  number,
  title,
  description,
  children,
}: {
  number: number;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="border-t border-slate-200 pt-10">
      <legend className="sr-only">{`Section ${number}: ${title}`}</legend>
      <div className="flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-950">
        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-cyan-700 text-sm font-semibold text-white">
          {number}
        </span>
        {title}
      </div>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>
      ) : null}
      <div className="mt-8">{children}</div>
    </fieldset>
  );
}

const formValue = (data: FormData, name: string) => String(data.get(name) ?? "");
const formValues = (data: FormData, name: string) =>
  data.getAll(name).map((value) => String(value));

function PitchDeckUpload({ error }: { error?: string }) {
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">("idle");
  const [fileName, setFileName] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES) {
      setStatus("error");
      setMessage("File is larger than 20 MB.");
      event.target.value = "";
      return;
    }

    if (
      file.type &&
      !PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES.includes(
        file.type as (typeof PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES)[number],
      )
    ) {
      setStatus("error");
      setMessage("Choose a PDF, PowerPoint, Word, PNG, or JPEG file.");
      event.target.value = "";
      return;
    }

    setFileName(file.name);
    setStatus("uploading");
    setMessage("");
    setUrl("");

    try {
      const blob = await uploadPresigned(
        createProjectAssessmentUploadPath(file.name),
        file,
        {
          access: "public",
          handleUploadUrl: "/api/project-assessment/upload",
          contentType: file.type || undefined,
        },
      );
      setUrl(blob.url);
      setStatus("done");
    } catch (uploadError) {
      setStatus("error");
      setMessage(
        uploadError instanceof Error
          ? `Upload failed: ${uploadError.message}`
          : "Upload failed. Please try again or add a share link in Additional comments.",
      );
    }
  }

  return (
    <div>
      <p className="text-sm font-semibold text-slate-900">Pitch deck or product brochure</p>
      <p className="mt-1 text-xs text-slate-500">
        Optional - PDF, PowerPoint, Word, PNG, or JPEG - up to 20 MB
      </p>
      <label
        htmlFor="pitchDeckFile"
        className="mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-5 text-sm text-slate-600 transition hover:border-cyan-400 hover:bg-slate-50"
      >
        <Paperclip className="h-5 w-5 flex-none text-cyan-700" />
        <span className="min-w-0 flex-1 truncate">{fileName || "Choose a file to upload"}</span>
        {status === "uploading" ? (
          <Loader2 className="h-4 w-4 flex-none animate-spin text-slate-400" />
        ) : status === "done" ? (
          <CheckCircle2 className="h-4 w-4 flex-none text-emerald-600" />
        ) : null}
        <input
          id="pitchDeckFile"
          type="file"
          accept=".pdf,.ppt,.pptx,.doc,.docx,.png,.jpg,.jpeg"
          onChange={handleFile}
          className="sr-only"
        />
      </label>
      {status === "done" && url ? (
        <p className="mt-2 text-sm text-slate-600">
          Uploaded -{" "}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-cyan-800 underline"
          >
            view file
          </a>
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-2 text-sm font-medium text-red-700">{message}</p>
      ) : null}
      <ErrorText id="pitchDeckLink-error" error={error} />
      <input type="hidden" name="pitchDeckLink" value={url} />
    </div>
  );
}

export function ProjectAssessmentForm({
  submissionEnabled,
  turnstileSiteKey,
  privacyController,
  privacyContact,
  retentionMonths,
}: {
  submissionEnabled: boolean;
  turnstileSiteKey: string;
  privacyController: string;
  privacyContact: string;
  retentionMonths: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const submissionIdRef = useRef<string | null>(null);
  const [organizationType, setOrganizationType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productLifecycleStage, setProductLifecycleStage] = useState("");
  const [regulatoryStatus, setRegulatoryStatus] = useState("");
  const [otherChinaInterest, setOtherChinaInterest] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token);
    if (token) {
      setErrors((current) => {
        if (!current.turnstileToken) return current;
        const next = { ...current };
        delete next.turnstileToken;
        return next;
      });
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!submissionEnabled || isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    submissionIdRef.current ??= crypto.randomUUID();

    const payload = {
      submissionId: submissionIdRef.current,
      companyName: formValue(data, "companyName"),
      companyWebsite: formValue(data, "companyWebsite"),
      countryRegion: formValue(data, "countryRegion"),
      organizationType: formValue(data, "organizationType"),
      organizationTypeOther: formValue(data, "organizationTypeOther"),
      contactPersonName: formValue(data, "contactPersonName"),
      jobTitle: formValue(data, "jobTitle"),
      email: formValue(data, "email"),
      linkedInProfile: formValue(data, "linkedInProfile"),
      productName: formValue(data, "productName"),
      productCategory: formValue(data, "productCategory"),
      productCategoryOther: formValue(data, "productCategoryOther"),
      productDescription: formValue(data, "productDescription"),
      targetIndication: formValue(data, "targetIndication"),
      productLifecycleStage: formValue(data, "productLifecycleStage"),
      productLifecycleStageOther: formValue(data, "productLifecycleStageOther"),
      regulatoryStatus: formValue(data, "regulatoryStatus"),
      regulatoryStatusOther: formValue(data, "regulatoryStatusOther"),
      clinicalEvidence: formValue(data, "clinicalEvidence"),
      keyEvidenceSummary: formValue(data, "keyEvidenceSummary"),
      chinaRegulatoryStatus: formValue(data, "chinaRegulatoryStatus"),
      chinaInterest: formValues(data, "chinaInterest"),
      chinaInterestOther: formValue(data, "chinaInterestOther"),
      preferredEntryModel: formValues(data, "preferredEntryModel"),
      targetTimeline: formValue(data, "targetTimeline"),
      existingChinaActivity: formValue(data, "existingChinaActivity"),
      pitchDeckLink: formValue(data, "pitchDeckLink"),
      additionalComments: formValue(data, "additionalComments"),
      consent: data.get("consent") === "on",
      turnstileToken,
      companyFax: formValue(data, "companyFax"),
    };

    const validated = projectAssessmentSubmissionSchema.safeParse(payload);
    if (!validated.success) {
      setErrors(getProjectAssessmentFieldErrors(validated.error));
      setFormError("Please review the highlighted fields before submitting.");
      requestAnimationFrame(() => document.getElementById("form-error-summary")?.focus());
      return;
    }

    setErrors({});
    setFormError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/project-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated.data),
      });
      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !result.success) {
        setErrors(result.fieldErrors ?? {});
        setFormError(result.error ?? "The project could not be submitted.");
        setTurnstileReset((value) => value + 1);
        requestAnimationFrame(() => document.getElementById("form-error-summary")?.focus());
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setFormError(
        "Your project could not be submitted at this time. Please try again or email contact@haoyiadvisory.com.",
      );
      setTurnstileReset((value) => value + 1);
      requestAnimationFrame(() => document.getElementById("form-error-summary")?.focus());
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-emerald-200 bg-emerald-50 p-7 sm:p-9"
        role="status"
      >
        <CheckCircle2 className="h-8 w-8 text-emerald-700" />
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
          Thank you for submitting your project.
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          Our team will review the information and assess whether there is a potential fit with
          China market entry, clinical access, regulatory pathway, or partnership opportunities.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-12">
      {formError ? (
        <div
          id="form-error-summary"
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-medium text-red-800 outline-none focus:ring-2 focus:ring-red-300"
        >
          {formError}
        </div>
      ) : null}

      <p className="border-b border-slate-200 pb-6 text-sm leading-6 text-slate-600">
        Fields marked with <RequiredMark /> are required. The form takes about five minutes.
      </p>

      <fieldset disabled={!submissionEnabled} className="contents">
        <FormSection
          number={1}
          title="Company Information"
          description="Tell us who you are and where the company is based."
        >
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
            <InputField
              name="companyName"
              label="Company name"
              required
              error={errors.companyName}
              autoComplete="organization"
            />
            <InputField
              name="companyWebsite"
              label="Company website"
              type="url"
              placeholder="https://"
              error={errors.companyWebsite}
              autoComplete="url"
            />
            <InputField
              name="countryRegion"
              label="Country / region"
              required
              error={errors.countryRegion}
              autoComplete="country-name"
            />
            <SelectField
              name="organizationType"
              label="Organization type"
              options={organizationTypes}
              required
              error={errors.organizationType}
              onChange={setOrganizationType}
            />
            {organizationType === "Other" ? (
              <InputField
                name="organizationTypeOther"
                label="Please specify organization type"
                required
                error={errors.organizationTypeOther}
              />
            ) : null}
            <InputField
              name="contactPersonName"
              label="Contact person name"
              required
              error={errors.contactPersonName}
              autoComplete="name"
            />
            <InputField
              name="jobTitle"
              label="Job title"
              required
              error={errors.jobTitle}
              autoComplete="organization-title"
            />
            <InputField
              name="email"
              label="Email"
              type="email"
              required
              error={errors.email}
              autoComplete="email"
            />
            <InputField
              name="linkedInProfile"
              label="LinkedIn profile"
              type="url"
              placeholder="https://linkedin.com/in/..."
              error={errors.linkedInProfile}
            />
          </div>
        </FormSection>

        <FormSection
          number={2}
          title="Product Information"
          description="Describe the product or technology and what it is used for."
        >
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
            <InputField
              name="productName"
              label="Product / technology name"
              required
              error={errors.productName}
            />
            <SelectField
              name="productCategory"
              label="Product category"
              options={productCategories}
              required
              error={errors.productCategory}
              onChange={setProductCategory}
            />
            {productCategory === "Other medical device" ? (
              <InputField
                name="productCategoryOther"
                label="Please specify medical device category"
                required
                error={errors.productCategoryOther}
              />
            ) : null}
            <div className="sm:col-span-2">
              <TextAreaField
                name="productDescription"
                label="Short product description"
                rows={5}
                placeholder="Describe the product, how it works, and the primary user."
                error={errors.productDescription}
              />
            </div>
            <div className="sm:col-span-2">
              <TextAreaField
                name="targetIndication"
                label="Target indication / use case"
                rows={4}
                error={errors.targetIndication}
              />
            </div>
            <SelectField
              name="productLifecycleStage"
              label="Product lifecycle stage"
              options={productLifecycleStages}
              required
              error={errors.productLifecycleStage}
              onChange={setProductLifecycleStage}
            />
            {productLifecycleStage === "Other" ? (
              <InputField
                name="productLifecycleStageOther"
                label="Please specify product lifecycle stage"
                required
                error={errors.productLifecycleStageOther}
              />
            ) : null}
          </div>
        </FormSection>

        <FormSection
          number={3}
          title="Evidence and Regulation"
          description="Where the product stands on regulatory approvals and clinical evidence."
        >
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
            <SelectField
              name="regulatoryStatus"
              label="Current regulatory status"
              options={regulatoryStatuses}
              required
              error={errors.regulatoryStatus}
              onChange={setRegulatoryStatus}
            />
            <SelectField
              name="clinicalEvidence"
              label="Clinical evidence available"
              options={clinicalEvidenceOptions}
              required
              error={errors.clinicalEvidence}
            />
            {regulatoryStatus === "Other" ? (
              <InputField
                name="regulatoryStatusOther"
                label="Please specify regulatory status"
                required
                error={errors.regulatoryStatusOther}
              />
            ) : null}
            <div className="sm:col-span-2">
              <TextAreaField
                name="keyEvidenceSummary"
                label="Key evidence summary"
                rows={5}
                placeholder="Summarize the available clinical or validation evidence."
                error={errors.keyEvidenceSummary}
              />
            </div>
            <SelectField
              name="chinaRegulatoryStatus"
              label="China regulatory status"
              options={chinaRegulatoryStatuses}
              error={errors.chinaRegulatoryStatus}
            />
          </div>
        </FormSection>

        <FormSection
          number={4}
          title="China Interest"
          description="What you are looking for in China and your preferred entry path."
        >
          <div className="space-y-8">
            <CheckboxGroup
              name="chinaInterest"
              label="What are you looking for in China?"
              options={chinaInterestOptions}
              required
              error={errors.chinaInterest}
              onOtherChange={setOtherChinaInterest}
            />
            {otherChinaInterest ? (
              <InputField
                name="chinaInterestOther"
                label="Please specify the other China objective"
                required
                error={errors.chinaInterestOther}
              />
            ) : null}
            <CheckboxGroup
              name="preferredEntryModel"
              label="Preferred China entry model"
              options={chinaEntryModels}
              required
              error={errors.preferredEntryModel}
            />
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
              <SelectField
                name="targetTimeline"
                label="Target timeline"
                options={targetTimelines}
                required
                error={errors.targetTimeline}
              />
              <SelectField
                name="existingChinaActivity"
                label="Existing China partner or activity"
                options={existingChinaActivityOptions}
                required
                error={errors.existingChinaActivity}
              />
            </div>
          </div>
        </FormSection>

        <FormSection
          number={5}
          title="Files and Consent"
          description="Optional supporting links, and how we may use your submission."
        >
          <div className="space-y-7">
            <PitchDeckUpload error={errors.pitchDeckLink} />
            <TextAreaField
              name="additionalComments"
              label="Additional comments"
              rows={5}
              error={errors.additionalComments}
            />

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
              <div className="flex gap-3">
                <LockKeyhole className="mt-0.5 h-5 w-5 flex-none text-cyan-700" />
                <p>
                  {privacyController} uses this information to assess potential China market and
                  partnership fit and to contact you about the submission. Form delivery is
                  processed through Vercel, Vercel Blob, Cloudflare Turnstile, and Resend. Uploaded
                  files are shared through an unlisted file URL; do not upload confidential,
                  patient-identifiable, or commercially sensitive material. Submission emails are
                  retained only in the email service for up to {retentionMonths} months. Request
                  access or deletion at{" "}
                  <a
                    href={`mailto:${privacyContact}`}
                    className="font-semibold text-cyan-800 underline"
                  >
                    {privacyContact}
                  </a>
                  .
                </p>
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
              <input
                type="checkbox"
                name="consent"
                required
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? "consent-error" : undefined}
                className="mt-1 h-4 w-4 flex-none accent-cyan-700"
              />
              <span>
                I agree that Haoyi Advisory may review this information and contact me regarding
                potential China market entry or partnership opportunities. <RequiredMark />
              </span>
            </label>
            <ErrorText id="consent-error" error={errors.consent} />

            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
              <label htmlFor="companyFax">Company fax</label>
              <input
                id="companyFax"
                name="companyFax"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {turnstileSiteKey ? (
              <div>
                <TurnstileWidget
                  siteKey={turnstileSiteKey}
                  onToken={handleTurnstileToken}
                  resetSignal={turnstileReset}
                />
                <ErrorText id="turnstile-error" error={errors.turnstileToken} />
              </div>
            ) : (
              <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Security verification will appear after the production Turnstile key is configured.
              </p>
            )}

            <button
              type="submit"
              disabled={!submissionEnabled || isSubmitting}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isSubmitting ? "Submitting..." : "Submit Project"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </FormSection>
      </fieldset>
    </form>
  );
}
