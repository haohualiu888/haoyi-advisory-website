import { PageShell } from "@/components/layout";
import { servicesZh } from "@/lib/site-content-zh";

export const metadata = {
  title: "服务",
  description:
    "Haoyi Advisory 支持中国、欧洲及海外市场之间的市场与进入策略、合作伙伴拓展及商业化执行。",
};

export default function ChineseServicesPage() {
  return (
    <PageShell locale="zh">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            服务
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            从市场匹配评估到形成高质量、可执行的商业化下一步。
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              三项核心能力
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              一套双向适用的整合商业化模式，既支持欧洲企业进入中国，也支持中国企业拓展海外市场。
            </p>
          </div>

          <div className="relative mt-12 grid lg:grid-cols-3">
            <div
              aria-hidden="true"
              className="absolute top-[3.1rem] right-0 left-0 hidden h-px bg-cyan-600 lg:block"
            />
            {servicesZh.map((service, index) => (
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
                  <span className="font-semibold text-cyan-700">交付结果：</span>
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
