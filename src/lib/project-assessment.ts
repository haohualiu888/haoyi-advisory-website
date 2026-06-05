import { z } from "zod";

export const companyStages = [
  "University spin-out",
  "Startup",
  "Scale-up",
  "SME",
  "Public company",
  "Other",
] as const;

export const productCategories = [
  "Rehabilitation",
  "Recovery",
  "Diagnostics",
  "Digital Health",
  "Home Care",
  "Monitoring",
  "Surgical / interventional device",
  "Hospital equipment",
  "Other medical device",
] as const;

export const developmentStages = [
  "Concept / prototype",
  "Preclinical validation",
  "Clinical validation",
  "CE marked",
  "FDA cleared / approved",
  "Commercially available",
  "Revenue generating",
] as const;

export const regulatoryStatuses = [
  "CE marked",
  "UKCA marked",
  "FDA cleared / approved",
  "In clinical trial",
  "Not yet approved",
  "Other",
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
    companyWebsite: httpUrl("Company website", true),
    countryRegion: requiredText("Country / region", 120),
    companyStage: z.enum(companyStages, { error: "Company stage is required." }),
    companyStageOther: z.string().trim().max(120).optional().default(""),
    contactPersonName: requiredText("Contact person name", 160),
    jobTitle: requiredText("Job title", 160),
    email: z.email("Enter a valid email address.").max(254),
    linkedInProfile: httpUrl("LinkedIn profile").optional().default(""),

    productName: requiredText("Product / technology name", 240),
    productCategory: z.enum(productCategories, { error: "Product category is required." }),
    productDescription: requiredText("Short product description", 2000),
    targetIndication: requiredText("Target indication / use case", 1000),
    developmentStage: z.enum(developmentStages, {
      error: "Current development stage is required.",
    }),

    regulatoryStatus: z.enum(regulatoryStatuses, {
      error: "Current regulatory status is required.",
    }),
    regulatoryStatusOther: z.string().trim().max(160).optional().default(""),
    clinicalEvidence: z.enum(clinicalEvidenceOptions, {
      error: "Clinical evidence available is required.",
    }),
    keyEvidenceSummary: requiredText("Key evidence summary", 2500),
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
    additionalComments: z.string().trim().max(2500).optional().default(""),
    consent: z.boolean().refine((value) => value, "Consent is required."),

    turnstileToken: requiredText("Security verification", 2048),
    companyFax: z.string().max(200).optional().default(""),
  })
  .superRefine((data, context) => {
    if (data.companyStage === "Other" && !data.companyStageOther) {
      context.addIssue({
        code: "custom",
        path: ["companyStageOther"],
        message: "Please specify the company stage.",
      });
    }

    if (data.regulatoryStatus === "Other" && !data.regulatoryStatusOther) {
      context.addIssue({
        code: "custom",
        path: ["regulatoryStatusOther"],
        message: "Please specify the regulatory status.",
      });
    }

    if (data.chinaInterest.includes("Other") && !data.chinaInterestOther) {
      context.addIssue({
        code: "custom",
        path: ["chinaInterestOther"],
        message: "Please specify the other China objective.",
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
