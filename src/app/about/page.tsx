import { CtaBand, PageShell } from "@/components/layout";
import {
  focusAreas,
  governmentProfiles,
  services,
  workflowPrinciples,
} from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "About Haoyi Advisory, a Europe-China medical device and healthcare commercialization platform.",
};

const aboutStats = [
  {
    value: "2",
    label: "Cross-border directions",
    description: "Europe to China and China to overseas markets.",
  },
  {
    value: String(governmentProfiles.length),
    label: "Strategic China landing regions",
    description: "Boao, Wuhan, Taizhou, Tongxiang, Shanghai, Shenzhen, and Changchun.",
  },
  {
    value: String(focusAreas.length),
    label: "Medical device sectors",
    description: "Coverage across six broad medical-device and healthcare technology groups.",
  },
  {
    value: String(services.length),
    label: "Commercialization capabilities",
    description: "Strategy, partner development, and commercial execution.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Europe-China medical device commercialization
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Haoyi Advisory connects European and Chinese medical device and healthcare companies
              through market entry, partner mapping, and commercialization execution that starts
              with verifiable information.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutStats.map((item) => (
              <article
                key={item.label}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-5xl font-semibold tracking-tight text-slate-950">
                  {item.value}
                </p>
                <h2 className="mt-5 text-base font-semibold text-slate-950">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                How we work
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                The operating model is intentionally simple: evidence first, pathway second,
                execution third.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {workflowPrinciples.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
