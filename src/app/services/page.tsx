import { PageShell } from "@/components/layout";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Services",
  description:
    "Haoyi Advisory supports market and entry strategy, partner development, and commercial execution between Europe, China, and overseas markets.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Services
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            From market fit to a qualified commercial next step.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Three core capabilities
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              A single, integrated commercialization model that works in both directions — European
              companies entering China, and Chinese companies expanding into overseas markets.
            </p>
          </div>

          <div className="relative mt-12 grid lg:grid-cols-3">
            <div
              aria-hidden="true"
              className="absolute top-[3.1rem] right-0 left-0 hidden h-px bg-cyan-600 lg:block"
            />
            {services.map((service, index) => (
              <article
                key={service.title}
                className="relative border-t border-slate-300 py-8 first:pt-0 last:pb-0 lg:min-h-[19rem] lg:border-t-0 lg:border-l lg:px-10 lg:py-0 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              >
                <p className="text-base font-semibold text-cyan-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-5 hidden h-3 w-3 rounded-full bg-cyan-600 ring-8 ring-slate-50 lg:block"
                />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 lg:mt-8">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <p className="mt-7 max-w-sm text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-cyan-700">Outcome:</span>{" "}
                  {service.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
