import { describe, expect, it } from "vitest";
import { getLocalizedPath, getNavItems } from "@/lib/site-navigation";

describe("site navigation localization", () => {
  it("keeps equivalent English and Chinese page paths", () => {
    expect(getLocalizedPath("/contact/project", "en")).toBe("/zh/contact/project");
    expect(getLocalizedPath("/zh/contact/project", "zh")).toBe("/contact/project");
    expect(getLocalizedPath("/", "en")).toBe("/zh");
    expect(getLocalizedPath("/zh", "zh")).toBe("/");
  });

  it("prefixes Chinese navigation without changing English routes", () => {
    expect(getNavItems("en").find((item) => item.label === "Contact")?.href).toBe(
      "/contact",
    );
    expect(getNavItems("zh").find((item) => item.label === "联系我们")?.href).toBe(
      "/zh/contact",
    );
  });
});
