import { useEffect, useRef, useState } from "react";
import isaacHeadshot from "./isaac_headshot.png";
import { navigateTo } from "../utils/navigation";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const pillars = [
    { label: "Search Engine Optimization (SEO)", status: "CORE FOUNDATION", desc: "Attracting customers actively searching for your services" },
    { label: "AI Engine Optimization (AIEO)", status: "ASSISTANT DISCOVERY", desc: "Clarity and entity corroboration for ChatGPT, Perplexity & Claude" },
    { label: "Generative Engine Optimization (GEO)", status: "GENERATIVE CITATIONS", desc: "Structured authority signals for Google AI Overviews & Gemini" },
    { label: "Security-Focused Web Development", status: "RIGOROUS BUILD", desc: "Fast, accessible, and conversion-engineered web architecture" },
  ];

  return (
    <section id="about" className="relative py-8 sm:py-20 overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="002" label="About the studio" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-14 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[28px] xs:text-[36px] sm:text-[60px] lg:text-[76px] leading-[1.0] sm:leading-[0.95] tracking-[-0.035em] text-ink">
              Built for the way customers <span className="font-serif-i italic text-[#1e2bc8]">discover</span>
              <br className="hidden sm:inline" />{" "}
              businesses now.
            </h2>

            <div className="mt-4 sm:mt-8 space-y-3 sm:space-y-4 max-w-2xl text-[14px] sm:text-[17px] leading-[1.55] sm:leading-[1.6] text-ink/80 font-sans">
              <p>
                ADWEH is a specialized digital visibility and website development partner based in Chennai, India. We help growing businesses improve how they are found, understood, and evaluated across search engines, AI-powered discovery, and their own websites.
              </p>
              <p>
                We combine search strategy, structured content, technical optimization, and security-focused web development. Our work begins with a simple question:
              </p>
              <blockquote className="border-l-4 border-[#1e2bc8] pl-3.5 sm:pl-4 py-1 font-serif-i text-[16px] sm:text-[21px] text-ink font-semibold">
                “When a potential customer looks for a business like yours, what will they find—and what will make them choose you?”
              </blockquote>
            </div>

            {/* Mission, Vision, Principle Bento */}
            <div className="mt-5 sm:mt-10 grid sm:grid-cols-3 gap-2.5 sm:gap-4">
              <div className="rounded-xl sm:rounded-2xl border border-ink/15 p-3.5 sm:p-5 bg-bone-2/40 lift" style={{ background: "rgba(235,229,218,.45)" }}>
                <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#1e2bc8] font-bold">[ Our Mission ]</div>
                <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-ink/80">
                  Help ambitious businesses become easier to discover and easier to trust through practical, integrated search and website solutions.
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-ink/15 p-3.5 sm:p-5 bg-bone-2/40 lift" style={{ background: "rgba(235,229,218,.45)" }}>
                <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#1e2bc8] font-bold">[ Our Vision ]</div>
                <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-ink/80">
                  Make modern search and AI discovery more understandable, measurable, and commercially useful for the businesses we serve.
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-ink/15 p-3.5 sm:p-5 bg-bone-2/40 lift" style={{ background: "rgba(235,229,218,.45)" }}>
                <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#1e2bc8] font-bold">[ Our Principle ]</div>
                <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-ink/80">
                  Clarity over complexity. Credibility over inflated promises. Execution over noise.
                </p>
              </div>
            </div>

            {/* Meet the founder button */}
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
              <a
                href="/founder"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/founder");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0a0a] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-[12.5px] sm:text-[13px] font-semibold hover:bg-[#1e2bc8] transition cursor-pointer shadow-md w-full sm:w-auto"
              >
                Meet the Founder →
              </a>
              <span className="text-[11px] sm:text-xs font-mono text-ink/50">Isaac Vivian · Chennai, India</span>
            </div>
          </div>

          {/* Right column: Integrated capabilities card & Founder Profile */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-5 mt-2 lg:mt-0">
            {/* Dark Studio Overview Card */}
            <div className="rounded-2xl sm:rounded-[28px] bg-[#0a0a0a] p-4 sm:p-8 text-bone border border-white/10 shadow-2xl relative overflow-hidden" style={{ color: "#f5f1ea" }}>
              <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-semibold">
                [ Integrated Execution ]
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                One Connected Presence
              </h3>
              <p className="text-[12.5px] sm:text-[13.5px] leading-relaxed text-bone/70 mt-1.5 sm:mt-2 font-sans">
                Search, AI systems, and website experience cannot succeed in silos. We connect all four capabilities into a single cohesive flywheel:
              </p>

              <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                {pillars.map((p, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-3.5 hover:border-white/20 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] sm:text-[12.5px] font-bold text-white">{p.label}</span>
                      <span className="text-[7.5px] sm:text-[8px] font-mono uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-white/10 text-[#5c85ff]">
                        {p.status}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-[11.5px] text-bone/60 mt-0.5 sm:mt-1">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Bento Card */}
            <div
              className="rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border bg-white border-ink/10 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:border-[#1e2bc8] hover:shadow-md transition-all"
              onClick={() => navigateTo("/founder")}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-full overflow-hidden border-2 border-[#1e2bc8]/30 shadow-sm">
                  <img src={isaacHeadshot} alt="Isaac Vivian" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-display text-base sm:text-lg font-bold text-ink">Isaac Vivian</div>
                  <div className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-ink/60">Founder, ADWEH</div>
                  <div className="text-[10.5px] sm:text-[11px] text-[#1e2bc8] font-semibold mt-0.5">Read Founder Story &amp; Philosophy →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ n, label, light }: { n: string; label: string; light?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between border-b pb-3 sm:pb-4 ${
        light ? "border-bone/20 text-bone" : "border-ink/15 text-ink"
      }`}
      style={light ? { borderColor: "rgba(245,241,234,.2)", color: "#f5f1ea" } : {}}
    >
      <div className="flex items-center gap-2.5 sm:gap-3 text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.22em]">
        <span
          className={`grid place-items-center h-6 w-6 rounded-full text-[9px] ${
            light ? "bg-bone text-ink" : "bg-ink text-bone"
          }`}
          style={
            light
              ? { background: "#f5f1ea", color: "#0a0a0a" }
              : { background: "#0a0a0a", color: "#f5f1ea" }
          }
        >
          §
        </span>
        <span className="opacity-60">{n}</span>
        <span>/</span>
        <span className="font-semibold tracking-widest">{label}</span>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">
        <span>scroll</span>
        <span>↓</span>
      </div>
    </div>
  );
}
