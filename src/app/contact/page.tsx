import Link from "next/link";
import { ArrowRight, Mail, Send } from "lucide-react";
import { PageHero, PageShell } from "@/components/layout";
import { generalEnquiryTopics } from "@/lib/site-content";

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
        description="Start a general conversation or submit a medical device project for an initial China market assessment."
      />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-50 text-cyan-700">
              <Mail className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
              General Enquiry
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              For general questions about our services, approach, China market entry, or
              partnership opportunities.
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
                Enquiry topics
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {generalEnquiryTopics.map((topic) => (
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
              Submit a Project
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              For European and overseas medical device companies seeking China market entry,
              partnership, clinical access, or commercialization support.
            </p>
            <Link
              href="/contact/project"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Submit a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
