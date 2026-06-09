import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { PageShell } from "@/components/layout";
import { differentiators, navItems } from "@/lib/site-content";

export default function Home() {
  return (
    <PageShell>
      <HomeHero />

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-lg bg-white p-5 shadow-sm">
                <Icon className="h-5 w-5 text-cyan-700" strokeWidth={1.8} />
                <h2 className="mt-4 text-base font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                {item.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
