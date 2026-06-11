import type { ProjectAssessmentSubmission } from "@/lib/project-assessment";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const valueOrDash = (value?: string) => (value ? escapeHtml(value) : "Not provided");

const listValue = (values: string[]) => values.map(escapeHtml).join(", ");

function row(label: string, value?: string) {
  return `<tr>
    <th style="width:32%;padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:left;vertical-align:top;color:#475569;font-size:13px;font-weight:600">${escapeHtml(label)}</th>
    <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;line-height:1.5">${valueOrDash(value)}</td>
  </tr>`;
}

function section(title: string, rows: string) {
  return `<h2 style="margin:28px 0 10px;color:#14202e;font-size:18px">${escapeHtml(title)}</h2>
    <table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0">${rows}</table>`;
}

export function buildProjectAssessmentEmail(submission: ProjectAssessmentSubmission) {
  const organizationType =
    submission.organizationType === "Other"
      ? `Other: ${submission.organizationTypeOther}`
      : submission.organizationType;
  const productCategory =
    submission.productCategory === "Other medical device"
      ? `Other: ${submission.productCategoryOther}`
      : submission.productCategory;
  const productLifecycleStage =
    submission.productLifecycleStage === "Other"
      ? `Other: ${submission.productLifecycleStageOther}`
      : submission.productLifecycleStage;
  const regulatoryStatus =
    submission.regulatoryStatus === "Other"
      ? `Other: ${submission.regulatoryStatusOther}`
      : submission.regulatoryStatus;
  const chinaInterest = submission.chinaInterest.map((value) =>
    value === "Other" ? `Other: ${submission.chinaInterestOther}` : value,
  );

  return `<!doctype html>
  <html>
    <body style="margin:0;background:#f8fafc;font-family:Arial,sans-serif">
      <div style="max-width:720px;margin:0 auto;padding:32px 20px">
        <div style="border-top:4px solid #0e2138;background:#ffffff;padding:28px;border-radius:8px">
          <p style="margin:0;color:#2d63aa;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Haoyi Advisory</p>
          <h1 style="margin:10px 0 8px;color:#14202e;font-size:26px">New project assessment</h1>
          <p style="margin:0;color:#64748b;font-size:14px">Submission ID: ${escapeHtml(submission.submissionId)}</p>

          ${section(
            "Company Information",
            row("Company name", submission.companyName) +
              row("Company website", submission.companyWebsite) +
              row("Country / region", submission.countryRegion) +
              row("Organization type", organizationType) +
              row("Contact person", submission.contactPersonName) +
              row("Job title", submission.jobTitle) +
              row("Email", submission.email) +
              row("LinkedIn profile", submission.linkedInProfile),
          )}

          ${section(
            "Product Information",
            row("Product / technology", submission.productName) +
              row("Product category", productCategory) +
              row("Description", submission.productDescription) +
              row("Target indication / use case", submission.targetIndication) +
              row("Product lifecycle stage", productLifecycleStage),
          )}

          ${section(
            "Evidence and Regulation",
            row("Regulatory status", regulatoryStatus) +
              row("Clinical evidence", submission.clinicalEvidence) +
              row("Key evidence summary", submission.keyEvidenceSummary) +
              row("China regulatory status", submission.chinaRegulatoryStatus),
          )}

          ${section(
            "China Interest",
            row("China objectives", listValue(chinaInterest)) +
              row("Preferred entry model", listValue(submission.preferredEntryModel)) +
              row("Target timeline", submission.targetTimeline) +
              row("Existing China activity", submission.existingChinaActivity),
          )}

          ${section(
            "Files and Comments",
            row("Pitch deck / brochure link", submission.pitchDeckLink) +
              row("Additional comments", submission.additionalComments) +
              row("Consent", submission.consent ? "Confirmed" : "Not confirmed"),
          )}
        </div>
      </div>
    </body>
  </html>`;
}
