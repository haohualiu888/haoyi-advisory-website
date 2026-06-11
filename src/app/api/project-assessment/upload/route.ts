import { issueSignedToken } from "@vercel/blob";
import {
  handleUploadPresigned,
  type HandleUploadPresignedBody,
} from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { requestOriginMatchesHost } from "@/lib/project-assessment-service";
import {
  isAllowedProjectAssessmentUploadPath,
  MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES,
  PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES,
} from "@/lib/project-assessment-upload";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  let body: HandleUploadPresignedBody;

  try {
    body = (await request.json()) as HandleUploadPresignedBody;
  } catch {
    return NextResponse.json(
      { error: "The upload request format is invalid." },
      { status: 400 },
    );
  }

  if (
    body.type === "blob.generate-presigned-url" &&
    !requestOriginMatchesHost(request)
  ) {
    return NextResponse.json(
      { error: "The upload origin could not be verified." },
      { status: 403 },
    );
  }

  try {
    const result = await handleUploadPresigned({
      body,
      request,
      getSignedToken: async (pathname) => {
        if (!isAllowedProjectAssessmentUploadPath(pathname)) {
          throw new Error("The upload path is invalid.");
        }

        const validUntil = Date.now() + 15 * 60 * 1000;
        const token = await issueSignedToken({
          pathname,
          operations: ["put"],
          allowedContentTypes: [...PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES],
          maximumSizeInBytes: MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES,
          validUntil,
        });

        return {
          token,
          urlOptions: {
            allowedContentTypes: [...PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES],
            maximumSizeInBytes: MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES,
            validUntil,
            addRandomSuffix: true,
          },
        };
      },
      onUploadCompleted: async () => {
        // The uploaded URL is returned to the form and included in the submission email.
      },
    });

    return NextResponse.json(result, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "The file could not be uploaded.",
      },
      { status: 400 },
    );
  }
}
