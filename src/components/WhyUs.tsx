import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";

// ==============================================================
// BESPOKE ARCHITECTURAL GLYPHS (ENGINEERED VECTOR MARKS)
// Crafted specifically for ADWEH — zero stock clipart / AI tropes
// ==============================================================

function PrecisionReticleGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" strokeDasharray="3 3" strokeOpacity="0.4" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <line x1="12" y1="1.5" x2="12" y2="4.5" />
      <line x1="12" y1="19.5" x2="12" y2="22.5" />
      <line x1="1.5" y1="12" x2="4.5" y2="12" />
      <line x1="19.5" y1="12" x2="22.5" y2="12" />
    </svg>
  );
}

function DualEngineNexusGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="7.5" cy="12" r="4.5" />
      <circle cx="7.5" cy="12" r="1.2" fill="currentColor" />
      <circle cx="16.5" cy="12" r="4.5" />
      <circle cx="16.5" cy="12" r="1.2" fill="currentColor" />
      <line x1="12" y1="4" x2="12" y2="7.5" strokeDasharray="1.5 1.5" />
      <line x1="12" y1="16.5" x2="12" y2="20" strokeDasharray="1.5 1.5" />
      <path d="M11 9.5l2 5" strokeOpacity="0.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function ConversionArchitectureGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2.5" y="3.5" width="19" height="14" rx="2" />
      <line x1="2.5" y1="7.5" x2="21.5" y2="7.5" strokeOpacity="0.3" />
      <circle cx="5.5" cy="5.5" r="0.75" fill="currentColor" />
      <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
      <path d="M7 12.5h9.5" />
      <path d="M13.5 9.5l3 3-3 3" />
      <line x1="8" y1="20.5" x2="16" y2="20.5" />
      <line x1="12" y1="17.5" x2="12" y2="20.5" />
    </svg>
  );
}

function TelemetryLedgerGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="2.5" y1="20.5" x2="21.5" y2="20.5" />
      <line x1="6.5" y1="20.5" x2="6.5" y2="14" />
      <circle cx="6.5" cy="11.5" r="1.5" />
      <line x1="12" y1="20.5" x2="12" y2="9" />
      <circle cx="12" cy="6.5" r="1.5" />
      <line x1="17.5" y1="20.5" x2="17.5" y2="5" />
      <circle cx="17.5" cy="2.5" r="1.5" fill="currentColor" />
      <line x1="2.5" y1="11.5" x2="21.5" y2="11.5" strokeDasharray="1.5 2" strokeOpacity="0.3" />
    </svg>
  );
}

function CryptographicVaultGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2.5L4 6v6.5c0 5 3.5 9.5 8 10.8 4.5-1.3 8-5.8 8-10.8V6l-8-3.5z" />
      <rect x="9" y="11" width="6" height="5" rx="1.2" />
      <path d="M10.2 11V9a1.8 1.8 0 0 1 3.6 0v2" />
      <circle cx="12" cy="13.2" r="0.75" fill="currentColor" />
      <line x1="12" y1="13.8" x2="12" y2="14.8" />
    </svg>
  );
}

interface ReasonItem {
  n: string;
  tag: string;
  title: string;
  summary: string;
  serifQuote: string;
  desc: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  standard: string;
  highlight: string;
}

const reasons: ReasonItem[] = [
  {
    n: "01",
    tag: "COMMERCIAL INTENT",
    title: "Commercial Thinking First",
    summary: "Targeting high-intent buyers, not vanity numbers.",
    serifQuote: "Vanity impressions don't pay payroll. High-intent revenue searches do.",
    desc: "We start with the customers you want, the searches that matter, and the actions you want visitors to take—not a generic checklist of vanity impressions and meaningless rankings.",
    icon: PrecisionReticleGlyph,
    standard: "100% REVENUE-ALIGNED SEARCH QUERIES",
    highlight: "High-Intent Buyers",
  },
  {
    n: "02",
    tag: "DUAL-ENGINE VISIBILITY",
    title: "Search & AI Visibility Together",
    summary: "One connected presence across Google and AI assistants.",
    serifQuote: "Google Search and ChatGPT must tell the exact same story about your brand.",
    desc: "Traditional search and AI-powered discovery increasingly influence the same buying journey. Our approach connects them instead of treating them as competing channels.",
    icon: DualEngineNexusGlyph,
    standard: "GOOGLE + CHATGPT + CLAUDE UNIFIED",
    highlight: "Dual-Engine Cohesion",
  },
  {
    n: "03",
    tag: "CONVERSION ARCHITECTURE",
    title: "Websites Built for the Next Step",
    summary: "Converting visitors into qualified customer enquiries.",
    serifQuote: "A website should be your hardest-working, fastest commercial closer.",
    desc: "A website should do more than look professional. It should explain your offer with precision, establish undeniable credibility, and make it effortless for prospects to take the next step.",
    icon: ConversionArchitectureGlyph,
    standard: "SUB-SECOND SPEED & FRICTIONLESS UX",
    highlight: "Sub-Second Conversion",
  },
  {
    n: "04",
    tag: "RADICAL TRANSPARENCY",
    title: "Transparent Priorities",
    summary: "Clear roadmaps and realistic expectations.",
    serifQuote: "Zero smoke, zero buzzwords. Clear roadmaps and verifiable live proof.",
    desc: "You should know exactly what is being improved, why it matters, and how progress will be reviewed. We focus on measurable signals and realistic expectations—no smoke and mirrors.",
    icon: TelemetryLedgerGlyph,
    standard: "VERIFIABLE SCREENSHOTS & AUDIT LOGS",
    highlight: "Verifiable Outcomes",
  },
  {
    n: "05",
    tag: "DEFENSIVE ENGINEERING",
    title: "Security-Conscious Development",
    summary: "Rigorous standards and vulnerability awareness.",
    serifQuote: "Engineered with rigorous defenses, zero data leaks, and enterprise discipline.",
    desc: "We use security-focused development and testing practices appropriate to the agreed scope. No website is risk-free, and compliance claims are never exaggerated without rigorous evidence.",
    icon: CryptographicVaultGlyph,
    standard: "STRICT HTTPS, HEADERS & FORM SAFEGUARDS",
    highlight: "Hardened Security",
  },
];

export default function WhyUs() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (n: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [n]: !prev[n],
    }));
  };

  return (
    <section
      id="why"
      className="relative py-12 sm:py-24 overflow-hidden"
      style={{ background: "#ebe5da" }}
    >
      {/* Architectural subtle blueprint lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="007" label="Why Work With Us" />

        {/* Section Header */}
        <div className="mt-6 sm:mt-14 grid lg:grid-cols-12 gap-6 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2.5 sm:mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1e2bc8] animate-pulse" />
              <span>[ THE ADWEH ADVANTAGE & ENGINEERING STANDARD ]</span>
            </div>
            <h2 className="font-display text-[32px] xs:text-[42px] sm:text-[62px] lg:text-[76px] leading-[0.98] sm:leading-[0.94] tracking-[-0.035em] text-ink font-bold">
              You don't need marketing jargon.{" "}
              <br className="hidden sm:inline" />
              You need a{" "}
              <span className="font-serif-i italic text-[#1e2bc8] font-normal">
                clearer path
              </span>{" "}
              to growth.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[14px] sm:text-[16px] leading-relaxed text-ink/75 font-sans">
              We replace agency buzzwords with clear commercial priorities, solid engineering, and measurable visibility across search and AI systems.
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* EXECUTIVE ADVANTAGE CARDS MATRIX                               */}
        {/* ============================================================== */}
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            const isHiddenOnMobile = !showAllMobile && idx >= 2;
            const isExpanded = !!expandedCards[r.n];

            return (
              <div
                key={r.n}
                className={`relative rounded-[28px] sm:rounded-[32px] bg-white border border-ink/[0.08] p-6 sm:p-7 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_50px_-10px_rgba(30,43,200,0.14)] hover:border-[#1e2bc8]/40 hover:-translate-y-1.5 transition-all duration-400 group overflow-hidden flex flex-col justify-between ${
                  isHiddenOnMobile ? "hidden sm:flex" : "flex"
                }`}
              >
                {/* Top Subtle Ambient Laser Highlight on Hover */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#1e2bc8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Oversized Typographic Watermark */}
                <span className="absolute top-3 right-6 font-display font-black text-[68px] sm:text-[76px] leading-none text-ink/[0.03] group-hover:text-[#1e2bc8]/[0.08] transition-colors pointer-events-none select-none">
                  {r.n}
                </span>

                <div>
                  {/* Card Header Spec Strip */}
                  <div className="flex items-center justify-between pb-4 border-b border-ink/5">
                    <div className="flex items-center gap-3">
                      {/* High-End Architectural Instrument Plate */}
                      <div className="relative h-10 w-10 rounded-xl border border-ink/15 bg-[#fbf9f5] flex items-center justify-center text-ink group-hover:text-[#1e2bc8] group-hover:border-[#1e2bc8] group-hover:bg-white group-hover:shadow-[0_6px_20px_-4px_rgba(30,43,200,0.22)] transition-all duration-300">
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
                      </div>

                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink/50 font-semibold">
                          [ PRINCIPLE {r.n} ]
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#1e2bc8] font-bold">
                          {r.tag}
                        </div>
                      </div>
                    </div>

                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-ink/50 bg-paper px-2 py-0.5 rounded border border-ink/5">
                      {r.highlight}
                    </span>
                  </div>

                  {/* Title & Serif Promise */}
                  <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-ink mt-5 tracking-tight group-hover:text-[#1e2bc8] transition-colors leading-snug">
                    {r.title}
                  </h3>

                  <div className="font-serif-i italic text-[14px] sm:text-[15px] text-ink/80 mt-1.5 leading-snug">
                    “{r.serifQuote}”
                  </div>

                  {/* Body Paragraph - Compact on mobile with toggle */}
                  <p
                    className={`mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-ink/70 font-sans ${
                      isExpanded ? "block" : "line-clamp-2 sm:line-clamp-none"
                    }`}
                  >
                    {r.desc}
                  </p>

                  <button
                    type="button"
                    onClick={() => toggleCard(r.n)}
                    className="sm:hidden mt-2 inline-flex items-center gap-1 text-[11px] font-mono text-[#1e2bc8] font-bold"
                  >
                    <span>{isExpanded ? "Less details ↑" : "More details & standards ↓"}</span>
                  </button>
                </div>

                {/* Bottom Architectural Standard Rule */}
                <div className={`mt-6 pt-4 border-t border-ink/5 ${isExpanded ? "block" : "hidden sm:block"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-ink/40 font-semibold">
                      Adweh Engineering Standard:
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1e2bc8]/30 group-hover:bg-[#1e2bc8] transition-colors" />
                  </div>
                  <div className="mt-1.5 text-[11px] font-mono font-medium text-ink/80 bg-paper/70 border border-ink/5 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[#1e2bc8]" />
                    <span className="truncate">{r.standard}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ============================================================== */}
          {/* 6TH CARD: DIGITAL VISIBILITY ASSESSMENT TERMINAL               */}
          {/* Hidden on mobile until expanded for compact mobile feed        */}
          {/* ============================================================== */}
          <div className={`relative rounded-[28px] sm:rounded-[32px] bg-[#0c0d12] text-white p-6 sm:p-7 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col justify-between group ${
            !showAllMobile ? "hidden sm:flex" : "flex"
          }`}>
            {/* Ambient Radial Cobalt Light Bloom */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-40 blur-3xl group-hover:opacity-70 transition-opacity duration-700"
              style={{
                background: "radial-gradient(circle, #1e2bc8 0%, rgba(30,43,200,0) 70%)",
              }}
            />

            {/* Subtle architectural grid lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              {/* Header Spec Strip */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c85ff] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5c85ff]" />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c85ff] font-bold">
                    [ SYSTEM AUDIT: ONLINE ]
                  </span>
                </div>
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                  Direct Action
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-[22px] sm:text-[25px] font-bold text-white mt-5 tracking-tight leading-snug">
                Ready to review your digital visibility?
              </h3>

              <div className="font-serif-i italic text-[15px] text-white/80 mt-2 leading-snug">
                “Find out exactly what Google, ChatGPT, and Gemini say about you.”
              </div>

              <p className="mt-3.5 text-[13px] sm:text-[13.5px] text-white/70 leading-relaxed font-sans">
                We analyze your business in Google Search, Maps 3-Pack, and conversational AI answers—showing what customers find and what's holding you back.
              </p>

              {/* Assessment Checklist */}
              <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-[11.5px] font-mono text-white/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#5c85ff] shrink-0" />
                  <span>Manual Google & AI Assistant Query Audit</span>
                </div>
                <div className="flex items-center gap-2 text-[11.5px] font-mono text-white/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#5c85ff] shrink-0" />
                  <span>Competitor Gap & Commercial Intent Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-[11.5px] font-mono text-white/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#5c85ff] shrink-0" />
                  <span>Zero Spam · Delivered to Inbox within 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Direct CTA Action Button */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="group/cta relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink hover:bg-[#1e2bc8] hover:text-white px-6 py-3 text-[12.5px] sm:text-[13px] font-bold transition-all duration-300 w-full shadow-lg active:scale-95 cursor-pointer overflow-hidden"
              >
                <span>Request Your Free Assessment</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile View Toggle: Load More / Show Less */}
        <div className="mt-8 sm:hidden text-center">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink/20 bg-white font-mono text-xs font-bold text-ink shadow-sm active:scale-95 transition-all"
          >
            <span>
              {showAllMobile
                ? "Show Less Principles ↑"
                : "Load More Principles (3 more) ↓"}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-[#1e2bc8] transition-transform duration-200 ${
                showAllMobile ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
