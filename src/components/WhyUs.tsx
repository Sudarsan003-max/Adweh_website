import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";

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

interface WhyPoint {
  bold: string;
  text: string;
}

interface ReasonItem {
  n: string;
  tag: string;
  title: string;
  serifQuote: string;
  points: WhyPoint[];
  icon: (props: { className?: string }) => React.JSX.Element;
  standard: string;
  highlight: string;
}

const reasons: ReasonItem[] = [
  {
    n: "01",
    tag: "COMMERCIAL INTENT",
    title: "Commercial Thinking First",
    serifQuote: "Vanity impressions don't pay payroll. High-intent revenue searches do.",
    points: [
      { bold: "High-Intent Priority", text: "Target customers actively searching to enquire and buy" },
      { bold: "Revenue Alignment", text: "Filter out empty clicks that waste marketing budget" },
      { bold: "Commercial Traction", text: "Campaign architecture centered on real customer acquisition" },
    ],
    icon: PrecisionReticleGlyph,
    standard: "100% REVENUE-ALIGNED SEARCH QUERIES",
    highlight: "High-Intent Buyers",
  },
  {
    n: "02",
    tag: "DUAL-ENGINE VISIBILITY",
    title: "Search & AI Visibility Together",
    serifQuote: "Google Search and ChatGPT must tell the exact same story about your brand.",
    points: [
      { bold: "Dual-Engine Indexing", text: "Synchronize traditional Google SEO with AI answer engines" },
      { bold: "Unified Knowledge Graph", text: "Consistent brand authority across ChatGPT, Claude & Gemini" },
      { bold: "Maximum Market Surface", text: "Win the customer shortlist wherever their search begins" },
    ],
    icon: DualEngineNexusGlyph,
    standard: "GOOGLE + CHATGPT + CLAUDE UNIFIED",
    highlight: "Dual-Engine Cohesion",
  },
  {
    n: "03",
    tag: "CONVERSION ARCHITECTURE",
    title: "Websites Built for the Next Step",
    serifQuote: "A website should be your hardest-working, fastest commercial closer.",
    points: [
      { bold: "Sub-Second Speed", text: "Instant Core Web Vitals architecture with zero lag" },
      { bold: "Frictionless Conversion", text: "Effortless enquiry pathways that convert inbound traffic" },
      { bold: "High-Authority Design", text: "Precise positioning that establishes undeniable credibility" },
    ],
    icon: ConversionArchitectureGlyph,
    standard: "SUB-SECOND SPEED & FRICTIONLESS UX",
    highlight: "Sub-Second Conversion",
  },
  {
    n: "04",
    tag: "RADICAL TRANSPARENCY",
    title: "Transparent Priorities",
    serifQuote: "Zero smoke, zero buzzwords. Clear roadmaps and verifiable live proof.",
    points: [
      { bold: "Auditable Proof", text: "Weekly progress documented with verified live ranking data" },
      { bold: "Clear Priority Roadmaps", text: "Know exactly what is being optimized and why it matters" },
      { bold: "Realistic Signals", text: "Honest commercial timelines without exaggerated promises" },
    ],
    icon: TelemetryLedgerGlyph,
    standard: "VERIFIABLE SCREENSHOTS & AUDIT LOGS",
    highlight: "Verifiable Outcomes",
  },
  {
    n: "05",
    tag: "DEFENSIVE ENGINEERING",
    title: "Security-Conscious Development",
    serifQuote: "Engineered with rigorous defenses, zero data leaks, and enterprise discipline.",
    points: [
      { bold: "Hardened Architecture", text: "Strict HTTPS, modern security headers & form sanitization" },
      { bold: "Data Privacy Protection", text: "Engineered to prevent leaks and safeguard patient/client leads" },
      { bold: "Disciplined Testing", text: "Rigorous standards without superficial compliance buzzwords" },
    ],
    icon: CryptographicVaultGlyph,
    standard: "STRICT HTTPS, HEADERS & FORM SAFEGUARDS",
    highlight: "Hardened Security",
  },
];

export default function WhyUs() {
  const [showAllMobile, setShowAllMobile] = useState(false);

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
        {/* ============================================================== */}
        {/* PREMIUM ARCHITECTURAL REASONS / PRINCIPLES CARDS GRID           */}
        {/* ============================================================== */}
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            const isHiddenOnMobile = !showAllMobile && idx >= 2;

            return (
              <div
                key={r.n}
                className={`relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#0e121d] via-[#090b13] to-[#05060a] text-white border border-white/[0.09] hover:border-[#1b3bf5]/60 p-6 sm:p-7 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:shadow-[0_25px_60px_-10px_rgba(27,59,245,0.28)] hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden flex flex-col justify-between ${
                  isHiddenOnMobile ? "hidden sm:flex" : "flex"
                }`}
              >
                {/* Top Subtle Ambient Laser Highlight on Hover */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#5c85ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle Radial Blue Core Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1b3bf5]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#1b3bf5]/20 transition-all duration-700" />

                {/* Massive Typographic Ghost Watermark Index */}
                <span className="absolute top-2 right-4 font-display font-black text-[70px] sm:text-[84px] text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none tracking-tighter leading-none">
                  {r.n}
                </span>

                <div className="relative z-10">
                  {/* Card Header Spec Strip */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      {/* High-End Architectural Instrument Plate */}
                      <div className="relative h-11 w-11 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center text-[#5c85ff] group-hover:text-white group-hover:border-[#5c85ff] group-hover:bg-[#1b3bf5] group-hover:shadow-[0_0_20px_rgba(27,59,245,0.5)] transition-all duration-400">
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <div>
                        <div className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-white/40 font-semibold">
                          [ PRINCIPLE {r.n} ]
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#5c85ff] font-bold">
                          {r.tag}
                        </div>
                      </div>
                    </div>

                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#5c85ff] font-bold bg-[#1b3bf5]/15 px-3 py-1 rounded-full border border-[#1b3bf5]/30 shadow-[0_0_12px_rgba(27,59,245,0.2)]">
                      {r.highlight}
                    </span>
                  </div>

                  {/* Title & Serif Promise */}
                  <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-white mt-5 tracking-tight group-hover:text-[#5c85ff] transition-colors leading-snug">
                    {r.title}
                  </h3>

                  <div className="mt-2.5 p-3 rounded-xl bg-white/[0.03] border-l-2 border-[#1b3bf5] font-serif-i italic text-[13.5px] sm:text-[14px] text-bone/80 leading-snug">
                    “{r.serifQuote}”
                  </div>

                  {/* Clear Short Premium Points */}
                  <div className="mt-4 space-y-2.5">
                    {r.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 text-[12px] sm:text-[13px] leading-snug font-sans text-bone/80"
                      >
                        <span className="text-[#5c85ff] text-[10px] mt-0.5 shrink-0">✦</span>
                        <div>
                          <strong className="text-white font-semibold">{pt.bold}</strong>
                          <span className="text-bone/60"> — {pt.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Architectural Standard Rule */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-[9.5px] font-mono uppercase tracking-wider text-white/40 font-semibold mb-1.5">
                    <span>ADWEH ENGINEERING STANDARD</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1b3bf5] animate-pulse" />
                  </div>
                  <div className="text-[11px] font-mono font-medium text-white/90 bg-white/[0.04] border border-white/10 px-3 py-2 rounded-xl flex items-center gap-2 shadow-inner">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5c85ff]" />
                    <span className="truncate">{r.standard}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ============================================================== */}
          {/* 6TH CARD: ROYAL SAPPHIRE OBSIDIAN ASSESSMENT TERMINAL           */}
          {/* ============================================================== */}
          <div
            className={`relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#121c45] via-[#080d24] to-[#040612] text-white p-6 sm:p-7 shadow-[0_20px_50px_-10px_rgba(27,59,245,0.4),0_0_0_1px_rgba(59,98,255,0.3)] border border-[#1b3bf5]/50 overflow-hidden flex flex-col justify-between group ${
              !showAllMobile ? "hidden sm:flex" : "flex"
            }`}
          >
            {/* Ambient Radial Cobalt Light Bloom */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none opacity-50 blur-3xl group-hover:opacity-80 transition-opacity duration-700"
              style={{
                background: "radial-gradient(circle, #1b3bf5 0%, rgba(27,59,245,0) 70%)",
              }}
            />

            {/* Subtle architectural grid lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
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
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#5c85ff] bg-[#1b3bf5]/20 px-2.5 py-0.5 rounded-full border border-[#1b3bf5]/40 shadow-xs">
                  Direct Action
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-white mt-5 tracking-tight leading-snug">
                Ready to review your digital visibility?
              </h3>

              <div className="mt-2.5 p-3 rounded-xl bg-white/[0.04] border-l-2 border-[#5c85ff] font-serif-i italic text-[13.5px] sm:text-[14px] text-white/80 leading-snug">
                “Find out exactly what Google, ChatGPT, and Gemini say about you.”
              </div>

              {/* Clear Short Premium Points */}
              <div className="mt-4 space-y-2.5">
                <div className="flex items-start gap-2.5 text-[12px] sm:text-[13px] leading-snug font-sans text-white/90">
                  <span className="text-[#5c85ff] text-[10px] mt-0.5 shrink-0">✦</span>
                  <div>
                    <strong className="text-white font-semibold">Multi-Engine Audit</strong>
                    <span className="text-white/70"> — Live queries across Google Search, Maps & AI</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-[12px] sm:text-[13px] leading-snug font-sans text-white/90">
                  <span className="text-[#5c85ff] text-[10px] mt-0.5 shrink-0">✦</span>
                  <div>
                    <strong className="text-white font-semibold">Competitor Gaps</strong>
                    <span className="text-white/70"> — Identifies where competitors capture your buyers</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-[12px] sm:text-[13px] leading-snug font-sans text-white/90">
                  <span className="text-[#5c85ff] text-[10px] mt-0.5 shrink-0">✦</span>
                  <div>
                    <strong className="text-white font-semibold">24-Hour Delivery</strong>
                    <span className="text-white/70"> — Detailed diagnostic report sent to your inbox</span>
                  </div>
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
                className="group/cta relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0a0a0a] hover:bg-[#1e2bc8] hover:text-white px-6 py-3.5 text-[13px] font-bold transition-all duration-300 w-full shadow-[0_10px_25px_rgba(0,0,0,0.4)] active:scale-95 cursor-pointer overflow-hidden"
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink/15 bg-[#0a0a0a] font-mono text-xs font-bold text-white shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <span>
              {showAllMobile
                ? "Show Less Principles ↑"
                : "Load More Principles (3 more) ↓"}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-[#5c85ff] transition-transform duration-200 ${
                showAllMobile ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
