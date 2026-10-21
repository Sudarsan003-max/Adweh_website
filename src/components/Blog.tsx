import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  onClick: () => void;
}

export default function Blog() {
  const [modalOpen, setModalOpen] = useState(false);

  const channels = [
    {
      num: "01",
      title: "AIEO (AI Engine Optimization)",
      desc: "Earn direct brand citations and entity recommendations across ChatGPT, Claude, and Perplexity when prospective clients ask AI assistants for recommendations.",
      badge: "AI CITATIONS",
      metric: "Top AI Citations",
    },
    {
      num: "02",
      title: "GEO (Generative Engine Optimization)",
      desc: "Structure authoritative citations, enterprise facts, and knowledge graphs for featured synthesis inside Google AI Overviews and Gemini search snapshots.",
      badge: "GENERATIVE SEARCH",
      metric: "AI Overviews Ready",
    },
    {
      num: "03",
      title: "SEO (Search Engine Optimization)",
      desc: "Optimize Google Maps presence and high-intent commercial search keywords to capture qualified customer inquiries.",
      badge: "ORGANIC POWER",
      metric: "Local Search",
    },
    {
      num: "04",
      title: "Website Development",
      desc: "Cybersecurity-focused development, secure website building and vulnerability testing, fully optimized for search engines, AIEO, and generative discovery.",
      badge: "SECURE WEB",
      metric: "SOC-2 & GDPR Ready",
    },
  ];

  return (
    <section id="blog" className="relative pt-28 pb-10 bg-ink overflow-hidden border-b border-white/5" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Glow Blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#0000cd]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="009" label="Insights & Guides" light />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Featured Post Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white mb-4">[ Featured Article ]</div>
            
            <div className="group relative rounded-[28px] bg-white/[0.02] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0000cd]/20 border border-[#0000cd]/30 px-3 py-1 text-[10px] font-mono text-white uppercase tracking-[0.1em]">
                CLIENT ACQUISITION · CASE
              </span>
              
              <h3 className="mt-6 font-display text-3xl sm:text-4xl leading-[1.15] tracking-tight text-bone">
                How Industry Leaders Are Getting <span className="font-serif-i text-[#0000cd]">3x More Qualified Inquiries</span> Using AIEO, GEO, SEO & Secure Web
              </h3>
              
              <p className="mt-4 text-[14.5px] leading-relaxed text-bone/70">
                Picture this: two market competitors in the same sector, offering similar services. One has a consistent pipeline of high-ticket enterprise inquiries; the other struggles for leads. The difference is authoritative discovery across search and generative AI engines.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end">
                <a
                  href="https://adweh.com/digital-growth-enterprise-client-acquisition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0000cd] text-ink pl-4 pr-1.5 py-1.5 text-[12px] font-semibold hover:bg-bone transition group/btn"
                >
                  Read Article
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-ink text-[#0000cd] transition-transform group-hover/btn:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Scraped Insights Bento Cards */}
          <div className="lg:col-span-7">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white mb-4">[ The 4 Core Capabilities ]</div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {channels.map((ch) => (
                <div
                  key={ch.num}
                  className="group relative rounded-2xl bg-white/[0.01] border border-white/5 p-6 hover:border-white/15 hover:bg-white/[0.03] transition duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-bone/30 group-hover:text-[#0000cd] transition duration-300">{ch.num}</span>
                    <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-bone/60 uppercase tracking-[0.1em]">
                      {ch.badge}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-xl font-medium text-bone group-hover:text-[#0000cd] transition duration-300">
                    {ch.title}
                  </h4>

                  <p className="mt-2 text-[13px] leading-relaxed text-bone/60">
                    {ch.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-[11px] font-mono border-t border-white/5 pt-4">
                    <span className="opacity-40">Impact</span>
                    <span className="text-[#0000cd]">{ch.metric}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary Banner */}
            <div className="mt-6 rounded-2xl border border-[#0000cd]/15 bg-[#0000cd]/[0.02] p-5">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">[ Growth Engine Verdict ]</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-bone/80">
                Enterprises that dominate their market in 2026 treat AIEO, GEO, SEO, and cybersecurity-focused website development as core customer acquisition infrastructure. Combining AI assistant citations with local search dominance and secure websites creates a compounding acquisition engine that runs 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* More Articles Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/articles"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/articles");
            }}
            className="group inline-flex items-center gap-3.5 rounded-full border border-white/10 px-10 py-5 text-[15px] font-semibold hover:bg-white hover:text-ink transition duration-300 cursor-pointer"
            style={{ color: "#f5f1ea" }}
          >
            More Articles
            <span className="grid place-items-center h-7 w-7 rounded-full bg-white/10 text-bone group-hover:bg-[#0000cd] group-hover:text-ink transition-all">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Modal Reader Overlay */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-ink/80 backdrop-blur-md transition-all duration-300">
          <div className="h-full w-full max-w-[720px] bg-[#0c0c0c] border-l border-white/10 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-[20px_0_80px_rgba(0,0,0,0.8)]">
            <div>
              {/* Header inside modal */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0000cd]">ADWEH Insights</span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="group grid place-items-center h-10 w-10 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition"
                  aria-label="Close modal"
                >
                  <span className="font-mono text-xs text-bone group-hover:rotate-90 transition-transform duration-300">✕</span>
                </button>
              </div>

              {/* Scrollable Content */}
              <article className="mt-8 space-y-6 text-bone/80 text-[15.5px] leading-relaxed font-sans">
                <span className="inline-block bg-[#0000cd]/10 px-2 py-0.5 rounded font-mono text-[10px] text-[#0000cd] uppercase tracking-[0.1em]">
                  Comprehensive Guide
                </span>
                
                <h2 className="font-display text-3xl sm:text-5xl leading-tight text-bone tracking-tight mt-3">
                  How Industry Leaders Scale <span className="font-serif-i text-[#0000cd]">Client Acquisition</span>
                </h2>

                <p className="mt-4">
                  Picture this: two market competitors in the same sector, offering similar services at similar price points. One is booked weeks in advance with high-ticket enterprise clients. The other is struggling to fill its sales pipeline.
                </p>

                <p>
                  What is the difference? The first company dominates high-intent search on Google and gets directly recommended by conversational AI engines like ChatGPT. The second one remains invisible.
                </p>

                <div className="border-l-2 border-[#0000cd] pl-4 py-1 my-6 italic text-bone/95">
                  "In 2026, multi-model digital discovery is no longer optional. It is the single biggest lever for predictable enterprise client acquisition."
                </div>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  Why Multi-Model Discovery Is Non-Negotiable
                </h3>
                <p>
                  If your business is not visible across AI assistants and generative search, you are invisible to over 80% of high-intent buyers. Your competitor — who IS visible — is winning those contracts instead.
                </p>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  The 4 Core Capabilities That Drive Enterprise Growth
                </h3>
                
                <div className="space-y-4 mt-4">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">1. AIEO (AI Engine Optimization)</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      When prospective buyers ask conversational assistants like ChatGPT, Claude, or Perplexity for the top providers in their sector, AIEO ensures your brand is indexed and cited as an authoritative entity.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">2. GEO (Generative Engine Optimization)</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      Google AI Overviews and Gemini generate synthesized answers at the top of search queries. GEO structures your entity citations, schemas, and facts so generative engines feature your brand directly inside the answer snippet.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">3. SEO (Search Engine Optimization)</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      High-intent keyword optimization paired with Google Business Profile regional presence in Google Maps. Organic search brings trusted, consistent inbound enquiries month after month without ongoing pay-per-click costs.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">4. Website Development</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      Positioned around three critical pillars: <strong>Cybersecurity-Focused Development</strong> using security-conscious development practices; <strong>Secure Website Building and Testing</strong> to proactively identify vulnerabilities and harden security; and <strong>SEO, AIEO, and GEO Optimization</strong> so your digital platform is engineered from the ground up for search engines, AI-powered search, and generative discovery.
                    </p>
                  </div>
                </div>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  5 Critical Best Practices
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[14.5px]">
                  <li>Establish clean entity schemas and structured ecosystem citations for AI engines.</li>
                  <li>Build websites using security-conscious, enterprise-grade development practices.</li>
                  <li>Continuously audit and test web endpoints for security vulnerabilities and compliance.</li>
                  <li>Target high-intent conversational buyer prompts and regional search keywords.</li>
                  <li>Ensure lightning-fast mobile Core Web Vitals to maximize search and AI discovery.</li>
                </ul>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  How to Get Started: Your AI-Era Roadmap
                </h3>
                <p>
                  Enterprises that are growing consistently in 2026 have one thing in common: they treat AIEO, GEO, SEO, and secure web development as core business infrastructure. Optimizing across ChatGPT, Google AI Overviews, Google Maps, and high-performance secure web architecture creates an acquisition engine that runs 24 hours a day.
                </p>

                <p className="mt-6 pt-6 border-t border-white/10 text-xs font-mono opacity-50">
                  © ADWEH Research. All rights reserved.
                </p>
              </article>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between">
              <div className="text-[12px]">
                Ready to scale?
              </div>
              <button
                onClick={() => { setModalOpen(false); navigateTo("/contact"); }}
                className="rounded-full bg-[#0000cd] text-ink px-5 py-2.5 text-xs font-semibold hover:bg-bone transition cursor-pointer"
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
