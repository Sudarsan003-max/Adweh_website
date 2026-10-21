import { useEffect, useState } from "react";
import { SectionHead } from "./About";
import { navigateTo } from "../utils/navigation";

const FORM_ENDPOINT = "https://script.google.com/a/macros/medscalesystems.com/s/AKfycbzFrV2s1-DpgBT5hlHoMWUwdeU1ESSwS6CoSyRPW7AexgCZ3TKDbQfRxrfxvtNiisI/exec";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", practice: "", stage: "AIEO", notes: "" });
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
            token: "medscale_secure_token_2026_xyz",
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
      <div className="absolute top-20 right-10 h-[480px] w-[480px] rounded-full bg-[#0000cd]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-[360px] w-[360px] rounded-full bg-[#ff5d3b]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top navigation header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-12">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em]">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-bone text-ink text-[9px]" style={{ background: "#f5f1ea", color: "#0a0a0a" }}>
              §
            </span>
            <span className="opacity-60">010</span>
            <span>/</span>
            <span>Contact ADWEH</span>
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
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#0000cd] font-semibold mb-3">
                [ Schedule Consultation ]
              </div>
              <h1 className="font-display text-[36px] sm:text-[64px] lg:text-[76px] leading-[0.92] tracking-[-0.04em] text-white">
                Let's <span className="font-serif-i italic">elevate</span>
                <br />
                your healthcare
                <br />
                <span className="text-[#0000cd]">practice.</span>
              </h1>
              <p className="mt-6 text-[15.5px] leading-relaxed text-bone/70 max-w-lg">
                Connect with ADWEH to deploy specialized growth infrastructure across AIEO, GEO, SEO, and cybersecurity-focused website development.
              </p>
            </div>

            {/* Direct Contact Bento Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Head Office</div>
                <div className="mt-2 text-[14px] font-medium leading-relaxed">
                  2/17B Palyathan Street, Alandur<br />
                  <span className="text-white">Chennai – 600 016, India</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Direct Email</div>
                <div className="mt-2 text-[14px] font-medium text-white">
                  <a href="mailto:admin@adweh.com" className="hover:text-[#0000cd] transition">
                    admin@adweh.com
                  </a>
                </div>
                <div className="mt-1 text-[11px] font-mono text-bone/50">Response SLA: &lt; 24h</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Direct Phone</div>
                <div className="mt-2 text-[15px] font-medium text-white">
                  <a href="tel:+918667031931" className="hover:text-[#0000cd] transition">
                    +91 86670 31931
                  </a>
                </div>
                <div className="mt-1 text-[11px] font-mono text-bone/50">Mon–Fri · 07:00 AM – 09:00 PM IST</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Specialization</div>
                <div className="mt-2 text-[14px] font-medium text-white">
                  100% Healthcare
                </div>
                <div className="mt-1 text-[11px] font-mono text-bone/50">130+ Medical Brands Scaled</div>
              </div>
            </div>

            {/* Strategic Consultation Commitments */}
            <div className="space-y-1 border-t border-white/10 pt-6">
              {[
                { k: "Free Strategy Call", v: "30‑min deep dive into current search and AI visibility" },
                { k: "Custom Growth Audit", v: "Full assessment across AIEO, GEO, SEO & web security" },
                { k: "Transparent Engagement", v: "Clear deliverables with zero lock‑in commitments" },
              ].map((b) => (
                <div key={b.k} className="flex items-center justify-between py-4 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center h-8 w-8 rounded-full bg-[#0000cd] text-ink text-[11px] font-bold">
                      ✓
                    </span>
                    <div>
                      <div className="text-[14.5px] font-medium text-white">{b.k}</div>
                      <div className="text-[12px] opacity-60">{b.v}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-6">
            <div
              className="rounded-2xl sm:rounded-[28px] bg-bone text-ink p-5 sm:p-10 shadow-2xl"
              style={{ background: "#f5f1ea" }}
            >
              <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-60">
                  [ Consultation Request · Form ]
                </div>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a] pulse-dot" /> Live
                </span>
              </div>

              {sent ? (
                <div className="mt-12 text-center py-16">
                  <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-[#0000cd] text-ink text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="mt-6 font-display text-3xl tracking-tight">Request received.</h3>
                  <p className="mt-3 opacity-70 text-[14.5px] max-w-sm mx-auto leading-relaxed">
                    Thank you {form.name || "Doctor"} — our growth strategist will review your practice information and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 inline-flex items-center rounded-full bg-[#0a0a0a] text-bone px-6 py-2.5 text-[12px] font-semibold hover:bg-[#0000cd] transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <h3 className="font-display text-2xl sm:text-3xl tracking-tight">
                    Tell us about <span className="font-serif-i italic">your practice.</span>
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono tracking-[0.22em] uppercase opacity-60 block">Your Name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Dr. Sarah Johnson"
                        className="mt-2 w-full rounded-full bg-ink/5 border border-ink/10 px-4 py-3 text-[16px] sm:text-[14px] placeholder:opacity-40 focus:outline-none focus:border-ink/40 focus:bg-bone transition"
                        style={{ background: "rgba(10,10,10,.04)" }}
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-[0.22em] uppercase opacity-60 block">Work Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="sarah@clinic.com"
                        className="mt-2 w-full rounded-full bg-ink/5 border border-ink/10 px-4 py-3 text-[16px] sm:text-[14px] placeholder:opacity-40 focus:outline-none focus:border-ink/40 focus:bg-bone transition"
                        style={{ background: "rgba(10,10,10,.04)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-[0.22em] uppercase opacity-60 block">Practice / Brand Name</label>
                    <input
                      required
                      type="text"
                      value={form.practice}
                      onChange={(e) => setForm({ ...form, practice: e.target.value })}
                      placeholder="Metro Health Aesthetic Clinic"
                      className="mt-2 w-full rounded-full bg-ink/5 border border-ink/10 px-4 py-3 text-[16px] sm:text-[14px] placeholder:opacity-40 focus:outline-none focus:border-ink/40 focus:bg-bone transition"
                      style={{ background: "rgba(10,10,10,.04)" }}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-[0.22em] uppercase opacity-60 block">Service Needed</label>
                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-1.5 rounded-2xl sm:rounded-full bg-ink/5 p-1.5">
                      {[
                        { label: "AIEO", val: "AIEO" },
                        { label: "GEO", val: "GEO" },
                        { label: "SEO", val: "SEO" },
                        { label: "Web Dev", val: "Website Development" },
                      ].map((s) => {
                        const active = form.stage === s.val;
                        return (
                          <button
                            type="button"
                            key={s.label}
                            onClick={() => setForm({ ...form, stage: s.val })}
                            className={`text-[12px] py-2.5 min-h-[40px] rounded-xl sm:rounded-full transition font-medium cursor-pointer active:scale-95 ${
                              active ? "bg-[#0a0a0a] text-[#f5f1ea]" : "hover:bg-ink/5"
                            }`}
                          >
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-[0.22em] uppercase opacity-60 block">What is your primary growth goal?</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={4}
                      placeholder="Current patient volume, AI/search presence, security or website goals…"
                      className="mt-2 w-full rounded-2xl bg-ink/5 border border-ink/10 px-4 py-3 text-[16px] sm:text-[14px] placeholder:opacity-40 focus:outline-none focus:border-ink/40 focus:bg-bone transition"
                      style={{ background: "rgba(10,10,10,.04)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group/btn relative inline-flex w-full items-center justify-between rounded-full bg-[#0a0a0a] text-bone pl-6 pr-1.5 py-1.5 min-h-[50px] text-[13.5px] font-semibold overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99] transition-transform"
                    style={{ color: "#f5f1ea" }}
                  >
                    <span>{submitting ? "Submitting request..." : "Schedule Strategy Session"}</span>
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-[#0000cd] text-ink transition-transform group-hover/btn:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </button>

                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-center opacity-50 pt-2">
                    🔒 HIPAA‑Aware · PHI Confidentiality · No Spam
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
