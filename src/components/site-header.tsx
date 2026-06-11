"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  getLocalizedPath,
  getNavItems,
  type SiteLocale,
} from "@/lib/site-navigation";

export function SiteHeader({ locale = "en" }: { locale?: SiteLocale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const navItems = getNavItems(locale);
  const languageHref = getLocalizedPath(pathname, locale);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex min-h-18 items-center justify-between gap-5">
          <Link
            href={locale === "zh" ? "/zh" : "/"}
            className="flex min-w-0 items-center gap-3"
            aria-label={locale === "zh" ? "Haoyi Advisory 中文首页" : "Haoyi Advisory home"}
          >
            <svg viewBox="0 0 40 40" className="h-10 w-10 flex-none" aria-hidden="true">
              <g fill="none" stroke="#14202e" strokeWidth="2">
                <circle cx="20" cy="20" r="15" />
                <ellipse cx="20" cy="20" rx="6.3" ry="15" />
                <circle cx="13.1" cy="13.7" r="2.7" strokeWidth="1.6" />
              </g>
              <circle cx="27.5" cy="24.5" r="2.5" fill="#14202e" />
            </svg>
            <span className="min-w-0">
              <span className="block text-base font-semibold tracking-tight text-slate-950">
                Haoyi Advisory
              </span>
              <span className="hidden text-xs font-medium text-slate-500 sm:block">
                {locale === "zh" ? "中欧医疗健康商业化" : "Europe-China healthcare commercialization"}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <nav
              aria-label={locale === "zh" ? "主导航" : "Main navigation"}
              className="flex items-center gap-1"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={languageHref}
              className="ml-1 rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-400 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
            >
              {locale === "zh" ? "EN" : "中文"}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={languageHref}
              className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800"
              aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
            >
              {locale === "zh" ? "EN" : "中文"}
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 flex-none place-items-center rounded-md border border-slate-200 text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              aria-label={
                menuOpen
                  ? locale === "zh"
                    ? "关闭导航"
                    : "Close navigation"
                  : locale === "zh"
                    ? "打开导航"
                    : "Open navigation"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          aria-label={locale === "zh" ? "移动端导航" : "Mobile navigation"}
          hidden={!menuOpen}
          className="grid grid-cols-2 gap-1 border-t border-slate-200 py-3 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
