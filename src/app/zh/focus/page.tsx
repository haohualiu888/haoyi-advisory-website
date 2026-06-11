import { PageShell } from "@/components/layout";
import { focusAreasZh } from "@/lib/site-content-zh";

export const metadata = {
  title: "业务领域",
  description:
    "Haoyi Advisory 支持诊断、影像、外科、介入、治疗、监护、数字医疗、康复、医院设备、居家护理及医用耗材的商业化。",
};

export default function ChineseFocusPage() {
  return (
    <PageShell locale="zh">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            业务领域
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            我们覆盖广泛的医疗器械领域，从诊断和介入，到治疗、监护、康复及照护服务。
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              医疗器械领域
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              六大产品类别界定了我们在中国与欧洲评估和支持的技术范围。
            </p>
          </div>

          <div className="mt-12 grid border-t border-slate-300 sm:grid-cols-2">
            {focusAreasZh.map((area, index) => (
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
            <h2 className="flex-none text-base font-semibold text-slate-950">商业评估维度</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 lg:mt-0">
              每个机会均从预期用途、临床路径、监管状态、证据基础及商业模式进行评估。
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
