import { CardGrid, CtaBand, PageHero, PageShell, SectionIntro } from "@/components/layout";
import { focusAreas } from "@/lib/site-content";

export const metadata = {
  title: "Focus",
  description:
    "Preferred healthcare and medical device focus areas for Haoyi Advisory, including rehabilitation, recovery, diagnostics, digital health, home care, monitoring, and medical devices.",
};

export default function FocusPage() {
  return (
    <PageShell>
      <PageHero
        title="Focus"
        description="Haoyi Advisory supports broader medical device and healthcare commercialization, with preferred focus areas where clinical value, market access, and partner pathways can be evaluated clearly."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            title="Preferred sectors"
            description="The focus areas below guide screening, positioning, partner mapping, and commercialization pathway work."
          />
          <div className="mt-10">
            <CardGrid items={focusAreas} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Broader healthcare scope, sharper preferred areas.
            </h2>
            <p className="text-base leading-8 text-slate-600">
              Rehabilitation, recovery, functional improvement, neurorehabilitation,
              musculoskeletal rehabilitation, pain management, post-operative recovery, and
              home-care technologies are emphasized as preferred areas. Other medical device and
              healthcare opportunities may be evaluated when cross-border commercialization logic is
              strong.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
