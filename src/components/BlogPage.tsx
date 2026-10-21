import { useState, useEffect } from "react";
import { navigateTo } from "../utils/navigation";

interface ArticleItem {
  category: "AIEO" | "GEO" | "SEO" | "Website Development";
  title: string;
  excerpt: string;
  url: string;
}

const ALL_ARTICLES: ArticleItem[] = [
  {
    category: "AIEO",
    title: "AIEO for Healthcare: Getting Recommended by ChatGPT & Perplexity",
    excerpt: "Learn how healthcare clinics optimize entities, knowledge graphs, and clinical citations to earn direct recommendations in conversational AI models.",
    url: "https://adweh.com/aieo-healthcare-chatgpt-perplexity/",
  },
  {
    category: "GEO",
    title: "Generative Engine Optimization: Optimizing for Google AI Overviews",
    excerpt: "The complete guide to GEO for clinics — structuring medical answers, passage schemas, and factual attribution for Gemini snapshots.",
    url: "https://adweh.com/geo-google-ai-overviews-clinics/",
  },
  {
    category: "SEO",
    title: "Local SEO for Clinics: Improving Google Maps Visibility",
    excerpt: "How to optimize your medical practice for Google Maps local search and generate consistent organic patient inquiries.",
    url: "https://adweh.com/local-seo-for-clinics-india/",
  },
  {
    category: "Website Development",
    title: "Cybersecurity-Focused Development for Healthcare Platforms",
    excerpt: "Building clinical websites using security-conscious development practices, strict headers, data encryption, and HIPAA compliance.",
    url: "https://adweh.com/cybersecurity-focused-website-development-healthcare/",
  },
  {
    category: "Website Development",
    title: "Secure Website Building and Vulnerability Testing",
    excerpt: "How to develop and test medical websites to identify vulnerabilities, harden lead intake endpoints, and improve patient data security.",
    url: "https://adweh.com/secure-website-building-testing-vulnerabilities/",
  },
  {
    category: "Website Development",
    title: "Building Websites Optimized for SEO, AIEO, and GEO",
    excerpt: "Engineering healthcare digital infrastructure from the ground up for search engines, AI-powered search, and generative engine discovery.",
    url: "https://adweh.com/websites-optimized-seo-aieo-geo/",
  },
  {
    category: "AIEO",
    title: "Conversational Query Targeting in Medical AI Engines",
    excerpt: "How patients search using natural language prompts and how clinics optimize semantic authority to capture conversational intent.",
    url: "https://adweh.com/conversational-query-targeting-aieo/",
  },
  {
    category: "GEO",
    title: "Medical Knowledge Graphs & Citation Authority for GEO",
    excerpt: "How to build and connect authoritative medical citations and schema structures that generative search engines trust.",
    url: "https://adweh.com/medical-knowledge-graphs-citations-geo/",
  },
  {
    category: "SEO",
    title: "High-Intent Keyword Architecture for Medical Practices",
    excerpt: "Targeting high-converting, local healthcare search terms that drive scheduled clinical consultations.",
    url: "https://adweh.com/high-intent-keyword-architecture-seo/",
  },
  {
    category: "SEO",
    title: "Online Reputation & Review Signals for Local Search Visibility",
    excerpt: "How to build and protect a strong Google review profile to maximize organic click-through and local search authority.",
    url: "https://adweh.com/online-reputation-management-doctors-india/",
  },
  {
    category: "AIEO",
    title: "Brand Sentiment & Entity Anchoring Across AI Assistants",
    excerpt: "Auditing and reinforcing positive clinical recommendations across major conversational AI models and LLM engines.",
    url: "https://adweh.com/brand-sentiment-entity-anchoring-aieo/",
  },
  {
    category: "GEO",
    title: "Search Engines vs Generative Engines: The Future of Patient Search",
    excerpt: "A complete analysis of how generative AI summaries are reshaping medical patient discovery and clinic choice.",
    url: "https://adweh.com/search-engines-vs-generative-engines-healthcare/",
  },
];

const CHANNELS = [
  {
    num: "01",
    title: "AIEO (AI Engine Optimization)",
    desc: "Earn direct clinic citations and entity recommendations across ChatGPT, Claude, and Perplexity when prospective patients ask AI assistants for care.",
    badge: "AI CITATIONS",
    metric: "Top AI Citations",
  },
  {
    num: "02",
    title: "GEO (Generative Engine Optimization)",
    desc: "Structure medical citations, clinical facts, and knowledge graphs for featured synthesis inside Google AI Overviews and Gemini search snapshots.",
    badge: "GENERATIVE SEARCH",
    metric: "AI Overviews Ready",
  },
  {
    num: "03",
    title: "SEO (Search Engine Optimization)",
    desc: "Optimize Google Maps local presence and high-intent clinical search keywords to capture qualified patient inquiries.",
    badge: "ORGANIC POWER",
    metric: "Local Search",
  },
  {
    num: "04",
    title: "Website Development",
    desc: "Cybersecurity-focused development, secure website building and vulnerability testing, fully optimized for search engines, AIEO, and generative discovery.",
    badge: "SECURE WEB",
    metric: "HIPAA Hardened",
  },
];

export default function BlogPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredArticles = selectedFilter === "ALL"
    ? ALL_ARTICLES
    : ALL_ARTICLES.filter((a) => a.category === selectedFilter);

  return (
    <section className="relative py-8 sm:py-14 px-4 sm:px-6 min-h-screen bg-ink overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Background Glow */}
      <div className="absolute top-24 left-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#0000cd]/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top Header & Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em]">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-bone text-ink text-[9px] font-bold" style={{ background: "#f5f1ea", color: "#0a0a0a" }}>
              §
            </span>
            <span className="opacity-60">009</span>
            <span>/</span>
            <span className="text-white">Insights & Guides</span>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 sm:px-5 py-2 text-[11px] sm:text-[12px] font-semibold hover:bg-white hover:text-ink transition duration-300 cursor-pointer active:scale-95"
            style={{ color: "#f5f1ea" }}
          >
            ← Back to Home
          </a>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#0000cd] mb-3">[ ADWEH Intelligence · 2026 ]</div>
          <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-bone">
            Insights & Guides for <span className="font-serif-i text-[#0000cd]">Healthcare Growth</span>
          </h1>
          <p className="mt-3.5 sm:mt-5 text-[14px] sm:text-[16px] leading-relaxed text-bone/70">
            Actionable playbooks, strategic frameworks, and technical teardowns on AIEO, GEO, SEO, and cybersecurity-focused website development for ambitious clinics and healthcare leaders.
          </p>
        </div>

        {/* Featured Post Card + Core Pillars Grid */}
        <div className="mt-8 sm:mt-12 grid lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left Column: Featured Post Card */}
          <div className="lg:col-span-5">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/70 mb-3">[ Featured Case Study ]</div>
            
            <div className="group relative rounded-2xl sm:rounded-[28px] bg-white/[0.02] border border-white/10 p-5 sm:p-7 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0000cd]/20 border border-[#0000cd]/30 px-3 py-1 text-[9.5px] font-mono text-white uppercase tracking-[0.1em]">
                PATIENT ACQUISITION · CASE STUDY
              </span>
              
              <h2 className="mt-4 sm:mt-5 font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight text-bone">
                How Aesthetic Clinics in India Are Getting <span className="font-serif-i text-[#0000cd]">3x More Patients</span> Using AIEO, GEO, SEO & Secure Web
              </h2>
              
              <p className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-bone/70">
                Picture this: two clinics in the same city, offering the same treatments. One is fully booked three weeks in advance; the other struggles to fill slots. The difference is online visibility across search and generative AI engines.
              </p>
              
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="text-[12px] font-medium text-bone/80 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Quick Read Preview
                </button>

                <a
                  href="https://adweh.com/digital-marketing-aesthetic-clinics-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0000cd] text-ink pl-4 pr-1.5 py-1.5 text-[12px] font-semibold hover:bg-bone transition group/btn"
                >
                  Read Full Guide
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-ink text-[#0000cd] transition-transform group-hover/btn:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Core Growth Channels */}
          <div className="lg:col-span-7">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/70 mb-3">[ The 4 Core Capabilities ]</div>
            
            <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
              {CHANNELS.map((ch) => (
                <div
                  key={ch.num}
                  className="group relative rounded-2xl bg-white/[0.015] border border-white/5 p-4 sm:p-5 hover:border-white/15 hover:bg-white/[0.03] transition duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-bone/40 group-hover:text-[#0000cd] transition duration-300">{ch.num}</span>
                    <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-bone/60 uppercase tracking-[0.1em]">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg sm:text-xl font-medium text-bone group-hover:text-[#0000cd] transition duration-300">
                    {ch.title}
                  </h3>

                  <p className="mt-1.5 text-[12.5px] sm:text-[13px] leading-relaxed text-bone/60">
                    {ch.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[10.5px] font-mono border-t border-white/5 pt-3">
                    <span className="opacity-40">Impact</span>
                    <span className="text-[#0000cd] font-semibold">{ch.metric}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary Banner */}
            <div className="mt-4 sm:mt-5 rounded-2xl border border-[#0000cd]/15 bg-[#0000cd]/[0.02] p-4 sm:p-5">
              <div className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#0000cd]">[ Growth Engine Verdict ]</div>
              <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-bone/80">
                Clinics that lead in 2026 treat AIEO, GEO, SEO, and cybersecurity-focused website development as core patient acquisition infrastructure. Combining AI citations with local search dominance and secure platforms creates a compounding 24/7 patient acquisition engine.
              </p>
            </div>
          </div>
        </div>

        {/* Complete Articles Library Section */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#0000cd] mb-1.5">[ Knowledge Base ]</div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight text-bone">
                All Published Articles & Guides
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-full bg-white/5 p-1 border border-white/10 text-[11px] font-mono">
              {["ALL", "AIEO", "GEO", "SEO", "Website Development"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    selectedFilter === cat
                      ? "bg-[#0000cd] text-white font-semibold shadow-sm"
                      : "text-bone/60 hover:text-white"
                  }`}
                >
                  {cat === "Website Development" ? "Web Dev" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredArticles.map((art, idx) => (
              <a
                key={idx}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0000cd]/15 border border-[#0000cd]/25 px-2.5 py-0.5 text-[9px] font-mono text-[#0000cd] uppercase tracking-[0.1em]">
                      {art.category}
                    </span>
                    <span className="text-[11px] text-white/30 group-hover:text-white transition">↗</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg sm:text-xl leading-snug tracking-tight text-bone group-hover:text-[#0000cd] transition duration-300">
                    {art.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-bone/60">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-bone/80 group-hover:text-[#0000cd] transition">
                  <span>Read Article</span>
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-white/5 text-bone group-hover:bg-[#0000cd] group-hover:text-ink transition">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.01] p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#0000cd] mb-1">[ Take The Next Step ]</div>
            <h3 className="font-display text-2xl sm:text-3xl text-bone tracking-tight">
              Ready to transform your clinic's patient acquisition?
            </h3>
            <p className="mt-2 text-[13.5px] text-bone/60 max-w-lg">
              Get an end-to-end digital audit evaluating your AIEO, GEO, SEO, and website security posture.
            </p>
          </div>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/contact");
            }}
            className="rounded-full bg-[#0000cd] text-ink px-6 py-3 text-[13px] font-semibold hover:bg-bone transition whitespace-nowrap cursor-pointer active:scale-95 shrink-0"
          >
            Book Free Audit →
          </a>
        </div>
      </div>

      {/* Modal Reader Overlay */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-black/80 backdrop-blur-md transition-all duration-300">
          <div className="h-full w-full max-w-[720px] bg-[#0c0c0c] border-l border-white/10 p-6 sm:p-10 overflow-y-auto flex flex-col justify-between shadow-[20px_0_80px_rgba(0,0,0,0.8)]">
            <div>
              {/* Header inside modal */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0000cd]">ADWEH Insights · Guide Preview</span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="group grid place-items-center h-9 w-9 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <span className="font-mono text-xs text-bone group-hover:rotate-90 transition-transform duration-300">✕</span>
                </button>
              </div>

              {/* Scrollable Content */}
              <article className="mt-6 space-y-5 text-bone/80 text-[14.5px] leading-relaxed font-sans">
                <span className="inline-block bg-[#0000cd]/15 px-2.5 py-0.5 rounded font-mono text-[9.5px] text-[#0000cd] uppercase tracking-[0.1em]">
                  Comprehensive Guide
                </span>
                
                <h2 className="font-display text-2xl sm:text-4xl leading-tight text-bone tracking-tight mt-2">
                  How Aesthetic Clinics in India Get <span className="font-serif-i text-[#0000cd]">3x Patients</span>
                </h2>

                <p>
                  Picture this: two aesthetic clinics in the same city, offering the same treatments at similar prices. One is fully booked three weeks in advance. The other is struggling to fill appointment slots.
                </p>

                <p>
                  What is the difference? The first clinic shows up when patients search on Google and ask conversational AI engines like ChatGPT. The second one does not.
                </p>

                <div className="border-l-2 border-[#0000cd] pl-4 py-1.5 my-4 italic text-bone/95 text-[14px]">
                  "In 2026, digital discovery is no longer optional for clinics in India. It is the single biggest lever for predictable patient acquisition."
                </div>

                <h3 className="font-display text-xl text-bone mt-6 font-semibold">
                  The 4 Core Services That Drive Clinic Growth
                </h3>
                
                <div className="space-y-3 mt-3">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <h4 className="font-display font-medium text-bone text-[14px]">1. AIEO (AI Engine Optimization)</h4>
                    <p className="mt-1 text-[12.5px] opacity-80">
                      When prospective patients ask conversational assistants like ChatGPT, Claude, or Perplexity for "the best aesthetic doctor near me", AIEO ensures your clinic is indexed and cited as an authoritative medical entity.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <h4 className="font-display font-medium text-bone text-[14px]">2. GEO (Generative Engine Optimization)</h4>
                    <p className="mt-1 text-[12.5px] opacity-80">
                      Google AI Overviews and Gemini generate synthesized answers at the top of search queries. GEO structures your clinical citations, schemas, and facts so generative engines feature your practice directly inside the answer snippet.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <h4 className="font-display font-medium text-bone text-[14px]">3. SEO (Search Engine Optimization)</h4>
                    <p className="mt-1 text-[12.5px] opacity-80">
                      High-intent keyword optimization paired with Google Business Profile local presence in Google Maps. Organic search brings trusted, consistent patient enquiries month after month without recurring ad spend.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <h4 className="font-display font-medium text-bone text-[14px]">4. Website Development</h4>
                    <p className="mt-1 text-[12.5px] opacity-80">
                      Cybersecurity-focused development using security-conscious practices, vulnerability testing, and seamless optimization for search engines, AIEO, and generative discovery.
                    </p>
                  </div>
                </div>

                <p className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono opacity-50">
                  © ADWEH Research. All rights reserved.
                </p>
              </article>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="text-[12px] opacity-70">
                Ready to scale?
              </span>
              <button
                onClick={() => { setModalOpen(false); navigateTo("/contact"); }}
                className="rounded-full bg-[#0000cd] text-ink px-5 py-2 text-xs font-semibold hover:bg-bone transition cursor-pointer"
              >
                Book Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
