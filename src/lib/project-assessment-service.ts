import {
  getProjectAssessmentFieldErrors,
  projectAssessmentSubmissionSchema,
  type ProjectAssessmentSubmission,
} from "@/lib/project-assessment";

export const MAX_PROJECT_ASSESSMENT_BYTES = 64 * 1024;

export type ProjectAssessmentServiceDependencies = {
  verifyTurnstile: (
    token: string,
    remoteIp: string | undefined,
    submissionId: string,
  ) => Promise<boolean>;
  sendSubmission: (submission: ProjectAssessmentSubmission) => Promise<void>;
};

type ProjectAssessmentServiceOptions = {
  enabled: boolean;
  dependencies: ProjectAssessmentServiceDependencies;
};

const jsonResponse = (body: Record<string, unknown>, status: number) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });

export function requestOriginMatchesHost(request: Request) {
  const origin = request.headers.get("origin");
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost?.split(",")[0]?.trim() || request.headers.get("host");

  if (!origin || !host) return false;

  try {
    return new URL(origin).host.toLowerCase() === host.toLowerCase();
  } catch {
    return false;
  }
}

export async function handleProjectAssessmentRequest(
  request: Request,
  options: ProjectAssessmentServiceOptions,
) {
  if (!options.enabled) {
    return jsonResponse(
      {
        error:
          "Project submissions are temporarily unavailable while secure email delivery is configured.",
      },
      503,
    );
  }

  if (!requestOriginMatchesHost(request)) {
    return jsonResponse({ error: "The submission origin could not be verified." }, 403);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_PROJECT_ASSESSMENT_BYTES) {
    return jsonResponse({ error: "The submission is too large." }, 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ error: "The submission could not be read." }, 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_PROJECT_ASSESSMENT_BYTES) {
    return jsonResponse({ error: "The submission is too large." }, 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: "The submission format is invalid." }, 400);
  }

  const parsed = projectAssessmentSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return jsonResponse(
      {
        error: "Please review the highlighted fields.",
        fieldErrors: getProjectAssessmentFieldErrors(parsed.error),
      },
      400,
    );
  }

  if (parsed.data.companyFax) {
    return jsonResponse({ error: "The submission could not be accepted." }, 400);
  }

  const remoteIp =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  let turnstileValid = false;
  try {
    turnstileValid = await options.dependencies.verifyTurnstile(
      parsed.data.turnstileToken,
      remoteIp,
      parsed.data.submissionId,
    );
  } catch {
    return jsonResponse(
      {
        error: "Security verification could not be completed. Please try again.",
        fieldErrors: { turnstileToken: "Complete the security verification again." },
      },
      502,
    );
  }

  if (!turnstileValid) {
    return jsonResponse(
      {
        error: "Security verification failed. Please complete the check and try again.",
        fieldErrors: { turnstileToken: "Complete the security verification." },
      },
      400,
    );
  }

  try {
    await options.dependencies.sendSubmission(parsed.data);
  } catch {
    return jsonResponse(
      {
        error:
          "Your project could not be submitted at this time. Please try again or email contact@haoyiadvisory.com.",
      },
      502,
    );
  }

  return jsonResponse({ success: true }, 200);
}
