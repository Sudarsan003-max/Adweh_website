import { useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";
import { ChevronDown, ArrowRight, Building2, Stethoscope, Hotel, Factory, ShoppingBag } from "lucide-react";

const industries = [
  {
    tag: "01",
    name: "Healthcare & Clinics",
    icon: Stethoscope,
    desc: "Help prospective patients find accurate information about services, locations, practitioners, and appointment options. Prioritize clear, responsible health information and an easy enquiry experience.",
    focus: "Speciality ranking, map pack visibility & AI provider recommendations",
  },
  {
    tag: "02",
    name: "Real Estate & Property",
    icon: Building2,
    desc: "Improve discoverability for developments, locations, property categories, and buyer questions. Give prospects the information they need to enquire with confidence.",
    focus: "High-intent buyer searches, project architecture & location authority",
  },
  {
    tag: "03",
    name: "Hotels & Hospitality",
    icon: Hotel,
    desc: "Support visibility for property searches, experiences, amenities, locations, and direct-booking journeys with useful, structured content.",
    focus: "Direct bookings, experiential search queries & local ecosystem signals",
  },
  {
    tag: "04",
    name: "Manufacturing & B2B",
    icon: Factory,
    desc: "Make technical capabilities, industries served, specifications, and enquiry pathways easier for procurement teams and business buyers to discover.",
    focus: "Technical specifications, procurement searches & RFQ pathways",
  },
  {
    tag: "05",
    name: "Commerce & Growing Brands",
    icon: ShoppingBag,
    desc: "Strengthen category visibility, product or service information, and website experiences that help shoppers evaluate and act.",
    focus: "Category dominance, buyer decision queries & high-speed UX",
  },
];

export default function Industries() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [expandedSectors, setExpandedSectors] = useState<Record<string, boolean>>({});

  const toggleSector = (tag: string) => {
    setExpandedSectors((prev) => ({
      ...prev,
      [tag]: !prev[tag],
    }));
  };

  return (
    <section id="industries" className="relative py-10 sm:py-24 overflow-hidden" style={{ background: "#f2ece2" }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="006" label="Who We Help" />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-5 sm:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1e2bc8] font-bold mb-2 sm:mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1e2bc8]" />
              <span>[ SECTOR SPECIALIZATION ]</span>
            </div>
            <h2 className="font-display text-[30px] xs:text-[40px] sm:text-[62px] lg:text-[76px] leading-[1.0] sm:leading-[0.94] tracking-[-0.035em] text-ink font-bold">
              Different industries.
              <br />
              One common challenge:{" "}
              <span className="font-serif-i italic text-[#1e2bc8] font-normal">
                Being chosen.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[14px] sm:text-[16px] leading-relaxed text-ink/75 font-sans">
              Search habits vary by sector, but buyer psychology doesn't: clients choose businesses that are easy to find, transparent, and authoritative.
            </p>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="mt-8 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            // On mobile, show top 2 or 3 sectors unless expanded
            const isHiddenOnMobile = !showAllMobile && idx >= 2;
            const isExpanded = !!expandedSectors[ind.tag];

            return (
              <div
                key={ind.tag}
                className={`rounded-2xl sm:rounded-3xl border border-ink/10 bg-white p-5 sm:p-7 shadow-sm hover:border-[#1e2bc8]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  isHiddenOnMobile ? "hidden sm:flex" : "flex"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-ink/5">
                    <div className="flex items-center gap-2">
                      <span className="grid place-items-center h-6 w-6 rounded-full bg-[#1e2bc8]/10 text-[#1e2bc8] font-mono text-xs font-bold">
                        {ind.tag}
                      </span>
                      <Icon className="h-4 w-4 text-[#1e2bc8]" />
                    </div>
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-ink/50 bg-paper px-2 py-0.5 rounded border border-ink/5">
                      Market Sector
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink mt-4 tracking-tight group-hover:text-[#1e2bc8] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-ink/75 font-sans">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-ink/5">
                  {/* Mobile toggle for Strategy Focus */}
                  <div className="sm:hidden flex items-center justify-between mb-1.5">
                    <button
                      type="button"
                      onClick={() => toggleSector(ind.tag)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#1e2bc8] font-bold"
                    >
                      <span>{isExpanded ? "Hide strategy focus" : "View strategy focus"}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div className={`sm:block ${isExpanded ? "block" : "hidden sm:block"}`}>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-ink/50 font-semibold">
                      Strategy focus:
                    </div>
                    <div className="text-[12px] sm:text-[12.5px] font-medium text-ink/85 mt-1 bg-paper/60 border border-ink/5 p-2 rounded-lg">
                      {ind.focus}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* CTA Box in Grid */}
          <div className="rounded-2xl sm:rounded-3xl border-2 border-dashed border-[#1e2bc8]/40 bg-[#1e2bc8]/5 p-5 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1e2bc8] font-bold">
                [ Tailored Approach ]
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink mt-3">
                Your industry changes the search strategy.
              </h3>
              <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-ink/75">
                It shouldn't change the standard of clarity, trust, and execution.
              </p>
            </div>

            <div className="mt-5 pt-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-[#1e2bc8] text-white px-5 py-2.5 text-[12.5px] font-bold hover:bg-[#0a0a0a] transition cursor-pointer w-full sm:w-auto shadow-md"
              >
                <span>Discuss Your Industry Strategy</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile View Toggle: Show More / Show Less */}
        <div className="mt-6 sm:hidden text-center">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink/20 bg-white font-mono text-xs font-bold text-ink shadow-sm active:scale-95 transition-all"
          >
            <span>
              {showAllMobile
                ? "Show Less Sectors ↑"
                : "Show All 5 Industry Sectors (3 more) ↓"}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-[#1e2bc8] transition-transform duration-200 ${
                showAllMobile ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
