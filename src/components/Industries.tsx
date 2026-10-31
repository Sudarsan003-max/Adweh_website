import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";

// ==============================================================
// BESPOKE ARCHITECTURAL SECTOR GLYPHS
// Precision geometric vector marks tailored to each industry
// ==============================================================

function ClinicalPrecisionGlyph({ className = "h-5 w-5" }: { className?: string }) {
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
      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <line x1="12" y1="1" x2="12" y2="2.5" />
      <line x1="12" y1="21.5" x2="12" y2="23" />
      <line x1="1" y1="12" x2="2.5" y2="12" />
      <line x1="21.5" y1="12" x2="23" y2="12" />
    </svg>
  );
}

function ArchitecturalElevationGlyph({ className = "h-5 w-5" }: { className?: string }) {
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
      <rect x="3" y="4" width="10" height="17" rx="1.5" />
      <rect x="13" y="9" width="8" height="12" rx="1.5" />
      <line x1="6.5" y1="8" x2="9.5" y2="8" />
      <line x1="6.5" y1="12" x2="9.5" y2="12" />
      <line x1="6.5" y1="16" x2="9.5" y2="16" />
      <line x1="16" y1="13" x2="18" y2="13" />
      <line x1="16" y1="17" x2="18" y2="17" />
      <line x1="1" y1="21" x2="23" y2="21" />
    </svg>
  );
}

function HospitalityCanopyGlyph({ className = "h-5 w-5" }: { className?: string }) {
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
      <path d="M3 10L12 4l9 6" />
      <path d="M5 10v10h14V10" />
      <line x1="12" y1="10" x2="12" y2="20" strokeDasharray="1.5 2" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function IndustrialFabricationGlyph({ className = "h-5 w-5" }: { className?: string }) {
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
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <line x1="7" y1="7" x2="7" y2="3" />
      <line x1="17" y1="7" x2="17" y2="3" />
      <circle cx="12" cy="13" r="3" />
      <circle cx="12" cy="13" r="1" fill="currentColor" />
      <line x1="9" y1="13" x2="15" y2="13" strokeDasharray="1 1" />
      <line x1="1" y1="19" x2="3" y2="19" />
      <line x1="21" y1="19" x2="23" y2="19" />
    </svg>
  );
}

function OmnichannelCommerceGlyph({ className = "h-5 w-5" }: { className?: string }) {
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
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
      <path d="M3 4h3l2.5 10.5h10l2-7H7" />
      <line x1="13" y1="4" x2="18" y2="4" strokeDasharray="1 1" />
      <circle cx="15.5" cy="4" r="1" fill="currentColor" />
    </svg>
  );
}

interface IndustryPoint {
  bold: string;
  text: string;
}

interface IndustryItem {
  tag: string;
  category: string;
  name: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  serifQuote: string;
  points: IndustryPoint[];
  outcome: string;
  linkText: string;
}

const industries: IndustryItem[] = [
  {
    tag: "01",
    category: "CLINICS & HEALTHCARE",
    name: "Healthcare & Clinics",
    icon: ClinicalPrecisionGlyph,
    serifQuote: "Where patient trust & local presence decide choice.",
    points: [
      { bold: "Local 3-Pack Dominance", text: "#1 Google Maps rank for high-intent treatments" },
      { bold: "AI Assistant Shortlisting", text: "First clinic recommended on ChatGPT & Gemini" },
      { bold: "Verified Growth", text: "+50 monthly qualified patient bookings" },
    ],
    outcome: "+50 Patient Enquiries",
    linkText: "Explore Healthcare Strategy",
  },
  {
    tag: "02",
    category: "PROPERTY & DEVELOPERS",
    name: "Real Estate & Property",
    icon: ArchitecturalElevationGlyph,
    serifQuote: "High-ticket property searches where first impression is final.",
    points: [
      { bold: "Project Launch Authority", text: "Dominates location & luxury development queries" },
      { bold: "High-Net-Worth Intent", text: "Captures buyers before aggregator portals appear" },
      { bold: "Direct Buyer Acquisition", text: "Qualified high-ticket inquiries without broker dilution" },
    ],
    outcome: "High-Ticket Inquiries",
    linkText: "Explore Property Strategy",
  },
  {
    tag: "03",
    category: "LUXURY STAYS & RESORTS",
    name: "Hotels & Hospitality",
    icon: HospitalityCanopyGlyph,
    serifQuote: "Win direct booking journeys and cut OTA commission fees.",
    points: [
      { bold: "Direct Booking Engine UX", text: "Converts experiential searchers directly on your site" },
      { bold: "Local Area Ecosystem", text: "Ranked for regional experiences & destination stays" },
      { bold: "Margin Protection", text: "+40% direct booking share reducing OTA fees" },
    ],
    outcome: "+40% Direct Bookings",
    linkText: "Explore Hospitality Strategy",
  },
  {
    tag: "04",
    category: "INDUSTRIAL & SUPPLY CHAIN",
    name: "Manufacturing & B2B",
    icon: IndustrialFabricationGlyph,
    serifQuote: "Procurement discoverability for high-specification RFQs.",
    points: [
      { bold: "Technical Spec Indexing", text: "Makes engineering capabilities and standards easy to find" },
      { bold: "Procurement Intent", text: "Shortlisted by corporate decision-makers" },
      { bold: "Enterprise Contracts", text: "High-value RFQ pipeline for B2B tenders" },
    ],
    outcome: "Enterprise RFQ Pipeline",
    linkText: "Explore Manufacturing Strategy",
  },
  {
    tag: "05",
    category: "D2C & COMMERCE BRANDS",
    name: "Commerce & Growing Brands",
    icon: OmnichannelCommerceGlyph,
    serifQuote: "Category dominance, zero friction, and high conversion velocity.",
    points: [
      { bold: "Category Authority", text: "Ranked for high-intent commercial searchers" },
      { bold: "Sub-Second Speed", text: "Instant-load store architecture that prevents cart drop-off" },
      { bold: "Repeat Conversion", text: "Higher average order value and direct customer acquisition" },
    ],
    outcome: "Sub-Second Conversion",
    linkText: "Explore Commerce Strategy",
  },
];

export default function Industries() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section
      id="industries"
      className="relative py-12 sm:py-24 overflow-hidden"
      style={{ background: "#f2ece2" }}
    >
      {/* Subtle architectural ambient background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="006" label="Who We Help" />

        {/* Header Block */}
        <div className="mt-6 sm:mt-14 max-w-4xl">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2.5 sm:mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1e2bc8] animate-pulse" />
            <span>[ SECTOR SPECIALIZATION & MARKET LEADERSHIP ]</span>
          </div>
          <h2 className="font-display text-[32px] xs:text-[42px] sm:text-[62px] lg:text-[76px] leading-[0.98] sm:leading-[0.94] tracking-[-0.035em] text-ink font-bold">
            Different industries.
            <br />
            One common challenge:{" "}
            <span className="font-serif-i italic text-[#1e2bc8] font-normal">
              Being chosen.
            </span>
          </h2>
        </div>

        {/* ============================================================== */}
        {/* PREMIUM ARCHITECTURAL INDUSTRY CARDS GRID                       */}
        {/* ============================================================== */}
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isHiddenOnMobile = !showAllMobile && idx >= 2;

            return (
              <div
                key={ind.tag}
                className={`relative rounded-[28px] sm:rounded-[32px] bg-white border border-ink/[0.08] p-6 sm:p-7 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_50px_-10px_rgba(30,43,200,0.12)] hover:border-[#1e2bc8]/40 hover:-translate-y-1.5 transition-all duration-400 group overflow-hidden flex flex-col justify-between ${
                  isHiddenOnMobile ? "hidden sm:flex" : "flex"
                }`}
              >
                {/* Top Subtle Ambient Laser Highlight on Hover */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#1e2bc8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

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
                          [ SECTOR {ind.tag} ]
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#1e2bc8] font-bold">
                          {ind.category}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-[#1e2bc8] font-bold bg-[#1e2bc8]/[0.06] px-2.5 py-1 rounded-full border border-[#1e2bc8]/10">
                      {ind.outcome}
                    </span>
                  </div>

                  {/* Title & Serif Promise */}
                  <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-ink mt-5 tracking-tight group-hover:text-[#1e2bc8] transition-colors leading-snug">
                    {ind.name}
                  </h3>

                  <div className="font-serif-i italic text-[14px] sm:text-[15px] text-ink/80 mt-1.5 leading-snug">
                    “{ind.serifQuote}”
                  </div>

                  {/* Clear Short Premium Points */}
                  <div className="mt-4 space-y-2.5">
                    {ind.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2 text-[12px] sm:text-[13px] leading-snug font-sans text-ink/85"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1e2bc8] mt-1.5 shrink-0" />
                        <div>
                          <strong className="text-ink font-semibold">{pt.bold}</strong>
                          <span className="text-ink/70"> — {pt.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between">
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/contact");
                    }}
                    className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#1e2bc8] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{ind.linkText}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-[10px] font-mono text-ink/40 uppercase tracking-wider">
                    Custom Scope
                  </span>
                </div>
              </div>
            );
          })}

          {/* ============================================================== */}
          {/* 6TH CARD: COMMANDING OBSIDIAN FLAGSHIP MONOLITH                 */}
          {/* ============================================================== */}
          <div
            className={`relative rounded-[28px] sm:rounded-[32px] bg-[#0c0d12] text-white p-6 sm:p-7 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col justify-between group ${
              !showAllMobile ? "hidden sm:flex" : "flex"
            }`}
          >
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
                    [ BESPOKE STRATEGY ]
                  </span>
                </div>
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                  Custom Blueprint
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-white mt-5 tracking-tight leading-snug">
                Your industry is unique.
                <br />
                <span className="text-white/90">Your search strategy should be too.</span>
              </h3>

              <div className="font-serif-i italic text-[14px] sm:text-[15px] text-white/80 mt-1.5 leading-snug">
                “No off-the-shelf templates. No bloated generic retainers.”
              </div>

              {/* Clear Short Premium Points */}
              <div className="mt-4 space-y-2.5">
                <div className="flex items-start gap-2 text-[12px] sm:text-[13px] leading-snug font-sans text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5c85ff] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white font-semibold">Custom Blueprint</strong>
                    <span className="text-white/70"> — Matched to your exact buyer psychology</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-[12px] sm:text-[13px] leading-snug font-sans text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5c85ff] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white font-semibold">Dual-Engine Search</strong>
                    <span className="text-white/70"> — Unified Google Maps & AI assistant authority</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-[12px] sm:text-[13px] leading-snug font-sans text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5c85ff] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white font-semibold">Founder Review</strong>
                    <span className="text-white/70"> — Direct technical analysis & action plan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="group/cta relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink hover:bg-[#1e2bc8] hover:text-white px-6 py-3 text-[12.5px] sm:text-[13px] font-bold transition-all duration-300 w-full shadow-lg active:scale-95 cursor-pointer overflow-hidden"
              >
                <span>Discuss Your Industry Strategy</span>
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
                ? "Show Less Sectors ↑"
                : "Load More Industry Sectors (3 more) ↓"}
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
