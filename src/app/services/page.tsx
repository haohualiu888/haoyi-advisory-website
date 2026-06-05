import { CtaBand, PageHero, PageShell } from "@/components/layout";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Services",
  description:
    "Haoyi Advisory supports market assessment, entry pathway planning, partner development, and commercial execution between Europe and China.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        title="Services"
        description="We help medical device and healthcare companies move from market evaluation to a clear commercial next step."
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Four service stages.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              Engage Haoyi for one stage or an integrated cross-border commercialization pathway.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-sm font-semibold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
