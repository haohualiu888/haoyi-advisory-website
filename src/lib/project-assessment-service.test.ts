import { describe, expect, it, vi } from "vitest";
import { validProjectAssessment } from "@/lib/project-assessment.test";
import {
  handleProjectAssessmentRequest,
  MAX_PROJECT_ASSESSMENT_BYTES,
  type ProjectAssessmentServiceDependencies,
} from "@/lib/project-assessment-service";

function requestFor(
  body: unknown,
  headers: Record<string, string> = {},
) {
  return new Request("https://haoyiadvisory.com/api/project-assessment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://haoyiadvisory.com",
      Host: "haoyiadvisory.com",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

function dependencies(overrides: Partial<ProjectAssessmentServiceDependencies> = {}) {
  return {
    verifyTurnstile: vi.fn().mockResolvedValue(true),
    sendSubmission: vi.fn().mockResolvedValue(undefined),
    ...overrides,
  } satisfies ProjectAssessmentServiceDependencies;
}

describe("handleProjectAssessmentRequest", () => {
  it("returns disabled mode before processing the payload", async () => {
    const response = await handleProjectAssessmentRequest(
      requestFor(validProjectAssessment),
      { enabled: false, dependencies: dependencies() },
    );

    expect(response.status).toBe(503);
  });

  it("rejects requests from a different origin", async () => {
    const response = await handleProjectAssessmentRequest(
      requestFor(validProjectAssessment, { Origin: "https://attacker.example" }),
      { enabled: true, dependencies: dependencies() },
    );

    expect(response.status).toBe(403);
  });

  it("rejects oversized payloads", async () => {
    const response = await handleProjectAssessmentRequest(
      requestFor(validProjectAssessment, {
        "Content-Length": String(MAX_PROJECT_ASSESSMENT_BYTES + 1),
      }),
      { enabled: true, dependencies: dependencies() },
    );

    expect(response.status).toBe(413);
  });

  it("rejects invalid required fields", async () => {
    const response = await handleProjectAssessmentRequest(
      requestFor({ ...validProjectAssessment, companyName: "" }),
      { enabled: true, dependencies: dependencies() },
    );
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.fieldErrors.companyName).toBeDefined();
  });

  it("rejects a filled honeypot", async () => {
    const deps = dependencies();
    const response = await handleProjectAssessmentRequest(
      requestFor({ ...validProjectAssessment, companyFax: "automated entry" }),
      { enabled: true, dependencies: deps },
    );

    expect(response.status).toBe(400);
    expect(deps.verifyTurnstile).not.toHaveBeenCalled();
    expect(deps.sendSubmission).not.toHaveBeenCalled();
  });

  it("rejects failed Turnstile verification", async () => {
    const deps = dependencies({
      verifyTurnstile: vi.fn().mockResolvedValue(false),
    });
    const response = await handleProjectAssessmentRequest(
      requestFor(validProjectAssessment),
      { enabled: true, dependencies: deps },
    );

    expect(response.status).toBe(400);
    expect(deps.sendSubmission).not.toHaveBeenCalled();
  });

  it("handles a Turnstile service error without exposing submission data", async () => {
    const deps = dependencies({
      verifyTurnstile: vi.fn().mockRejectedValue(new Error("network failure")),
    });
    const response = await handleProjectAssessmentRequest(
      requestFor(validProjectAssessment),
      { enabled: true, dependencies: deps },
    );

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({
      error: "Security verification could not be completed. Please try again.",
      fieldErrors: { turnstileToken: "Complete the security verification again." },
    });
    expect(deps.sendSubmission).not.toHaveBeenCalled();
  });

  it("returns a provider error without exposing submission content", async () => {
    const deps = dependencies({
      sendSubmission: vi.fn().mockRejectedValue(new Error("provider failure")),
    });
    const response = await handleProjectAssessmentRequest(
      requestFor(validProjectAssessment),
      { enabled: true, dependencies: deps },
    );
    const result = await response.json();

    expect(response.status).toBe(502);
    expect(JSON.stringify(result)).not.toContain(validProjectAssessment.productDescription);
  });

  it("passes the stable submission ID through successful processing", async () => {
    const deps = dependencies();
    const response = await handleProjectAssessmentRequest(
      requestFor(validProjectAssessment),
      { enabled: true, dependencies: deps },
    );
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.success).toBe(true);
    expect(deps.verifyTurnstile).toHaveBeenCalledWith(
      validProjectAssessment.turnstileToken,
      undefined,
      validProjectAssessment.submissionId,
    );
    expect(deps.sendSubmission).toHaveBeenCalledWith(
      expect.objectContaining({ submissionId: validProjectAssessment.submissionId }),
    );
  });
});
