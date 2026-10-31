import { useState } from "react";
import { navigateTo } from "../utils/navigation";
import isaacPortrait from "./isaac_portrait.png";
import isaacAvatar from "./isaac_avatar.png";

export default function Founder() {
  const [activeTab, setActiveTab] = useState("overview");

  const results = [
    "Engineered search and AI visibility systems across Google, ChatGPT, and Gemini, moving over 340+ competitive keywords into page one rankings.",
    "Integrated entity and schema architectures that earned direct brand citations and features in Google AI Overviews.",
    "Architected high-speed, security-conscious website infrastructure with clean conversion funnels that transform search traffic into qualified enquiries.",
    "Designed structured local SEO and multi-location map presence across high-competition metropolitan and regional markets.",
    "Audited digital visibility and designed execution roadmaps for healthcare clinics, real estate, hospitality, manufacturing, and commerce brands.",
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 text-ink">
      {/* Back button */}
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigateTo("/");
        }}
        className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] opacity-60 hover:opacity-100 hover:text-[#1e2bc8] transition duration-300 mb-8 cursor-pointer"
      >
        ← Back to Studio Home
      </a>

      {/* 1. Header: Immersive Editorial Split Card */}
      <div
        className="rounded-[32px] border border-ink/10 bg-[#ebe5da]/20 overflow-hidden shadow-sm relative flex flex-col md:flex-row"
        style={{ background: "rgba(235,229,218,.35)" }}
      >
        {/* Left Side: Dark Portrait block */}
        <div className="w-full md:w-80 bg-[#0a0a0a] relative flex items-center justify-center p-6 sm:p-8 shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1e2bc8]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Squircle Portrait with Frame */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-[40px_16px_40px_16px] bg-gradient-to-br from-[#1e2bc8]/20 to-[#4169e1]/20 blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -inset-1.5 rounded-[42px_18px_42px_18px] border border-white/10 bg-white/[0.02] backdrop-blur-sm pointer-events-none" />

            <div className="h-52 w-52 rounded-[40px_16px_40px_16px] overflow-hidden border border-white/20 bg-[#141414] shadow-2xl relative transition-all duration-700 hover:scale-[1.02]">
              <img
                src={isaacAvatar}
                alt="Isaac Vivian Portrait"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            <span className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#1e2bc8] rounded-tl-sm pointer-events-none" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#1e2bc8] rounded-tr-sm pointer-events-none" />
            <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#1e2bc8] rounded-bl-sm pointer-events-none" />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#1e2bc8] rounded-br-sm pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Profile Details */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#1e2bc8] font-bold block mb-2">
              FOUNDER / ADWEH
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-ink flex items-center gap-2">
              Isaac Vivian
            </h1>

            <p className="mt-2 text-[14px] sm:text-[15px] font-medium leading-relaxed text-ink/80 font-sans">
              Founder, ADWEH | Business Strategy • Search Visibility • Digital Growth
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Search Engine Optimization",
                "AI-Powered Discovery",
                "Website Strategy",
                "Conversion Systems",
                "Entity Architecture",
              ].map((label, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-[10.5px] font-mono font-medium tracking-wide border border-ink/10 bg-white/60 text-ink/75"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Footer details */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-5 border-t border-ink/5 mt-auto">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-mono text-ink/60">
              <span>Chennai, Tamil Nadu, India</span>
              <span>·</span>
              <span>BBA LLB (Hons.), SOEL</span>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#1e2bc8] text-white px-5 py-3 text-[12.5px] font-semibold hover:bg-[#0a0a0a] transition duration-200"
              >
                Discuss Your Business Visibility →
              </a>
              <a
                href="https://www.linkedin.com/in/isaac-vivian/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-3 text-[12.5px] font-medium hover:bg-black hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="mt-12 border-b border-ink/10 flex gap-4 md:gap-8 pb-px">
        {[
          { id: "overview", label: "Story & Philosophy" },
          { id: "experience", label: "Focus Areas & Background" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-3 font-display text-[15px] font-bold tracking-tight transition-all duration-200 focus:outline-none ${
              activeTab === tab.id ? "text-[#1e2bc8]" : "text-ink/50 hover:text-ink/80"
            }`}
          >
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e2bc8] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* 3. Tab Content */}
      <div className="mt-8">
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div
                className="rounded-3xl border border-ink/10 bg-[#ebe5da]/20 p-6 sm:p-8 shadow-sm"
                style={{ background: "rgba(235,229,218,.3)" }}
              >
                <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#1e2bc8] rounded-full" />
                  Connecting Discovery, Trust, and Action
                </h2>
                <div className="text-[14.5px] leading-relaxed text-ink/85 space-y-4 font-sans">
                  <p>
                    Isaac Vivian founded ADWEH around a practical belief: a business's digital presence should do more than exist. It should help the right customers discover the business, understand its value, and take the next step.
                  </p>
                  <p>
                    His approach combines commercial thinking, buyer psychology, digital strategy, and execution. Rather than treating SEO, AI visibility, and website development as isolated activities, he views them as connected parts of how a business becomes known and chosen.
                  </p>
                  <p>
                    At ADWEH, this thinking shapes the work: understand the customer, build a credible digital foundation, improve discoverability, and measure what matters.
                  </p>
                </div>
              </div>

              {/* Philosophy Callout Card */}
              <div className="rounded-3xl border border-[#1e2bc8]/25 bg-gradient-to-br from-paper to-[#1e2bc8]/5 p-8 relative overflow-hidden shadow-sm">
                <span className="font-serif text-[120px] text-[#1e2bc8]/10 absolute -top-10 -left-2 select-none pointer-events-none">“</span>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1e2bc8] font-bold mb-3 relative z-10">
                  [ The Philosophy ]
                </div>
                <blockquote className="font-serif-i text-[20px] sm:text-[23px] leading-relaxed text-ink/90 relative z-10 font-semibold">
                  A business doesn't grow because it has a website. It grows when the right people can find it, trust it, and act.
                </blockquote>
                <p className="mt-3 text-[14px] text-ink/75 font-sans relative z-10">
                  Search habits change. Technology changes. The fundamentals of trust, relevance, and customer value remain.
                </p>
              </div>
            </div>

            {/* Right Side: Photo Showcase & Credentials */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-ink/10 bg-[#0a0a0a] overflow-hidden shadow-md relative group">
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <img
                    src={isaacPortrait}
                    alt="Isaac Vivian — Founder, ADWEH"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#5c85ff] font-bold block mb-1">
                      Founder Profile
                    </span>
                    <p className="text-white text-xs sm:text-[13px] font-medium font-sans">
                      Isaac Vivian — Founder &amp; Growth Strategist, ADWEH
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-3xl border border-ink/10 bg-[#ebe5da]/20 p-6"
                style={{ background: "rgba(235,229,218,.3)" }}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#1e2bc8] font-bold mb-2">
                  Academic Background
                </div>
                <h3 className="font-display text-lg font-bold text-ink">BBA LLB (Hons.)</h3>
                <p className="text-xs text-ink/70 font-mono mt-0.5">
                  School of Excellence in Law, Dr. Ambedkar Law University
                </p>
                <p className="mt-3 text-xs text-ink/75 leading-relaxed font-sans">
                  Rigorous foundation in commercial contracts, corporate compliance, regulatory clarity, and structured analytical problem-solving.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#1e2bc8] rounded-full" />
                Areas of Focus
              </h2>
              {[
                { title: "Search Engine Optimization", desc: "Technical foundations, search intent mapping, and local discovery that bring qualified buyers into your funnel." },
                { title: "AI-Powered Discovery", desc: "Clarity, entity structure, and authoritative citations so AI assistants like ChatGPT and Gemini surface your business." },
                { title: "Website Strategy", desc: "Conversion pathways, semantic hierarchy, and mobile performance designed to guide visitors toward action." },
                { title: "Conversion-Oriented Communication", desc: "Messaging that establishes clear value propositions and overcomes buyer hesitation." },
                { title: "Commercial Growth Systems", desc: "Connecting lead volume to pipeline velocity and measurable commercial return." },
              ].map((f, i) => (
                <div key={i} className="rounded-2xl border border-ink/10 bg-white p-5">
                  <div className="font-display font-bold text-[16px] text-ink">{f.title}</div>
                  <p className="text-xs text-ink/75 mt-1 leading-relaxed font-sans">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#1e2bc8] rounded-full" />
                Verified Milestones
              </h2>
              {results.map((r, idx) => (
                <div key={idx} className="rounded-2xl border border-ink/5 bg-paper p-4 text-xs leading-relaxed text-ink/80 flex items-start gap-3">
                  <span className="font-mono text-[10px] text-[#1e2bc8] font-bold mt-0.5 shrink-0">0{idx + 1}</span>
                  <p className="font-sans">{r}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
