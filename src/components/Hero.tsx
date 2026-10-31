import { useEffect, useRef } from "react";
import ScrubVideo from "./ScrubVideo";
import { navigateTo } from "../utils/navigation";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const trustPoints = [
    { label: "Search-Led Strategy", desc: "Prioritizing commercial intent" },
    { label: "Clear Priorities", desc: "No vanity checklist metrics" },
    { label: "Technical Execution", desc: "Clean code & verified structure" },
    { label: "Commercial Focus", desc: "Built to drive customer enquiries" },
  ];

  return (
    <section id="top" ref={ref} className="relative pt-20 sm:pt-32 pb-0 overflow-hidden bg-white">
      {/* Background 3D render — pre-decoded frame-cache scrubbing */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden bg-transparent opacity-35 sm:opacity-90 transition-opacity">
        <ScrubVideo src={HERO_VIDEO} videoClassName="object-right lg:object-right-bottom" />
      </div>

      {/* Luminous left gradient scrim to ensure 100% crystal-clear readability across all screens */}
      <div className="pointer-events-none absolute inset-0 z-15 bg-gradient-to-r from-white via-white/95 via-40% to-transparent sm:via-white/85 sm:via-50% sm:to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-15 bg-gradient-to-b from-white/80 via-transparent to-white/90 sm:hidden" />

      {/* Decorative ambient color spots */}
      <div className="pointer-events-none absolute -top-20 -right-40 h-[560px] w-[560px] blob bg-[#1e2bc8]/20 blur-[120px] z-0" />
      <div className="pointer-events-none absolute top-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#ff5d3b]/10 blur-[90px] z-0" />

      <div className="relative z-20 mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Top meta strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[9.5px] sm:text-[10.5px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.22em] text-ink/70 mb-4 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-ink/10 shadow-xs">
            <span className="font-bold text-[#1e2bc8]">[ POSITIONING ]</span>
            <span className="opacity-40">/</span>
            <span className="font-medium text-ink/80">Search &amp; AI Visibility Partner</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-ink/10 shadow-xs text-ink/80 font-semibold text-[9px] sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1e2bc8] animate-pulse" />
            <span>GET FOUND · GET TRUSTED · GET CHOSEN</span>
          </div>
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1e2bc8]/25 bg-[#1e2bc8]/5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-[#1e2bc8] font-bold mb-4 sm:mb-6">
          <span className="h-2 w-2 rounded-full bg-[#1e2bc8] shrink-0" />
          <span>SEO • AI SEARCH VISIBILITY • SECURITY WEBSITES</span>
        </div>

        {/* Headline */}
        <div className="relative max-w-4xl">
          <h1 className="font-display font-bold leading-[1.0] sm:leading-[0.92] tracking-[-0.035em] text-ink text-[34px] xs:text-[44px] sm:text-[74px] lg:text-[98px]">
            Your next customer is <span className="font-serif-i italic text-[#1e2bc8] font-normal">searching.</span>
            <br />
            Will they find <span className="underline decoration-[#1e2bc8]/40 underline-offset-4 sm:underline-offset-8">you?</span>
          </h1>
        </div>

        {/* Sub row - Manifesto copy */}
        <div className="mt-4 sm:mt-8 grid lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="lg:col-span-8 max-w-2xl space-y-3 sm:space-y-4">
            <p className="text-[15.5px] sm:text-[21px] leading-[1.42] text-ink font-medium">
              Your customers are searching Google, asking AI assistants for recommendations, and comparing businesses before they make a decision.
            </p>
            <p className="text-[13.5px] sm:text-[16px] leading-[1.55] text-ink/75 font-sans">
              ADWEH helps your business become easier to discover, easier to trust, and easier to choose through SEO, AI Engine Optimization (AIEO), Generative Engine Optimization (GEO), and security-focused website development.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-3 rounded-full bg-[#0a0a0a] text-white pl-6 pr-2.5 py-2.5 text-[13px] font-bold overflow-hidden cursor-pointer active:scale-[0.98] transition-all hover:bg-[#1e2bc8] shadow-lg shadow-black/10"
              >
                <span className="relative z-10">Get My Free Visibility Assessment</span>
                <span className="relative z-10 grid place-items-center h-8 w-8 rounded-full bg-white text-[#0a0a0a] transition-transform group-hover:rotate-45 shrink-0">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>

              <a
                href="/#opportunity"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/#opportunity");
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white/60 backdrop-blur-sm px-6 py-2.5 sm:py-3 text-[13px] font-semibold text-ink hover:bg-ink hover:text-white transition cursor-pointer active:scale-[0.98]"
              >
                <span>See How ADWEH Works</span>
                <span className="text-xs transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </div>

            {/* Hero reassurance Note */}
            <div className="pt-1">
              <div className="inline-flex items-start sm:items-center gap-2 p-2.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/80 backdrop-blur-sm border border-ink/10 text-[11px] sm:text-[12px] font-mono text-ink/70 leading-relaxed shadow-xs">
                <span className="text-[#1e2bc8] font-bold shrink-0">ℹ Note:</span>
                <span>A practical review of your current digital visibility and high-impact opportunities. No false promises of instant rankings or guaranteed AI citations.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-4 sm:px-6 mt-8 sm:mt-16 pb-0">
        <div className="border border-ink/10 bg-white/95 backdrop-blur-md shadow-xl shadow-ink/[0.03] rounded-2xl sm:rounded-3xl p-4 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          {trustPoints.map((tp, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-[#1e2bc8] pl-3 sm:pl-4">
              <div className="font-display text-[14px] sm:text-[18px] font-bold tracking-tight text-ink leading-tight">
                {tp.label}
              </div>
              <div className="text-[11px] sm:text-[12px] font-mono text-ink/60 mt-1 leading-tight">
                {tp.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative mt-8 sm:mt-14 border-y border-ink/15 bg-bone overflow-hidden">
        <div className="marquee-track inline-flex whitespace-nowrap py-2.5 sm:py-4">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="inline-flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
              {[
                "Search Engine Optimization (SEO)",
                "AI Engine Optimization (AIEO)",
                "Generative Engine Optimization (GEO)",
                "Security-Focused Website Development",
                "Entity Clarity",
                "Google AI Overviews",
                "High-Intent Buyer Demand",
                "Verified Search Outgrowth",
              ].map((t, i) => (
                <span key={`${j}-${i}`} className="inline-flex items-center gap-2 sm:gap-6">
                  <span className="font-display text-[13.5px] sm:text-[22px] tracking-tight text-ink font-semibold">{t}</span>
                  <span className="text-[#1e2bc8] text-sm sm:text-lg">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
