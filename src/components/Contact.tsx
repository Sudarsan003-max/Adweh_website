import { useState } from "react";
import { SectionHead } from "./About";
import { whatsappLink } from "./CaseStudies/caseStudiesData";

const FORM_ENDPOINT = "https://script.google.com/a/macros/medscalesystems.com/s/AKfycbzFrV2s1-DpgBT5hlHoMWUwdeU1ESSwS6CoSyRPW7AexgCZ3TKDbQfRxrfxvtNiisI/exec";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    industry: "Healthcare & Clinics",
    priority: "Not Sure",
    notes: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({
            token: "adweh_visibility_assessment_2026",
            ...form,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error("Error submitting form to endpoint:", error);
      }
    }

    setSubmitting(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-8 sm:py-20 bg-ink overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      <div className="absolute -top-20 -right-20 h-[420px] w-[420px] blob bg-[#1e2bc8] opacity-50" />
      <div className="absolute bottom-10 -left-20 h-[260px] w-[260px] rounded-full bg-[#1e2bc8]/30 blur-[80px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="011" label="Start With Clarity" light />

        <div className="mt-5 sm:mt-14 grid lg:grid-cols-12 gap-6 sm:gap-14 items-start">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold mb-2 sm:mb-3">
                [ VISIBILITY ASSESSMENT ]
              </div>
              <h2 className="font-display text-[30px] xs:text-[38px] sm:text-[60px] lg:text-[76px] leading-[0.98] sm:leading-[0.95] tracking-[-0.035em] text-white">
                Find out what's <span className="font-serif-i italic text-[#5c85ff]">holding back</span>{" "}
                <br className="hidden sm:inline" />
                your digital visibility.
              </h2>
              <p className="mt-2.5 sm:mt-4 text-[14px] sm:text-[16px] leading-relaxed text-bone/70 max-w-lg font-sans">
                You don't need to guess whether your website, Google presence, or AI-search readiness deserves attention. Tell us about your business and we'll identify the most useful areas to review.
              </p>
            </div>

            {/* What Your Assessment Can Cover */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                What Your Assessment Can Cover:
              </div>
              <div className="space-y-2.5 sm:space-y-3 text-[12.5px] sm:text-[13px] text-bone/75 font-sans">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#5c85ff] font-bold">●</span>
                  <div>
                    <strong className="text-white">Google search:</strong> How clearly your services and locations are represented in search.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#5c85ff] font-bold">●</span>
                  <div>
                    <strong className="text-white">AI discovery:</strong> Whether your business facts and expertise are easy to find and understand.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#5c85ff] font-bold">●</span>
                  <div>
                    <strong className="text-white">Website foundation:</strong> Technical, usability, performance, and security-focused observations within the assessment scope.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#5c85ff] font-bold">●</span>
                  <div>
                    <strong className="text-white">Conversion opportunities:</strong> Whether visitors can quickly understand your offer and contact you.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact & WhatsApp */}
            <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs font-mono">
              <div className="rounded-xl border border-white/10 p-3 sm:p-3.5 bg-white/[0.01]">
                <div className="text-bone/50 uppercase text-[10px] sm:text-xs">Direct Email</div>
                <div className="mt-1 text-white font-medium">admin@adweh.com</div>
              </div>
              <div className="rounded-xl border border-white/10 p-3 sm:p-3.5 bg-white/[0.01]">
                <div className="text-bone/50 uppercase text-[10px] sm:text-xs">Direct Phone / WhatsApp</div>
                <div className="mt-1 text-white font-medium">+91 86670 31931</div>
              </div>
            </div>

            <div className="pt-1 sm:pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#5c85ff] hover:underline"
              >
                Prefer a quick chat? Ask About a Strategy Call on WhatsApp →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl sm:rounded-3xl bg-bone text-ink p-4 sm:p-9 shadow-2xl"
              style={{ background: "#f5f1ea" }}
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-ink/10">
                <h3 className="font-display text-lg sm:text-2xl font-bold tracking-tight text-ink">
                  Tell Us About Your Business
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">* Required</span>
              </div>

              {sent ? (
                <div className="py-8 sm:py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#1e2bc8] text-white text-xl flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-ink">Thanks—your request has been received.</h4>
                  <p className="text-sm text-ink/70 max-w-md mx-auto">
                    We'll review your details and contact you about the next step.
                  </p>
                </div>
              ) : (
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 sm:py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 sm:py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                        Company / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company or clinic name"
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 sm:py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                        Website URL
                      </label>
                      <input
                        type="text"
                        value={form.website}
                        onChange={(e) => setForm({ ...form, website: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 sm:py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                        Industry
                      </label>
                      <select
                        value={form.industry}
                        onChange={(e) => setForm({ ...form, industry: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 sm:py-2.5 text-sm text-ink focus:border-[#1e2bc8] focus:outline-none"
                      >
                        <option value="Healthcare & Clinics">Healthcare &amp; Clinics</option>
                        <option value="Real Estate & Property">Real Estate &amp; Property</option>
                        <option value="Hotels & Hospitality">Hotels &amp; Hospitality</option>
                        <option value="Manufacturing & B2B">Manufacturing &amp; B2B</option>
                        <option value="Commerce & Growing Brands">Commerce &amp; Growing Brands</option>
                        <option value="Other">Other Service Business</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                        Main Priority
                      </label>
                      <select
                        value={form.priority}
                        onChange={(e) => setForm({ ...form, priority: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 sm:py-2.5 text-sm text-ink focus:border-[#1e2bc8] focus:outline-none"
                      >
                        <option value="SEO">SEO (Search Engine Optimization)</option>
                        <option value="AIEO">AIEO (AI Assistant Citations)</option>
                        <option value="GEO">GEO (Generative Engine Optimization)</option>
                        <option value="Website Development">Security-Focused Website</option>
                        <option value="Not Sure">Not Sure / Complete Review</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 sm:py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                      What would you like to improve?
                    </label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Tell us about your current visibility challenges or growth targets..."
                      className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 sm:py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                    />
                  </div>

                  <p className="text-[11px] text-ink/60 leading-normal font-sans">
                    By submitting, you agree to be contacted about your enquiry. Read our Privacy Policy for how we handle your information.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-[#0a0a0a] text-white py-3 sm:py-3.5 text-sm font-semibold hover:bg-[#1e2bc8] transition duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Request My Visibility Assessment →"}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
