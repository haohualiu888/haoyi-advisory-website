export type SiteLocale = "en" | "zh";

const pagePaths = [
  ["Home", "首页", "/"],
  ["About", "关于我们", "/about"],
  ["Focus", "业务领域", "/focus"],
  ["Services", "服务", "/services"],
  ["Partners", "合作生态", "/partners"],
  ["Contact", "联系我们", "/contact"],
] as const;

export function getNavItems(locale: SiteLocale) {
  return pagePaths.map(([englishLabel, chineseLabel, path]) => ({
    label: locale === "zh" ? chineseLabel : englishLabel,
    href: locale === "zh" ? (path === "/" ? "/zh" : `/zh${path}`) : path,
  }));
}

export function getLocalizedPath(pathname: string, locale: SiteLocale) {
  if (locale === "zh") {
    const englishPath = pathname.replace(/^\/zh(?=\/|$)/, "");
    return englishPath || "/";
  }

  return pathname === "/" ? "/zh" : `/zh${pathname}`;
}
