import { useEffect, useRef } from "react";
import ScrubVideo from "./ScrubVideo";
import { navigateTo } from "../utils/navigation";
import { ArrowUpRight } from "lucide-react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const trustPoints = [
    { label: "Search-Led Strategy", desc: "Prioritizing high-intent commercial searches" },
    { label: "Clear Priorities", desc: "Zero vanity checklist metrics or guesswork" },
    { label: "Technical Execution", desc: "Rigorous code, schema & verified structures" },
    { label: "Commercial Focus", desc: "Engineered to convert inbound demand into revenue" },
  ];

  return (
    <section id="top" ref={ref} className="relative pt-28 xs:pt-32 sm:pt-40 pb-0 overflow-hidden bg-white">
      {/* Background 3D render — pre-decoded frame-cache scrubbing, full opacity for rich visibility */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden bg-transparent opacity-95 sm:opacity-100 transition-opacity">
        <ScrubVideo src={HERO_VIDEO} videoClassName="object-right lg:object-right-bottom" />
      </div>

      {/* Subtle gentle bottom gradient so 3D background remains completely visible & vibrant */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-white/70 sm:hidden" />

      {/* Vibrant decorative blobs behind 3D render */}
      <div className="pointer-events-none absolute -top-20 -right-40 h-[560px] w-[560px] blob bg-[#1e2bc8] opacity-65 z-0" />
      <div className="pointer-events-none absolute top-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#ff5d3b]/20 blur-[80px] z-0" />

      <div className="relative z-20 mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Eyebrow Kicker Pill */}
        <div className="flex justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-md px-3.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#1e2bc8] shadow-xs mb-3 sm:mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1e2bc8] animate-pulse shrink-0" />
            <span className="font-semibold">Search &amp; AI Visibility Architecture</span>
          </div>
        </div>

        {/* Master Display Headline */}
        <div className="relative max-w-4xl pt-1 sm:pt-2 text-center sm:text-left mx-auto sm:mx-0">
          <h1 className="font-display font-medium leading-[1.04] sm:leading-[0.88] tracking-[-0.03em] sm:tracking-[-0.035em] text-[#0a0a0a] text-[34px] xs:text-[44px] sm:text-[76px] lg:text-[104px] [text-shadow:0_1px_3px_rgba(255,255,255,0.7)]">
            Your next customer is{" "}
            <span className="font-serif-i italic text-[#1e2bc8] font-normal tracking-normal inline-block">
              searching.
            </span>
            <br className="hidden sm:inline" />
            <span className="block sm:inline sm:ml-2">Will they find you?</span>
          </h1>
        </div>

        {/* Sub row - Executive Manifesto Copy */}
        <div className="mt-4 sm:mt-8 grid lg:grid-cols-12 gap-5 sm:gap-10 items-start">
          <div className="lg:col-span-8 max-w-2xl space-y-3 sm:space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <p className="text-[16px] xs:text-[17.5px] sm:text-[23px] leading-[1.4] text-[#0a0a0a] font-normal tracking-[-0.015em] mx-auto sm:mx-0 max-w-xl sm:max-w-2xl [text-shadow:0_1px_2px_rgba(255,255,255,0.6)]">
              When high-intent clients search Google and prompt AI assistants, they choose the business with the clearest authority.
            </p>
            <p className="text-[13.5px] xs:text-[14.5px] sm:text-[16.5px] leading-[1.6] text-[#0a0a0a]/80 font-sans mx-auto sm:mx-0 max-w-xl sm:max-w-2xl [text-shadow:0_1px_2px_rgba(255,255,255,0.5)]">
              ADWEH integrates SEO, AI Engine Optimization (AIEO), GEO, and security-conscious web development to ensure ambitious businesses get found, get trusted, and get chosen.
            </p>

            {/* Symmetrical, High-Touch Action Buttons */}
            <div className="pt-3 sm:pt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 w-full max-w-md sm:max-w-none mx-auto sm:mx-0">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-3.5 rounded-full bg-[#0a0a0a] text-white px-5 sm:pl-7 sm:pr-2.5 h-12 text-[13px] font-semibold overflow-hidden cursor-pointer active:scale-[0.98] transition-all hover:bg-[#1e2bc8] shadow-lg shadow-black/15 w-full sm:w-auto"
              >
                <span className="relative z-10">Request Visibility Assessment</span>
                <span className="relative z-10 grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white text-[#0a0a0a] transition-transform group-hover:rotate-45 shrink-0 ml-auto sm:ml-0">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>

              <a
                href="/#opportunity"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/#opportunity");
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white/90 backdrop-blur-md px-6 h-12 text-[13px] font-semibold text-ink hover:text-white hover:border-[#1e2bc8] hover:bg-[#1e2bc8] transition-all cursor-pointer active:scale-[0.98] w-full sm:w-auto shadow-xs"
              >
                <span>Explore Our Methodology</span>
                <span className="text-xs transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </div>

            {/* Understated Seal of Integrity */}
            <div className="pt-1.5 sm:pt-2 flex items-center justify-center sm:justify-start">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-mono text-[#0a0a0a]/80 font-medium text-center sm:text-left">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1e2bc8] shrink-0" />
                <span>Objective diagnostic review. No inflated promises or speculative rankings.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Architectural Trust Strip (Optimized 2x2 Grid on Mobile) */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-3.5 sm:px-6 mt-7 sm:mt-18 pb-0">
        <div className="border border-ink/10 bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl sm:rounded-3xl p-3 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8 items-stretch">
          {trustPoints.map((tp, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between border-l-2 border-[#1e2bc8] bg-bone/40 sm:bg-transparent rounded-lg sm:rounded-none p-2.5 sm:p-0 sm:border-l sm:border-ink/15 sm:pl-5 group transition-colors hover:bg-bone/70 sm:hover:bg-transparent"
            >
              <div>
                <div className="font-mono text-[9.5px] sm:text-[11px] text-[#1e2bc8] font-bold tracking-widest shrink-0 mb-0.5 sm:mb-1">
                  0{idx + 1}
                </div>
                <div className="font-display text-[12.5px] xs:text-[14px] sm:text-[18px] font-bold tracking-tight text-ink leading-tight group-hover:text-[#1e2bc8] transition-colors">
                  {tp.label}
                </div>
              </div>
              <div className="text-[10px] xs:text-[11px] sm:text-[12.5px] font-sans text-ink/65 mt-1 sm:mt-1.5 leading-snug line-clamp-2 sm:line-clamp-none">
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
