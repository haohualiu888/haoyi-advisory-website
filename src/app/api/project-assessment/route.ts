import { Resend } from "resend";
import { buildProjectAssessmentEmail } from "@/lib/project-assessment-email";
import {
  handleProjectAssessmentRequest,
  type ProjectAssessmentServiceDependencies,
} from "@/lib/project-assessment-service";

export const runtime = "nodejs";

let resendClient: Resend | null = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");
  resendClient ??= new Resend(apiKey);
  return resendClient;
}

const dependencies: ProjectAssessmentServiceDependencies = {
  async verifyTurnstile(token, remoteIp, submissionId) {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) return false;

    const body = new URLSearchParams({
      secret,
      response: token,
      idempotency_key: submissionId,
    });
    if (remoteIp) body.set("remoteip", remoteIp);

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body,
        cache: "no-store",
        signal: AbortSignal.timeout(8_000),
      },
    );

    if (!response.ok) return false;

    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  },

  async sendSubmission(submission) {
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.PROJECT_SUBMISSION_TO_EMAIL;
    if (!from || !to) throw new Error("Email routing is not configured.");

    const { error } = await getResend().emails.send(
      {
        from,
        to,
        replyTo: submission.email,
        subject: `[Project Assessment] ${submission.companyName} — ${submission.productName}`,
        html: buildProjectAssessmentEmail(submission),
      },
      {
        idempotencyKey: `project-assessment-${submission.submissionId}`,
      },
    );

    if (error) throw new Error(error.message);
  },
};

export async function POST(request: Request) {
  return handleProjectAssessmentRequest(request, {
    enabled: process.env.PROJECT_ASSESSMENT_ENABLED === "true",
    dependencies,
  });
}
