import { CtaBand, PageHero, PageShell } from "@/components/layout";
import { focusAreas } from "@/lib/site-content";

export const metadata = {
  title: "Focus",
  description:
    "Haoyi Advisory's rehabilitation technology focus across assessment and diagnostics, therapeutic rehabilitation, recovery, pain management, and continuing care.",
};

export default function FocusPage() {
  return (
    <PageShell>
      <PageHero
        title="Focus"
        description="We focus on technologies across the rehabilitation pathway, from assessment and treatment to recovery and continuing care."
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Four parts of the pathway.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              One consistent structure keeps the focus simple, complete, and relevant to
              rehabilitation commercialization.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
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
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="border-l-4 border-cyan-500 bg-slate-50 px-5 py-4 sm:flex sm:items-start sm:gap-8">
            <h2 className="flex-none text-base font-semibold text-slate-950">Selection rule</h2>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600 sm:mt-0">
              Products are evaluated when their primary role fits one of these four rehabilitation
              functions. Digital tools, monitoring, robotics, and home-use devices sit within the
              relevant function rather than becoming separate categories.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
