import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

interface ServiceItem {
  num: string;
  name: string;
  eyebrow: string;
  headline: string;
  desc: string;
  capabilities: string[];
  link: string;
  linkText: string;
}

const services: ServiceItem[] = [
  {
    num: "01",
    name: "Search Engine Optimization",
    eyebrow: "ORGANIC INTENT",
    headline: "Get discovered when customers search for what you offer.",
    desc: "We improve the technical, content, and local-search foundations that help your website compete for relevant Google searches. From service-page optimization to search intent and site structure, the focus is on attracting people with a reason to enquire.",
    capabilities: [
      "Technical SEO & Core Web Vitals",
      "Search-intent keyword research",
      "On-page relevance & structure",
      "Google Maps & Local 3-Pack",
      "Strategic content planning",
      "Transparent rank reporting",
    ],
    link: "/seo",
    linkText: "Explore SEO Services",
  },
  {
    num: "02",
    name: "AI Engine Optimization",
    eyebrow: "ASSISTANT DISCOVERY",
    headline: "Make your business easier to understand in AI-assisted research.",
    desc: "We improve the clarity, consistency, and accessibility of your business information so AI-powered answer tools can better interpret what you do, who you serve, and why you may be relevant to a user's question.",
    capabilities: [
      "Conversational-query research",
      "Knowledge Graph entity clarity",
      "Answer-focused content passages",
      "Business factual consistency",
      "ChatGPT & Claude visibility audits",
      "Citation source verification",
    ],
    link: "/aieo",
    linkText: "Explore AIEO Services",
  },
  {
    num: "03",
    name: "Generative Engine Optimization",
    eyebrow: "AI SNAPSHOT CITATIONS",
    headline: "Build the signals that support discoverability in generative search.",
    desc: "We structure useful, credible content and strengthen supporting references so your business has a clearer presence in the information sources generative search systems may use. Visibility and citation decisions remain under each platform's control.",
    capabilities: [
      "Topic and question mapping",
      "Authoritative editorial content",
      "JSON-LD structured schema",
      "Source and cross-reference corroboration",
      "Google AI Overviews tracking",
      "Gemini knowledge attribution",
    ],
    link: "/geo",
    linkText: "Explore GEO Services",
  },
  {
    num: "04",
    name: "Security-Focused Website Development",
    eyebrow: "CYBERSECURE WEB PLATFORM",
    headline: "Build a website worth finding—and worth trusting.",
    desc: "We design and develop websites with speed, usability, clear conversion journeys, search-friendly structure, and security-conscious implementation in mind. The result is a stronger foundation for SEO, AIEO, and GEO work.",
    capabilities: [
      "Responsive high-speed architecture",
      "Semantic HTML & SEO foundations",
      "Strict HTTPS & security headers",
      "HIPAA-conscious form safeguards",
      "Frictionless conversion journeys",
      "Rigorous pre-launch testing",
    ],
    link: "/website-development",
    linkText: "Explore Website Development",
  },
];

export default function Solutions() {
  // Mobile accordion / expand states to drastically reduce scrolling
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (num: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  return (
    <section id="services" className="relative py-10 sm:py-24 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="005" label="What We Do" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-6 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1e2bc8]" />
              <span>[ CORE CAPABILITIES ]</span>
            </div>
            <h2 className="font-display text-[30px] xs:text-[40px] sm:text-[62px] lg:text-[76px] leading-[1.0] sm:leading-[0.94] tracking-[-0.035em] text-ink font-bold">
              Four capabilities. One goal:
              <br />
              Make your business{" "}
              <span className="font-serif-i italic text-[#1e2bc8] font-normal">
                easier to choose.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            {/* Cross-service note callout */}
            <div className="rounded-2xl border border-ink/10 bg-white/80 backdrop-blur-sm p-4 sm:p-5 text-[12.5px] sm:text-[13px] leading-relaxed text-ink/80 shadow-sm border-l-4 border-l-[#1e2bc8]">
              <div className="flex items-center gap-1.5 font-bold text-ink mb-1">
                <Sparkles className="h-3.5 w-3.5 text-[#1e2bc8]" />
                <span>Cross-service note:</span>
              </div>
              <p className="text-ink/70">
                SEO, AIEO, and GEO overlap. We recommend the right combination based on your goals and current digital presence—not a collection of unnecessary retainers.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-8 sm:mt-16 grid lg:grid-cols-2 gap-4 sm:gap-8">
          {services.map((s, idx) => {
            // In mobile view, if showAllMobile is false, only show the first 2 cards by default
            const isHiddenOnMobile = !showAllMobile && idx >= 2;
            const isCardExpanded = !!expandedCards[s.num];

            return (
              <div
                key={s.num}
                className={`rounded-2xl sm:rounded-3xl border border-ink/10 bg-white p-5 sm:p-9 shadow-sm hover:border-[#1e2bc8]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  isHiddenOnMobile ? "hidden lg:flex" : "flex"
                }`}
              >
                <div>
                  {/* Top Bar: Number + Eyebrow */}
                  <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-ink/5">
                    <div className="flex items-center gap-2">
                      <span className="grid place-items-center h-6 w-6 rounded-full bg-[#1e2bc8]/10 text-[#1e2bc8] font-mono text-xs font-bold">
                        {s.num}
                      </span>
                      <span className="font-mono text-xs sm:text-[13px] font-bold text-ink tracking-tight">
                        {s.name}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full bg-paper border border-ink/10 text-[9.5px] font-mono uppercase tracking-wider text-ink/60">
                      {s.eyebrow}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mt-4 sm:mt-5 tracking-tight leading-snug group-hover:text-[#1e2bc8] transition-colors">
                    {s.headline}
                  </h3>

                  {/* Description: full on desktop, expandable on mobile */}
                  <p className="mt-2.5 sm:mt-3 text-[13.5px] sm:text-[14.5px] leading-relaxed text-ink/75 font-sans">
                    {s.desc}
                  </p>

                  {/* Capabilities List - with mobile compact collapse option */}
                  <div className="mt-4 sm:mt-6">
                    {/* Mobile Expand / Collapse Button for Capabilities */}
                    <div className="lg:hidden flex items-center justify-between mb-2">
                      <button
                        type="button"
                        onClick={() => toggleCard(s.num)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#1e2bc8] font-bold py-1"
                      >
                        <span>{isCardExpanded ? "Hide capabilities" : "View capabilities"}</span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            isCardExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <span className="text-[10px] font-mono text-ink/40">
                        {s.capabilities.length} points
                      </span>
                    </div>

                    {/* Capabilities Tags - Always visible on desktop; on mobile visible if expanded */}
                    <div
                      className={`space-y-2 lg:block ${
                        isCardExpanded ? "block" : "hidden"
                      }`}
                    >
                      <div className="text-[10px] font-mono uppercase tracking-wider text-ink/50 mb-2 font-semibold">
                        Included capabilities:
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {s.capabilities.map((cap, cIdx) => (
                          <span
                            key={cIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] sm:text-[11.5px] font-mono bg-paper/80 border border-ink/10 text-ink/80 hover:border-[#1e2bc8]/40 hover:bg-white transition-colors"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#1e2bc8]" />
                            <span>{cap}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Link & Action */}
                <div className="mt-5 sm:mt-8 pt-4 sm:pt-5 border-t border-ink/10 flex items-center justify-between">
                  <a
                    href={s.link}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(s.link);
                    }}
                    className="group/link inline-flex items-center gap-2 font-display text-[13.5px] sm:text-[14.5px] font-bold text-[#1e2bc8] hover:text-[#0a0a0a] transition-colors"
                  >
                    <span>{s.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>

                  <span className="text-[10.5px] sm:text-xs font-mono text-ink/40">
                    Dedicated Service Page
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View Toggle: Show More / Show Less to cut scroll depth */}
        <div className="mt-6 lg:hidden text-center">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink/20 bg-white font-mono text-xs font-bold text-ink shadow-sm active:scale-95 transition-all"
          >
            <span>
              {showAllMobile
                ? "Show Less Capabilities ↑"
                : "Show All 4 Capabilities (2 more) ↓"}
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
