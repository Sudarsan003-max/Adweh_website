import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

type Plan = {
  tag: string;
  name: string;
  desc: string;
  idealFor: string;
  features: { title: string; items: string[] }[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    tag: "01 · AI Search",
    name: "AIEO",
    desc: "Artificial Intelligence Engine Optimization — maximizing direct citations, recommendations, and visibility across leading AI models like ChatGPT, Claude, and Perplexity.",
    idealFor: "Practices wanting to capture patients searching through AI assistants.",
    features: [
      { title: "AI Answer Engine Citations", items: ["Optimized inclusion across ChatGPT, Claude, and Perplexity", "Knowledge-base authority and entity indexing"] },
      { title: "Conversational Query Targeting", items: ["Targeting prompt-driven patient inquiries", "Semantic authority mapping for clinical specialties"] },
      { title: "Brand Sentiment & Mention Audits", items: ["Continuous tracking of AI model response sentiment", "Disinformation mitigation and reputation anchoring"] },
    ],
  },
  {
    tag: "02 · Generative Discovery",
    name: "GEO",
    desc: "Generative Engine Optimization — structuring clinical content, schemas, and medical citations to improve visibility in Google AI Overviews, Gemini, and Microsoft Copilot summaries.",
    idealFor: "Practices aiming to capture top positions in generative AI overview snippets.",
    highlight: true,
    features: [
      { title: "Google AI Overviews Optimization", items: ["Optimization for inclusion in Google AI snapshot answers", "Passage-level semantic structuring & fact indexing"] },
      { title: "Multi-Model Citation Architecture", items: ["High-trust external citations and clinical attribution graphs", "Schema.org MedicalWebPage and Physician structured data"] },
      { title: "Generative Query Modeling", items: ["Targeting conversational, synthesized patient prompts", "Competitive AI share-of-voice benchmarking"] },
    ],
  },
  {
    tag: "03 · Organic Search",
    name: "SEO",
    desc: "Search Engine Optimization — high-intent search visibility, technical architecture, and local Google Maps optimization to capture qualified patient demand around the clock.",
    idealFor: "Medical practices building lasting organic search presence and patient volume.",
    features: [
      { title: "High-Intent Keyword Optimization", items: ["Rankings for treatment-specific, local search terms", "Patient-focused topical content hubs and medical copy"] },
      { title: "Local SEO & Google Maps Optimization", items: ["Google Business Profile optimization and review management", "Local citation building across healthcare directories"] },
      { title: "Technical SEO & Site Architecture", items: ["Core Web Vitals acceleration and mobile performance", "Crawl budget optimization and clean semantic hierarchy"] },
    ],
  },
  {
    tag: "04 · Engineering",
    name: "Website Development",
    desc: "High-performance digital infrastructure engineered with cybersecurity rigor, vulnerability testing, and seamless optimization for search and generative engines.",
    idealFor: "Healthcare providers requiring secure, high-converting, and modern web platforms.",
    features: [
      { title: "Cybersecurity-Focused Development", items: ["Build websites using security-conscious development practices", "Data encryption in transit, strict headers & HIPAA standards"] },
      { title: "Secure Website Building & Testing", items: ["Develop and test websites to identify vulnerabilities and improve security", "Security vulnerability testing and secure form endpoint hardening"] },
      { title: "SEO, AIEO & GEO Optimization", items: ["Build websites optimized for search engines, AI-powered search, and generative engine discovery", "Lightning-fast Core Web Vitals with semantic HTML architecture"] },
    ],
  },
];

export default function Solutions() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="006" label="The system" />

        <div className="mt-8 sm:mt-12 grid lg:grid-cols-12 gap-8 sm:gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[36px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em] text-ink">
              One full‑stack <span className="font-serif-i">prescription</span>
              <br />
              for healthcare growth.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-ink/70 max-w-md lg:ml-auto">
            Four specialized capabilities engineered to position healthcare practices at the forefront of search, artificial intelligence, and digital security.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-10 text-center text-[12px] font-mono uppercase tracking-[0.22em] text-ink/50">
          ✦ All systems are HIPAA‑compliant by design · Custom healthcare deployments available ✦
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const h = plan.highlight;
  return (
    <div
      className={`group relative rounded-2xl sm:rounded-[28px] p-6 sm:p-8 lift overflow-hidden ${
        h ? "bg-ink text-bone" : "bg-bone-2/40 text-ink border border-ink/10"
      }`}
      style={h ? { background: "#0a0a0a", color: "#f5f1ea" } : { background: "rgba(235,229,218,.5)" }}
    >
      {h && (
        <>
          <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-[#0000cd]/15 blur-3xl" />
          <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-[0.22em] bg-[#0000cd] text-ink px-2.5 py-1 rounded-full">★ Pick</div>
        </>
      )}

      <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-60">[ {plan.tag} ]</div>
      <h3 className="mt-5 font-display text-4xl tracking-[-0.04em] leading-none">
        {plan.name.replace("Growth‑", "Growth ")}<span className={h ? "text-[#0000cd]" : "text-ink"}>.</span>
      </h3>
      <p className={`mt-3 text-[13.5px] leading-relaxed ${h ? "opacity-70" : "text-ink/65"}`}>{plan.desc}</p>

      <div className={`mt-5 rounded-2xl p-4 ${h ? "bg-white/5 border border-white/10" : "bg-bone border border-ink/10"}`} style={!h ? { background: "#f5f1ea" } : {}}>
        <div className={`text-[10px] font-mono uppercase tracking-[0.2em] ${h ? "text-[#0000cd]" : "text-ink/55"}`}>Ideal for</div>
        <div className={`mt-1 text-[13px] ${h ? "" : "text-ink/85"}`}>{plan.idealFor}</div>
      </div>



      <div className="mt-5 space-y-4">
        {plan.features.map((f) => (
          <div key={f.title} className={`pb-4 border-b ${h ? "border-white/10" : "border-ink/10"} last:border-0 last:pb-0`}>
            <div className="flex items-center gap-2">
              <span className={`grid place-items-center h-5 w-5 rounded-md text-[11px] font-bold ${h ? "bg-[#0000cd] text-ink" : "bg-ink text-bone"}`} style={!h ? { background: "#0a0a0a", color: "#f5f1ea" } : {}}>✓</span>
              <div className="text-[13px] font-semibold">{f.title}</div>
            </div>
            <ul className={`mt-1.5 ml-7 space-y-0.5 list-disc list-outside ${h ? "marker:text-white/30" : "marker:text-ink/30"}`}>
              {f.items.map((it) => (
                <li key={it} className={`text-[12px] leading-relaxed ${h ? "opacity-65" : "text-ink/65"}`}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        href="/contact"
        onClick={(e) => {
          e.preventDefault();
          navigateTo("/contact");
        }}
        className={`mt-7 group/btn inline-flex w-full items-center justify-between rounded-full pl-5 pr-1.5 py-1.5 text-[13px] font-medium transition cursor-pointer ${
          h ? "bg-white text-ink hover:bg-[#0000cd] hover:text-white" : "bg-ink text-bone hover:bg-[#ff5d3b]"
        }`}
        style={!h ? { background: "#0a0a0a", color: "#f5f1ea" } : {}}
      >
        Get a free audit
        <span className={`grid place-items-center h-9 w-9 rounded-full transition-all group-hover/btn:rotate-45 ${h ? "bg-ink text-[#0000cd] group-hover/btn:bg-white group-hover/btn:text-[#0000cd]" : "bg-[#0000cd] text-ink"}`} style={!h ? {} : {}}>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </a>
    </div>
  );
}
