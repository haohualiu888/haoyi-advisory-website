import { CardGrid, CtaBand, PageHero, PageShell, SectionIntro } from "@/components/layout";
import { partnerGroups } from "@/lib/site-content";

export const metadata = {
  title: "Partners",
  description:
    "Category-based partner ecosystem for Haoyi Advisory across companies, clinical experts, distributors, industrial parks, investors, universities, and advisors.",
};

export default function PartnersPage() {
  return (
    <PageShell>
      <PageHero
        title="Partners"
        description="Haoyi Advisory works across a category-based ecosystem relevant to medical device and healthcare commercialization. Public names are shown only after approval."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            title="Ecosystem"
            description="Partner categories are described by role rather than unapproved names, logos, hospitals, government commitments, or unsupported relationships."
          />
          <div className="mt-10">
            <CardGrid items={partnerGroups} columns="four" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Publication note
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              Approved public partner names, logos, hospitals, local government relationships, and
              representative project examples are To be confirmed. Until then, Haoyi Advisory uses
              category-based descriptions only.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
