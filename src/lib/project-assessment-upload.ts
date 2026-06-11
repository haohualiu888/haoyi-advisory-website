export const PROJECT_ASSESSMENT_UPLOAD_PREFIX = "project-assessments/";
export const MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES = 20 * 1024 * 1024;

export const PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.ms-powerpoint",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
] as const;

export function createProjectAssessmentUploadPath(
  fileName: string,
  uploadId = crypto.randomUUID(),
) {
  const sanitizedName =
    fileName
      .normalize("NFKD")
      .replace(/[^\w.-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^[-.]+|[-.]+$/g, "")
      .slice(-120) || "supporting-document";

  return `${PROJECT_ASSESSMENT_UPLOAD_PREFIX}${uploadId}-${sanitizedName}`;
}

export function isAllowedProjectAssessmentUploadPath(pathname: string) {
  return (
    pathname.startsWith(PROJECT_ASSESSMENT_UPLOAD_PREFIX) &&
    pathname.length <= 220 &&
    !pathname.includes("..") &&
    /^[a-zA-Z0-9/_.-]+$/.test(pathname)
  );
}
