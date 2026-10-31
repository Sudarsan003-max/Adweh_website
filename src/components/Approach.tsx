import { useState, useEffect } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

const steps = [
  {
    step: "Step 1",
    phase: "Phase 01",
    n: "01",
    title: "Build a Strong Foundation",
    summary: "Your website is the foundation of your digital authority.",
    detail: "Create or improve a fast, accessible, security-conscious website with clear service architecture, reliable enquiry forms, and search-friendly technical foundations.",
    badge: "Technical Web Foundations",
    metric: "Site Health: 99.4%",
    label: "Foundation Health",
    tagline: "Architecture & Speed",
    deliverables: ["Core Web Vitals 95+", "Clean Service Architecture", "Fast Enquiry Pathways"],
    chart: [35, 50, 65, 72, 80, 88, 92, 96, 99],
  },
  {
    step: "Step 2",
    phase: "Phase 02",
    n: "02",
    title: "Capture Existing Demand",
    summary: "Reach buyers actively looking for what you provide.",
    detail: "Use SEO to improve visibility for the products, services, questions, and locations your prospective customers are already searching for every single day.",
    badge: "High-Intent SEO",
    metric: "Organic Reach: +380%",
    label: "Search Demand Index",
    tagline: "Capture Commercial Intent",
    deliverables: ["High-Intent Keywords", "Local & Regional SEO", "Qualified Inbound Traffic"],
    chart: [20, 32, 45, 55, 68, 76, 85, 98, 122],
  },
  {
    step: "Step 3",
    phase: "Phase 03",
    n: "03",
    title: "Prepare for AI-Powered Discovery",
    summary: "Make your business unambiguous to LLMs and search engines.",
    detail: "Use AIEO and GEO practices to make your expertise, services, and business facts clearer, better structured, and easier to corroborate across the web.",
    badge: "AIEO & GEO Synthesis",
    metric: "Referrals: +160%",
    label: "Trust Score",
    tagline: "AI Authority & Synthesis",
    deliverables: ["LLM Fact Corroboration", "Knowledge Graph Authority", "AI Answer Engine Citations"],
    chart: [40, 50, 45, 65, 70, 85, 95, 105, 120],
  },
  {
    step: "Step 4",
    phase: "Phase 04",
    n: "04",
    title: "Turn Attention Into Opportunity",
    summary: "Visibility only matters when it drives commercial action.",
    detail: "Strengthen page messaging, conversion pathways, and measurement so your team can understand what drives qualified enquiries and revenue.",
    badge: "Conversion & Measurement",
    metric: "Pipeline Yield: 4.8x",
    label: "Enquiry Conversion Rate",
    tagline: "Commercial Action",
    deliverables: ["Commercial Copy Strategy", "Frictionless Forms", "Full-Funnel Analytics"],
    chart: [15, 30, 45, 55, 70, 82, 98, 120, 145],
  },
];

const STEP_DURATION = 5000; // 5 seconds per step in loop

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play loop sequence through the 4 steps continuously
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, activeStep]);

  const active = steps[activeStep];

  return (
    <section id="opportunity" className="relative py-8 sm:py-24 bg-[#030712] text-bone overflow-hidden" style={{ background: "#060913", color: "#f5f1ea" }}>
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#1e2bc8]/12 blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] left-[15%] w-[380px] h-[380px] rounded-full bg-[#1b3bf5]/6 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-[340px] h-[340px] rounded-full bg-[#1b3bf5]/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="004" label="The ADWEH Approach" light />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold mb-2 sm:mb-3">
              [ THE FLYWHEEL ]
            </div>
            <h2 className="font-display text-[28px] xs:text-[36px] sm:text-[60px] lg:text-[76px] leading-[1.0] sm:leading-[0.95] tracking-[-0.035em] text-white">
              One connected system.
              <br className="hidden sm:inline" />{" "}
              From <span className="font-serif-i italic text-[#5c85ff]">search</span> to enquiry.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] sm:text-[17px] leading-relaxed text-bone/70" style={{ color: "rgba(245,241,234,.7)" }}>
              Your website is the foundation. Search and AI visibility bring relevant people to your business. Clear messaging and thoughtful user experience help those people take the next step.
            </p>
          </div>
        </div>

        {/* MacBook Container with Apple Laptop Design */}
        <div
          className="relative w-full max-w-[1140px] mx-auto mt-6 sm:mt-16 flex flex-col items-center group @container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Lid (MacBook Screen Outer Shell) */}
          <div className="relative w-full sm:w-[94%] lg:w-[92%] aspect-auto sm:aspect-[16/10] bg-gradient-to-b from-[#2e313d] via-[#101115] to-[#07080a] rounded-t-xl sm:rounded-t-[2.2cqi] p-2 sm:p-[1.1cqi] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.98),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(255,255,255,0.05)] border border-[#1b1c22] border-t-[#494e5e] border-b-[#0b0c0f] flex flex-col z-10">
            
            {/* Webcam & Sensors */}
            <div className="absolute top-[0.4%] left-1/2 -translate-x-1/2 flex items-center gap-[0.5cqi] pointer-events-none z-30">
              <div className="w-[0.14cqi] h-[0.14cqi] min-w-[2px] min-h-[2px] rounded-full bg-green-500/20" />
              <div className="w-[0.75cqi] h-[0.75cqi] min-w-[5px] min-h-[5px] sm:min-w-[6px] sm:min-h-[6px] rounded-full bg-[#030304] border border-white/10 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] relative">
                <div className="w-[0.3cqi] h-[0.3cqi] rounded-full bg-gradient-to-tr from-[#003c4f] to-[#01ffe1]/40 opacity-80" />
                <div className="absolute w-[0.12cqi] h-[0.12cqi] rounded-full bg-white/60 top-[20%] left-[20%]" />
              </div>
              <div className="w-[0.14cqi] h-[0.14cqi] min-w-[2px] min-h-[2px] rounded-full bg-[#07090d]" />
            </div>

            {/* Screen Content Viewport */}
            <div className="relative flex-1 bg-[#050814] rounded-lg sm:rounded-[0.5cqi] overflow-hidden border border-black shadow-[inset_0_4px_14px_rgba(0,0,0,0.9)] flex flex-col p-3 sm:p-[2.2cqi] lg:p-[2.8cqi] text-[#f5f1ea] select-none @container justify-between gap-3 sm:gap-0">
              
              {/* Internal Screen Background Ambient Glows & Grid */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1b3bf5]/12 via-[#050814] to-[#04060e] -z-10" />
              <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px] -z-10" />

              {/* Screen Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2 sm:pb-[1.2cqi] text-[max(8.5px,1.1cqi)] font-mono">
                <div className="flex items-center gap-2 sm:gap-[1.2cqi]">
                  <span className="font-semibold text-white tracking-wider flex items-center gap-1.5 sm:gap-[0.6cqi]">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1b3bf5] animate-ping" />
                    ADWEH SYSTEMS
                  </span>
                  <span className="opacity-40">/</span>
                  <span className="text-[#5c85ff] font-medium tracking-wide">
                    PLATFORM DEMO
                  </span>
                </div>

                {/* Step Tabs 01 02 03 04 */}
                <div className="flex items-center gap-1 sm:gap-[1cqi]">
                  {steps.map((s, idx) => {
                    const isCurrent = idx === activeStep;
                    return (
                      <button
                        key={s.n}
                        onClick={() => setActiveStep(idx)}
                        className={`transition hover:text-white cursor-pointer px-1.5 py-0.5 rounded text-[10px] sm:text-[max(8px,1cqi)] ${
                          isCurrent
                            ? "text-[#5c85ff] font-bold border-b border-[#5c85ff]"
                            : "text-white/45 hover:text-white/80"
                        }`}
                        title={s.title}
                      >
                        {s.n}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Looping Card Visualizer and Narrative - Responsive Mobile Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-[3cqi] items-stretch my-auto py-1 sm:py-[1cqi]">
                
                {/* Left Column: Metric Visualizer Card (Changes in Loops) */}
                <div
                  key={`card-${activeStep}`}
                  className="col-span-1 md:col-span-5 bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-[1cqi] p-3 sm:p-[2.2cqi] flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out"
                >
                  <div className="absolute top-0 right-0 w-24 sm:w-[10cqi] h-24 sm:h-[10cqi] bg-[#1b3bf5]/20 rounded-full blur-[22px] pointer-events-none" />

                  <div className="space-y-1 sm:space-y-[0.6cqi]">
                    <span className="inline-block text-[8px] sm:text-[max(6px,0.82cqi)] font-mono font-bold text-[#5c85ff] uppercase tracking-wider bg-[#1b3bf5]/15 px-2 py-0.5 sm:px-[1.2cqi] sm:py-[0.4cqi] rounded-full border border-[#1b3bf5]/30">
                      {active.badge}
                    </span>
                    <h4 className="text-base sm:text-[max(13px,2.2cqi)] font-display font-medium text-white tracking-tight leading-snug">
                      {active.title}<span className="text-[#5c85ff]">.</span>
                    </h4>
                    <p className="text-[11px] sm:text-[max(8px,1.15cqi)] text-[#f5f1ea]/60 leading-tight font-serif-i italic">
                      {active.summary}
                    </p>
                  </div>

                  {/* Chart / Analytics visualization with animated heights */}
                  <div className="h-16 sm:h-[8.5cqi] w-full mt-2 sm:mt-[1.2cqi] flex items-end justify-between gap-1 sm:gap-[0.5cqi]">
                    {active.chart.map((val, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-gradient-to-t from-[#1b3bf5] to-[#5c85ff]/60 rounded-[2px] sm:rounded-[0.2cqi] transition-all duration-700 ease-out origin-bottom shadow-[0_0_8px_rgba(27,59,245,0.3)]"
                        style={{
                          height: `${val * 0.65}%`,
                          transitionDelay: `${idx * 40}ms`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-2.5 sm:mt-[1.8cqi] border-t border-white/5 pt-2 sm:pt-[1.2cqi] flex items-center justify-between text-[11px] sm:text-[max(8px,1.05cqi)]">
                    <span className="text-[#f5f1ea]/50 font-mono text-[10px] sm:text-[max(7px,0.85cqi)]">{active.label}</span>
                    <span className="font-display font-bold text-white tracking-tight text-[#5c85ff]">{active.metric}</span>
                  </div>
                </div>

                {/* Right Column: Narrative workflow & impact */}
                <div
                  key={`narrative-${activeStep}`}
                  className="col-span-1 md:col-span-7 flex flex-col justify-between pl-0 md:pl-[1cqi] py-1 sm:py-[0.5cqi] transition-all duration-700 ease-out"
                >
                  <div className="space-y-1.5 sm:space-y-[1.4cqi]">
                    <div className="text-[9px] sm:text-[max(8px,0.95cqi)] font-mono text-white/40 tracking-widest uppercase">
                      [ SYSTEM STEP / {active.n} ]
                    </div>
                    <h3 className="text-base sm:text-[max(13px,2cqi)] font-display font-bold text-white leading-snug">
                      {active.title}
                    </h3>
                    <p className="text-[12px] sm:text-[max(10px,1.38cqi)] leading-relaxed text-[#f5f1ea]/80">
                      {active.detail}
                    </p>

                    {/* Step Deliverables Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-[0.5cqi] pt-1 sm:pt-[0.4cqi]">
                      {active.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[9.5px] sm:text-[max(7px,0.85cqi)] font-mono text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 sm:px-[0.8cqi] sm:py-[0.3cqi] rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stepper timeline tracking with loop progress indicator */}
                  <div className="mt-3 sm:mt-[2.5cqi] border-t border-white/10 pt-2 sm:pt-[1.8cqi] flex justify-between items-center">
                    <div className="flex gap-2 sm:gap-[0.8cqi] items-center">
                      {steps.map((_, idx) => {
                        const isCurrent = idx === activeStep;
                        return (
                          <div
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            className={`h-1 sm:h-[0.5cqi] rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ${
                              isCurrent ? "w-10 sm:w-[4.5cqi] bg-white/20" : "w-3 sm:w-[1.4cqi] bg-white/25 hover:bg-white/45"
                            }`}
                            title={`Step 0${idx + 1}`}
                          >
                            {isCurrent && (
                              <div
                                key={`progress-${activeStep}-${isPaused ? "paused" : "running"}`}
                                className="absolute inset-0 bg-[#1b3bf5] rounded-full origin-left"
                                style={{
                                  animation: isPaused ? "none" : `loopBar ${STEP_DURATION}ms linear forwards`,
                                  transformOrigin: "left",
                                }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-[9px] sm:text-[max(7px,0.88cqi)] font-mono text-[#f5f1ea]/40 flex items-center gap-1.5 sm:gap-[0.6cqi]">
                      <span>ACQUISITION SPEEDWAY</span>
                      <span className="inline-block w-1.5 h-1.5 sm:w-[0.8cqi] sm:h-[0.8cqi] rounded-full bg-[#1b3bf5] animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer status bar inside the screen */}
              <div className="flex items-center justify-between border-t border-white/10 pt-2 sm:pt-[1.2cqi] text-[8px] sm:text-[max(6px,0.85cqi)] font-mono text-white/35 tracking-widest uppercase">
                <span>SECURE WEB INFRASTRUCTURE</span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="hidden sm:inline text-[#5c85ff]/60">SEARCH TO ENQUIRY SYSTEM</span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span>ENTERPRISE-GRADE WEB SECURITY</span>
              </div>
            </div>

            {/* Screen glass reflection overlay with realistic diagonal glare */}
            <div className="absolute inset-2 sm:inset-[1.1cqi] rounded-lg sm:rounded-[0.5cqi] pointer-events-none z-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.08]" />
              <div
                className="absolute -inset-[50%] rotate-[25deg]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.11) 50%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0) 100%)",
                  transform: "translateY(-20%) translateX(15%) rotate(-35deg)",
                }}
              />
            </div>
          </div>

          {/* Hinge with 3D inset shadow */}
          <div className="w-[88%] h-2 sm:h-[1cqi] bg-gradient-to-b from-[#050608] via-[#101114] to-[#1a1b22] border-b border-black/80 relative z-20 shadow-[inset_0_4px_6px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.5)]" />

          {/* Base with 3D chamfered edge */}
          <div className="relative w-full h-4 sm:h-[2.2cqi] bg-gradient-to-b from-[#2d313d] via-[#14151a] to-[#08080a] rounded-b-xl sm:rounded-b-[1.4cqi] border-t border-[#3b3f4f] shadow-[0_25px_50px_-10px_rgba(0,0,0,0.9),0_10px_20px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] z-20 flex justify-center">
            {/* Top highlight light catcher on the base */}
            <div className="absolute top-0 left-0 right-0 h-[1px] sm:h-[0.15cqi] bg-gradient-to-r from-transparent via-white/25 to-transparent z-30" />

            {/* Opening notch */}
            <div className="w-[16%] h-[40%] bg-gradient-to-b from-[#050506] to-[#0e0f12] rounded-b-sm sm:rounded-b-[0.6cqi] border-t border-black/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Surface Glossy Reflection */}
          <div className="w-[108%] h-[100px] sm:h-[160px] bg-gradient-to-t from-transparent via-[#1b3bf5]/12 to-transparent absolute bottom-[-90px] sm:bottom-[-150px] blur-lg pointer-events-none -z-10 opacity-80" />
        </div>

        {/* Outcome Box */}
        <div className="mt-6 sm:mt-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 p-4 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <div>
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c85ff] font-bold mb-1">
              [ Clear Outcome ]
            </div>
            <div className="font-display text-base sm:text-2xl font-bold text-white">
              Less guesswork. More clarity about how customers discover your business—and what to improve next.
            </div>
          </div>

          <a
            href="/#services"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/#services");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0a0a0a] px-5 sm:px-6 py-2.5 sm:py-3 text-[12.5px] sm:text-[13px] font-semibold hover:bg-[#1e2bc8] hover:text-white transition shrink-0 cursor-pointer shadow-md w-full md:w-auto"
          >
            Explore Our Growth Services →
          </a>
        </div>
      </div>
    </section>
  );
}

