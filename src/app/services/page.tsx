import { CardGrid, CtaBand, PageHero, PageShell, SectionIntro } from "@/components/layout";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Services",
  description:
    "Haoyi Advisory services include market entry, partner mapping, BD execution, regulatory pathway, clinical access, commercial strategy, transaction support, and overseas expansion.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        title="Services"
        description="Haoyi Advisory helps healthcare companies move from market interest to practical commercial next steps through structured evaluation, partner work, and execution support."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            title="What we do"
            description="Services are designed to clarify market logic, identify relevant stakeholders, and support commercially realistic cross-border execution."
          />
          <div className="mt-10">
            <CardGrid items={services} columns="four" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-cyan-200 bg-cyan-50/60 p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">BD wording</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
              We support target partner mapping, outreach preparation, opportunity qualification,
              meeting support, negotiation coordination, and structured follow-up until a clear
              commercial next step is reached.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
