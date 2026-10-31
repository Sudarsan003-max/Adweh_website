import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

const industries = [
  {
    tag: "01",
    name: "Healthcare & Clinics",
    desc: "Help prospective patients find accurate information about services, locations, practitioners, and appointment options. Prioritize clear, responsible health information and an easy enquiry experience.",
    focus: "Speciality ranking, map pack visibility & AI provider recommendations",
  },
  {
    tag: "02",
    name: "Real Estate & Property",
    desc: "Improve discoverability for developments, locations, property categories, and buyer questions. Give prospects the information they need to enquire with confidence.",
    focus: "High-intent buyer searches, project architecture & location authority",
  },
  {
    tag: "03",
    name: "Hotels & Hospitality",
    desc: "Support visibility for property searches, experiences, amenities, locations, and direct-booking journeys with useful, structured content.",
    focus: "Direct bookings, experiential search queries & local ecosystem signals",
  },
  {
    tag: "04",
    name: "Manufacturing & B2B",
    desc: "Make technical capabilities, industries served, specifications, and enquiry pathways easier for procurement teams and business buyers to discover.",
    focus: "Technical specifications, procurement searches & RFQ pathways",
  },
  {
    tag: "05",
    name: "Commerce & Growing Brands",
    desc: "Strengthen category visibility, product or service information, and website experiences that help shoppers evaluate and act.",
    focus: "Category dominance, buyer decision queries & high-speed UX",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-8 sm:py-20 bg-bone-2/30 overflow-hidden" style={{ background: "#f2ece2" }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="006" label="Who We Help" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3">
              [ SECTOR SPECIALIZATION ]
            </div>
            <h2 className="font-display text-[28px] xs:text-[36px] sm:text-[60px] lg:text-[76px] leading-[1.0] sm:leading-[0.95] tracking-[-0.035em] text-ink">
              Different industries.
              <br className="hidden sm:inline" />{" "}
              One common challenge: <span className="font-serif-i italic text-[#1e2bc8]">Being chosen.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[13.5px] sm:text-[16px] leading-relaxed text-ink/75 font-sans">
              Search habits vary by sector, but buyer psychology doesn't: clients choose businesses that are easy to find, transparent, and authoritative.
            </p>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="mt-6 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {industries.map((ind) => (
            <div
              key={ind.tag}
              className="rounded-xl sm:rounded-2xl border border-ink/10 bg-white p-4 sm:p-7 hover:border-[#1e2bc8] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-ink/5">
                  <span className="font-mono text-xs font-bold text-[#1e2bc8]">{ind.tag}</span>
                  <span className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-wider text-ink/50">Market Sector</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink mt-3 sm:mt-4 tracking-tight">
                  {ind.name}
                </h3>
                <p className="mt-2 sm:mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-ink/70 font-sans">
                  {ind.desc}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-ink/5">
                <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-ink/50">Strategy focus:</div>
                <div className="text-[11.5px] sm:text-[12px] font-medium text-ink/80 mt-0.5 sm:mt-1">{ind.focus}</div>
              </div>
            </div>
          ))}

          {/* CTA Box in Grid */}
          <div className="rounded-xl sm:rounded-2xl border-2 border-dashed border-[#1e2bc8]/40 bg-[#1e2bc8]/5 p-4 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#1e2bc8] font-bold">
                [ Tailored Approach ]
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink mt-2 sm:mt-3">
                Your industry changes the search strategy.
              </h3>
              <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-ink/70">
                It shouldn't change the standard of clarity, trust, and execution.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1e2bc8] text-white px-5 py-2.5 text-[12.5px] font-semibold hover:bg-[#0a0a0a] transition cursor-pointer w-full sm:w-auto"
              >
                Discuss Your Industry Strategy →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

