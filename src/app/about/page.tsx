import { CtaBand, PageHero, PageShell } from "@/components/layout";
import { factsToConfirm, workflowPrinciples } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "About Haoyi Advisory, a Europe-China medical device and healthcare commercialization platform.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title="About"
        description="Haoyi Advisory supports cross-border medical device and healthcare commercialization between Europe and China through structured market evaluation, partner work, and practical execution planning."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Platform
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Cross-border work for healthcare technologies.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Haoyi Advisory works with medical device and healthcare companies that need a clearer
              route between product value, market access, clinical relevance, and commercial
              partnership.
            </p>
            <p>
              The company is positioned for Europe-China commercialization work, including European
              healthcare companies evaluating China and Chinese healthcare companies preparing for
              overseas expansion.
            </p>
            <p>
              Team biographies, formal credentials, legal entity information, and approved public
              partner references are To be confirmed before publication.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {workflowPrinciples.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              To be confirmed
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {factsToConfirm.map((item) => (
                <p key={item} className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
