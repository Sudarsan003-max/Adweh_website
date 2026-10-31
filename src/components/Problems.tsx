import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

const problems = [
  {
    n: "01",
    title: "You're Missing High-Intent Searches",
    summary: "Potential customers are looking for services like yours, but competing websites may be easier to find.",
    detail: "Weak technical SEO, thin service pages, or poor local visibility can keep you out of the conversation when buyers are actively searching Google for solutions in your area.",
  },
  {
    n: "02",
    title: "AI Search Is Changing How Buyers Compare Businesses",
    summary: "People increasingly use AI-powered tools to research services, shortlist providers, and understand options.",
    detail: "If your business facts, services, and entity information are unclear, inconsistent, or difficult to verify, AI answer systems like ChatGPT and Gemini will simply recommend your competitors.",
  },
  {
    n: "03",
    title: "Your Website Isn't Helping Visitors Take Action",
    summary: "Getting visitors to your website is only half the battle.",
    detail: "Slow pages, confusing navigation, weak calls to action, and poorly designed enquiry journeys cause prospective clients to bounce and call another provider instead.",
  },
  {
    n: "04",
    title: "Your Digital Presence Has No Connected Strategy",
    summary: "Activity without integration produces unpredictable results.",
    detail: "A website vendor, an isolated SEO provider, and disconnected content initiatives can leave you with plenty of marketing invoices but little clarity about what is actually driving qualified enquiries.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="relative py-8 sm:py-20 bg-ink overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Subtle dot bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="003" label="The challenge" light />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-4 sm:gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[28px] xs:text-[36px] sm:text-[60px] lg:text-[76px] leading-[1.0] sm:leading-[0.95] tracking-[-0.035em]">
              Being online doesn't mean <span className="font-serif-i italic text-[#ff5d3b]">you're</span>
              <br className="hidden sm:inline" />{" "}
              being found.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-[14px] sm:text-[17px] leading-relaxed text-bone/70" style={{ color: "rgba(245,241,234,.7)" }}>
              You may have a website. You may even have a strong business. But if customers cannot discover you when they are ready to compare options, that demand goes elsewhere.
            </p>
          </div>
        </div>

        {/* Problems list */}
        <div className="mt-5 sm:mt-16 border-t border-white/10 divide-y divide-white/10">
          {problems.map((p) => (
            <div key={p.n} className="py-3.5 sm:py-7 grid lg:grid-cols-12 gap-2 sm:gap-6 items-start hover:bg-white/[0.02] transition-colors px-1 sm:px-2 rounded-xl">
              <div className="lg:col-span-6 flex items-baseline gap-2.5 sm:gap-4">
                <span className="font-mono text-xs sm:text-[13px] text-[#ff5d3b] font-bold shrink-0">
                  {p.n}
                </span>
                <h3 className="font-display text-[16.5px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
                  {p.title}
                </h3>
              </div>
              <div className="lg:col-span-6 text-[13px] sm:text-[15px] text-bone/75 leading-relaxed font-sans pl-5 lg:pl-0" style={{ color: "rgba(245,241,234,.75)" }}>
                <p className="font-medium text-white/90 mb-0.5 sm:mb-1">{p.summary}</p>
                <p className="text-[12px] sm:text-[14px] text-bone/65">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition callout & CTA */}
        <div className="mt-6 sm:mt-16 rounded-xl sm:rounded-3xl bg-white text-ink p-4 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#1e2bc8] font-bold mb-1.5 sm:mb-2">
              [ The Solution ]
            </div>
            <div className="font-display text-lg sm:text-3xl font-bold tracking-tight text-[#0a0a0a]">
              The solution isn't more digital activity.
            </div>
            <p className="text-[12.5px] sm:text-[15px] text-ink/75 mt-1 sm:mt-2 leading-relaxed">
              It's a connected strategy that makes discovery, trust, and conversion work together to turn customer searches into qualified enquiries.
            </p>
          </div>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/contact");
            }}
            className="group inline-flex items-center justify-between sm:justify-start gap-3 rounded-full bg-[#0a0a0a] text-white pl-5 sm:pl-6 pr-2 py-2 sm:py-2.5 text-[12.5px] sm:text-[13px] font-semibold cursor-pointer active:scale-[0.98] transition hover:bg-[#1e2bc8] shrink-0 w-full md:w-auto"
          >
            <span>Find Out Where You're Losing Visibility</span>
            <span className="grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white text-[#0a0a0a] transition-transform group-hover:rotate-45 shrink-0">
              <svg viewBox="0 0 24 24" className="h-3 sm:h-3.5 w-3 sm:w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
