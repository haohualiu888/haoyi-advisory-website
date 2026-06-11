import { z } from "zod";
import {
  MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES,
  PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES,
  sanitizeProjectAssessmentOriginalFileName,
} from "@/lib/project-assessment-upload";

export const organizationTypes = [
  "University / research institution project",
  "University / research institution spin-out",
  "Privately held company",
  "Publicly listed company",
  "Corporate subsidiary / business unit",
  "Non-profit / public-sector organization",
  "Other",
] as const;

export const productCategories = [
  "Diagnostic, imaging & IVD devices",
  "Surgical, interventional & implantable devices",
  "Therapeutic & life-support devices",
  "Monitoring & measurement devices",
  "Rehabilitation, assistive & prosthetic devices",
  "Medical device software / SaMD",
  "General hospital, dental & laboratory equipment",
  "Medical consumables & disposable devices",
  "Other medical device",
] as const;

export const productLifecycleStages = [
  "Concept / feasibility",
  "Prototype / engineering development",
  "Design verification & validation",
  "Preclinical / bench testing",
  "Clinical evaluation / investigation",
  "Regulatory submission / review",
  "Approved / market-ready, not yet launched",
  "Commercial launch / early market",
  "Established commercial product",
  "Other",
] as const;

export const marketAuthorizationOptions = [
  "CE marked (European Union / EEA)",
  "UKCA marked (Great Britain)",
  "FDA cleared / approved (United States)",
  "Other market authorization",
  "No market authorization yet",
] as const;

export const authorizationCoverageOptions = [
  "All current products, models and indications",
  "Selected products, models or indications only",
  "Varies by market / jurisdiction",
  "Not sure / requires review",
] as const;

export const clinicalEvidenceOptions = [
  "Published clinical study",
  "Clinical trial data",
  "Real-world evidence",
  "Pilot hospital data",
  "Usability data",
  "No clinical data yet",
] as const;

export const chinaRegulatoryStatuses = [
  "No China activity yet",
  "Early discussion",
  "Local agent identified",
  "NMPA pathway assessed",
  "NMPA submission started",
  "Already approved in China",
] as const;

export const chinaInterestOptions = [
  "Market assessment",
  "Regulatory pathway",
  "Clinical partner",
  "Distributor",
  "Strategic partner",
  "License partner",
  "Local manufacturing partner",
  "Investor",
  "Government / industrial park support",
  "Other",
] as const;

export const chinaEntryModels = [
  "Distribution",
  "Licensing",
  "Joint venture",
  "Co-development",
  "Local manufacturing",
  "Clinical pilot first",
  "Not sure yet",
] as const;

export const targetTimelines = [
  "0 to 6 months",
  "6 to 12 months",
  "12 to 24 months",
  "Exploring only",
] as const;

export const existingChinaActivityOptions = ["Yes", "No", "Under discussion"] as const;

const requiredText = (label: string, max: number) =>
  z.string().trim().min(1, `${label} is required.`).max(max, `${label} is too long.`);

const httpUrl = (label: string, required = false) => {
  const schema = z
    .string()
    .trim()
    .refine(
      (value) => {
        if (!value) return !required;
        try {
          const url = new URL(value);
          return url.protocol === "http:" || url.protocol === "https:";
        } catch {
          return false;
        }
      },
      `${label} must be a valid http or https URL.`,
    );

  return required ? schema.min(1, `${label} is required.`) : schema.max(500);
};

export const projectAssessmentSubmissionSchema = z
  .object({
    submissionId: z.uuid("A valid submission ID is required."),
    companyName: requiredText("Company name", 200),
    companyWebsite: httpUrl("Company website").optional().default(""),
    countryRegion: requiredText("Country / region", 120),
    organizationType: z.enum(organizationTypes, { error: "Organization type is required." }),
    organizationTypeOther: z.string().trim().max(160).optional().default(""),
    contactPersonName: requiredText("Contact person name", 160),
    jobTitle: requiredText("Job title", 160),
    email: z.email("Enter a valid email address.").max(254),
    linkedInProfile: httpUrl("LinkedIn profile").optional().default(""),

    productName: requiredText("Product / technology name", 240),
    productCategory: z.enum(productCategories, { error: "Product category is required." }),
    productCategoryOther: z.string().trim().max(160).optional().default(""),
    productDescription: z
      .string()
      .trim()
      .max(2000, "Short product description is too long.")
      .optional()
      .default(""),
    targetIndication: z
      .string()
      .trim()
      .max(1000, "Target indication / use case is too long.")
      .optional()
      .default(""),
    productLifecycleStage: z.enum(productLifecycleStages, {
      error: "Product lifecycle stage is required.",
    }),
    productLifecycleStageOther: z.string().trim().max(160).optional().default(""),

    marketAuthorizations: z
      .array(z.enum(marketAuthorizationOptions))
      .min(1, "Select at least one market authorization status.")
      .max(marketAuthorizationOptions.length),
    marketAuthorizationOther: z.string().trim().max(240).optional().default(""),
    authorizationCoverage: z
      .union([z.enum(authorizationCoverageOptions), z.literal("")])
      .optional()
      .default(""),
    marketAuthorizationDetails: z
      .string()
      .trim()
      .max(1500, "Market authorization details are too long.")
      .optional()
      .default(""),
    clinicalEvidence: z.enum(clinicalEvidenceOptions, {
      error: "Clinical evidence available is required.",
    }),
    keyEvidenceSummary: z
      .string()
      .trim()
      .max(2500, "Key evidence summary is too long.")
      .optional()
      .default(""),
    chinaRegulatoryStatus: z
      .union([z.enum(chinaRegulatoryStatuses), z.literal("")])
      .optional()
      .default(""),

    chinaInterest: z
      .array(z.enum(chinaInterestOptions))
      .min(1, "Select at least one China objective.")
      .max(chinaInterestOptions.length),
    chinaInterestOther: z.string().trim().max(200).optional().default(""),
    preferredEntryModel: z
      .array(z.enum(chinaEntryModels))
      .min(1, "Select at least one preferred China entry model.")
      .max(chinaEntryModels.length),
    targetTimeline: z.enum(targetTimelines, { error: "Target timeline is required." }),
    existingChinaActivity: z.enum(existingChinaActivityOptions, {
      error: "Existing China partner or activity is required.",
    }),

    pitchDeckLink: httpUrl("Pitch deck or product brochure link").optional().default(""),
    pitchDeckFileName: z.string().trim().max(255).optional().default(""),
    pitchDeckFileSize: z
      .number()
      .int()
      .min(0)
      .max(MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES)
      .optional()
      .default(0),
    pitchDeckContentType: z
      .union([z.enum(PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES), z.literal("")])
      .optional()
      .default(""),
    additionalComments: z.string().trim().max(2500).optional().default(""),
    consent: z.boolean().refine((value) => value, "Consent is required."),

    turnstileToken: requiredText("Security verification", 2048),
    companyFax: z.string().max(200).optional().default(""),
  })
  .superRefine((data, context) => {
    if (data.organizationType === "Other" && !data.organizationTypeOther) {
      context.addIssue({
        code: "custom",
        path: ["organizationTypeOther"],
        message: "Please specify the organization type.",
      });
    }

    if (data.productCategory === "Other medical device" && !data.productCategoryOther) {
      context.addIssue({
        code: "custom",
        path: ["productCategoryOther"],
        message: "Please specify the medical device category.",
      });
    }

    if (
      data.productLifecycleStage === "Other" &&
      !data.productLifecycleStageOther
    ) {
      context.addIssue({
        code: "custom",
        path: ["productLifecycleStageOther"],
        message: "Please specify the product lifecycle stage.",
      });
    }

    const noAuthorization = "No market authorization yet";
    const hasAuthorization = data.marketAuthorizations.some(
      (value) => value !== noAuthorization,
    );

    if (
      data.marketAuthorizations.includes(noAuthorization) &&
      data.marketAuthorizations.length > 1
    ) {
      context.addIssue({
        code: "custom",
        path: ["marketAuthorizations"],
        message: "No market authorization yet cannot be combined with other selections.",
      });
    }

    if (
      data.marketAuthorizations.includes("Other market authorization") &&
      !data.marketAuthorizationOther
    ) {
      context.addIssue({
        code: "custom",
        path: ["marketAuthorizationOther"],
        message: "Please specify the other market authorization.",
      });
    }

    if (hasAuthorization && !data.authorizationCoverage) {
      context.addIssue({
        code: "custom",
        path: ["authorizationCoverage"],
        message: "Authorization coverage is required when an authorization is selected.",
      });
    }

    if (data.chinaInterest.includes("Other") && !data.chinaInterestOther) {
      context.addIssue({
        code: "custom",
        path: ["chinaInterestOther"],
        message: "Please specify the other China objective.",
      });
    }

    if (data.pitchDeckLink) {
      if (!data.pitchDeckFileName) {
        context.addIssue({
          code: "custom",
          path: ["pitchDeckLink"],
          message: "The uploaded file name is missing. Please upload the file again.",
        });
      } else if (
        sanitizeProjectAssessmentOriginalFileName(data.pitchDeckFileName) !==
        data.pitchDeckFileName
      ) {
        context.addIssue({
          code: "custom",
          path: ["pitchDeckLink"],
          message: "The uploaded file name is invalid. Please upload the file again.",
        });
      }

      if (data.pitchDeckFileSize <= 0) {
        context.addIssue({
          code: "custom",
          path: ["pitchDeckLink"],
          message: "The uploaded file is empty. Please upload the original file again.",
        });
      }

      if (!data.pitchDeckContentType) {
        context.addIssue({
          code: "custom",
          path: ["pitchDeckLink"],
          message: "The uploaded file type is missing. Please upload the file again.",
        });
      }
    } else if (
      data.pitchDeckFileName ||
      data.pitchDeckFileSize ||
      data.pitchDeckContentType
    ) {
      context.addIssue({
        code: "custom",
        path: ["pitchDeckLink"],
        message: "The uploaded file link is missing. Please upload the file again.",
      });
    }
  });

export type ProjectAssessmentSubmission = z.infer<typeof projectAssessmentSubmissionSchema>;

export function getProjectAssessmentFieldErrors(error: z.ZodError) {
  const errors: Record<string, string> = {};

  for (const issue of error.issues) {
    const field = String(issue.path[0] ?? "form");
    errors[field] ??= issue.message;
  }

  return errors;
}
