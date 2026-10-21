import { SectionHead } from "./About";

const items = [
  {
    quote: "ADWEH completely transformed our patient acquisition. We went from 45 leads per month to 238 leads per month in just 6 months. Our ROI has been incredible.",
    name: "Dr. Sarah Johnson",
    role: "Founder · Bright Family Clinic",
    initials: "SJ",
    tag: "238 leads / mo",
    metric: "+428%",
  },
  {
    quote: "Finally, a marketing agency that understands healthcare. They handle all our compliance requirements while delivering exceptional results. Highly recommended.",
    name: "Michael Chen",
    role: "CEO · Metro Health Group",
    initials: "MC",
    tag: "HIPAA Compliant",
    metric: "100%",
  },
  {
    quote: "The team at ADWEH is professional, knowledgeable, and results‑driven. They've helped us become the #1 ranked practice in our area.",
    name: "Dr. Amelia Rivera",
    role: "Owner · Rivera Dental Studio",
    initials: "AR",
    tag: "Local Rank",
    metric: "#1",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="relative py-10 sm:py-24 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="009" label="The receipts" />

        <div className="mt-6 sm:mt-12 grid lg:grid-cols-12 gap-6 sm:gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[30px] xs:text-[36px] sm:text-[64px] lg:text-[84px] leading-[0.92] tracking-[-0.04em] text-ink">
              Words from <span className="font-serif-i">healthcare</span>
              <br />
              leaders we serve.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14px] sm:text-[15px] leading-relaxed text-ink/70 max-w-md lg:ml-auto">
            Real outcomes from real practices. Our partnerships average 4.98 / 5 stars across
            130+ verified healthcare clients.
          </p>
        </div>

        <div className="mt-8 sm:mt-16 grid md:grid-cols-3 gap-3.5 sm:gap-5">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className={`group relative rounded-2xl sm:rounded-[28px] p-5 sm:p-7 lg:p-8 lift overflow-hidden flex flex-col justify-between ${
                i === 1 ? "bg-[#0000cd] text-white" : "bg-[#f5f1ea] border border-ink/10 text-ink"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className={`flex text-[13px] sm:text-[14px] ${i === 1 ? "text-white" : "text-ink"}`}>★★★★★</div>
                  <span className={`text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-0.5 sm:py-1 rounded-full ${i === 1 ? "bg-[#0a0a0a] text-[#f5f1ea]" : "bg-ink/5 text-ink/70"}`}>
                    {t.tag}
                  </span>
                </div>

                <div className="mt-3.5 sm:mt-5 font-display text-4xl sm:text-6xl leading-none opacity-20">"</div>
                <blockquote className={`mt-1 sm:mt-2 text-[13.5px] sm:text-[15.5px] leading-[1.5] sm:leading-[1.55] ${i === 1 ? "text-white/85" : "text-ink/85"}`}>
                  {t.quote}
                </blockquote>
              </div>

              <div className={`mt-5 sm:mt-8 flex items-end justify-between gap-3 pt-4 sm:pt-5 border-t ${i === 1 ? "border-white/20" : "border-ink/15"}`}>
                <figcaption className="flex items-center gap-2.5 sm:gap-3">
                  <span className={`grid place-items-center h-9 w-9 sm:h-11 sm:w-11 rounded-full font-semibold text-[11px] sm:text-[12px] bg-[#0a0a0a] ${i === 1 ? "text-[#0000cd]" : "text-[#f5f1ea]"}`}>
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-[12.5px] sm:text-[13.5px] font-medium">{t.name}</div>
                    <div className="text-[10px] sm:text-[11px] opacity-60">{t.role}</div>
                  </div>
                </figcaption>
                <div className="text-right">
                  <div className="font-display text-2xl sm:text-3xl tracking-[-0.03em]">{t.metric}</div>
                </div>
              </div>
            </figure>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl bg-ink text-bone p-4 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
          {[
            { n: "130+", k: "Brands scaled" },
            { n: "4.98★", k: "Client rating" },
            { n: "$400K+", k: "Revenue generated" },
            { n: "24h", k: "Response time" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-2xl xs:text-3xl sm:text-5xl tracking-[-0.04em]">{s.n}</div>
              <div className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
