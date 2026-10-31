import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { SearchDemo, Lightbox } from "./CaseStudies/CaseStudies";
import { CASE_STUDIES, PROOF, whatsappLink } from "./CaseStudies/caseStudiesData";
import type { Shot } from "./CaseStudies/caseStudiesData";

export default function Testimonials() {
  const [openShot, setOpenShot] = useState<Shot | null>(null);

  return (
    <section id="results" className="relative py-8 sm:py-20 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="009" label="Verified Results & Evidence" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3">
              [ REAL SCREENSHOTS · MEASURABLE OUTCOMES ]
            </div>
            <h2 className="font-display text-[30px] xs:text-[38px] sm:text-[60px] lg:text-[76px] leading-[0.98] sm:leading-[0.95] tracking-[-0.035em] text-ink">
              Real businesses.{" "}
              <br className="hidden sm:inline" />
              Real Google &amp; <span className="font-serif-i italic text-[#1e2bc8]">AI rankings.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[14px] sm:text-[16px] leading-relaxed text-ink/75 font-sans">
              No unverified client names or hypothetical testimonials. Every result below is documented with actual screenshots from Google, ChatGPT, and Gemini.
            </p>
          </div>
        </div>

        {/* Proof metrics bar */}
        <div className="mt-6 sm:mt-12 rounded-2xl bg-[#0a0a0a] text-white p-4 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROOF.map((p, idx) => (
            <div key={idx} className="border-l border-white/10 pl-3 sm:pl-4">
              <div className="font-display text-2xl sm:text-4xl font-extrabold text-[#5c85ff] tracking-tight">
                {p.n}
              </div>
              <div className="mt-1 text-[10.5px] sm:text-[12px] font-mono text-bone/60 leading-tight">
                {p.l}
              </div>
            </div>
          ))}
        </div>

        {/* Live Search Query Simulation Box */}
        <div className="mt-6 sm:mt-14">
          <div className="text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-2 font-bold">
            Live Search Query Simulation:
          </div>
          <SearchDemo />
        </div>

        {/* 5 Verified Case Studies Cards Grid */}
        <div className="mt-6 sm:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CASE_STUDIES.map((c) => {
            const topShot = c.shots[0];
            return (
              <div
                key={c.id}
                className="rounded-2xl sm:rounded-3xl border border-ink/10 bg-white p-4 sm:p-7 hover:border-[#1e2bc8] hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-ink/5">
                    <span className="font-display text-base sm:text-lg font-bold text-ink">
                      {c.name}
                    </span>
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-paper border border-ink/10 text-ink/60">
                      Verified Case
                    </span>
                  </div>

                  <p className="mt-2 text-[10.5px] sm:text-[11px] font-mono text-ink/50">
                    {c.meta}
                  </p>

                  <p className="mt-2.5 sm:mt-3 text-[12.5px] sm:text-[13px] text-ink/80 leading-relaxed font-sans line-clamp-3">
                    {c.intro.replace(/==/g, "")}
                  </p>

                  {/* Before / After snapshot pill if available */}
                  {c.before && c.after && (
                    <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 bg-paper p-2.5 sm:p-3 rounded-xl border border-ink/5 text-center">
                      <div>
                        <div className="text-[9px] font-mono text-ink/50">{c.before.label}</div>
                        <div className="text-sm font-bold text-ink">{c.before.big}</div>
                        <div className="text-[10px] text-ink/60 truncate">{c.before.text}</div>
                      </div>
                      <div className="border-l border-ink/10 pl-2">
                        <div className="text-[9px] font-mono text-[#1e2bc8] font-bold">{c.after.label}</div>
                        <div className="text-sm font-bold text-[#1e2bc8]">{c.after.big}</div>
                        <div className="text-[10px] text-ink/60 truncate">{c.after.text}</div>
                      </div>
                    </div>
                  )}

                  {/* Screenshot Thumbnail with zoom prompt */}
                  {topShot && (
                    <div className="mt-3 sm:mt-4">
                      <button
                        type="button"
                        onClick={() => setOpenShot(topShot)}
                        className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-ink/10 relative group/img cursor-zoom-in bg-black"
                      >
                        <img
                          src={topShot.src}
                          alt={topShot.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-semibold">
                          🔍 Click to Enlarge Screenshot
                        </div>
                      </button>
                      <div className="mt-1 text-[11px] text-ink/60 font-mono truncate">
                        <strong>{topShot.title}:</strong> {topShot.query}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-ink/10 flex items-center justify-between">
                  <a
                    href="/results"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/results");
                    }}
                    className="text-xs font-bold text-[#1e2bc8] hover:text-[#0a0a0a] transition-colors"
                  >
                    Read full case study &amp; data →
                  </a>
                  <span className="text-[10px] font-mono text-ink/40">{c.shots.length} Screenshots</span>
                </div>
              </div>
            );
          })}

          {/* Callout Card to View All Results */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#1e2bc8] text-white p-4 sm:p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 font-bold mb-2">
                [ Free Visibility Assessment ]
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Want to see what prospective customers see for your business?
              </h3>
              <p className="mt-2 sm:mt-3 text-[12.5px] sm:text-[13px] text-white/80 leading-relaxed font-sans">
                Send us your business or clinic name and your three most important services. We'll search Google, ChatGPT, and Gemini and send you the actual screenshots.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 space-y-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-full bg-white text-[#0a0a0a] px-4 py-2.5 sm:px-5 sm:py-3 text-xs font-bold hover:bg-[#0a0a0a] hover:text-white transition shadow-md"
              >
                Get My Visibility Check on WhatsApp →
              </a>
              <a
                href="/results"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/results");
                }}
                className="block text-center rounded-full border border-white/30 text-white px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold hover:bg-white/10 transition"
              >
                View Dedicated Results Page →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />
    </section>
  );
}
