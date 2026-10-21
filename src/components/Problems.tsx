import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

const problems = [
  {
    n: "01",
    title: "Invisibility across AI, Generative Engines & Search",
    items: [
      "Zero citation authority across ChatGPT, Claude, and Perplexity (AIEO)",
      "Omission from Google AI Overviews and Gemini generative summaries (GEO)",
      "Poor local SEO and low visibility in local Google Maps search",
      "Lack of structured clinical schemas and knowledge graph authority",
      "Low visibility for high-intent, prompt-driven patient inquiries",
    ],
  },
  {
    n: "02",
    title: "Insecure or Outdated Website Infrastructure",
    items: [
      "Websites built without cybersecurity-focused development practices",
      "Untested platforms with security vulnerabilities & unhardened endpoints",
      "Websites not optimized for search engines, AIEO, or generative discovery",
      "Poor Core Web Vitals, slow load speeds, and broken mobile conversion",
      "Unsecured forms risking patient records and HIPAA non-compliance",
    ],
  },
  {
    n: "03",
    title: "Fragmented Discovery & Zero AI-Era Readiness",
    items: [
      "No strategic roadmap for the shift from blue links to AI answers",
      "Disjointed vendors with no unified search or generative tracking",
      "Inconsistent clinical citations across medical directories",
      "Vulnerable digital assets hindering clinic reputation and trust",
      "Falling behind competitors who optimize for AI and generative engines",
    ],
  },
];

export default function Problems() {
  return (
    <section id="problems" className="relative py-10 sm:py-24 bg-ink overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Subtle dot bg */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />
      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="004" label="The diagnosis" light />

        <div className="mt-6 sm:mt-12 grid lg:grid-cols-12 gap-6 sm:gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[30px] xs:text-[36px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em]">
              The growth <span className="font-serif-i">symptoms</span>
              <br />
              we treat <span className="text-[#ff5d3b]">every day.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-bone/65" style={{ color: "rgba(245,241,234,.65)" }}>
              Most healthcare organizations struggle with the same three critical barriers.
              We've identified them, systematized the solution, and solved them for 130+ healthcare brands.
            </p>
          </div>
        </div>

        {/* Problems list */}
        <div className="mt-6 sm:mt-16 border-t border-white/10">
          {problems.map((p) => (
            <ProblemRow key={p.n} p={p} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-6 sm:mt-12 rounded-2xl sm:rounded-3xl bg-white text-ink p-4 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <span className="grid place-items-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-ink text-[#0000cd] text-base sm:text-xl shrink-0" style={{ background: "#0a0a0a" }}>✓</span>
            <div>
              <div className="font-display text-lg sm:text-3xl tracking-[-0.03em]">Solved for 130+ healthcare brands.</div>
              <div className="text-[11.5px] sm:text-[13px] opacity-70 mt-0.5 sm:mt-1">From single‑doctor practices to multi‑location specialty groups.</div>
            </div>
          </div>
          <a
            href="/#services"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/#services");
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 text-[12.5px] sm:text-[13px] font-medium cursor-pointer active:scale-[0.98] transition-transform w-full sm:w-auto justify-between sm:justify-start"
            style={{ background: "#0a0a0a", color: "#f5f1ea" }}
          >
            <span>See the prescription</span>
            <span className="grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#0000cd] text-ink transition-transform group-hover:rotate-45 shrink-0">
              <svg viewBox="0 0 24 24" className="h-3 sm:h-3.5 w-3 sm:w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProblemRow({ p }: { p: { n: string; title: string; items: string[] } }) {
  const [openMobile, setOpenMobile] = useState(p.n === "01");

  return (
    <div
      onClick={() => setOpenMobile(!openMobile)}
      className="group relative border-b border-white/10 py-5 sm:py-8 md:py-10 grid grid-cols-12 gap-2 sm:gap-6 hover:bg-white/[0.02] transition cursor-pointer"
      data-cursor="hover"
    >
      {/* number */}
      <div className="col-span-2 md:col-span-1">
        <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] opacity-50">[ {p.n} ]</div>
      </div>
      {/* title */}
      <div className="col-span-8 md:col-span-5">
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl tracking-[-0.02em] leading-tight transition group-hover:text-[#0000cd]">
          {p.title}
        </h3>
        {/* Mobile tap preview hint */}
        <div className="md:hidden mt-1.5 text-[10px] font-mono text-bone/40">
          {openMobile ? "Tap to close symptoms ▲" : `[ +${p.items.length} symptoms · Tap to view ▼ ]`}
        </div>
      </div>
      {/* arrow (top right on mobile, end on desktop) */}
      <div className="col-span-2 md:col-span-1 md:order-last flex justify-end items-start">
        <span className={`grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/15 text-[#0000cd] transition duration-300 group-hover:bg-[#0000cd] group-hover:text-ink ${
          openMobile ? "rotate-90 md:rotate-0 md:group-hover:rotate-45" : "group-hover:rotate-45"
        }`}>
          <svg viewBox="0 0 24 24" className="h-3 sm:h-3.5 w-3 sm:w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
      {/* items: toggleable on mobile (< md), always visible on desktop (md:) */}
      <div className={`col-span-12 md:col-span-5 mt-2 md:mt-0 ${openMobile ? "block" : "hidden md:block"}`}>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 sm:gap-y-1.5 pl-6 sm:pl-0 pt-2 sm:pt-0 border-t border-white/5 sm:border-0">
          {p.items.map((it) => (
            <li key={it} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-bone/65" style={{ color: "rgba(245,241,234,.65)" }}>
              <span className="mt-1.5 h-1 w-1 rounded-full bg-[#ff5d3b] flex-none" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
