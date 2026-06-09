"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex min-h-18 items-center justify-between gap-5">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Haoyi Advisory home">
            <svg viewBox="0 0 32 32" className="h-10 w-10 flex-none" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#07172f" />
              <rect x="8.5" y="6" width="3" height="20" rx="1.5" fill="#ffffff" />
              <rect x="20.5" y="6" width="3" height="20" rx="1.5" fill="#ffffff" />
              <path
                d="M10 16 Q16 11 22 16"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="min-w-0">
              <span className="block text-base font-semibold tracking-tight text-slate-950">
                Haoyi Advisory
              </span>
              <span className="hidden text-xs font-medium text-slate-500 sm:block">
                Europe-China healthcare commercialization
              </span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
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

          <button
            type="button"
            className="grid h-10 w-10 flex-none place-items-center rounded-md border border-slate-200 text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
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
