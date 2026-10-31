import { useState, useEffect } from "react";
import { navigateTo } from "../utils/navigation";

interface ArticleItem {
  id: string;
  category: "SEO" | "AIEO" | "GEO" | "Website Development" | "Industry Guides";
  title: string;
  summary: string;
  readTime: string;
  content: string[];
}

const EDITORIAL_LIBRARY: ArticleItem[] = [
  {
    id: "aieo-guide",
    category: "AIEO",
    title: "What Is AI Engine Optimization (AIEO)? A Practical Guide for Businesses",
    summary: "Explain AI-assisted research, brand clarity, and realistic optimization practices for conversational assistants like ChatGPT, Claude, and Perplexity.",
    readTime: "6 min read",
    content: [
      "AI Engine Optimization (AIEO) is the practice of structuring your business information, entity presence, and authoritative answers so conversational AI systems can easily understand and reference your company.",
      "When prospective customers ask ChatGPT or Perplexity for provider recommendations, these systems don't browse the web like traditional search engines. They synthesize answers from corroborating sources across the web.",
      "To become visible, businesses must establish unambiguous entity facts: who you are, what services you provide, your physical locations, and verifiable credentials.",
      "Realistic optimization does not guarantee citations on every prompt, but systematic corroboration significantly increases the probability that your business is shortlisted."
    ],
  },
  {
    id: "geo-guide",
    category: "GEO",
    title: "Generative Engine Optimization (GEO): What Businesses Need to Know",
    summary: "Define GEO, content quality, source credibility, and measurement limitations across Google AI Overviews and Gemini.",
    readTime: "7 min read",
    content: [
      "Generative Engine Optimization (GEO) focuses on the content quality and authority signals that influence generative search experiences, specifically Google AI Overviews and Gemini snapshots.",
      "Unlike blue-link rankings, generative engines quote and summarize passages directly from authoritative web pages. High-quality informational architecture and passage-level clarity are essential.",
      "Source credibility, corroborated third-party mentions, and structured schema data help search algorithms verify that your content is trustworthy.",
      "Because generative summaries vary by location, query phrasing, and model updates, GEO requires disciplined visibility tracking rather than simplistic rank claims."
    ],
  },
  {
    id: "seo-vs-aieo-vs-geo",
    category: "SEO",
    title: "SEO vs AIEO vs GEO: What's the Difference?",
    summary: "Explain overlaps, differences, and when to prioritize each discipline in a modern digital growth roadmap.",
    readTime: "5 min read",
    content: [
      "Traditional SEO optimizes for keyword intent and indexability in standard search engine results pages (SERPs).",
      "AIEO optimizes for conversational retrieval and answer generation in large language models like ChatGPT and Claude.",
      "GEO bridges both worlds, optimizing structured content and knowledge graph signals for synthesized generative overviews on Google.",
      "The disciplines overlap significantly: an authoritative, technically sound website is the prerequisite for all three. We recommend a balanced combination based on your current baseline."
    ],
  },
  {
    id: "google-ai-overviews",
    category: "GEO",
    title: "How to Improve Your Visibility in Google AI Overviews",
    summary: "Focus on helpful content, accessibility, clear entities, and why no provider can promise guaranteed inclusion.",
    readTime: "6 min read",
    content: [
      "Google AI Overviews synthesize direct answers to complex, multi-layered search queries. Being cited in these snapshots puts your business at the very top of the search results.",
      "Google prioritizes content that provides concise, fact-checked definitions, structured comparisons, and transparent expertise (E-E-A-T).",
      "Technical accessibility—such as fast load speeds, semantic HTML tags, and schema markup—ensures Google's crawlers can parse your answers without friction.",
      "Important reassurance: No agency can guarantee inclusion in AI Overviews, but rigorous adherence to Google's helpful content guidelines provides the strongest foundation."
    ],
  },
  {
    id: "local-seo-multi-location",
    category: "SEO",
    title: "Local SEO for Multi-Location Businesses",
    summary: "Profiles, location pages, NAP consistency, customer reviews, and capturing high-intent local search demand.",
    readTime: "8 min read",
    content: [
      "For clinics, real estate firms, and hospitality brands, high-intent searches almost always carry local intent ('near me', 'in Anna Nagar', 'in Chennai').",
      "Winning the local 3-pack requires verified Google Business Profiles, localized landing pages with unique service details, and strict Name-Address-Phone (NAP) consistency.",
      "A healthy, authentic stream of customer reviews across verified platforms signals trust to both human searchers and local search algorithms.",
      "Our verified client data shows that ranking in the local map pack delivers the highest conversion-to-call rate of any inbound channel."
    ],
  },
  {
    id: "website-ready-seo-ai",
    category: "Website Development",
    title: "How to Build a Website Ready for SEO and AI Search",
    summary: "Crawlability, semantic structure, content architecture, page speed, and mobile accessibility.",
    readTime: "6 min read",
    content: [
      "A website is the operational engine of your digital visibility. If search crawlers encounter broken code, slow scripts, or convoluted hierarchies, your visibility suffers.",
      "Building for both Google and AI engines requires clean semantic HTML (h1, h2, table, article), accessible navigation, and zero-bloat architecture.",
      "Fast Core Web Vitals directly correlate with higher organic rankings and significantly reduced visitor drop-off.",
      "Security-conscious foundations—such as HTTPS, strict HTTP security headers, and secure enquiry endpoints—protect user privacy while building algorithmic trust."
    ],
  },
  {
    id: "security-focused-checklist",
    category: "Website Development",
    title: "Security-Focused Website Development: A Business Owner's Checklist",
    summary: "Practical controls, form safeguards, HTTPS headers, and why no web build is completely invulnerable.",
    readTime: "7 min read",
    content: [
      "Cybersecurity in web development is not an afterthought—it is a core business necessity. Unsecured lead forms and outdated CMS plugins expose companies to severe compliance risks.",
      "A practical security checklist includes: enforcing modern TLS encryption, implementing Content Security Policy (CSP), sanitizing form inputs to prevent XSS/SQLi, and regular vulnerability scanning.",
      "Compliance clarification: No website can be guaranteed 100% immune to threats. Security-conscious development minimizes attack surfaces and adheres to agreed security standards without making false claims."
    ],
  },
  {
    id: "measure-ai-visibility",
    category: "AIEO",
    title: "How to Measure AI Search Visibility Without Misleading Metrics",
    summary: "Prompt sets, sampling, volatility, and connecting observations to commercial business relevance.",
    readTime: "5 min read",
    content: [
      "Many marketing claims around 'AI visibility scores' are fabricated or based on single, non-repeatable queries.",
      "Rigorous AI tracking requires standardized prompt sets tested systematically across platforms (ChatGPT, Gemini, Perplexity), logging date, model version, geography, and context.",
      "AI response outputs are inherently probabilistic and volatile. Tracking trends over 3 to 6 months provides actionable intelligence on brand mention share-of-voice.",
      "Ultimately, AI visibility matters only when it drives qualified enquiry volume and inbound phone calls."
    ],
  },
  {
    id: "high-intent-keywords",
    category: "SEO",
    title: "High-Intent SEO Keywords: How to Reach Buyers, Not Just Browsers",
    summary: "Search intent mapping, commercial terms, and structuring dedicated service pages that convert.",
    readTime: "6 min read",
    content: [
      "Ranking for high-volume generic keywords often brings traffic that never buys. High-intent keywords reflect immediate commercial desire (e.g. 'lip pigmentation treatment in Ambattur' vs 'what is pigmentation').",
      "Structuring dedicated, treatment-specific or service-specific pages allows you to match exact user intent with clear conversion pathways.",
      "As seen in our verified clinic case studies, specific treatment pages allowed Dr. Swathi's clinic to rank #1 for 'excessive sweating' and 'IV therapy' rather than competing only on generic terms."
    ],
  },
  {
    id: "traffic-few-enquiries",
    category: "Website Development",
    title: "Why Your Website Gets Traffic but Few Enquiries",
    summary: "Conversion clarity, UX bottlenecks, page load speed, trust friction, and weak calls to action.",
    readTime: "5 min read",
    content: [
      "If your analytics show healthy traffic but your inbox remains quiet, you have a conversion journey failure.",
      "Common causes include: vague service descriptions, absence of verified proof, hidden contact details, friction-heavy contact forms, and slow mobile loading.",
      "Streamlining the enquiry journey—with one-tap WhatsApp contact, prominent trust signals, and clear next steps—frequently doubles lead capture without needing more traffic."
    ],
  },
  {
    id: "reviews-consistency",
    category: "Industry Guides",
    title: "Online Reviews and Business Information: Why Consistency Matters",
    summary: "Reputation, review response management, and keeping business facts uniform across directories.",
    readTime: "5 min read",
    content: [
      "Inconsistent business hours, conflicting phone numbers, or mismatched addresses across directories confuse both prospective clients and search algorithms.",
      "AI models cross-corroborate information from multiple web sources. Discrepancies reduce the system's confidence in recommending your business.",
      "Maintaining an active, consistent profile with authentic patient and customer reviews creates the strongest reputation anchor in your local market."
    ],
  },
  {
    id: "buyer-research-patterns",
    category: "Industry Guides",
    title: "How Buyers Research Healthcare, Hospitality, Property, and B2B Online",
    summary: "Industry-specific discovery patterns and how customers evaluate choices before making decisions.",
    readTime: "8 min read",
    content: [
      "Healthcare patients search for specific symptom relief, doctor credentials, and nearby clinic reviews before calling.",
      "Real estate buyers research neighborhood infrastructure, developer track records, and floor plan specifications over several months.",
      "B2B procurement teams seek technical specifications, compliance standards, and fast RFQ intake funnels.",
      "Aligning your website's architecture to your industry's specific decision-making process ensures you meet buyers at each stage of evaluation."
    ],
  },
];

export default function BlogPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredArticles = selectedFilter === "ALL"
    ? EDITORIAL_LIBRARY
    : EDITORIAL_LIBRARY.filter((a) => a.category === selectedFilter);

  return (
    <section className="relative py-8 sm:py-14 px-4 sm:px-6 min-h-screen bg-ink overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Background Glow */}
      <div className="absolute top-24 left-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#1e2bc8]/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top Header & Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em]">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-bone text-ink text-[9px] font-bold" style={{ background: "#f5f1ea", color: "#0a0a0a" }}>
              §
            </span>
            <span className="opacity-60">011</span>
            <span>/</span>
            <span className="text-white">Insights &amp; Guides</span>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 sm:px-5 py-2 text-[11px] sm:text-[12px] font-semibold hover:bg-white hover:text-ink transition duration-300 cursor-pointer"
            style={{ color: "#f5f1ea" }}
          >
            ← Back to Home
          </a>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold mb-3">
            [ INSIGHTS &amp; GUIDES ]
          </div>
          <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
            Understand how customers <span className="font-serif-i italic text-[#5c85ff]">find businesses</span> today.
          </h1>
          <p className="mt-4 text-[15px] sm:text-[17px] leading-relaxed text-bone/70 font-sans">
            Clear, practical perspectives on Google search, AI-powered discovery, website performance, and the decisions that turn visibility into customer enquiries.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {[
            { label: "All Topics", value: "ALL" },
            { label: "SEO", value: "SEO" },
            { label: "AIEO", value: "AIEO" },
            { label: "GEO", value: "GEO" },
            { label: "Website Development", value: "Website Development" },
            { label: "Industry Guides", value: "Industry Guides" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                selectedFilter === cat.value
                  ? "bg-[#1e2bc8] text-white font-bold"
                  : "bg-white/5 text-bone/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Articles Grid */}
        <div className="mt-8 sm:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-[#1e2bc8] hover:bg-white/[0.04] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5c85ff] font-bold">
                    {art.category}
                  </span>
                  <span className="text-[10px] font-mono text-bone/40">{art.readTime}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mt-4 tracking-tight leading-snug group-hover:text-[#5c85ff] transition-colors">
                  {art.title}
                </h3>

                <p className="mt-3 text-[13.5px] text-bone/70 leading-relaxed font-sans">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#5c85ff] group-hover:underline">
                  Read Full Guide →
                </span>
                <span className="text-[10px] font-mono text-bone/40">Editorial</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assessment CTA */}
        <div className="mt-16 rounded-3xl bg-white text-ink p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1e2bc8] font-bold mb-2">
              [ TAKE ACTION ]
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#0a0a0a]">
              Want to find out where you're losing visibility?
            </div>
            <p className="text-sm text-ink/75 mt-2 font-sans">
              Request a free visibility assessment. We'll review your search presence, AI readiness, and website conversion points.
            </p>
          </div>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/contact");
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#1e2bc8] transition shrink-0 cursor-pointer shadow-lg"
          >
            Get a Visibility Assessment for Your Business →
          </a>
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-[#141414] text-bone rounded-3xl border border-white/15 max-w-2xl w-full p-6 sm:p-10 my-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            style={{ color: "#f5f1ea" }}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-bone/50 hover:text-white font-mono text-xl cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#5c85ff] mb-2 font-bold">
              <span>{activeArticle.category}</span>
              <span>·</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {activeArticle.title}
            </h2>

            <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-bone/80 font-sans border-t border-white/10 pt-6">
              {activeArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-bone/50">ADWEH Editorial Library</span>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveArticle(null);
                  navigateTo("/contact");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#1e2bc8] text-white px-5 py-2 text-xs font-semibold hover:bg-white hover:text-black transition"
              >
                Discuss This For Your Business →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
