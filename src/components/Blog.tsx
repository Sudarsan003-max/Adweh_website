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
                PATIENT ACQUISITION · CASE
              </span>
              
              <h3 className="mt-6 font-display text-3xl sm:text-4xl leading-[1.15] tracking-tight text-bone">
                How Aesthetic Clinics in India Are Getting <span className="font-serif-i text-[#0000cd]">3x More Patients</span> Using AIEO, GEO, SEO & Secure Web
              </h3>
              
              <p className="mt-4 text-[14.5px] leading-relaxed text-bone/70">
                Picture this: two clinics in the same city, offering the same treatments. One is fully booked three weeks in advance; the other struggles to fill slots. The difference is online visibility across search and generative AI engines.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end">
                <a
                  href="https://adweh.com/digital-marketing-aesthetic-clinics-india/"
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
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white mb-4">[ The 4 Core Services ]</div>
            
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
                Aesthetic clinics that dominate their market in 2026 treat AIEO, GEO, SEO, and cybersecurity-focused website development as core infrastructure. Combining AI assistant citations with local search dominance and secure websites creates a compounding patient acquisition engine that runs 24/7.
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
                  How Aesthetic Clinics in India Get <span className="font-serif-i text-[#0000cd]">3x Patients</span>
                </h2>

                <p className="mt-4">
                  Picture this: two aesthetic clinics in the same city, offering the same treatments at similar prices. One is fully booked three weeks in advance. The other is struggling to fill appointment slots.
                </p>

                <p>
                  What is the difference? The first clinic shows up on Google when patients search for treatments. The second one does not.
                </p>

                <div className="border-l-2 border-[#0000cd] pl-4 py-1 my-6 italic text-bone/95">
                  "In 2026, digital marketing is no longer optional for aesthetic clinics in India. It is the single biggest lever for growing your patient base."
                </div>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  Why Digital Marketing Is Non-Negotiable
                </h3>
                <p>
                  If your clinic is not visible online, you are invisible to 80% of your potential patients. Your competitor — who IS visible — is getting those bookings instead.
                </p>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  The 4 Core Services That Drive Clinic Growth
                </h3>
                
                <div className="space-y-4 mt-4">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">1. AIEO (AI Engine Optimization)</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      When prospective patients ask conversational assistants like ChatGPT, Claude, or Perplexity for "the best aesthetic doctor near me" or treatment recommendations, AIEO ensures your clinic is actively indexed, recommended, and cited as an authoritative medical entity.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">2. GEO (Generative Engine Optimization)</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      Google AI Overviews and Gemini generate synthesized answers at the top of search queries. GEO structures your clinical citations, medical knowledge graphs, and schemas so generative engines feature your practice directly inside the answer snippet.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <h4 className="font-display font-medium text-bone text-base">3. SEO (Search Engine Optimization)</h4>
                    <p className="mt-1 text-[13.5px] opacity-80">
                      High-intent keyword optimization paired with Google Business Profile local presence in Google Maps. Organic search brings trusted, consistent patient enquiries month after month without ongoing pay-per-click costs.
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
                  <li>Establish clean entity schemas and structured medical citations for AI engines.</li>
                  <li>Build websites using security-conscious, HIPAA-compliant development practices.</li>
                  <li>Continuously audit and test web endpoints for security vulnerabilities.</li>
                  <li>Target high-intent conversational patient prompts and local search keywords.</li>
                  <li>Ensure lightning-fast mobile Core Web Vitals to maximize search and AI discovery.</li>
                </ul>

                <h3 className="font-display text-2xl text-bone mt-8 font-semibold">
                  How to Get Started: Your AI-Era Roadmap
                </h3>
                <p>
                  Aesthetic clinics in India that are growing consistently in 2026 have one thing in common: they treat AIEO, GEO, SEO, and secure web development as a core business infrastructure. Optimizing across ChatGPT, Google AI Overviews, Google Maps, and high-performance secure web architecture creates an acquisition engine that runs 24 hours a day.
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
