import { CtaBand, PageShell } from "@/components/layout";
import {
  focusAreasZh,
  governmentProfilesZh,
  servicesZh,
  workflowPrinciplesZh,
} from "@/lib/site-content-zh";

export const metadata = {
  title: "关于我们",
  description: "了解 Haoyi Advisory 的中欧医疗器械和医疗健康商业化平台。",
};

const aboutStats = [
  {
    value: "2",
    label: "双向跨境路径",
    description: "欧洲进入中国，以及中国企业拓展海外市场。",
  },
  {
    value: String(governmentProfilesZh.length),
    label: "中国战略落地区域",
    description: "博鳌、武汉、泰州、桐乡、上海、深圳及长春。",
  },
  {
    value: String(focusAreasZh.length),
    label: "医疗器械领域",
    description: "覆盖六大医疗器械和医疗健康技术类别。",
  },
  {
    value: String(servicesZh.length),
    label: "商业化核心能力",
    description: "策略、合作伙伴拓展及商业化执行。",
  },
];

export default function ChineseAboutPage() {
  return (
    <PageShell locale="zh">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              中欧医疗器械商业化
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Haoyi Advisory 以可验证信息为起点，通过市场进入、合作伙伴梳理和商业化执行，
              连接中国与欧洲的医疗器械和医疗健康企业。
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
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">工作方式</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                我们的工作逻辑保持清晰：先建立证据，再确定路径，最后推进执行。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {workflowPrinciplesZh.map((item, index) => (
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

      <CtaBand locale="zh" />
    </PageShell>
  );
}
