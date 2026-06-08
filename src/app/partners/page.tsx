import Image from "next/image";
import { CardGrid, CtaBand, PageHero, PageShell, SectionIntro } from "@/components/layout";
import { governmentProfiles, partnerGroups } from "@/lib/site-content";

export const metadata = {
  title: "Partners",
  description:
    "Partner ecosystem and six strategic China landing regions for Haoyi Advisory's Europe-China medical device commercialization work.",
};

export default function PartnersPage() {
  return (
    <PageShell>
      <PageHero
        title="Partners"
        description="Haoyi Advisory connects medical device companies with clinical, commercial, industrial, and specialist networks across Europe and China."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            title="Ecosystem"
            description="Four roles define the operating ecosystem around cross-border medical device commercialization."
          />
          <div className="mt-10">
            <CardGrid items={partnerGroups} columns="four" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            title="Parks"
            description="Six strategic China landing regions with distinct roles across clinical access, product development, manufacturing, digital health, and commercialization."
          />
          <div className="mt-12 space-y-16">
            {governmentProfiles.map((profile, index) => (
              <article key={profile.title} className="border-t border-slate-300 pt-8">
                <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
                  <div
                    className={`relative aspect-video overflow-hidden bg-slate-100 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={profile.image.src}
                      alt={profile.image.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                      {profile.location}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                      {profile.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {profile.officialName}
                    </p>
                    <p className="mt-5 text-base font-semibold text-slate-900">{profile.role}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{profile.summary}</p>

                    <div className="mt-7 grid border-y border-slate-200 sm:grid-cols-3">
                      {profile.verifiedFacts.map((fact, factIndex) => (
                        <div
                          key={`${profile.title}-${fact.label}`}
                          className={`py-5 sm:px-5 ${
                            factIndex > 0 ? "border-t border-slate-200 sm:border-t-0 sm:border-l" : ""
                          }`}
                        >
                          <p className="text-2xl font-semibold tracking-tight text-slate-950">
                            {fact.value}
                          </p>
                          <p className="mt-2 text-xs leading-5 text-slate-600">{fact.label}</p>
                          <p className="mt-2 text-xs font-medium text-cyan-700">{fact.period}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-slate-950">Relevant projects</h3>
                      <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm leading-6 text-slate-600 md:grid-cols-2">
                        {profile.relevance.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-600" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-xs text-slate-500">Data reference: {profile.asOf}.</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="border-l-4 border-cyan-500 bg-white px-6 py-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Project qualification
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              Location relevance depends on the product, regulatory status, clinical pathway,
              operating model, and local project requirements. Incentives, approvals, hospital
              access, investment, and commercial terms require current project-specific confirmation.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
