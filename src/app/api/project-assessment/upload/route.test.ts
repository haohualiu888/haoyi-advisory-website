import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  handleUploadPresigned: vi.fn(),
  issueSignedToken: vi.fn(),
}));

vi.mock("@vercel/blob", () => ({
  issueSignedToken: mocks.issueSignedToken,
}));

vi.mock("@vercel/blob/client", () => ({
  handleUploadPresigned: mocks.handleUploadPresigned,
}));

import { POST } from "@/app/api/project-assessment/upload/route";

const uploadEvent = {
  type: "blob.generate-presigned-url",
  payload: {
    pathname: "project-assessments/1234-clinical-deck.pdf",
    clientPayload: null,
    multipart: false,
  },
};

function uploadRequest(
  body: unknown,
  headers: Record<string, string> = {},
) {
  return new Request("https://haoyiadvisory.co/api/project-assessment/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://haoyiadvisory.co",
      Host: "haoyiadvisory.co",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("project assessment upload route", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.issueSignedToken.mockResolvedValue({
      delegationToken: "delegation-token",
      clientSigningToken: "client-signing-token",
      validUntil: Date.now() + 60_000,
    });
    mocks.handleUploadPresigned.mockImplementation(
      async ({ getSignedToken }: { getSignedToken: (pathname: string) => Promise<unknown> }) => {
        await getSignedToken(uploadEvent.payload.pathname);
        return {
          type: "blob.generate-presigned-url",
          presignedUrlPayload: { presignedUrl: "https://blob.example/upload" },
        };
      },
    );
  });

  it("issues a scoped presigned upload token for a same-origin request", async () => {
    const response = await POST(uploadRequest(uploadEvent));

    expect(response.status).toBe(200);
    expect(mocks.issueSignedToken).toHaveBeenCalledWith(
      expect.objectContaining({
        pathname: uploadEvent.payload.pathname,
        operations: ["put"],
        maximumSizeInBytes: 20 * 1024 * 1024,
      }),
    );
  });

  it("rejects a cross-origin token request", async () => {
    const response = await POST(
      uploadRequest(uploadEvent, { Origin: "https://attacker.example" }),
    );

    expect(response.status).toBe(403);
    expect(mocks.handleUploadPresigned).not.toHaveBeenCalled();
  });

  it("returns a controlled error for invalid JSON", async () => {
    const response = await POST(uploadRequest("{"));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: "The upload request format is invalid.",
    });
  });
});
