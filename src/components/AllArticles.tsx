import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";

export default function AllArticles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      category: "AIEO",
      title: "AIEO for Modern Business: Getting Recommended by ChatGPT & Perplexity",
      excerpt: "Learn how market-leading enterprises optimize entities, knowledge graphs, and brand citations to earn direct recommendations in conversational AI models.",
      url: "https://adweh.com/aieo-healthcare-chatgpt-perplexity/",
    },
    {
      category: "GEO",
      title: "Generative Engine Optimization: Optimizing for Google AI Overviews",
      excerpt: "The complete guide to GEO for enterprises — structuring factual answers, passage schemas, and entity attribution for Gemini snapshots.",
      url: "https://adweh.com/geo-google-ai-overviews-enterprises/",
    },
    {
      category: "SEO",
      title: "Local SEO & Multi-Location Search: Dominating Google Maps Visibility",
      excerpt: "How real estate developers, hotels, and multi-location businesses optimize Google Maps local search to generate consistent organic inbound inquiries.",
      url: "https://adweh.com/local-seo-multi-location-enterprises/",
    },
    {
      category: "Website Development",
      title: "Cybersecurity-Focused Development for High-Value Web Platforms",
      excerpt: "Building resilient enterprise websites using security-conscious development practices, strict headers, data encryption, and compliance standards.",
      url: "https://adweh.com/cybersecurity-focused-website-development-enterprises/",
    },
    {
      category: "Website Development",
      title: "Secure Website Building and Vulnerability Testing",
      excerpt: "How to develop and test enterprise websites to identify vulnerabilities, harden lead intake endpoints, and ensure airtight customer data security.",
      url: "https://adweh.com/secure-website-building-testing-vulnerabilities/",
    },
    {
      category: "Website Development",
      title: "Building Websites Optimized for SEO, AIEO, and GEO",
      excerpt: "Engineering high-performance digital infrastructure from the ground up for search engines, AI-powered search, and generative engine discovery.",
      url: "https://adweh.com/websites-optimized-seo-aieo-geo/",
    },
    {
      category: "AIEO",
      title: "Conversational Query Targeting in Enterprise AI Engines",
      excerpt: "How high-intent buyers search using natural language prompts and how companies optimize semantic authority to capture conversational intent.",
      url: "https://adweh.com/conversational-query-targeting-aieo/",
    },
    {
      category: "GEO",
      title: "Enterprise Knowledge Graphs & Citation Authority for GEO",
      excerpt: "How to build and connect authoritative ecosystem citations and schema structures that generative search engines trust.",
      url: "https://adweh.com/enterprise-knowledge-graphs-citations-geo/",
    },
    {
      category: "SEO",
      title: "High-Intent Keyword Architecture for Commercial Enterprises",
      excerpt: "Targeting high-converting, commercial search terms that drive qualified inquiries across real estate, hospitality, healthcare, and manufacturing.",
      url: "https://adweh.com/high-intent-keyword-architecture-seo/",
    },
    {
      category: "SEO",
      title: "Online Reputation & Review Signals for Regional Search Dominance",
      excerpt: "How to build and protect a formidable review profile to maximize organic click-through, buyer confidence, and local search authority.",
      url: "https://adweh.com/online-reputation-management-enterprises-india/",
    },
    {
      category: "AIEO",
      title: "Brand Sentiment & Entity Anchoring Across AI Assistants",
      excerpt: "Auditing and reinforcing positive company recommendations across major conversational AI models and LLM engines.",
      url: "https://adweh.com/brand-sentiment-entity-anchoring-aieo/",
    },
    {
      category: "GEO",
      title: "Search Engines vs Generative Engines: The Future of Customer Discovery",
      excerpt: "A complete analysis of how generative AI summaries are reshaping buyer decision-making and cross-industry brand discovery.",
      url: "https://adweh.com/search-engines-vs-generative-engines-enterprises/",
    },
  ];

  return (
    <section className="relative py-12 px-5 min-h-screen bg-ink" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      <div className="mx-auto max-w-[1400px]">
        {/* Header navigation bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em]">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-bone text-ink text-[9px]" style={{ background: "#f5f1ea", color: "#0a0a0a" }}>
              §
            </span>
            <span className="opacity-60">009</span>
            <span>/</span>
            <span>All Articles</span>
          </div>

          <a
            href="/#blog"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/#blog");
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[12px] font-semibold hover:bg-white hover:text-ink transition duration-300 cursor-pointer"
            style={{ color: "#f5f1ea" }}
          >
            ← Back to Home
          </a>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-bone">
            All Articles & Guides
          </h1>
          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-bone/60">
            Explore guides, case studies, and growth insights across AIEO, GEO, SEO, and website development for market leaders across real estate, hospitality, healthcare, manufacturing, and commerce.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <a
              key={idx}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 h-full"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0000cd]/10 border border-[#0000cd]/20 px-3 py-1 text-[10px] font-mono text-[#0000cd] uppercase tracking-[0.1em]">
                  {art.category}
                </span>

                <h2 className="mt-6 font-display text-xl sm:text-2xl leading-snug tracking-tight text-bone group-hover:text-[#0000cd] transition duration-300">
                  {art.title}
                </h2>

                <p className="mt-3 text-[13.5px] leading-relaxed text-bone/60">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-end">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0000cd] text-ink pl-4 pr-1.5 py-1.5 text-[12px] font-semibold transition group-hover:bg-bone group-hover:text-ink duration-300">
                  Read Article
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-ink text-[#0000cd] transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
