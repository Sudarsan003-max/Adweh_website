import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";

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
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section id="why" className="relative py-10 sm:py-24 overflow-hidden" style={{ background: "#ebe5da" }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="007" label="Why Work With Us" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1e2bc8]" />
              <span>[ THE ADWEH ADVANTAGE ]</span>
            </div>
            <h2 className="font-display text-[30px] xs:text-[40px] sm:text-[62px] lg:text-[76px] leading-[1.0] sm:leading-[0.94] tracking-[-0.035em] text-ink font-bold">
              You don't need marketing jargon.{" "}
              <br className="hidden sm:inline" />
              You need a{" "}
              <span className="font-serif-i italic text-[#1e2bc8] font-normal">
                clearer path
              </span>{" "}
              to growth.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[14px] sm:text-[16px] leading-relaxed text-ink/75 font-sans">
              We replace agency buzzwords with clear commercial priorities, solid engineering, and measurable visibility across search and AI systems.
            </p>
          </div>
        </div>

        {/* 5 Reasons Grid */}
        <div className="mt-8 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((r, idx) => {
            const isHiddenOnMobile = !showAllMobile && idx >= 3;

            return (
              <div
                key={r.n}
                className={`rounded-2xl sm:rounded-3xl border border-ink/10 bg-white p-5 sm:p-8 shadow-sm hover:border-[#1e2bc8]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  isHiddenOnMobile ? "hidden sm:flex" : "flex"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-ink/5">
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-[#1e2bc8]/10 text-[#1e2bc8] font-mono text-xs font-bold">
                      {r.n}
                    </span>
                    <span className="text-[9.5px] font-mono uppercase tracking-widest text-ink/40 bg-paper px-2 py-0.5 rounded border border-ink/5">
                      Principle
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-2xl font-bold text-ink mt-4 tracking-tight leading-snug group-hover:text-[#1e2bc8] transition-colors">
                    {r.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#1e2bc8] mt-1.5 font-mono">
                    {r.summary}
                  </div>

                  <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-ink/70 font-sans">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Direct CTA card */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#0a0a0a] text-white p-5 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c85ff] font-bold mb-2 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>[ Next Step ]</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Ready to review your digital visibility?
              </h3>
              <p className="mt-3 text-[13px] sm:text-[13.5px] text-bone/70 leading-relaxed font-sans" style={{ color: "rgba(245,241,234,.7)" }}>
                Let's analyze where your business stands in Google search and AI assistant answers today.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-[#1e2bc8] hover:bg-white hover:text-ink text-white px-5 py-3 text-xs sm:text-[13px] font-bold transition w-full shadow-md active:scale-95"
              >
                <span>Request Your Free Assessment</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile View Toggle: Show More / Show Less */}
        <div className="mt-6 sm:hidden text-center">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink/20 bg-white font-mono text-xs font-bold text-ink shadow-sm active:scale-95 transition-all"
          >
            <span>
              {showAllMobile
                ? "Show Less Principles ↑"
                : "Show All 5 Principles (2 more) ↓"}
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
