import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { SearchDemo, Lightbox } from "./CaseStudies/CaseStudies";
import { CASE_STUDIES, PROOF, whatsappLink } from "./CaseStudies/caseStudiesData";
import type { Shot } from "./CaseStudies/caseStudiesData";
import { ChevronDown, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const [openShot, setOpenShot] = useState<Shot | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="results" className="relative py-10 sm:py-24 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="009" label="Verified Results & Evidence" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1e2bc8]" />
              <span>[ REAL SCREENSHOTS · MEASURABLE OUTCOMES ]</span>
            </div>
            <h2 className="font-display text-[30px] xs:text-[40px] sm:text-[62px] lg:text-[76px] leading-[1.0] sm:leading-[0.94] tracking-[-0.035em] text-ink font-bold">
              Real businesses.{" "}
              <br className="hidden sm:inline" />
              Real Google &amp;{" "}
              <span className="font-serif-i italic text-[#1e2bc8] font-normal">
                AI rankings.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[14px] sm:text-[16px] leading-relaxed text-ink/75 font-sans">
              No unverified client names or hypothetical testimonials. Every result below is documented with actual screenshots from Google, ChatGPT, and Gemini.
            </p>
          </div>
        </div>

        {/* Proof metrics bar */}
        <div className="mt-8 sm:mt-14 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] text-white p-5 sm:p-9 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 shadow-xl">
          {PROOF.map((p, idx) => (
            <div key={idx} className="border-l-2 border-[#5c85ff] pl-3.5 sm:pl-5">
              <div className="font-display text-3xl sm:text-5xl font-extrabold text-[#5c85ff] tracking-tight">
                {p.n}
              </div>
              <div className="mt-1 text-[11px] sm:text-[13px] font-mono text-bone/70 leading-snug">
                {p.l}
              </div>
            </div>
          ))}
        </div>

        {/* Live Search Query Simulation Box */}
        <div className="mt-8 sm:mt-14">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-ink/70 mb-2.5 font-bold">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Search Query Simulation:</span>
            </div>
            <span className="text-ink/40 text-[10px] hidden sm:inline">Updated Real-Time Attribution</span>
          </div>
          <SearchDemo />
        </div>

        {/* 5 Verified Case Studies Cards Grid */}
        <div className="mt-8 sm:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {CASE_STUDIES.map((c, idx) => {
            const topShot = c.shots[0];
            const isHiddenOnMobile = !showAllMobile && idx >= 2;
            const isCardExpanded = !!expandedCards[c.id];

            return (
              <div
                key={c.id}
                className={`rounded-2xl sm:rounded-3xl border border-ink/10 bg-white p-5 sm:p-7 shadow-sm hover:border-[#1e2bc8]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  isHiddenOnMobile ? "hidden md:flex" : "flex"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-ink/5">
                    <span className="font-display text-lg sm:text-xl font-bold text-ink group-hover:text-[#1e2bc8] transition-colors">
                      {c.name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Verified Case</span>
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] font-mono text-ink/60">
                    {c.meta}
                  </p>

                  <p className="mt-3 text-[13px] sm:text-[13.5px] text-ink/80 leading-relaxed font-sans line-clamp-3">
                    {c.intro.replace(/==/g, "")}
                  </p>

                  {/* Before / After snapshot pill */}
                  {c.before && c.after && (
                    <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 bg-paper p-3 rounded-xl border border-ink/10 text-center">
                      <div>
                        <div className="text-[9.5px] font-mono text-ink/50 uppercase font-semibold">
                          {c.before.label}
                        </div>
                        <div className="text-base sm:text-lg font-bold text-ink mt-0.5">
                          {c.before.big}
                        </div>
                        <div className="text-[10.5px] text-ink/60 truncate font-mono">
                          {c.before.text}
                        </div>
                      </div>
                      <div className="border-l border-ink/10 pl-2">
                        <div className="text-[9.5px] font-mono text-[#1e2bc8] font-bold uppercase">
                          {c.after.label}
                        </div>
                        <div className="text-base sm:text-lg font-bold text-[#1e2bc8] mt-0.5">
                          {c.after.big}
                        </div>
                        <div className="text-[10.5px] text-[#1e2bc8]/80 truncate font-mono">
                          {c.after.text}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile toggle for Screenshot & details */}
                  {topShot && (
                    <div className="mt-3">
                      <div className="md:hidden mb-2">
                        <button
                          type="button"
                          onClick={() => toggleCard(c.id)}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#1e2bc8] font-bold"
                        >
                          <span>{isCardExpanded ? "Hide Screenshot" : "Inspect Ranking Screenshot"}</span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform ${
                              isCardExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Screenshot Container - Always on desktop; expandable on mobile */}
                      <div className={`md:block ${isCardExpanded ? "block" : "hidden md:block"}`}>
                        <button
                          type="button"
                          onClick={() => setOpenShot(topShot)}
                          className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-ink/10 relative group/img cursor-zoom-in bg-black block shadow-xs"
                        >
                          <img
                            src={topShot.src}
                            alt={topShot.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-semibold gap-1.5">
                            <ExternalLink className="h-4 w-4" />
                            <span>Click to Inspect Screenshot</span>
                          </div>
                        </button>
                        <div className="mt-1.5 text-[11px] text-ink/70 font-mono truncate">
                          <strong className="text-ink">{topShot.title}:</strong> {topShot.query}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-ink/10 flex items-center justify-between">
                  <a
                    href="/results"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/results");
                    }}
                    className="group/link text-xs sm:text-[13px] font-bold text-[#1e2bc8] hover:text-[#0a0a0a] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Read full case study &amp; data</span>
                    <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[10px] font-mono text-ink/40">
                    {c.shots.length} Screenshots
                  </span>
                </div>
              </div>
            );
          })}

          {/* Callout Card to View All Results */}
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1e2bc8] to-[#121c9c] text-white p-5 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 font-bold mb-2">
                [ Free Visibility Assessment ]
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Want to see what prospective customers see for your business?
              </h3>
              <p className="mt-3 text-[13px] sm:text-[13.5px] text-white/80 leading-relaxed font-sans">
                Send us your business or clinic name and your three most important services. We'll search Google, ChatGPT, and Gemini and send you the actual screenshots.
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-full bg-white text-[#0a0a0a] px-5 py-3 text-xs sm:text-[13px] font-bold hover:bg-[#0a0a0a] hover:text-white transition shadow-md active:scale-95"
              >
                Get My Visibility Check on WhatsApp →
              </a>
              <a
                href="/results"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/results");
                }}
                className="block text-center rounded-full border border-white/30 text-white px-5 py-2.5 text-xs font-semibold hover:bg-white/10 transition"
              >
                View Dedicated Results Page →
              </a>
            </div>
          </div>
        </div>

        {/* Mobile View Toggle: Show More / Show Less */}
        <div className="mt-6 md:hidden text-center">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink/20 bg-white font-mono text-xs font-bold text-ink shadow-sm active:scale-95 transition-all"
          >
            <span>
              {showAllMobile
                ? "Show Less Case Studies ↑"
                : "Show All 5 Verified Case Studies (3 more) ↓"}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-[#1e2bc8] transition-transform duration-200 ${
                showAllMobile ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />
    </section>
  );
}
