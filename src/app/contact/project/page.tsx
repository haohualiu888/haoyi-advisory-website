import { ProjectAssessmentForm } from "@/components/project-assessment-form";
import { PageHero, PageShell } from "@/components/layout";

export const metadata = {
  title: "Project Assessment Form",
  description:
    "Submit your medical device project for an initial China market, regulatory, clinical, and partnership assessment.",
};

export default function ProjectAssessmentPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const submissionEnabled =
    process.env.PROJECT_ASSESSMENT_ENABLED === "true" && Boolean(turnstileSiteKey);

  return (
    <PageShell>
      <PageHero
        title="Project Assessment Form"
        description="Tell us about your company and product. Our team will review market fit, regulatory feasibility, clinical relevance, and potential China partnership pathways."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-12">
            <ProjectAssessmentForm
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
