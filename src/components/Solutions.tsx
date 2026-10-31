import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

interface ServiceItem {
  num: string;
  name: string;
  headline: string;
  desc: string;
  capabilities: string[];
  link: string;
  linkText: string;
}

const services: ServiceItem[] = [
  {
    num: "01",
    name: "Search Engine Optimization (SEO)",
    headline: "Get discovered when customers search for what you offer.",
    desc: "We improve the technical, content, and local-search foundations that help your website compete for relevant Google searches. From service-page optimization to search intent and site structure, the focus is on attracting people with a reason to enquire.",
    capabilities: [
      "Technical SEO",
      "Search-intent research",
      "On-page optimization",
      "Local SEO where applicable",
      "Content planning",
      "Performance reporting",
    ],
    link: "/seo",
    linkText: "Explore SEO Services →",
  },
  {
    num: "02",
    name: "AI Engine Optimization (AIEO)",
    headline: "Make your business easier to understand in AI-assisted research.",
    desc: "We improve the clarity, consistency, and accessibility of your business information so AI-powered answer tools can better interpret what you do, who you serve, and why you may be relevant to a user's question.",
    capabilities: [
      "Conversational-query research",
      "Entity clarity",
      "Answer-focused content",
      "Business information consistency",
      "AI visibility reviews",
    ],
    link: "/aieo",
    linkText: "Explore AIEO Services →",
  },
  {
    num: "03",
    name: "Generative Engine Optimization (GEO)",
    headline: "Build the signals that support discoverability in generative search.",
    desc: "We structure useful, credible content and strengthen supporting references so your business has a clearer presence in the information sources generative search systems may use. Visibility and citation decisions remain under each platform's control.",
    capabilities: [
      "Topic and question mapping",
      "Authoritative content",
      "Structured information",
      "Source and citation consistency",
      "Competitive visibility assessment",
    ],
    link: "/geo",
    linkText: "Explore GEO Services →",
  },
  {
    num: "04",
    name: "Security-Focused Website Development",
    headline: "Build a website worth finding—and worth trusting.",
    desc: "We design and develop websites with speed, usability, clear conversion journeys, search-friendly structure, and security-conscious implementation in mind. The result is a stronger foundation for SEO, AIEO, and GEO work.",
    capabilities: [
      "Responsive design",
      "Semantic page structure",
      "Performance optimization",
      "HTTPS and security configuration",
      "Form safeguards",
      "Testing and launch support",
    ],
    link: "/website-development",
    linkText: "Explore Website Development →",
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="relative py-8 sm:py-20 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="005" label="What We Do" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3">
              [ CORE CAPABILITIES ]
            </div>
            <h2 className="font-display text-[28px] xs:text-[36px] sm:text-[60px] lg:text-[76px] leading-[1.0] sm:leading-[0.95] tracking-[-0.035em] text-ink">
              Four capabilities. One goal:
              <br className="hidden sm:inline" />{" "}
              Make your business <span className="font-serif-i italic text-[#1e2bc8]">easier to choose.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            {/* Cross-service note callout */}
            <div className="rounded-xl sm:rounded-2xl border border-ink/10 bg-white p-3 sm:p-4 text-[12px] sm:text-[12.5px] leading-relaxed text-ink/75 shadow-sm">
              <strong className="text-ink block mb-0.5 sm:mb-1">Cross-service note:</strong>
              SEO, AIEO, and GEO overlap. We recommend the right combination based on your goals and current digital presence—not a collection of unnecessary retainers.
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-6 sm:mt-16 grid lg:grid-cols-2 gap-3.5 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl sm:rounded-3xl border border-ink/10 bg-white p-4 sm:p-8 hover:border-[#1e2bc8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-ink/5">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#1e2bc8]">
                    {s.num} — {s.name}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#1e2bc8] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display text-lg sm:text-2xl font-bold text-ink mt-3 sm:mt-5 tracking-tight leading-snug">
                  {s.headline}
                </h3>

                <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] leading-relaxed text-ink/75 font-sans">
                  {s.desc}
                </p>

                <div className="mt-4 sm:mt-6">
                  <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-ink/50 mb-1.5 sm:mb-2">
                    Included capabilities:
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {s.capabilities.map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-paper border border-ink/10 text-ink/70"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-8 pt-3.5 sm:pt-5 border-t border-ink/10 flex items-center justify-between">
                <a
                  href={s.link}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(s.link);
                  }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 font-display text-[13px] sm:text-[14px] font-bold text-[#1e2bc8] hover:text-[#0a0a0a] transition-colors"
                >
                  {s.linkText}
                </a>
                <span className="text-[10.5px] sm:text-xs font-mono text-ink/40">Dedicated Service Page</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
