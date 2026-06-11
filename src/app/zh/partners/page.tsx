import Image from "next/image";
import { CardGrid, CtaBand, PageHero, PageShell, SectionIntro } from "@/components/layout";
import { governmentProfilesZh, partnerGroupsZh } from "@/lib/site-content-zh";

export const metadata = {
  title: "合作生态",
  description:
    "了解 Haoyi Advisory 的合作伙伴生态及七个中国战略落地区域。",
};

export default function ChinesePartnersPage() {
  return (
    <PageShell locale="zh">
      <PageHero
        title="合作生态"
        description="Haoyi Advisory 连接中国与欧洲的医疗器械企业、临床资源、商业伙伴、产业平台及专业服务网络。"
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            title="生态角色"
            description="四类核心角色共同支持跨境医疗器械商业化。"
          />
          <div className="mt-10">
            <CardGrid items={partnerGroupsZh} columns="four" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            title="产业园区"
            description="七个中国战略落地区域，分别覆盖临床使用、产品研发、生产制造、数字医疗、养老科技及商业化等不同功能。"
          />
          <div className="mt-12 space-y-16">
            {governmentProfilesZh.map((profile, index) => (
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
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-slate-950">适合的项目</h3>
                      <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm leading-6 text-slate-600 md:grid-cols-2">
                        {profile.relevance.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-600" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
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
              项目匹配评估
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              区域匹配度取决于产品、监管状态、临床路径、运营模式及当地项目要求。激励政策、
              审批、医院资源、投资及商务条件均需按照具体项目进行最新确认。
            </p>
          </div>
        </div>
      </section>

      <CtaBand locale="zh" />
    </PageShell>
  );
}
