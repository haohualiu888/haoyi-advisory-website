import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/layout";
import { differentiators, navItems } from "@/lib/site-content";

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative z-10">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              <span className="block">Cross-Border</span>
              <span className="block">Medical Device</span>
              <span className="block">Commercialization</span>
              <span className="block">Between Europe</span>
              <span className="block">and China</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We help medical device and healthcare companies evaluate markets, identify partners,
              and build practical commercialization pathways across China and overseas markets.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-400 hover:text-cyan-700"
              >
                Contact
              </Link>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              {["Europe-China", "Healthcare focus", "Practical pathways"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-100/70 blur-3xl" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-2xl">
              <Image
                src="/images/haoyi-cross-border-medtech.png"
                alt="Abstract medical technology commercialization network connecting Europe and China"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-right"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
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
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-5">
            <p className="text-sm font-semibold text-slate-950">Publication discipline</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Partner names, project examples, and legal details are listed only after approval.
            </p>
          </div>
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
