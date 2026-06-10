import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const routeForward = "M 620 476 C 812 344, 1098 350, 1260 512";
const routeReverse = "M 1260 512 C 1098 350, 812 344, 620 476";

function CommercializationMap() {
  return (
    <div className="hero-visual relative">
      <div
        className="hero-aurora pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_72%_38%,rgba(196,166,106,0.16),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
        <div className="relative aspect-[16/10] min-h-[220px] w-full sm:min-h-[300px] lg:min-h-[360px] xl:min-h-[460px]">
          <Image
            src="/images/haoyi-europe-china-map.png"
            alt="Minimal world map highlighting Europe and China as two connected commercialization markets"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, (min-width: 640px) 90vw, 100vw"
            className="object-cover object-right mix-blend-multiply"
          />

          <svg
            viewBox="0 0 1536 1024"
            preserveAspectRatio="xMaxYMid slice"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="corridorGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#1e3a5f" />
                <stop offset="0.5" stopColor="#5a6a7c" />
                <stop offset="1" stopColor="#c4a66a" />
              </linearGradient>
            </defs>

            {/* Market radar around China */}
            <circle cx="1260" cy="512" r="118" fill="none" stroke="#ad8f53" strokeOpacity="0.08" />
            <circle cx="1260" cy="512" r="80" fill="none" stroke="#ad8f53" strokeOpacity="0.12" />
            <circle className="radar-ring" cx="1260" cy="512" r="70" fill="none" stroke="#c4a66a" strokeWidth="2.5" />
            <circle
              className="radar-ring"
              cx="1260"
              cy="512"
              r="70"
              fill="none"
              stroke="#c4a66a"
              strokeWidth="2.5"
              style={{ animationDelay: "1.9s" }}
            />

            {/* Corridor: soft glow + self-drawing arc */}
            <path d={routeForward} fill="none" stroke="url(#corridorGrad)" strokeWidth="10" strokeOpacity="0.12" />
            <path
              className="corridor-arc"
              d={routeForward}
              pathLength={1}
              fill="none"
              stroke="url(#corridorGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Bi-directional traveling pulses */}
            <g className="route-motion-dot">
              <circle r="18" fill="#c4a66a" opacity="0.18" />
              <circle r="7" fill="#1e3a5f" />
              <animateMotion dur="5.4s" repeatCount="indefinite" path={routeForward} />
            </g>
            <g className="route-motion-dot">
              <circle r="15" fill="#d2bd86" opacity="0.16" />
              <circle r="6" fill="#c4a66a" />
              <animateMotion dur="6.6s" begin="1.6s" repeatCount="indefinite" path={routeReverse} />
            </g>

            {/* Endpoint nodes */}
            <g className="node-pulse node-pulse-delay">
              <circle cx="620" cy="476" r="22" fill="#ffffff" />
              <circle cx="620" cy="476" r="12" fill="#0e2138" />
              <circle cx="620" cy="476" r="5" fill="#ffffff" />
            </g>
            <g className="node-pulse">
              <circle cx="1260" cy="512" r="22" fill="#ffffff" />
              <circle cx="1260" cy="512" r="12" fill="#0e2138" />
              <circle cx="1260" cy="512" r="5" fill="#ffffff" />
            </g>

            {/* Labels */}
            <text x="620" y="430" textAnchor="middle" fontSize="26" fontWeight={600} letterSpacing="0.16em" fill="#2f3a4a">
              EUROPE
            </text>
            <text x="1260" y="466" textAnchor="middle" fontSize="26" fontWeight={600} letterSpacing="0.16em" fill="#2f3a4a">
              CHINA
            </text>
          </svg>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-5 py-3 text-[11px] font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Europe → China market entry
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1e3a5f]" />
            China → overseas expansion
          </span>
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-97px)] max-w-7xl items-center gap-7 px-5 py-10 sm:px-6 sm:py-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10 lg:px-8 lg:py-8">
        <div className="relative z-10 max-w-xl lg:py-10">
          <span
            className="hero-reveal inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium tracking-wide text-slate-600 shadow-sm"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="live-dot h-2 w-2 rounded-full bg-cyan-500" />
            Europe ⇄ China · Cross-border medtech
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.25rem]">
            <span className="hero-reveal block" style={{ animationDelay: "0.12s" }}>
              Medical Device
            </span>
            <span className="hero-reveal block" style={{ animationDelay: "0.2s" }}>
              Commercialization
            </span>
            <span className="hero-reveal mt-2 block text-gradient" style={{ animationDelay: "0.28s" }}>
              Europe ↔ China
            </span>
          </h1>

          <p
            className="hero-reveal mt-6 max-w-lg text-lg leading-8 text-slate-600"
            style={{ animationDelay: "0.4s" }}
          >
            Practical market entry, partner development, and commercialization support across
            Europe and China.
          </p>

          <div
            className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              href="/contact/project"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Submit a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Explore Services
            </Link>
          </div>

          <div
            className="hero-reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600"
            style={{ animationDelay: "0.6s" }}
          >
            {["Evidence-led", "Healthcare-specific", "Partner-ready"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <CommercializationMap />
      </div>
    </section>
  );
}
