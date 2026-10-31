import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";

export type ServiceSlug = "seo" | "aieo" | "geo" | "website-development";

interface ServiceDetail {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  headline: string;
  lede: string;
  body: string;
  workItems: string[];
  whoItsFor: string;
  ctaText: string;
  securityNote?: string;
}

const SERVICE_DATA: Record<ServiceSlug, ServiceDetail> = {
  seo: {
    slug: "seo",
    eyebrow: "ORGANIC SEARCH ENGINE OPTIMIZATION",
    title: "Search Engine Optimization (SEO)",
    headline: "Be There When Customers Search for What You Offer.",
    lede: "People already search for your services. SEO helps make your business easier to find when that demand exists.",
    body: "ADWEH combines technical SEO, search-intent research, useful content, and clear conversion pathways to improve your website's ability to compete for relevant searches. We focus on attracting people with a genuine commercial reason to enquire.",
    workItems: [
      "Technical foundations & Core Web Vitals optimization",
      "Service and location landing page architecture",
      "Search-intent mapping and on-page relevance",
      "Content planning and structured topic authority",
      "Local SEO & Google Business Profile visibility",
      "Transparent rank and conversion measurement reporting",
    ],
    whoItsFor: "Businesses seeking sustainable organic visibility and qualified inbound opportunities across metropolitan and regional markets.",
    ctaText: "Discuss My SEO Opportunities →",
  },
  aieo: {
    slug: "aieo",
    eyebrow: "AI ASSISTANT DISCOVERY",
    title: "AI Engine Optimization (AIEO)",
    headline: "Make Your Business Easier to Understand in AI Search.",
    lede: "Customers are asking AI assistants questions about providers, products, and services. Your business needs clear, credible information that these systems can interpret.",
    body: "ADWEH improves answer-focused content, business facts, entity consistency, and discoverable references to support visibility in AI-assisted research. We assess observed outputs across ChatGPT, Claude, and Perplexity without promising placement.",
    workItems: [
      "Question and prompt research across buyer decision stages",
      "Business entity clarity and Knowledge Graph consistency",
      "Structured, answer-focused website content passages",
      "Citation and NAP corroboration across authoritative directories",
      "Sampled AI visibility monitoring and share-of-voice reviews",
    ],
    whoItsFor: "Forward-thinking enterprises and clinics that want AI assistants to accurately understand, shortlist, and recommend their services.",
    ctaText: "Review My AI Search Visibility →",
  },
  geo: {
    slug: "geo",
    eyebrow: "GENERATIVE SEARCH OVERVIEWS",
    title: "Generative Engine Optimization (GEO)",
    headline: "Give Generative Search Better Reasons to Understand Your Business.",
    lede: "Generative search experiences bring together information from multiple sources to answer complex questions. Strong, clear, well-supported content can help your business participate in that information ecosystem.",
    body: "ADWEH builds useful content architecture, improves source consistency, and reviews how your business appears in defined generative-search scenarios on Google AI Overviews and Gemini.",
    workItems: [
      "Topic, question, and informational passage mapping",
      "Authoritative, fact-checked editorial content",
      "Schema.org structured data (Organization, Service, FAQ, WebSite)",
      "Source and cross-reference corroboration",
      "Competitive generative search presence assessment",
    ],
    whoItsFor: "Category leaders seeking prominent synthesis and citations inside Google AI snapshot overviews.",
    ctaText: "Explore My GEO Opportunities →",
  },
  "website-development": {
    slug: "website-development",
    eyebrow: "TECHNICAL WEB INFRASTRUCTURE",
    title: "Security-Focused Website Development",
    headline: "Your Website Should Earn Trust Before It Asks for Business.",
    lede: "A professional website should load efficiently, explain your value clearly, and help customers take action without friction.",
    body: "ADWEH builds responsive websites with search-friendly architecture, clear content structure, thoughtful conversion journeys, and security-focused implementation. We prepare the foundation for ongoing SEO, AIEO, and GEO.",
    workItems: [
      "Information architecture and conversion user experience (UX)",
      "Clean semantic HTML structure and mobile responsiveness",
      "Speed optimization and sub-second page performance",
      "HTTPS, strict TLS configuration, and security headers",
      "Form safeguards, anti-spam protections, and endpoint hardening",
      "Cross-browser testing, accessibility, and launch checks",
    ],
    securityNote: "Security clarification: Security measures are scoped to each project. Vulnerability testing does not guarantee the absence of vulnerabilities or constitute formal certification.",
    whoItsFor: "Enterprises, clinics, developers, and growing brands that require a fast, high-converting, and security-conscious website.",
    ctaText: "Plan My Website Project →",
  },
};

export default function ServicePage({ service }: { service: ServiceSlug }) {
  const data = SERVICE_DATA[service] || SERVICE_DATA.seo;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [service]);

  return (
    <div className="min-h-screen bg-paper text-ink py-10 px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-8">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-ink/60">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              className="hover:text-black cursor-pointer"
            >
              Home
            </a>
            <span>/</span>
            <a
              href="/#services"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/#services");
              }}
              className="hover:text-black cursor-pointer"
            >
              Services
            </a>
            <span>/</span>
            <span className="text-[#1e2bc8] font-bold">{data.title}</span>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="text-xs font-mono uppercase tracking-wider text-ink/70 hover:text-black"
          >
            ← Back to Home
          </a>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl py-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold block mb-3">
            [ {data.eyebrow} ]
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05]">
            {data.headline}
          </h1>
          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-ink/80 font-medium font-sans">
            {data.lede}
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink/70 font-sans">
            {data.body}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What We Work On */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-ink/10 p-6 sm:p-9 shadow-sm space-y-6">
            <h2 className="font-display text-2xl font-bold text-ink">
              What We Work On:
            </h2>
            <ul className="space-y-3 font-sans">
              {data.workItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14.5px] text-ink/80 leading-relaxed">
                  <span className="text-[#1e2bc8] font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {data.securityNote && (
              <div className="p-4 rounded-xl bg-paper border border-ink/10 text-xs font-mono text-ink/65 leading-relaxed">
                <strong>Note:</strong> {data.securityNote}
              </div>
            )}
          </div>

          {/* Right Column: Who it's for & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-bone-2/40 border border-ink/10 p-6 sm:p-8" style={{ background: "rgba(235,229,218,.4)" }}>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#1e2bc8] font-bold mb-2">
                [ Who It's For ]
              </div>
              <h3 className="font-display text-xl font-bold text-ink">
                Ideal For Your Business
              </h3>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed font-sans">
                {data.whoItsFor}
              </p>

              <div className="mt-6 pt-5 border-t border-ink/10">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/contact");
                  }}
                  className="w-full text-center block rounded-full bg-[#1e2bc8] text-white py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-[#0a0a0a] transition shadow-md"
                >
                  {data.ctaText}
                </a>
              </div>
            </div>

            {/* Quick Links to other services */}
            <div className="rounded-2xl border border-ink/10 bg-white p-5 text-xs font-mono space-y-2">
              <div className="text-ink/50 uppercase tracking-wider font-bold mb-3">Other Core Services:</div>
              {Object.keys(SERVICE_DATA).filter((k) => k !== service).map((sKey) => {
                const s = SERVICE_DATA[sKey as ServiceSlug];
                return (
                  <div key={sKey} className="flex items-center justify-between py-1.5 border-b border-ink/5 last:border-0">
                    <span className="text-ink/80">{s.title}</span>
                    <a
                      href={`/${s.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(`/${s.slug}`);
                      }}
                      className="text-[#1e2bc8] font-bold hover:underline"
                    >
                      View →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
