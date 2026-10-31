import { useState, useRef } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { ArrowUpRight, ArrowRight, Sparkles, Check, ChevronRight } from "lucide-react";

interface ServiceItem {
  num: string;
  tag: string;
  title: string;
  shortTitle: string;
  serifPromise: string;
  desc: string;
  deliverables: string[];
  impact: string;
  link: string;
  linkText: string;
}

const services: ServiceItem[] = [
  {
    num: "01",
    tag: "ORGANIC INTENT",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    serifPromise: "Capture buyers the moment they search.",
    desc: "We engineer technical, content, and local-search foundations so your business wins top-3 rankings when prospects have active intent to buy.",
    deliverables: [
      "Google Maps 3-Pack Domination",
      "High-Intent Commercial Keywords",
      "Technical Core Web Vitals 95+",
      "Topic Authority Content Clusters",
    ],
    impact: "Google Maps #1 & Top 3 Rankings",
    link: "/seo",
    linkText: "Explore SEO Scope",
  },
  {
    num: "02",
    tag: "AI DISCOVERY",
    title: "AI Engine Optimization",
    shortTitle: "AIEO",
    serifPromise: "Get recommended by ChatGPT & Claude.",
    desc: "We structure entity data, Knowledge Graph clarity, and answer passages so conversational AI assistants shortlist your business as the premier choice.",
    deliverables: [
      "Knowledge Graph Entity Alignment",
      "Conversational Prompt Mapping",
      "Answer-Focused Content Passages",
      "ChatGPT & Claude Visibility Audits",
    ],
    impact: "First-Choice AI Recommendation",
    link: "/aieo",
    linkText: "Explore AIEO Scope",
  },
  {
    num: "03",
    tag: "GENERATIVE CITATIONS",
    title: "Generative Engine Optimization",
    shortTitle: "GEO",
    serifPromise: "Own the answer in Google AI Overviews.",
    desc: "We build authoritative content and JSON-LD structured schema so your business earns verified citations and snapshots across generative search engines.",
    deliverables: [
      "JSON-LD Structured Schema Graph",
      "Google AI Overviews Citations",
      "Authoritative Fact Corroboration",
      "Gemini Knowledge Attribution",
    ],
    impact: "Google AI Snapshot Citations",
    link: "/geo",
    linkText: "Explore GEO Scope",
  },
  {
    num: "04",
    tag: "SECURE PLATFORM",
    title: "Security-Focused Web Dev",
    shortTitle: "Web Dev",
    serifPromise: "High-speed, zero-leak web infrastructure.",
    desc: "We build websites with sub-second speeds, clear conversion journeys, and security-conscious code to convert inbound search demand into booked clients.",
    deliverables: [
      "Sub-Second Core Web Vitals",
      "Strict HTTPS & Security Headers",
      "HIPAA-Conscious Lead Safeguards",
      "Frictionless Conversion Journeys",
    ],
    impact: "Sub-Second Speed & Zero Leaks",
    link: "/website-development",
    linkText: "Explore Web Dev Scope",
  },
];

export default function Solutions() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth * 0.85;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setActiveMobileIdx(Math.min(Math.max(newIdx, 0), services.length - 1));
  };

  const scrollToMobileCard = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });
    setActiveMobileIdx(idx);
  };

  return (
    <section id="services" className="relative py-12 sm:py-24 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="005" label="What We Do" />

        {/* Section Header */}
        <div className="mt-6 sm:mt-12 grid lg:grid-cols-12 gap-6 sm:gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1e2bc8]" />
              <span>[ CORE CAPABILITIES ]</span>
            </div>
            <h2 className="font-display text-[30px] xs:text-[38px] sm:text-[56px] lg:text-[70px] leading-[1.0] sm:leading-[0.94] tracking-[-0.035em] text-ink font-bold">
              Four capabilities. One goal:
              <br />
              Make your business{" "}
              <span className="font-serif-i italic text-[#1e2bc8] font-normal">
                easier to choose.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-ink/10 bg-white/80 backdrop-blur-sm p-4 text-[12px] sm:text-[12.5px] leading-relaxed text-ink/75 shadow-xs border-l-4 border-l-[#1e2bc8]">
              <div className="flex items-center gap-1.5 font-bold text-ink mb-1 text-[11px] font-mono uppercase tracking-wider">
                <Sparkles className="h-3 w-3 text-[#1e2bc8]" />
                <span>Integrated Service Advisory:</span>
              </div>
              <p>
                SEO, AIEO, and GEO overlap. We recommend the exact combination tailored to your commercial goals—not a bloated collection of unneeded retainers.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP: 4-COLUMN COMPACT LUXURY MONOLITH GRID                  */}
        {/* All 4 cards fit cleanly across the screen side-by-side          */}
        {/* ============================================================== */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 xl:gap-5 mt-10">
          {services.map((s) => (
            <div
              key={s.num}
              className="relative rounded-3xl bg-white border border-ink/10 p-6 xl:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(30,43,200,0.14)] hover:border-[#1e2bc8]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group overflow-hidden"
            >
              {/* Subtle top cobalt ambient line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#1e2bc8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Card Index & Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-ink/5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-[#1e2bc8]">
                      {s.num}
                    </span>
                    <span className="text-ink/20 font-mono">/</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ink/50 font-semibold">
                      {s.tag}
                    </span>
                  </div>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#1e2bc8] opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="font-display text-[19px] xl:text-[21px] font-bold text-ink mt-4 tracking-tight leading-snug group-hover:text-[#1e2bc8] transition-colors">
                  {s.title}
                </h3>

                {/* Serif Promise */}
                <div className="font-serif-i italic text-[14px] text-ink/80 mt-1.5 leading-snug">
                  “{s.serifPromise}”
                </div>

                {/* Body Description */}
                <p className="mt-3 text-[12.5px] leading-relaxed text-ink/65 font-sans">
                  {s.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5 pt-4 border-t border-ink/5 space-y-2">
                  <div className="text-[9.5px] font-mono uppercase tracking-wider text-ink/40 font-semibold">
                    Core Focus:
                  </div>
                  {s.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[11.5px] font-mono text-ink/80 leading-tight"
                    >
                      <span className="text-[#1e2bc8] font-bold shrink-0 text-xs mt-0.5">
                        •
                      </span>
                      <span className="group-hover:text-ink transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tactile Action Button */}
              <div className="mt-6 pt-4 border-t border-ink/5">
                <a
                  href={s.link}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(s.link);
                  }}
                  className="group/btn w-full inline-flex items-center justify-between rounded-full bg-[#0a0a0a] hover:bg-[#1e2bc8] text-white pl-4 pr-1.5 py-1.5 text-[11.5px] font-bold shadow-xs transition-all cursor-pointer active:scale-98"
                >
                  <span>{s.linkText}</span>
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-white text-[#0a0a0a] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:rotate-45">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MOBILE / TABLET: SLEEK HORIZONTAL SNAP-CAROUSEL DECK            */}
        {/* Eliminates vertical scrolling on mobile phones                 */}
        {/* ============================================================== */}
        <div className="lg:hidden mt-8">
          <div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 no-scrollbar scroll-smooth"
          >
            {services.map((s, idx) => (
              <div
                key={s.num}
                className="w-[84vw] xs:w-[78vw] sm:w-[360px] shrink-0 snap-center rounded-3xl bg-white border border-ink/10 p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-ink/5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#1e2bc8]">
                        {s.num}
                      </span>
                      <span className="text-ink/20 font-mono">/</span>
                      <span className="text-[9.5px] font-mono uppercase tracking-widest text-ink/50 font-semibold">
                        {s.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-ink/40">
                      {idx + 1} of 4
                    </span>
                  </div>

                  <h3 className="font-display text-[18px] font-bold text-ink mt-3 tracking-tight">
                    {s.title}
                  </h3>

                  <div className="font-serif-i italic text-[13.5px] text-ink/80 mt-1">
                    “{s.serifPromise}”
                  </div>

                  <p className="mt-2 text-[12px] leading-relaxed text-ink/70 font-sans">
                    {s.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-ink/5 space-y-1.5">
                    {s.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[11px] font-mono text-ink/80"
                      >
                        <span className="text-[#1e2bc8] font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-ink/5">
                  <a
                    href={s.link}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(s.link);
                    }}
                    className="w-full inline-flex items-center justify-between rounded-full bg-[#0a0a0a] text-white pl-4 pr-1.5 py-1.5 text-[11.5px] font-bold shadow-xs active:bg-[#1e2bc8]"
                  >
                    <span>{s.linkText}</span>
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-white text-[#0a0a0a]">
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dot Navigation Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {services.map((s, idx) => (
              <button
                key={s.num}
                type="button"
                onClick={() => scrollToMobileCard(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeMobileIdx === idx
                    ? "w-7 h-2 bg-[#1e2bc8]"
                    : "w-2 h-2 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={`Go to ${s.shortTitle}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
