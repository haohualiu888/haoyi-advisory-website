import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const routeForward = "M 620 476 C 812 344, 1098 350, 1260 512";
const routeReverse = "M 1260 512 C 1098 350, 812 344, 620 476";

function CommercializationMap() {
  return (
    <div className="hero-map relative aspect-[16/10] min-h-[220px] w-full overflow-hidden sm:min-h-[340px] md:min-h-[400px] lg:min-h-[340px] xl:min-h-[520px]">
      <Image
        src="/images/haoyi-europe-china-map.png"
        alt="Minimal map showing Europe and China as two connected commercialization markets"
        fill
        priority
        sizes="(min-width: 1024px) 58vw, (min-width: 640px) 90vw, 100vw"
        className="mix-blend-multiply object-cover object-right"
      />

      <svg
        viewBox="0 0 1536 1024"
        preserveAspectRatio="xMaxYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="route-arrow"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="#0789b8" />
          </marker>
        </defs>

        <path
          d={routeForward}
          fill="none"
          stroke="#0789b8"
          strokeWidth="4"
          strokeLinecap="round"
          markerStart="url(#route-arrow)"
          markerEnd="url(#route-arrow)"
        />

        <g className="route-endpoint">
          <circle cx="620" cy="476" r="20" fill="#ffffff" />
          <circle cx="620" cy="476" r="11" fill="#0f6092" />
        </g>
        <g className="route-endpoint route-endpoint-delay">
          <circle cx="1260" cy="512" r="20" fill="#ffffff" />
          <circle cx="1260" cy="512" r="11" fill="#0789b8" />
        </g>

        <circle className="route-motion-dot" r="7" fill="#06a9d6">
          <animateMotion dur="10s" repeatCount="indefinite" path={routeForward} />
        </circle>
        <circle className="route-motion-dot route-motion-dot-secondary" r="6" fill="#07172f">
          <animateMotion dur="10s" repeatCount="indefinite" path={routeReverse} />
        </circle>
      </svg>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-97px)] max-w-7xl items-center gap-7 px-5 py-10 sm:px-6 sm:py-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-0 lg:px-8 lg:py-8">
        <div className="hero-copy relative z-10 max-w-xl lg:py-10">
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-slate-950 sm:text-6xl lg:text-[4.25rem]">
            <span className="block">Medical Device</span>
            <span className="block">Commercialization.</span>
            <span className="mt-2 block">
              Europe <span className="text-cyan-700">↔</span> China.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Practical market entry, partner development, and commercialization support across
            Europe and China.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact/project"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Submit a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <CommercializationMap />
      </div>
    </section>
  );
}
