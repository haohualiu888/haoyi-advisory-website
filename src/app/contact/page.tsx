import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { PageHero, PageShell } from "@/components/layout";
import { contactCategories } from "@/lib/site-content";

export const metadata = {
  title: "Contact",
  description:
    "Contact Haoyi Advisory for Europe-China medical device and healthcare commercialization enquiries.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        title="Contact"
        description="Contact Haoyi Advisory for relevant medical device, healthcare commercialization, partner, investor, government platform, or general enquiries."
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <Mail className="h-6 w-6 text-cyan-700" strokeWidth={1.8} />
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
              Contact details
            </h2>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>Email: To be confirmed</p>
              <p>Phone: To be confirmed</p>
              <p>Office: To be confirmed</p>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-500">
              Until public contact details are confirmed, enquiries should be routed through the
              approved Haoyi Advisory contact channel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Enquiry categories
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contactCategories.map((category) => (
                <div
                  key={category}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <span>{category}</span>
                  <ArrowRight className="h-4 w-4 text-cyan-700" />
                </div>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Review services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
