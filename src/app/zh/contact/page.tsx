import Link from "next/link";
import { ArrowRight, Mail, Send } from "lucide-react";
import { PageHero, PageShell } from "@/components/layout";
import { generalEnquiryTopicsZh } from "@/lib/site-content-zh";

export const metadata = {
  title: "联系我们",
  description: "联系 Haoyi Advisory，咨询中欧医疗器械和医疗健康商业化服务。",
};

export default function ChineseContactPage() {
  return (
    <PageShell locale="zh">
      <PageHero
        title="联系我们"
        description="您可以发起一般咨询，也可以提交医疗器械项目，进行初步中国市场评估。"
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-50 text-cyan-700">
              <Mail className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
              一般咨询
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              咨询我们的服务、工作方式、中国市场进入或合作机会。
            </p>
            <a
              href="mailto:contact@haoyiadvisory.com"
              className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-cyan-800 hover:text-cyan-600"
            >
              contact@haoyiadvisory.com
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                咨询主题
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {generalEnquiryTopicsZh.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-600" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rounded-lg border border-cyan-300 bg-white p-7 shadow-sm sm:p-9">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-50 text-cyan-700">
              <Send className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
              提交项目
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              适用于寻求中国市场进入、合作伙伴、临床资源或商业化支持的欧洲及海外医疗器械企业。
            </p>
            <Link
              href="/zh/contact/project"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              提交项目
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
