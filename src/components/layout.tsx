import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/lib/site-content";
import { SiteHeader } from "@/components/site-header";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold">Haoyi Advisory</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Cross-border medical device and healthcare commercialization between Europe and China.
            Public partner names, legal entity details, and representative project examples are
            marked To be confirmed until approved for publication.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-300 hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  title,
  description,
  label,
}: {
  title: string;
  description: string;
  label?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        {label ? (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            {label}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}

export function SectionIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export function CardGrid({
  items,
  columns = "three",
}: {
  items: Array<{ title: string; description: string; icon: IconType }>;
  columns?: "two" | "three" | "four";
}) {
  const gridClass =
    columns === "four"
      ? "lg:grid-cols-4"
      : columns === "two"
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${gridClass}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-50 text-cyan-700">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Start with a focused conversation.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Haoyi Advisory is best suited for companies and partners seeking practical,
              evidence-aware commercialization routes across Europe and China.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 lg:mt-0"
          >
            Contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
