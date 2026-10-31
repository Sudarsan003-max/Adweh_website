const verifiedPartners = [
  "Soul Skin Clinic",
  "Virtue Clinic & Academy",
  "Dr. Swathi's Cosmetic Clinic",
  "Subam Skin Clinic",
  "Mithran Fertility Center",
  "Healthcare & Clinics",
  "Real Estate & Property",
  "Hotels & Hospitality",
  "Manufacturing & B2B",
  "Commerce & Modern Brands",
];

export default function Logos() {
  return (
    <section className="relative bg-ink py-6 sm:py-16 overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-3 sm:gap-6 items-end">
          <div className="lg:col-span-5">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold mb-1.5 sm:mb-2">
              [ VERIFIED EVIDENCE &amp; SECTORS · 002 ]
            </div>
            <h2 className="font-display text-xl sm:text-4xl tracking-tight text-white">
              High-intent visibility across competitive sectors.
            </h2>
          </div>
          <div className="lg:col-span-7 text-[12.5px] sm:text-[14px] text-bone/70 max-w-lg lg:ml-auto font-sans">
            From specialized dermatology and fertility clinics to real estate, hospitality, and B2B manufacturing—we build the search and AI foundations that help businesses win their market.
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track inline-flex gap-5 sm:gap-14 whitespace-nowrap pr-5 sm:pr-14">
          {[...verifiedPartners, ...verifiedPartners].map((b, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 sm:gap-5">
              <span className="font-display text-[20px] sm:text-[44px] tracking-tight text-white font-medium">
                {b}
              </span>
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#1e2bc8]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
