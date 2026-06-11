import { ProjectAssessmentForm } from "@/components/project-assessment-form";
import { PageHero, PageShell } from "@/components/layout";

export const metadata = {
  title: "项目评估表",
  description: "提交医疗器械项目，进行初步中国市场、监管、临床及合作机会评估。",
};

export default function ChineseProjectAssessmentPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const submissionEnabled =
    process.env.PROJECT_ASSESSMENT_ENABLED === "true" && Boolean(turnstileSiteKey);

  return (
    <PageShell locale="zh">
      <PageHero
        title="项目评估表"
        description="请介绍您的企业和产品。我们的团队将评估市场匹配、监管可行性、临床相关性及潜在的中国合作路径。"
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-12">
            <ProjectAssessmentForm
              locale="zh"
              submissionEnabled={submissionEnabled}
              turnstileSiteKey={turnstileSiteKey}
              privacyController={process.env.PRIVACY_CONTROLLER_NAME ?? "Haoyi Advisory"}
              privacyContact={
                process.env.PRIVACY_CONTACT_EMAIL ?? "contact@haoyiadvisory.com"
              }
              retentionMonths={
                process.env.PROJECT_ASSESSMENT_RETENTION_MONTHS ?? "24"
              }
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
