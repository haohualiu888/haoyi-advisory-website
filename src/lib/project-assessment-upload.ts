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

export type ProjectAssessmentUploadContentType =
  (typeof PROJECT_ASSESSMENT_UPLOAD_CONTENT_TYPES)[number];

const VERCEL_BLOB_PUBLIC_HOST_SUFFIX = ".public.blob.vercel-storage.com";

export function createProjectAssessmentUploadPath(
  fileName: string,
  uploadId = crypto.randomUUID(),
) {
  const leafName = fileName.split(/[\\/]/).pop()?.trim() || "";
  const extensionMatch = leafName.match(/\.([a-zA-Z0-9]{1,10})$/);
  const extension = extensionMatch ? `.${extensionMatch[1].toLowerCase()}` : "";
  const baseName = extension ? leafName.slice(0, -extension.length) : leafName;
  const sanitizedBase =
    baseName
      .normalize("NFKD")
      .replace(/[^\w.-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^[-.]+|[-.]+$/g, "")
      .slice(-100) || "supporting-document";

  return `${PROJECT_ASSESSMENT_UPLOAD_PREFIX}${uploadId}-${sanitizedBase}${extension}`;
}

export function isAllowedProjectAssessmentUploadPath(pathname: string) {
  return (
    pathname.startsWith(PROJECT_ASSESSMENT_UPLOAD_PREFIX) &&
    pathname.length <= 220 &&
    !pathname.includes("..") &&
    /^[a-zA-Z0-9/_.-]+$/.test(pathname)
  );
}

export function sanitizeProjectAssessmentOriginalFileName(fileName: string) {
  return (
    fileName
      .split(/[\\/]/)
      .pop()
      ?.replace(/[\u0000-\u001f\u007f]/g, "")
      .trim()
      .slice(0, 255) || "supporting-document"
  );
}

export function isProjectAssessmentBlobUrl(value: string) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      url.hostname.endsWith(VERCEL_BLOB_PUBLIC_HOST_SUFFIX) &&
      isAllowedProjectAssessmentUploadPath(url.pathname.replace(/^\/+/, ""))
    );
  } catch {
    return false;
  }
}

export function createProjectAssessmentDownloadUrl(value: string) {
  const url = new URL(value);
  url.searchParams.set("download", "1");
  return url.toString();
}

export async function verifyProjectAssessmentUpload(
  {
    url,
    expectedSize,
    expectedContentType,
  }: {
    url: string;
    expectedSize: number;
    expectedContentType: ProjectAssessmentUploadContentType;
  },
  fetcher: typeof fetch = fetch,
) {
  if (
    !isProjectAssessmentBlobUrl(url) ||
    !Number.isSafeInteger(expectedSize) ||
    expectedSize <= 0 ||
    expectedSize > MAX_PROJECT_ASSESSMENT_UPLOAD_BYTES
  ) {
    return false;
  }

  const response = await fetcher(url, {
    method: "HEAD",
    redirect: "follow",
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) return false;

  const storedSize = Number(response.headers.get("content-length"));
  const storedContentType =
    response.headers.get("content-type")?.split(";")[0]?.trim().toLowerCase() ?? "";

  return storedSize === expectedSize && storedContentType === expectedContentType;
}
