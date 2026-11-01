import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What does ADWEH do?",
    a: "ADWEH helps businesses improve their visibility across Google search and AI-powered discovery through SEO, AIEO, GEO, and security-focused website development.",
  },
  {
    q: "What is the difference between SEO, AIEO, and GEO?",
    a: "SEO focuses on improving visibility in traditional search results. AIEO focuses on making business information and answers easier for AI-assisted tools to interpret. GEO focuses on the content and credibility signals that may support visibility in generative search experiences. The disciplines overlap, and none can guarantee a placement or recommendation.",
  },
  {
    q: "Do I need a new website to start SEO or AI optimization?",
    a: "Not always. We first assess your existing website. Some businesses need technical improvements and better content; others may benefit from a redesign or rebuild.",
  },
  {
    q: "Can ADWEH guarantee first-page Google rankings or AI citations?",
    a: "No. Rankings and AI-generated responses are controlled by external platforms and change over time. We focus on sound implementation, useful content, visibility monitoring, and measurable improvements where possible.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "It depends on your current website, competition, search demand, and scope of work. SEO is typically a sustained effort rather than an instant outcome. We set priorities and review progress against an agreed baseline.",
  },
  {
    q: "Is AIEO or GEO a replacement for SEO?",
    a: "No. A technically sound website and useful, credible content remain important foundations. AI visibility work generally builds on these fundamentals.",
  },
  {
    q: "Are your websites cybersecurity-proof?",
    a: "No website can be guaranteed immune to threats. ADWEH uses security-focused development practices and testing appropriate to the project scope. Any formal security or compliance requirements should be agreed and verified separately.",
  },
  {
    q: "Which industries does ADWEH work with?",
    a: "Our approach is relevant to healthcare, real estate, hospitality, manufacturing, commerce, and other service-led businesses. The strategy is tailored to the customer journey and industry-specific requirements.",
  },
  {
    q: "How do we get started?",
    a: "Request a visibility assessment or contact us with your website and goals. We'll review your priorities and discuss a suitable next step.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-8 sm:py-20 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="010" label="Frequently Asked Questions" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3">
              [ TRANSPARENT CLARITY ]
            </div>
            <h2 className="font-display text-[30px] xs:text-[38px] sm:text-[54px] lg:text-[68px] leading-[0.98] sm:leading-[0.95] tracking-[-0.035em] text-ink">
              Questions we hear <span className="font-serif-i italic text-[#1e2bc8]">most often.</span>
            </h2>
            <p className="mt-2.5 sm:mt-4 text-[14px] sm:text-[15px] leading-relaxed text-ink/75 font-sans">
              No ambiguity or jargon. Practical answers about how modern search and AI engine optimization actually work.
            </p>

            <div className="mt-5 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-ink/10 shadow-sm">
              <div className="font-display text-base sm:text-lg font-bold text-ink">Have a specific question?</div>
              <p className="text-xs text-ink/70 mt-1">Our team is available to review your website and search priorities directly.</p>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="inline-flex items-center gap-2 mt-3 sm:mt-4 text-xs font-bold text-[#1e2bc8] hover:text-black transition"
              >
                Request a Visibility Assessment →
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              const isHiddenOnMobile = !showAllMobile && idx >= 4;

              return (
                <div
                  key={idx}
                  className={`py-3.5 sm:py-5 transition-colors ${
                    isHiddenOnMobile ? "hidden sm:block" : "block"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 font-display text-[15.5px] sm:text-[19px] font-bold text-ink tracking-tight hover:text-[#1e2bc8] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="font-mono text-lg sm:text-xl text-[#1e2bc8] shrink-0 font-normal">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-2 sm:mt-3 text-[13px] sm:text-[14.5px] leading-relaxed text-ink/75 font-sans animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View Toggle: Show More / Show Less */}
        <div className="mt-6 sm:hidden text-center">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-ink/20 bg-white font-mono text-xs font-bold text-ink shadow-sm active:scale-95 transition-all"
          >
            <span>
              {showAllMobile
                ? "Show Less FAQs ↑"
                : `Show All 9 FAQs (${faqs.length - 4} more) ↓`}
            </span>
            <span className="text-[#1e2bc8] font-bold">{showAllMobile ? "↑" : "↓"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
