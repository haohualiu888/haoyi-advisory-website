import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CardGrid, CtaBand, PageHero, PageShell, SectionIntro } from "@/components/layout";
import { governmentProfiles, partnerGroups } from "@/lib/site-content";

export const metadata = {
  title: "Partners",
  description:
    "Partner ecosystem and public-sector region profiles for Haoyi Advisory's Europe-China medical device commercialization work.",
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
            description="Five public-sector industrial parks and landing platforms selected for their relevance to rehabilitation and medical-device commercialization."
          />
          <div className="mt-12 space-y-8">
            {governmentProfiles.map((profile, index) => (
              <article
                key={profile.title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-2">
                  <div
                    className={`relative min-h-[260px] bg-slate-100 ${
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
                  <div className="p-6 sm:p-8 lg:p-10">
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

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-950">Potential fit</h3>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                          {profile.fitPoints.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-600" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-950">To be confirmed</h3>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                          {profile.uncertainties.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-200 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Public sources
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {profile.sources.map((source) => (
                          <a
                            key={source.url}
                            href={source.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                          >
                            {source.label}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
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
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Publication note
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              Approved public partner names, logos, hospitals, local government relationships, and
              representative project examples are To be confirmed. The profiles above use public
              information and verified real-location photography for market-entry orientation only.
              They do not state or imply confirmed government commitments.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
