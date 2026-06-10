import { PageShell } from "@/components/layout";
import { focusAreas } from "@/lib/site-content";

export const metadata = {
  title: "Focus",
  description:
    "Haoyi Advisory supports commercialization across diagnostics, imaging, surgery, intervention, treatment, monitoring, digital health, rehabilitation, hospital equipment, home care, and medical consumables.",
};

export default function FocusPage() {
  return (
    <PageShell>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Focus
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            We work across the medical device landscape, from diagnostics and intervention to
            treatment, monitoring, rehabilitation, and care delivery.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Medical device sectors
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Six broad product groups define the technologies we evaluate and support across
              Europe and China.
            </p>
          </div>

          <div className="mt-12 grid border-t border-slate-300 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className={`border-b border-slate-300 py-7 sm:min-h-52 sm:px-7 ${
                  index % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"
                }`}
              >
                <p className="text-sm font-semibold text-cyan-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 max-w-md text-xl font-semibold tracking-tight text-slate-950">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-300 pt-6 lg:flex lg:items-start lg:gap-10">
            <h2 className="flex-none text-base font-semibold text-slate-950">Commercial lens</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 lg:mt-0">
              Each opportunity is assessed by intended use, clinical pathway, regulatory status,
              evidence, and commercial model.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
