import { useEffect, useState } from "react";
import { navigateTo } from "../utils/navigation";
import { whatsappLink } from "./CaseStudies/caseStudiesData";

const FORM_ENDPOINT = "https://script.google.com/a/macros/medscalesystems.com/s/AKfycbzFrV2s1-DpgBT5hlHoMWUwdeU1ESSwS6CoSyRPW7AexgCZ3TKDbQfRxrfxvtNiisI/exec";

export default function ContactPage() {
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
    <section className="relative py-12 px-5 min-h-screen bg-ink" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Ambient decorative blobs */}
      <div className="absolute top-20 right-10 h-[480px] w-[480px] rounded-full bg-[#1e2bc8]/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-[360px] w-[360px] rounded-full bg-[#ff5d3b]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top navigation header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-12">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em]">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-bone text-ink text-[9px]" style={{ background: "#f5f1ea", color: "#0a0a0a" }}>
              §
            </span>
            <span className="opacity-60">012</span>
            <span>/</span>
            <span>Contact &amp; Visibility Assessment</span>
          </div>

          <button
            onClick={() => navigateTo("/")}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[12px] font-semibold hover:bg-white hover:text-ink transition duration-300 cursor-pointer"
            style={{ color: "#f5f1ea" }}
          >
            ← Back to Home
          </button>
        </div>

        {/* Section title & intro */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold mb-3">
                [ START WITH CLARITY ]
              </div>
              <h1 className="font-display text-[36px] sm:text-[64px] lg:text-[76px] leading-[0.92] tracking-[-0.04em] text-white">
                Find out what's
                <br />
                <span className="font-serif-i italic text-[#5c85ff]">holding back</span> your
                <br />
                digital visibility.
              </h1>
              <p className="mt-6 text-[15.5px] leading-relaxed text-bone/70 max-w-lg font-sans">
                You don't need to guess whether your website, Google presence, or AI-search readiness deserves attention. Tell us about your business and we'll identify the most useful areas to review.
              </p>
            </div>

            {/* What Your Assessment Can Cover */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                What Your Assessment Can Cover:
              </div>
              <div className="space-y-3.5 text-sm text-bone/75 font-sans">
                <div className="flex items-start gap-3">
                  <span className="text-[#5c85ff] font-bold">●</span>
                  <div>
                    <strong className="text-white">Google search:</strong> How clearly your services and locations are represented in search.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#5c85ff] font-bold">●</span>
                  <div>
                    <strong className="text-white">AI discovery:</strong> Whether your business facts and expertise are easy to find and understand.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#5c85ff] font-bold">●</span>
                  <div>
                    <strong className="text-white">Website foundation:</strong> Technical, usability, performance, and security-focused observations within the assessment scope.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#5c85ff] font-bold">●</span>
                  <div>
                    <strong className="text-white">Conversion opportunities:</strong> Whether visitors can quickly understand your offer and contact you.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Bento Cards */}
            <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-50">Head Office</div>
                <div className="mt-2 text-[13px] font-sans font-medium leading-relaxed">
                  2/17B Palyathan Street, Alandur<br />
                  <span className="text-white">Chennai – 600 016, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-50">Direct Contact</div>
                <div className="mt-2 text-[13px] font-sans font-medium leading-relaxed">
                  <a href="mailto:admin@adweh.com" className="text-white hover:text-[#5c85ff] transition block">
                    admin@adweh.com
                  </a>
                  <a href="tel:+918667031931" className="text-white hover:text-[#5c85ff] transition block mt-1">
                    +91 86670 31931
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#5c85ff] hover:underline"
              >
                Prefer a conversation? Ask About a Strategy Call on WhatsApp →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl bg-bone text-ink p-6 sm:p-10 shadow-2xl"
              style={{ background: "#f5f1ea" }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-ink/10">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                    Tell Us About Your Business
                  </h2>
                  <p className="text-xs text-ink/60 mt-1">We'll review your details and recommend the most useful next step.</p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">* Required</span>
              </div>

              {sent ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#1e2bc8] text-white text-2xl flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink">Thanks—your request has been received.</h3>
                  <p className="text-sm text-ink/75 max-w-md mx-auto leading-relaxed">
                    We'll review the details and contact you about the next step.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-xs font-mono uppercase tracking-wider text-[#1e2bc8] hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <div className="mt-6 space-y-4 font-sans">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
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
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
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
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
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
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 mb-1">
                        Industry
                      </label>
                      <select
                        value={form.industry}
                        onChange={(e) => setForm({ ...form, industry: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-[#1e2bc8] focus:outline-none"
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
                        className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-[#1e2bc8] focus:outline-none"
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
                      placeholder="+91 86670 31931"
                      className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
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
                      placeholder="Share details on your current rankings, target services, or website objectives..."
                      className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-[#1e2bc8] focus:outline-none"
                    />
                  </div>

                  <p className="text-[11px] text-ink/60 leading-normal">
                    By submitting, you agree to be contacted about your enquiry. Read our Privacy Policy for how we handle your information.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-[#0a0a0a] text-white py-4 text-sm font-semibold hover:bg-[#1e2bc8] transition duration-200 cursor-pointer disabled:opacity-50"
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
