import { describe, expect, it } from "vitest";
import {
  createProjectAssessmentUploadPath,
  isAllowedProjectAssessmentUploadPath,
} from "@/lib/project-assessment-upload";

describe("project assessment upload paths", () => {
  it("creates a scoped, sanitized upload path", () => {
    const path = createProjectAssessmentUploadPath(
      "Clinical Deck (final).pdf",
      "11111111-2222-4333-8444-555555555555",
    );

    expect(path).toBe(
      "project-assessments/11111111-2222-4333-8444-555555555555-Clinical-Deck-final-.pdf",
    );
    expect(isAllowedProjectAssessmentUploadPath(path)).toBe(true);
  });

  it("rejects paths outside the project-assessment namespace", () => {
    expect(isAllowedProjectAssessmentUploadPath("other/file.pdf")).toBe(false);
    expect(
      isAllowedProjectAssessmentUploadPath("project-assessments/../secret.pdf"),
    ).toBe(false);
  });
});
