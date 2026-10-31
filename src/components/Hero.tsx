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
    <section id="top" ref={ref} className="relative pt-24 sm:pt-36 pb-0 overflow-hidden bg-white">
      {/* Background 3D render — pre-decoded frame-cache scrubbing, full opacity for rich visibility */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden bg-transparent opacity-85 sm:opacity-100 transition-opacity">
        <ScrubVideo src={HERO_VIDEO} videoClassName="object-right lg:object-right-bottom" />
      </div>

      {/* Gentle mobile bottom fade to protect legibility on small screens while keeping 3D visual crisp */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/60 via-transparent to-white sm:hidden" />

      {/* Vibrant decorative blobs behind 3D render */}
      <div className="pointer-events-none absolute -top-20 -right-40 h-[560px] w-[560px] blob bg-[#1e2bc8] opacity-60 z-0" />
      <div className="pointer-events-none absolute top-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#ff5d3b]/15 blur-[80px] z-0" />

      <div className="relative z-20 mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Master Display Headline */}
        <div className="relative max-w-4xl pt-2 sm:pt-4">
          <h1 className="font-display font-medium leading-[0.96] sm:leading-[0.88] tracking-[-0.04em] text-ink text-[38px] xs:text-[48px] sm:text-[78px] lg:text-[104px]">
            Your next customer is{" "}
            <span className="font-serif-i italic text-[#1e2bc8] font-normal tracking-normal">
              searching.
            </span>
            <br />
            Will they find you?
          </h1>
        </div>

        {/* Sub row - Executive Manifesto Copy */}
        <div className="mt-5 sm:mt-9 grid lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="lg:col-span-8 max-w-2xl space-y-3.5 sm:space-y-4">
            <p className="text-[17px] sm:text-[23px] leading-[1.38] text-ink font-normal tracking-[-0.015em]">
              When high-intent clients search Google and prompt AI assistants, they choose the business with the clearest authority.
            </p>
            <p className="text-[14px] sm:text-[16.5px] leading-[1.6] text-ink/75 font-sans">
              ADWEH integrates SEO, AI Engine Optimization (AIEO), GEO, and security-conscious web development to ensure ambitious businesses get found, get trusted, and get chosen.
            </p>

            <div className="pt-3 sm:pt-5 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-3.5 rounded-full bg-[#0a0a0a] text-white pl-6 sm:pl-7 pr-2.5 py-2.5 text-[13px] font-semibold overflow-hidden cursor-pointer active:scale-[0.98] transition-all hover:bg-[#1e2bc8] shadow-lg shadow-black/15"
              >
                <span className="relative z-10">Request Visibility Assessment</span>
                <span className="relative z-10 grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white text-[#0a0a0a] transition-transform group-hover:rotate-45 shrink-0">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>

              <a
                href="/#opportunity"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/#opportunity");
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 backdrop-blur-md px-6 py-2.5 sm:py-3 text-[13px] font-medium text-ink/80 hover:text-ink hover:border-ink hover:bg-white transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Explore Our Methodology</span>
                <span className="text-xs transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </div>

            {/* Understated Seal of Integrity */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-[12px] font-mono text-ink/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1e2bc8]" />
                <span>Objective diagnostic review. No inflated promises or speculative rankings.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Architectural Trust Strip */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-4 sm:px-6 mt-10 sm:mt-18 pb-0">
        <div className="border border-ink/10 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl sm:rounded-3xl p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 items-start">
          {trustPoints.map((tp, idx) => (
            <div key={idx} className="flex flex-col border-l border-ink/15 pl-4 sm:pl-5 group">
              <div className="font-mono text-[10px] text-[#1e2bc8] font-bold tracking-widest mb-1">
                0{idx + 1}
              </div>
              <div className="font-display text-[15px] sm:text-[18px] font-bold tracking-tight text-ink leading-snug group-hover:text-[#1e2bc8] transition-colors">
                {tp.label}
              </div>
              <div className="text-[11.5px] sm:text-[12.5px] font-sans text-ink/60 mt-1 leading-snug">
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
