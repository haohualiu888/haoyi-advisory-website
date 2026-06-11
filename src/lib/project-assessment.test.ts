import { describe, expect, it } from "vitest";
import {
  getProjectAssessmentFieldErrors,
  projectAssessmentSubmissionSchema,
} from "@/lib/project-assessment";

export const validProjectAssessment = {
  submissionId: "765d1128-d93a-4fd5-969c-ea808f1c3bb0",
  companyName: "Example Medical",
  companyWebsite: "https://example.com",
  countryRegion: "Germany",
  organizationType: "Privately held company",
  organizationTypeOther: "",
  contactPersonName: "Alex Example",
  jobTitle: "Commercial Director",
  email: "alex@example.com",
  linkedInProfile: "https://www.linkedin.com/in/alex-example",
  productName: "Mobility Platform",
  productCategory: "Rehabilitation, assistive & prosthetic devices",
  productCategoryOther: "",
  productDescription: "A non-confidential description of a rehabilitation technology.",
  targetIndication: "Post-operative lower-limb recovery.",
  productLifecycleStage: "Commercial launch / early market",
  productLifecycleStageOther: "",
  marketAuthorizations: [
    "CE marked (European Union / EEA)",
    "FDA cleared / approved (United States)",
  ],
  marketAuthorizationOther: "",
  authorizationCoverage: "Varies by market / jurisdiction",
  marketAuthorizationDetails:
    "CE marking covers the full product family; FDA clearance covers the lead model only.",
  clinicalEvidence: "Published clinical study",
  keyEvidenceSummary: "A peer-reviewed study and a multi-site usability evaluation are available.",
  chinaRegulatoryStatus: "No China activity yet",
  chinaInterest: ["Market assessment", "Clinical partner"],
  chinaInterestOther: "",
  preferredEntryModel: ["Distribution", "Clinical pilot first"],
  targetTimeline: "6 to 12 months",
  existingChinaActivity: "No",
  pitchDeckLink: "https://example.com/brochure",
  additionalComments: "No confidential information included.",
  consent: true,
  turnstileToken: "turnstile-token",
  companyFax: "",
} as const;

describe("projectAssessmentSubmissionSchema", () => {
  it("accepts a complete non-confidential submission", () => {
    expect(projectAssessmentSubmissionSchema.safeParse(validProjectAssessment).success).toBe(true);
  });

  it("reports required fields and invalid email or URL values", () => {
    const result = projectAssessmentSubmissionSchema.safeParse({
      ...validProjectAssessment,
      companyName: "",
      companyWebsite: "not-a-url",
      email: "invalid-email",
    });

    expect(result.success).toBe(false);
    if (result.success) return;

    const errors = getProjectAssessmentFieldErrors(result.error);
    expect(errors.companyName).toBeDefined();
    expect(errors.companyWebsite).toBeDefined();
    expect(errors.email).toBeDefined();
  });

  it("requires at least one China objective and entry model", () => {
    const result = projectAssessmentSubmissionSchema.safeParse({
      ...validProjectAssessment,
      chinaInterest: [],
      preferredEntryModel: [],
    });

    expect(result.success).toBe(false);
    if (result.success) return;

    const errors = getProjectAssessmentFieldErrors(result.error);
    expect(errors.chinaInterest).toBeDefined();
    expect(errors.preferredEntryModel).toBeDefined();
  });

  it("requires consent", () => {
    const result = projectAssessmentSubmissionSchema.safeParse({
      ...validProjectAssessment,
      consent: false,
    });

    expect(result.success).toBe(false);
    if (result.success) return;
    expect(getProjectAssessmentFieldErrors(result.error).consent).toBeDefined();
  });

  it("requires specification when an Other option is selected", () => {
    const result = projectAssessmentSubmissionSchema.safeParse({
      ...validProjectAssessment,
      organizationType: "Other",
      organizationTypeOther: "",
      productCategory: "Other medical device",
      productCategoryOther: "",
      productLifecycleStage: "Other",
      productLifecycleStageOther: "",
      marketAuthorizations: ["Other market authorization"],
      marketAuthorizationOther: "",
      authorizationCoverage: "Selected products, models or indications only",
      chinaInterest: ["Other"],
      chinaInterestOther: "",
    });

    expect(result.success).toBe(false);
    if (result.success) return;

    const errors = getProjectAssessmentFieldErrors(result.error);
    expect(errors.organizationTypeOther).toBeDefined();
    expect(errors.productCategoryOther).toBeDefined();
    expect(errors.productLifecycleStageOther).toBeDefined();
    expect(errors.marketAuthorizationOther).toBeDefined();
    expect(errors.chinaInterestOther).toBeDefined();
  });

  it("supports multiple authorizations and requires their coverage", () => {
    const result = projectAssessmentSubmissionSchema.safeParse({
      ...validProjectAssessment,
      marketAuthorizations: [
        "CE marked (European Union / EEA)",
        "UKCA marked (Great Britain)",
        "FDA cleared / approved (United States)",
      ],
      authorizationCoverage: "",
    });

    expect(result.success).toBe(false);
    if (result.success) return;
    expect(getProjectAssessmentFieldErrors(result.error).authorizationCoverage).toBeDefined();
  });

  it("keeps no authorization mutually exclusive", () => {
    const result = projectAssessmentSubmissionSchema.safeParse({
      ...validProjectAssessment,
      marketAuthorizations: [
        "CE marked (European Union / EEA)",
        "No market authorization yet",
      ],
    });

    expect(result.success).toBe(false);
    if (result.success) return;
    expect(getProjectAssessmentFieldErrors(result.error).marketAuthorizations).toBeDefined();
  });
});
