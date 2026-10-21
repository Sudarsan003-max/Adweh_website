import { SectionHead } from "./About";

const reasons = [
  {
    n: "01",
    icon: "✦",
    title: "100% Healthcare Focused",
    items: [
      "Specialized exclusively in healthcare AIEO, GEO, and SEO",
      "Deep insight into patient search intent and medical entity authority",
      "Pioneering AI assistant visibility and generative search discovery",
    ],
  },
  {
    n: "02",
    icon: "↑",
    title: "Proven Track Record",
    items: [
      "130+ medical practices and clinics scaled across India",
      "$400K+ in measurable revenue generated for clients",
      "Average 428% growth in qualified organic patient inquiries",
      "Strengthening Google Maps presence and AI engine citations",
    ],
  },
  {
    n: "03",
    icon: "⛨",
    title: "Security-Conscious Web & HIPAA Awareness",
    items: [
      "Cybersecurity-focused development practices across every build",
      "Secure website building, automated testing & vulnerability remediation",
      "Security-conscious forms, SSL/TLS encryption, and HIPAA-compliant data practices",
    ],
  },
  {
    n: "04",
    icon: "⊕",
    title: "Next-Gen Search & Web Stack",
    items: [
      "Websites engineered from the ground up for SEO, AIEO & GEO",
      "Optimization for multi-model visibility across ChatGPT, Claude & Google Overviews",
      "In-house technical engineering with zero outsourcing",
    ],
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-20 sm:py-28 bg-bone-2/40 overflow-hidden" style={{ background: "#ebe5da" }}>
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="007" label="Why the studio" />

        <div className="mt-8 sm:mt-12 grid lg:grid-cols-12 gap-8 sm:gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[36px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em] text-ink">
              Not another <span className="font-serif-i">agency.</span>
              <br />
              A specialist <span className="text-[#ff5d3b]">partner.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-ink/70 max-w-md lg:ml-auto">
            We exclusively serve healthcare organizations — bringing deep industry expertise,
            regulatory compliance mastery, and proven systems that deliver measurable results.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-px bg-ink/10 rounded-2xl sm:rounded-3xl overflow-hidden border border-ink/10">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative bg-[#f5f1ea] text-ink p-6 sm:p-8 lg:p-10 transition duration-300"
              data-cursor="hover"
            >
              <div className="flex items-start justify-between">
                <span className="grid place-items-center h-14 w-14 rounded-full bg-[#0a0a0a] text-[#f5f1ea] text-2xl transition group-hover:bg-[#0000cd]">
                  {r.icon}
                </span>
                <span className="font-mono text-[11px] tracking-[0.22em] opacity-50">[ {r.n} / 04 ]</span>
              </div>
              <h3 className="mt-8 font-display text-3xl lg:text-4xl tracking-[-0.03em] leading-tight">{r.title}</h3>
              <ul className="mt-6 space-y-2.5">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[13.5px] opacity-75">
                    <span className="mt-2 h-1 w-3 bg-current opacity-60 flex-none" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-[#0000cd] text-[#f5f1ea]">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              {i % 2 === 0 && <div className="absolute top-1/2 -right-px h-12 w-px bg-[#0000cd] opacity-0 group-hover:opacity-100 transition" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
