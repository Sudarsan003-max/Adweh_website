import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

const reasons = [
  {
    n: "01",
    title: "Commercial Thinking First",
    summary: "Targeting high-intent buyers, not vanity numbers.",
    desc: "We start with the customers you want, the searches that matter, and the actions you want visitors to take—not a generic checklist of vanity impressions and meaningless rankings.",
  },
  {
    n: "02",
    title: "Search and AI Visibility Together",
    summary: "One connected presence across Google and AI assistants.",
    desc: "Traditional search and AI-powered discovery increasingly influence the same buying journey. Our approach connects them instead of treating them as competing channels.",
  },
  {
    n: "03",
    title: "Websites Built for the Next Step",
    summary: "Converting visitors into qualified customer enquiries.",
    desc: "A website should do more than look professional. It should explain your offer with precision, establish undeniable credibility, and make it effortless for prospects to take the next step.",
  },
  {
    n: "04",
    title: "Transparent Priorities",
    summary: "Clear roadmaps and realistic expectations.",
    desc: "You should know exactly what is being improved, why it matters, and how progress will be reviewed. We focus on measurable signals and realistic expectations—no smoke and mirrors.",
  },
  {
    n: "05",
    title: "Security-Conscious Development",
    summary: "Rigorous standards and vulnerability awareness.",
    desc: "We use security-focused development and testing practices appropriate to the agreed scope. No website is risk-free, and compliance claims are never exaggerated without rigorous evidence.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-8 sm:py-20 bg-bone-2/40 overflow-hidden" style={{ background: "#ebe5da" }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="007" label="Why Work With Us" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3">
              [ THE ADWEH ADVANTAGE ]
            </div>
            <h2 className="font-display text-[30px] xs:text-[38px] sm:text-[60px] lg:text-[76px] leading-[0.98] sm:leading-[0.95] tracking-[-0.035em] text-ink">
              You don't need marketing jargon.{" "}
              <br className="hidden sm:inline" />
              You need a <span className="font-serif-i italic text-[#1e2bc8]">clearer path</span> to growth.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[14px] sm:text-[16px] leading-relaxed text-ink/75 font-sans">
              We replace agency buzzwords with clear commercial priorities, solid engineering, and measurable visibility across search and AI systems.
            </p>
          </div>
        </div>

        {/* 5 Reasons Grid */}
        <div className="mt-6 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {reasons.map((r) => (
            <div
              key={r.n}
              className="rounded-2xl sm:rounded-3xl border border-ink/10 bg-white p-4 sm:p-8 hover:border-[#1e2bc8] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-ink/5">
                  <span className="font-mono text-xs font-bold text-[#1e2bc8]">{r.n}</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-ink/40">Principle</span>
                </div>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-ink mt-3 sm:mt-4 tracking-tight leading-snug">
                  {r.title}
                </h3>
                <div className="text-xs font-semibold text-[#1e2bc8] mt-1 font-mono">
                  {r.summary}
                </div>
                <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-ink/70 font-sans">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Direct CTA card */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#0a0a0a] text-white p-4 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c85ff] font-bold mb-2">
                [ Next Step ]
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready to review your digital visibility?
              </h3>
              <p className="mt-2 sm:mt-3 text-[13px] sm:text-[13.5px] text-bone/70 leading-relaxed font-sans" style={{ color: "rgba(245,241,234,.7)" }}>
                Let's analyze where your business stands in Google search and AI assistant answers today.
              </p>
            </div>

            <div className="mt-4 sm:mt-6">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-full bg-white text-[#0a0a0a] px-5 py-2.5 sm:px-6 sm:py-3 text-[12.5px] sm:text-[13px] font-semibold hover:bg-[#1e2bc8] hover:text-white transition cursor-pointer text-center"
              >
                Talk to ADWEH About Your Growth Priorities →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
