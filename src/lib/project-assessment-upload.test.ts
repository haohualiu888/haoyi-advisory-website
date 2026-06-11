import { describe, expect, it } from "vitest";
import {
  createProjectAssessmentDownloadUrl,
  createProjectAssessmentUploadPath,
  isAllowedProjectAssessmentUploadPath,
  isProjectAssessmentBlobUrl,
  sanitizeProjectAssessmentOriginalFileName,
  verifyProjectAssessmentUpload,
} from "@/lib/project-assessment-upload";

describe("project assessment upload paths", () => {
  it("creates a scoped, sanitized upload path", () => {
    const path = createProjectAssessmentUploadPath(
      "Clinical Deck (final).pdf",
      "11111111-2222-4333-8444-555555555555",
    );

    expect(path).toBe(
      "project-assessments/11111111-2222-4333-8444-555555555555-Clinical-Deck-final.pdf",
    );
    expect(isAllowedProjectAssessmentUploadPath(path)).toBe(true);
  });

  it("preserves an extension even when the base filename is empty", () => {
    expect(
      createProjectAssessmentUploadPath(
        ".docx",
        "11111111-2222-4333-8444-555555555555",
      ),
    ).toBe(
      "project-assessments/11111111-2222-4333-8444-555555555555-supporting-document.docx",
    );
  });

  it("rejects paths outside the project-assessment namespace", () => {
    expect(isAllowedProjectAssessmentUploadPath("other/file.pdf")).toBe(false);
    expect(
      isAllowedProjectAssessmentUploadPath("project-assessments/../secret.pdf"),
    ).toBe(false);
  });

  it("keeps the original filename for email attachments without path traversal", () => {
    expect(sanitizeProjectAssessmentOriginalFileName("../Clinical 计划.docx")).toBe(
      "Clinical 计划.docx",
    );
  });

  it("recognizes scoped public Blob URLs and creates download URLs", () => {
    const url =
      "https://store.public.blob.vercel-storage.com/project-assessments/1234-deck.pdf";

    expect(isProjectAssessmentBlobUrl(url)).toBe(true);
    expect(createProjectAssessmentDownloadUrl(url)).toBe(`${url}?download=1`);
    expect(isProjectAssessmentBlobUrl("https://example.com/project-assessments/deck.pdf")).toBe(
      false,
    );
  });

  it("verifies the stored size and content type", async () => {
    const fetcher = async () =>
      new Response(null, {
        status: 200,
        headers: {
          "content-length": "1024",
          "content-type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
      });

    await expect(
      verifyProjectAssessmentUpload(
        {
          url: "https://store.public.blob.vercel-storage.com/project-assessments/1234-file.docx",
          expectedSize: 1024,
          expectedContentType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
        fetcher as typeof fetch,
      ),
    ).resolves.toBe(true);
  });

  it("rejects zero-byte and size-mismatched uploads", async () => {
    const fetcher = async () =>
      new Response(null, {
        status: 200,
        headers: {
          "content-length": "0",
          "content-type": "application/pdf",
        },
      });

    await expect(
      verifyProjectAssessmentUpload(
        {
          url: "https://store.public.blob.vercel-storage.com/project-assessments/1234-file.pdf",
          expectedSize: 1024,
          expectedContentType: "application/pdf",
        },
        fetcher as typeof fetch,
      ),
    ).resolves.toBe(false);
  });
});
