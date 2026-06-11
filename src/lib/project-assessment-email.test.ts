import { describe, expect, it } from "vitest";
import { validProjectAssessment } from "@/lib/project-assessment.test";
import {
  buildProjectAssessmentEmail,
  buildProjectAssessmentEmailAttachment,
} from "@/lib/project-assessment-email";
import { projectAssessmentSubmissionSchema } from "@/lib/project-assessment";

describe("buildProjectAssessmentEmail", () => {
  it("includes multiple market authorizations and their coverage", () => {
    const email = buildProjectAssessmentEmail(
      projectAssessmentSubmissionSchema.parse(validProjectAssessment),
    );

    expect(email).toContain("CE marked (European Union / EEA)");
    expect(email).toContain("FDA cleared / approved (United States)");
    expect(email).toContain("Varies by market / jurisdiction");
    expect(email).toContain("FDA clearance covers the lead model only.");
    expect(email).toContain("Clinical deck.pdf");
    expect(email).toContain("Download original file");
    expect(email).toContain("?download=1");
  });

  it("builds a direct original-file attachment for Resend", () => {
    const submission = projectAssessmentSubmissionSchema.parse(validProjectAssessment);

    expect(buildProjectAssessmentEmailAttachment(submission)).toEqual({
      path: `${validProjectAssessment.pitchDeckLink}?download=1`,
      filename: "Clinical deck.pdf",
      contentType: "application/pdf",
    });
  });
});
