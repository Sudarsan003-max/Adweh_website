import { useEffect, useRef, useState } from "react";
import ScrubVideo from "./ScrubVideo";
import { navigateTo } from "../utils/navigation";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4";

function useCount(target: number, duration = 1800, start = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return v;
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const brands = useCount(130, 1800, inView);
  const revenue = useCount(400, 2000, inView);
  const growth = useCount(428, 2200, inView);
  const reduction = useCount(89, 1800, inView);

  return (
    <section id="top" ref={ref} className="relative pt-24 sm:pt-36 pb-0 overflow-hidden bg-white">
      {/* Background 3D render — pre-decoded frame-cache scrubbing (see ScrubVideo) */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden bg-transparent">
        <ScrubVideo src={HERO_VIDEO} videoClassName="object-right lg:object-right-bottom" />
      </div>

      {/* Decorative blob */}
      <div className="pointer-events-none absolute -top-20 -right-40 h-[560px] w-[560px] blob bg-[#0000cd] opacity-70 z-0" />
      <div className="pointer-events-none absolute top-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#ff5d3b]/20 blur-[80px] z-0" />

      <div className="relative z-20 mx-auto lg:-translate-x-24 max-w-[1400px] px-5">
        {/* Top meta strip */}
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-ink/60 mb-5 sm:mb-10">
          <div className="flex items-center gap-3">
            <span>[ EST · 2020 ]</span>
            <span className="hidden sm:inline opacity-50">/</span>
            <span className="hidden sm:inline">A Digital Growth Studio</span>
          </div>
          <div className="flex items-center gap-2">
            <span>v.26.1</span>
          </div>
        </div>

        {/* Headline */}
        <div className="relative">
          <h1 className="font-display font-medium leading-[0.88] sm:leading-[0.86] tracking-[-0.04em] sm:tracking-[-0.05em] text-ink">
            <span className="block text-[44px] xs:text-[54px] sm:text-[100px] lg:text-[180px]">
              Digital
            </span>
            <span className="block text-[44px] xs:text-[54px] sm:text-[100px] lg:text-[180px] -mt-1 sm:-mt-2 lg:-mt-6 pl-0 lg:pl-4">
              growth, <span className="font-serif-i text-[#0a0a0a]/90">re</span>
              <span className="font-serif-i italic">engineered.</span>
            </span>
          </h1>
        </div>

        {/* Sub row - Manifesto only, leaving right side clear for 3D model */}
        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="lg:col-span-6">
            <div className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-ink/50 mb-2.5 sm:mb-4">
              [ Manifesto / 01 ]
            </div>
            <p className="text-[15px] sm:text-[20px] leading-[1.45] sm:leading-[1.5] text-ink/85 max-w-lg">
              A specialized digital growth studio combining AIEO, GEO, SEO, and security-first website development to strengthen brand visibility, build trust, and drive sustainable online growth.
            </p>

            <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-full bg-[#0a0a0a] text-bone pl-5 sm:pl-6 pr-2 py-2 sm:py-2.5 text-[12.5px] sm:text-[13px] font-medium overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
                style={{ color: "#f5f1ea" }}
              >
                <span className="relative z-10">Start a project</span>
                <span className="relative z-10 grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#0000cd] text-[#0a0a0a] transition-transform group-hover:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-3 sm:h-3.5 w-3 sm:w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
              <a
                href="/#work"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/#work");
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 sm:px-5 py-2.5 sm:py-3 text-[12.5px] sm:text-[13px] font-medium hover:bg-ink hover:text-bone transition cursor-pointer active:scale-[0.98]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a] group-hover:bg-[#0000cd]" />
                View case studies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Stats Strip: 2x2 grid on mobile, 5 cols on lg */}
      <div className="relative z-20 mx-auto max-w-[1550px] px-4 sm:px-5 mt-8 sm:mt-16 pb-0">
        <div className="border border-ink/5 bg-white/95 backdrop-blur-md shadow-xl shadow-ink/5 rounded-2xl sm:rounded-3xl p-4 sm:p-8 grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-8 items-start relative z-30">
          <Metric n={`${brands}+`} k="Brands scaled" />
          <Metric n={`$${revenue}K+`} k="Revenue generated" />
          <Metric n={`${growth}%`} k="Avg lead growth" />
          <Metric n={`-${reduction}%`} k="Cost per lead" />

          {/* Social Proof Review Block (span 2 on mobile to center below 2x2 grid) */}
          <div className="col-span-2 lg:col-span-1 border-t lg:border-t-0 lg:border-l border-ink/10 pt-3.5 lg:pt-0 lg:pl-8 flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1 text-[#0a0a0a]">
              {"★★★★★".split("").map((s, i) => <span key={i} className="text-[12px]">{s}</span>)}
              <span className="ml-2 text-[11px] sm:text-[12px] font-mono tabular-nums font-semibold">4.98 / 5</span>
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.1em] text-ink/50">Across 130+ clients</div>
            
            <div className="flex -space-x-2 mt-0.5">
              {["SJ", "MC", "AR", "+"].map((i, k) => (
                <span key={k} className={`grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-full text-[8.5px] sm:text-[9px] font-semibold border-2 border-bone ${k === 3 ? "bg-[#0000cd] text-[#0a0a0a]" : "bg-[#0a0a0a] text-[#f5f1ea]"}`} style={k === 3 ? {} : { color: "#f5f1ea" }}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative mt-0 border-y border-ink/15 bg-bone overflow-hidden">
        <div className="marquee-track inline-flex whitespace-nowrap py-2.5 sm:py-5">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="inline-flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
              {["AIEO", "Generative Engine Optimization (GEO)", "Search Engine Optimization (SEO)", "Cybersecurity-Focused Development", "AI Engine Optimization", "GEO Discovery", "Secure Website Building & Testing", "Website Development"].map((t, i) => (
                <span key={`${j}-${i}`} className="inline-flex items-center gap-3 sm:gap-6">
                  <span className="font-display text-[18px] sm:text-[36px] tracking-tight text-ink">{t}</span>
                  <span className="text-[#0000cd] text-lg sm:text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ n, k }: { n: string; k: string }) {
  return (
    <div>
      <div className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink">{n}</div>
      <div className="mt-1 sm:mt-2 text-[9.5px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-ink/60 flex items-center gap-1.5 sm:gap-2">
        <span className="h-px w-3 sm:w-5 bg-ink/40" /> {k}
      </div>
    </div>
  );
}
