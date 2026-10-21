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
    <section id="problems" className="relative py-20 sm:py-28 bg-ink overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Subtle dot bg */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />
      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="004" label="The diagnosis" light />

        <div className="mt-8 sm:mt-12 grid lg:grid-cols-12 gap-8 sm:gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[36px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em]">
              The growth <span className="font-serif-i">symptoms</span>
              <br />
              we treat <span className="text-[#ff5d3b]">every day.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-[15px] leading-relaxed text-bone/65" style={{ color: "rgba(245,241,234,.65)" }}>
              Most healthcare organizations struggle with the same three critical barriers.
              We've identified them, systematized the solution, and solved them for 130+ healthcare brands.
            </p>
          </div>
        </div>

        {/* Problems list */}
        <div className="mt-12 sm:mt-16 border-t border-white/10">
          {problems.map((p) => (
            <ProblemRow key={p.n} p={p} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 sm:mt-12 rounded-2xl sm:rounded-3xl bg-white text-ink p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <span className="grid place-items-center h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-ink text-[#0000cd] text-lg sm:text-xl shrink-0" style={{ background: "#0a0a0a" }}>✓</span>
            <div>
              <div className="font-display text-xl sm:text-3xl tracking-[-0.03em]">Solved for 130+ healthcare brands.</div>
              <div className="text-[12px] sm:text-[13px] opacity-70 mt-1">From single‑doctor practices to multi‑location specialty groups.</div>
            </div>
          </div>
          <a
            href="/#services"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/#services");
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone pl-5 pr-2 py-2 text-[13px] font-medium cursor-pointer active:scale-[0.98] transition-transform w-full sm:w-auto justify-between sm:justify-start"
            style={{ background: "#0a0a0a", color: "#f5f1ea" }}
          >
            <span>See the prescription</span>
            <span className="grid place-items-center h-9 w-9 rounded-full bg-[#0000cd] text-ink transition-transform group-hover:rotate-45 shrink-0">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
  return (
    <div className="group relative border-b border-white/10 py-8 md:py-10 grid grid-cols-12 gap-6 hover:bg-white/[0.02] transition cursor-pointer" data-cursor="hover">
      {/* number */}
      <div className="col-span-2 md:col-span-1">
        <div className="font-mono text-[11px] tracking-[0.22em] opacity-50">[ {p.n} ]</div>
      </div>
      {/* title */}
      <div className="col-span-10 md:col-span-5">
        <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em] leading-tight transition group-hover:text-[#0000cd]">
          {p.title}
        </h3>
      </div>
      {/* items */}
      <div className="col-span-12 md:col-span-5">
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
          {p.items.map((it) => (
            <li key={it} className="flex items-start gap-2.5 text-[13px] text-bone/65" style={{ color: "rgba(245,241,234,.65)" }}>
              <span className="mt-1.5 h-1 w-1 rounded-full bg-[#ff5d3b] flex-none" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-12 md:col-span-1 flex justify-end items-start">
        <span className="grid place-items-center h-10 w-10 rounded-full border border-white/15 text-[#0000cd] transition group-hover:bg-[#0000cd] group-hover:text-ink group-hover:rotate-45">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </div>
  );
}
