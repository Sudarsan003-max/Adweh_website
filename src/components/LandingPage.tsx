import { useState, useEffect } from "react";
import logoWordmark from "./logo-wordmark.png";
import isaacHeadshot from "./isaac_headshot.png";
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Lock,
  Star,
  Check,
  X,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { SETTINGS, whatsappLink } from "./CaseStudies/caseStudiesData";

const FORM_ENDPOINT =
  "https://script.google.com/a/macros/medscalesystems.com/s/AKfycbzFrV2s1-DpgBT5hlHoMWUwdeU1ESSwS6CoSyRPW7AexgCZ3TKDbQfRxrfxvtNiisI/exec";

interface CaseProof {
  id: string;
  name: string;
  location: string;
  category: "Google Maps & Search" | "ChatGPT & AI Search" | "Gemini Syntheses";
  headline: string;
  statNumber: string;
  statLabel: string;
  proofBadge: string;
  image: string;
  caption: string;
}

const VERIFIED_PROOFS: CaseProof[] = [
  {
    id: "soul-skin-google",
    name: "Soul Skin Clinic",
    location: "Anna Nagar, Chennai",
    category: "Google Maps & Search",
    headline: "#1 on Google for “best skin clinic anna nagar”, beating national hospital chains",
    statNumber: "0 → 113",
    statLabel: "Keywords in Google Top 3 in 5 months",
    proofBadge: "Google #1 Rank Verified",
    image: "/case-studies/soul-google-skin-clinic-anna-nagar.jpg",
    caption: "Live search result for 'best skin clinic anna nagar' holding rank #1 above national corporate dermatology chains.",
  },
  {
    id: "soul-skin-chatgpt",
    name: "Soul Skin Clinic",
    location: "Anna Nagar, Chennai",
    category: "ChatGPT & AI Search",
    headline: "First clinic ChatGPT recommends for dermatology and aesthetic treatments in Anna Nagar",
    statNumber: "#1",
    statLabel: "ChatGPT Recommendation Rank",
    proofBadge: "AIEO Verified Citation",
    image: "/case-studies/soul-chatgpt-skin-clinic-anna-nagar.jpg",
    caption: "ChatGPT conversational recommendation highlighting Soul Skin Clinic with top authority attribution.",
  },
  {
    id: "virtue-google",
    name: "Virtue Aesthetic Clinic",
    location: "Ambattur, Chennai",
    category: "Google Maps & Search",
    headline: "Rank #1 on Google Search and Maps for high-ticket cosmetic treatments",
    statNumber: "Top 3",
    statLabel: "Google Local Pack Dominance",
    proofBadge: "Maps Top 3 Verified",
    image: "/case-studies/virtue-google-aesthetic-clinic.jpg",
    caption: "Google 3-pack local presence and organic rank #1 capturing active aesthetic inquiries daily.",
  },
  {
    id: "virtue-gemini",
    name: "Virtue Aesthetic Clinic",
    location: "Ambattur, Chennai",
    category: "Gemini Syntheses",
    headline: "Top source in Google Gemini AI Syntheses for aesthetic training and clinic visits",
    statNumber: "#1 Source",
    statLabel: "Gemini Knowledge Attribution",
    proofBadge: "GEO Verified Snapshot",
    image: "/case-studies/virtue-gemini-aesthetic-clinic.jpg",
    caption: "Google Gemini synthesizing Virtue Clinic as the premier aesthetic provider in the region.",
  },
  {
    id: "swathi-chatgpt",
    name: "Dr. Swathi’s Cosmetic Clinic",
    location: "Tambaram, Chennai",
    category: "ChatGPT & AI Search",
    headline: "#1 Medifacial and skin rejuvenation recommendation on ChatGPT",
    statNumber: "45%+",
    statLabel: "Increase in Organic Inbound Patients",
    proofBadge: "AI Recommendation Verified",
    image: "/case-studies/swathi-chatgpt-medifacial.jpg",
    caption: "ChatGPT prompting patient inquiries directly for medifacials and cosmetic treatments.",
  },
  {
    id: "subam-google",
    name: "Subam Skin Clinic",
    location: "Tiruvannamalai",
    category: "Google Maps & Search",
    headline: "#1 Dermatologist ranking across regional search queries and Google Maps",
    statNumber: "#1 Rank",
    statLabel: "Undisputed Regional Authority",
    proofBadge: "Regional Dominance",
    image: "/case-studies/subam-google-dermatologist.jpg",
    caption: "Dominant organic rank #1 for high-intent dermatology searches.",
  },
  {
    id: "mithran-chatgpt",
    name: "Mithran Fertility Center",
    location: "Chidambaram",
    category: "ChatGPT & AI Search",
    headline: "ChatGPT recommends Mithran Fertility Center as the primary regional IVF authority",
    statNumber: "Top 2",
    statLabel: "AI Recommendation Placement",
    proofBadge: "Medical Authority Verified",
    image: "/case-studies/mithran-chatgpt-fertility-clinic.jpg",
    caption: "Conversational AI recommendation positioning Mithran Fertility Center above state competitors.",
  },
];

const COMPARISON_POINTS = [
  {
    feature: "Territory / Locality Exclusivity",
    adweh: "Strict 1-Client-Per-Locality Policy. We will never take money from your direct neighbor or competitor.",
    agency: "Works with everyone. Often manages 4 competing clinics on the same street.",
  },
  {
    feature: "AI Search Readiness (ChatGPT, Gemini, Claude)",
    adweh: "Dedicated AIEO & GEO systems engineered to win conversational recommendations and AI Overviews.",
    agency: "Outdated SEO only. Zero understanding of conversational AI entities or Knowledge Graph attribution.",
  },
  {
    feature: "Web Development & Cyber Hygiene",
    adweh: "Security-tested, HIPAA-conscious, high-performance static architecture with sub-second load times.",
    agency: "Bloated, vulnerable WordPress themes with 40+ plugins that crash and leak patient leads.",
  },
  {
    feature: "Focus Metric",
    adweh: "High-value booked inquiries, consult calls, and verified bottom-line practice growth.",
    agency: "Vanity impressions, irrelevant traffic, and meaningless algorithmic keyword reports.",
  },
  {
    feature: "Strategic Execution & Oversight",
    adweh: "Directly led by Founder Isaac Vivian. No junior account handlers or endless ticket queues.",
    agency: "Pawned off to entry-level interns with 0 healthcare or high-ticket acquisition experience.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What exactly happens during the free 30-minute visibility audit?",
    a: "We conduct a live forensic inspection of your market before the call. We analyze where you rank on Google Search and Maps versus your top 3 local competitors, test live queries on ChatGPT and Gemini to see if AI assistants recommend you or a competitor, inspect your website for conversion leaks, and hand you a concrete 90-day action plan.",
  },
  {
    q: "How soon do we see ranking movements and new patient inquiries?",
    a: "For Google Maps optimization and conversion fixes on your website, clients frequently observe noticeable enquiry improvements within the first 30 to 45 days. Broader organic keyword rankings and conversational AIEO authority typically scale significantly between months 2 and 5.",
  },
  {
    q: "What if a competitor in my area is already working with ADWEH?",
    a: "We strictly uphold a 1-client-per-territory policy in aesthetic and specialized medical categories. If we already partner with an active practice in your direct geographic radius, we will respectfully decline your engagement to protect our existing partner's dominance.",
  },
  {
    q: "We already have an in-house team or generic marketing agency. Can ADWEH still help?",
    a: "Yes. Many of our partners retain internal social media managers for Instagram reels while partnering with ADWEH for technical SEO, AI search optimization (AIEO/GEO), and cybersecure web architecture—the foundational channels that capture active intent when patients decide to buy.",
  },
  {
    q: "Do I need to rebuild my entire website to work with you?",
    a: "Not necessarily. If your current website is functional and secure, we can implement schema, technical SEO, and conversion pathways directly. If your site has severe speed bottlenecks, security vulnerabilities, or poor mobile UX, we can build a modern, high-converting digital platform.",
  },
  {
    q: "Is our inquiry and patient data secure?",
    a: "Every workflow, form capture, and digital platform built by ADWEH follows strict security-first principles, HTTPS/TLS encryption, and HIPAA-conscious standards to safeguard lead inquiries and confidential clinic communications.",
  },
];

export default function LandingPage() {
  const [activeProofTab, setActiveProofTab] = useState<string>("All");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; caption: string; title: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    category: "Aesthetic & Skin Clinic",
    priority: "Rank #1 on Google & Maps",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          token: "adweh_google_ads_lead_2026",
          source: "Google Ads PPC Campaign",
          ...form,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("Submission error:", err);
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const scrollToAudit = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("audit-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredProofs =
    activeProofTab === "All"
      ? VERIFIED_PROOFS
      : VERIFIED_PROOFS.filter((p) => p.category.includes(activeProofTab));

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f5f1ea] font-sans antialiased selection:bg-[#1e2bc8] selection:text-white overflow-x-hidden">
      {/* ============================================================== */}
      {/* 1. ZERO-DISTRACTION CONVERSION HEADER                           */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Brand Logo with conversion tagline */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 group">
              <img
                src={logoWordmark}
                alt="ADWEH"
                className="h-6 sm:h-7 w-auto object-contain brightness-110 group-hover:opacity-90 transition-opacity"
              />
            </a>
            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-white/15 text-[11px] font-mono uppercase tracking-wider text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Google &amp; AI Search Growth Partner</span>
            </div>
          </div>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Direct Phone Call */}
            <a
              href="tel:+918667031931"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-[12px] sm:text-[13px] font-mono text-white transition-colors"
              title="Call ADWEH Founder &amp; Advisory Team"
            >
              <Phone className="h-3.5 w-3.5 text-[#5c85ff]" />
              <span className="hidden sm:inline">+91 86670 31931</span>
              <span className="sm:hidden font-bold">Call</span>
            </a>

            {/* Direct WhatsApp shortcut */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/30 text-[12px] font-mono transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={scrollToAudit}
              className="inline-flex items-center gap-2 rounded-full bg-[#1e2bc8] hover:bg-[#2838e8] text-white px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] font-bold shadow-lg shadow-[#1e2bc8]/30 transition-all cursor-pointer active:scale-95"
            >
              <span>Claim Free Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Locality exclusivity micro-banner */}
        <div className="bg-gradient-to-r from-[#1e2bc8]/30 via-emerald-500/10 to-[#1e2bc8]/30 border-t border-white/5 py-1 text-center text-[11px] sm:text-[12px] font-mono text-bone/80 px-4">
          <span className="font-bold text-emerald-400">⚡ STRICT EXCLUSIVITY:</span> Only 1 practice accepted per locality to protect partner dominance.
        </div>
      </header>

      {/* ============================================================== */}
      {/* 2. HERO: HIGH-INTENT VALUE PROPOSITION + CONVERSION CARD        */}
      {/* ============================================================== */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#1e2bc8]/20 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 -left-40 h-[450px] w-[450px] rounded-full bg-[#ff5d3b]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Left Column: The Problem & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5c85ff]/30 bg-[#1e2bc8]/10 text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-[0.18em] text-[#5c85ff]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>2026 Patient &amp; Client Acquisition Engine</span>
              </div>

              {/* PPC Headline */}
              <h1 className="font-display text-[34px] xs:text-[44px] sm:text-[62px] lg:text-[72px] font-bold leading-[1.02] tracking-tight text-white">
                Turn Google &amp; AI Search Into Your{" "}
                <span className="font-serif-i italic text-[#5c85ff] font-normal">
                  #1 Patient Acquisition
                </span>{" "}
                Engine.
              </h1>

              {/* Subheadline */}
              <p className="text-[15px] sm:text-[18px] leading-relaxed text-bone/80 font-sans max-w-2xl">
                We engineer aesthetic clinics, specialized medical centers, and high-value practices to dominate Google Maps Top 3, rank #1 for high-intent treatment keywords, and become the top recommendation on ChatGPT &amp; Gemini.
              </p>

              {/* Key Value Proposition Checkmarks */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "50+ High-Intent Inquiries / Month",
                    desc: "Capture qualified patients actively looking to book treatments, not tire-kickers.",
                  },
                  {
                    title: "Google Maps Top 3 & AI Citation Dominance",
                    desc: "Rank #1 on Google Search and win recommended status on ChatGPT, Gemini, and Claude.",
                  },
                  {
                    title: "Cybersecurity-Focused & HIPAA-Ready Platforms",
                    desc: "Ultra-fast, vulnerability-tested web infrastructure engineered for patient trust.",
                  },
                  {
                    title: "Strict Locality Exclusivity Guarantee",
                    desc: "We partner with only ONE practice per neighborhood. We never work with your competitor.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="text-[14px] sm:text-[15px] font-bold text-white">
                        {item.title}:
                      </span>{" "}
                      <span className="text-[13px] sm:text-[14px] text-bone/70">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof Trust Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-[12px] sm:text-[13px] font-mono text-bone/70">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4.9 / 5</span>
                  <span>Client Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#5c85ff]" />
                  <span>341+ Top 10 Keywords</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-400" />
                  <span>HIPAA &amp; Security Tested</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Lead Capture Card */}
            <div id="audit-form" className="lg:col-span-5 scroll-mt-24">
              <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-6 sm:p-8 shadow-2xl shadow-black/80">
                {/* Decorative border highlight */}
                <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-[#5c85ff] to-transparent" />

                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Audit Request Received!
                    </h3>
                    <p className="text-[14px] text-bone/80 font-sans max-w-sm mx-auto">
                      Thank you, <span className="font-semibold text-white">{form.name}</span>. Isaac Vivian or our senior growth team is now preparing your custom market &amp; AI visibility analysis.
                    </p>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left text-[12.5px] font-mono text-bone/70 space-y-1">
                      <div>● Turnaround: Within 15 to 30 minutes</div>
                      <div>● Exclusivity Check: Validating your territory status</div>
                    </div>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(
                          `Hi Isaac, I just submitted an audit request for ${form.company || form.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 text-ink font-bold py-3 text-[13px] transition-colors"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Fast-Track On WhatsApp (Instant Reply)</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Form Header */}
                    <div className="space-y-1.5 mb-6">
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c85ff] font-bold">
                        [ 100% FREE · NO OBLIGATION ]
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Claim Your Free 30-Min Visibility Audit
                      </h2>
                      <p className="text-[13px] text-bone/70 font-sans">
                        Discover your exact visibility gaps across Google, Maps, ChatGPT &amp; Gemini. $500 value — complimentary for qualified practices.
                      </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. Alex Carter / Isaac Vivian"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 focus:border-[#5c85ff] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1 flex items-center justify-between">
                          <span>Phone / WhatsApp Number *</span>
                          <span className="text-[#5c85ff] text-[10px]">For audit delivery</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 86670 31931"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 focus:border-[#5c85ff] focus:outline-none transition-colors font-mono"
                        />
                      </div>

                      {/* Practice / Business Name */}
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1">
                          Practice / Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Soul Skin Clinic"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 focus:border-[#5c85ff] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Website URL */}
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1">
                          Website URL <span className="text-white/40">(or type 'None')</span>
                        </label>
                        <input
                          type="text"
                          placeholder="https://yourclinic.com"
                          value={form.website}
                          onChange={(e) => setForm({ ...form, website: e.target.value })}
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 focus:border-[#5c85ff] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Practice Category */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1">
                            Category
                          </label>
                          <select
                            value={form.category}
                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                            className="w-full rounded-xl border border-white/15 bg-[#141414] px-3 py-2.5 text-[13px] text-white focus:border-[#5c85ff] focus:outline-none transition-colors"
                          >
                            <option value="Aesthetic & Skin Clinic">Aesthetic &amp; Skin</option>
                            <option value="Dermatology Practice">Dermatology</option>
                            <option value="Fertility & IVF Center">Fertility / IVF</option>
                            <option value="Hospital & Specialty Clinic">Hospital / Surgical</option>
                            <option value="Real Estate & Property">Real Estate</option>
                            <option value="High-Ticket Professional Service">Professional Service</option>
                            <option value="Other High-Growth Business">Other Business</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-bone/70 mb-1">
                            Primary Goal
                          </label>
                          <select
                            value={form.priority}
                            onChange={(e) => setForm({ ...form, priority: e.target.value })}
                            className="w-full rounded-xl border border-white/15 bg-[#141414] px-3 py-2.5 text-[13px] text-white focus:border-[#5c85ff] focus:outline-none transition-colors"
                          >
                            <option value="Rank #1 on Google & Maps">Rank #1 on Google</option>
                            <option value="ChatGPT & AI Recommendations">AI Recommendations</option>
                            <option value="More High-Value Inquiries">More Booked Leads</option>
                            <option value="Fix Slow / Vulnerable Website">Secure Website Rebuild</option>
                          </select>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full mt-2 rounded-xl bg-[#1e2bc8] hover:bg-[#2838e8] text-white font-bold py-3.5 px-6 text-[14px] sm:text-[15px] shadow-xl shadow-[#1e2bc8]/40 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <span>Analyzing Territory Availability...</span>
                        ) : (
                          <>
                            <span>Claim My Free 30-Minute Audit</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      {/* Guarantees & Compliance */}
                      <div className="pt-2 text-center space-y-1 text-[11px] text-bone/60 font-mono">
                        <div className="flex items-center justify-center gap-3">
                          <span className="flex items-center gap-1">
                            <Lock className="h-3 w-3 text-emerald-400" />
                            100% Confidential
                          </span>
                          <span>•</span>
                          <span>Zero Sales Pressure</span>
                          <span>•</span>
                          <span>15-Min Response</span>
                        </div>
                        <p className="text-[10px] text-bone/40">
                          We respect your privacy. No spam. Isaac Vivian personally reviews every submission.
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PROOF METRICS BAR & CLIENT TICKER                            */}
      {/* ============================================================== */}
      <section className="relative py-8 bg-[#141414] border-y border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: "50+", label: "Qualified Inquiries / Month", sub: "Average per active practice" },
              { num: "341+", label: "Keywords into Google Top 10", sub: "Documented ranking movement" },
              { num: "34+", label: "Live Ranking Proof Screenshots", sub: "Google, ChatGPT & Gemini" },
              { num: "3.5x", label: "Average Practice ROI", sub: "Measurable commercial outcome" },
            ].map((stat, idx) => (
              <div key={idx} className="border-l-2 border-[#5c85ff] pl-4">
                <div className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {stat.num}
                </div>
                <div className="mt-1 text-[13px] sm:text-[14px] font-bold text-[#5c85ff]">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-bone/50">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Marquee of Verified Partners */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[12px] sm:text-[13px] font-mono text-bone/60">
            <span className="text-[#5c85ff] uppercase tracking-wider font-bold">
              Verified Track Record:
            </span>
            <span>Soul Skin Clinic</span>
            <span className="opacity-40">•</span>
            <span>Virtue Aesthetic Clinic &amp; Academy</span>
            <span className="opacity-40">•</span>
            <span>Dr. Swathi’s Cosmetic Clinic</span>
            <span className="opacity-40">•</span>
            <span>Subam Skin Clinic</span>
            <span className="opacity-40">•</span>
            <span>Mithran Fertility Center</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. VERIFIED PROOF GALLERY: REAL SCREENSHOTS & OUTCOMES         */}
      {/* ============================================================== */}
      <section id="proof" className="relative py-14 sm:py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold mb-2">
                [ TRANSPARENT EVIDENCE · UNTOUCHED SCREENSHOTS ]
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Proof Beats Promises.{" "}
                <span className="font-serif-i italic text-[#5c85ff] font-normal">
                  Real Rankings.
                </span>
              </h2>
            </div>
            <p className="text-[13.5px] sm:text-[15px] text-bone/70 font-sans max-w-md">
              We don’t show vague graphs or anonymous logos. Every result below is documented with actual screenshots from Google Search, ChatGPT, and Google Gemini.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", "Google Maps & Search", "ChatGPT & AI Search", "Gemini Syntheses"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveProofTab(tab)}
                className={`px-4 py-2 rounded-full text-[12px] font-mono transition-all cursor-pointer ${
                  activeProofTab === tab
                    ? "bg-[#1e2bc8] text-white font-bold shadow-md shadow-[#1e2bc8]/30"
                    : "bg-white/5 text-bone/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Proof Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProofs.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-white/10 bg-[#141414] overflow-hidden hover:border-[#5c85ff]/50 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with click-to-enlarge */}
                <div
                  onClick={() =>
                    setLightboxImg({
                      src: item.image,
                      title: item.name,
                      caption: item.caption,
                    })
                  }
                  className="relative aspect-[16/10] bg-black/50 overflow-hidden cursor-zoom-in"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} ranking proof`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    {item.proofBadge}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[12px] font-mono gap-1.5">
                    <ExternalLink className="h-4 w-4" />
                    <span>Click to Inspect Full Screenshot</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-bone/50 mb-1">
                      <span>{item.name}</span>
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-white leading-snug group-hover:text-[#5c85ff] transition-colors">
                      {item.headline}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-bone/50">Outcome:</div>
                      <div className="text-[18px] font-display font-extrabold text-[#5c85ff]">
                        {item.statNumber}
                      </div>
                    </div>
                    <div className="text-right text-[11px] font-mono text-bone/70 max-w-[130px] leading-tight">
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA inside Proof section */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141414] via-[#1e2bc8]/20 to-[#141414] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white">
                Want your practice to hold the #1 spot in your city?
              </div>
              <p className="text-[13px] text-bone/70 font-sans mt-1">
                We verify your territory availability and provide the exact keyword opportunities during your 30-min audit.
              </p>
            </div>
            <button
              onClick={scrollToAudit}
              className="shrink-0 px-6 py-3 rounded-xl bg-white text-[#0a0a0a] hover:bg-[#5c85ff] hover:text-white font-bold text-[13px] transition-all cursor-pointer active:scale-95 shadow-lg"
            >
              Verify My Locality Free →
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. THE 4-PILLAR ACQUISITION SYSTEM                              */}
      {/* ============================================================== */}
      <section className="relative py-14 sm:py-24 bg-[#141414] border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold">
              [ THE PROPRIETARY ARCHITECTURE ]
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              The 4-Pillar Discovery &amp; Acquisition Engine
            </h2>
            <p className="text-[14px] sm:text-[16px] text-bone/75 font-sans">
              We integrate traditional search dominance, conversational AI recommendations, and cybersecure infrastructure to create an unassailable patient pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                tag: "HIGH-INTENT TRAFFIC",
                title: "Search Engine Optimization (SEO)",
                desc: "We position your clinic in the Google Maps Top 3 and rank #1 for high-intent treatment keywords when local patients search with commercial intent.",
                highlights: [
                  "Google Maps 3-Pack domination",
                  "Local citation & NAP sync",
                  "Commercial intent landing pages",
                ],
              },
              {
                step: "02",
                tag: "CONVERSATIONAL SEARCH",
                title: "AI Engine Optimization (AIEO)",
                desc: "When patients ask ChatGPT, Claude, or Perplexity for the 'best dermatologist near me' or 'top clinic for hair restoration', your practice is cited and recommended first.",
                highlights: [
                  "Knowledge Graph entity alignment",
                  "Prompt-intent answer passages",
                  "Authoritative medical citations",
                ],
              },
              {
                step: "03",
                tag: "GENERATIVE OVERVIEWS",
                title: "Generative Engine Optimization (GEO)",
                desc: "Google AI Overviews and Gemini summarize search results before showing links. We structure your schema and medical facts to claim prominent answer snapshot placements.",
                highlights: [
                  "Passage schema & JSON-LD graph",
                  "Factual attribution clustering",
                  "Google Gemini knowledge synthesis",
                ],
              },
              {
                step: "04",
                tag: "TRUST & CONVERSION",
                title: "Cybersecure Web Development",
                desc: "A search-first, vulnerability-tested web infrastructure built to load in milliseconds, protect patient data, and convert clicks into booked consultations.",
                highlights: [
                  "Sub-second Core Web Vitals",
                  "HIPAA-conscious lead capture",
                  "Mobile-first conversion UX",
                ],
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 hover:border-[#5c85ff]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-4">
                    <span className="text-[#5c85ff] font-bold font-display text-lg">
                      {pillar.step}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-bone/60 text-[9px] uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-bone/70 leading-relaxed font-sans mb-4">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-2 text-[12px] font-mono text-bone/80">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5c85ff]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. COMPARISON: ADWEH VS GENERIC AGENCIES                       */}
      {/* ============================================================== */}
      <section className="relative py-14 sm:py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold">
              [ HONEST COMPARISON ]
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Why High-Growth Clinics Choose ADWEH
            </h2>
            <p className="text-[14px] text-bone/70 font-sans">
              Most digital marketing agencies sell bloated retainers with zero accountability. Here is how ADWEH fundamentally differs:
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[680px] rounded-2xl border border-white/15 bg-[#141414] overflow-hidden">
              <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 p-4 text-[12px] font-mono uppercase tracking-wider text-bone/70 font-bold">
                <div className="col-span-4">Strategic Capability</div>
                <div className="col-span-4 text-[#5c85ff] flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>ADWEH Growth Engine</span>
                </div>
                <div className="col-span-4 text-white/50">Generic Marketing Agencies</div>
              </div>

              {COMPARISON_POINTS.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 p-4 text-[13px] items-center border-b border-white/5 ${
                    idx % 2 === 0 ? "bg-black/20" : "bg-transparent"
                  }`}
                >
                  <div className="col-span-4 font-bold text-white pr-4">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-bone/90 pr-4 font-sans border-l border-white/10 pl-4 bg-[#1e2bc8]/5 py-2 rounded">
                    <span className="text-emerald-400 font-bold mr-1.5">✓</span>
                    {row.adweh}
                  </div>
                  <div className="col-span-4 text-bone/50 font-sans border-l border-white/10 pl-4">
                    <span className="text-rose-400 font-bold mr-1.5">✕</span>
                    {row.agency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FOUNDER ACCOUNTABILITY: ISAAC VIVIAN                         */}
      {/* ============================================================== */}
      <section className="relative py-14 sm:py-20 bg-[#141414] border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 sm:p-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Founder Image */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-44 sm:w-56 aspect-square rounded-2xl overflow-hidden border-2 border-[#5c85ff]/30 shadow-2xl">
                  <img
                    src={isaacHeadshot}
                    alt="Isaac Vivian, Founder of ADWEH"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-center">
                    <div className="text-[13px] font-bold text-white">Isaac Vivian</div>
                    <div className="text-[10px] font-mono text-[#5c85ff]">Founder &amp; Strategist</div>
                  </div>
                </div>
              </div>

              {/* Founder Statement */}
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c85ff] font-bold">
                  [ DIRECT ACCOUNTABILITY ]
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  “When You Partner With ADWEH, We Lock Your Territory. We Will Never Rank Your Competitor Above You.”
                </h3>
                <p className="text-[14px] text-bone/80 font-sans leading-relaxed">
                  Too many clinic owners pay digital agencies thousands of dollars a month, only to discover the same agency also represents two rival practices three kilometers away.
                </p>
                <p className="text-[14px] text-bone/80 font-sans leading-relaxed">
                  At ADWEH, our growth model is founded on integrity, strict territorial exclusivity, and direct execution. I personally inspect every partner’s strategy and ensure your clinic claims absolute digital dominance in your market.
                </p>
                <div className="pt-2 flex items-center gap-4 text-[12px] font-mono text-bone/60">
                  <span>Based in Chennai, India</span>
                  <span>•</span>
                  <span>Direct WhatsApp Line: +91 86670 31931</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. WHAT YOU RECEIVE IN YOUR 30-MINUTE AUDIT                    */}
      {/* ============================================================== */}
      <section className="relative py-14 sm:py-20 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold">
              [ THE DELIVERABLE ]
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What We Uncover in Your 30-Minute Free Audit
            </h2>
            <p className="text-[14px] text-bone/70 font-sans">
              No generic automated SEO PDF reports. We review real commercial data specific to your city and specialty:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01",
                title: "Territory Competitor Analysis",
                desc: "Which local clinics currently dominate Google Maps in your area and the exact search volume you are missing.",
              },
              {
                num: "02",
                title: "AI Search Recommendation Test",
                desc: "A live audit of what ChatGPT, Gemini, and Claude recommend when patients search for your specialty.",
              },
              {
                num: "03",
                title: "Security & Conversion Leak Check",
                desc: "Inspection of page speed, mobile friction points, and form vulnerabilities that cause patients to bounce.",
              },
              {
                num: "04",
                title: "Custom 90-Day Roadmap",
                desc: "A step-by-step strategy to move your practice into the Top 3 positions and capture 50+ monthly inquiries.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-white/10 space-y-3"
              >
                <div className="text-[28px] font-display font-extrabold text-[#5c85ff]">
                  {step.num}
                </div>
                <h4 className="font-bold text-[15px] text-white">{step.title}</h4>
                <p className="text-[13px] text-bone/70 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToAudit}
              className="inline-flex items-center gap-2 rounded-full bg-[#1e2bc8] hover:bg-[#2838e8] text-white px-8 py-3.5 text-[14px] font-bold shadow-xl shadow-[#1e2bc8]/40 transition-all cursor-pointer active:scale-95"
            >
              <span>Claim Your Free Audit Session Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. FAQ: OVERCOMING OBJECTIONS FOR GOOGLE ADS VISITORS           */}
      {/* ============================================================== */}
      <section className="relative py-14 sm:py-20 bg-[#141414] border-t border-white/10">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold">
              [ FAQ ]
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-[15px] text-white font-sans">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#5c85ff] transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-[13.5px] leading-relaxed text-bone/75 font-sans border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FINAL CLOSING CALL-TO-ACTION                                */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-28 bg-[#0a0a0a] overflow-hidden text-center">
        <div className="pointer-events-none absolute inset-0 bg-radial from-[#1e2bc8]/20 via-transparent to-transparent opacity-60" />

        <div className="relative mx-auto max-w-[900px] px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Limited Client Onboarding per Quarter</span>
          </div>

          <h2 className="font-display text-3xl sm:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Stop Losing High-Value Patients to Your{" "}
            <span className="font-serif-i italic text-[#5c85ff] font-normal">
              Local Competitors.
            </span>
          </h2>

          <p className="text-[15px] sm:text-[18px] text-bone/80 font-sans max-w-xl mx-auto">
            Book your 30-minute search and AI visibility diagnostic today. Discover what it takes to own your market.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1e2bc8] hover:bg-[#2838e8] text-white font-bold text-[14px] shadow-2xl shadow-[#1e2bc8]/50 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Claim Free 30-Minute Audit</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="tel:+918667031931"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-[13px] flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="h-4 w-4 text-[#5c85ff]" />
              <span>Call +91 86670 31931</span>
            </a>
          </div>

          <div className="pt-4 text-[11px] font-mono text-bone/50">
            Strict Locality Exclusivity Enforced · Direct Strategic Oversight by Isaac Vivian
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. GOOGLE ADS COMPLIANT MINIMAL FOOTER                        */}
      {/* ============================================================== */}
      <footer className="relative bg-[#050505] border-t border-white/10 py-10 pb-24 md:pb-12 text-[12px] text-bone/60 font-sans">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="flex items-center gap-3">
              <img
                src={logoWordmark}
                alt="ADWEH"
                className="h-5 w-auto object-contain brightness-100"
              />
              <span className="text-[11px] font-mono text-bone/40">
                Search &amp; AI Visibility Partner
              </span>
            </div>

            {/* Direct Contact Info (Required by Google Ads Compliance) */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono">
              <a href="tel:+918667031931" className="hover:text-white transition-colors">
                Phone: +91 86670 31931
              </a>
              <span>•</span>
              <a href="mailto:admin@adweh.com" className="hover:text-white transition-colors">
                Email: admin@adweh.com
              </a>
              <span>•</span>
              <span>Chennai, Tamil Nadu 600016, IN</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-bone/40">
            <div>
              © {new Date().getFullYear()} ADWEH (Isaac Vivian). All rights reserved. Registered Address: 2/17B Palyathan Street, Alandur, Chennai 600016.
            </div>

            <div className="flex items-center gap-4 font-mono">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-white underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowTermsModal(true)}
                className="hover:text-white underline cursor-pointer"
              >
                Terms of Engagement
              </button>
            </div>
          </div>

          {/* Legal Advertising Disclaimer */}
          <div className="mt-4 text-[10px] text-bone/30 leading-relaxed text-center sm:text-left">
            Disclaimer: Google, Google Maps, Google Gemini, ChatGPT, Claude, and Perplexity are trademarks of their respective owners. ADWEH is an independent search optimization, AIEO, and web engineering advisory firm. Case study statistics reflect documented client results; future outcomes vary based on baseline search health, geographic competition, and scope.
          </div>
        </div>
      </footer>

      {/* ============================================================== */}
      {/* 12. FLOATING STICKY MOBILE ACTION BAR                          */}
      {/* ============================================================== */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/15 px-3 py-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:+918667031931"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-[12px] font-mono font-bold active:scale-95 transition-transform"
        >
          <Phone className="h-3.5 w-3.5 text-[#5c85ff]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-[12px] font-mono font-bold active:scale-95 transition-transform"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={scrollToAudit}
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#1e2bc8] text-white text-[12px] font-bold shadow-lg shadow-[#1e2bc8]/40 active:scale-95 transition-transform cursor-pointer"
        >
          <span>Claim Audit</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* ============================================================== */}
      {/* 13. INTERACTIVE LIGHTBOX FOR RANKING SCREENSHOTS               */}
      {/* ============================================================== */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-[#141414] border border-white/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
              <div className="font-display font-bold text-white text-base">
                {lightboxImg.title} — Verified Screenshot
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-4 border-t border-white/10 text-[12px] font-mono text-bone/70 bg-[#0a0a0a]">
              {lightboxImg.caption}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 14. PRIVACY POLICY MODAL (GOOGLE ADS COMPLIANCE)               */}
      {/* ============================================================== */}
      {showPrivacyModal && (
        <div
          onClick={() => setShowPrivacyModal(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl max-h-[85vh] bg-[#141414] border border-white/20 rounded-2xl p-6 overflow-y-auto text-[13px] text-bone/80 font-sans space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-display text-xl font-bold text-white">
                ADWEH — Privacy Policy
              </h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="p-1 text-white hover:opacity-70 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p>
              At ADWEH (operated by Isaac Vivian, 2/17B Palyathan Street, Alandur, Chennai, Tamil Nadu 600016), we respect your privacy. This policy outlines how we handle information submitted through our Google Ads landing page and website.
            </p>
            <h4 className="font-bold text-white text-[14px]">Information Collected</h4>
            <p>
              When you request a visibility audit, we collect the contact details you voluntarily provide: Name, Phone / WhatsApp number, Email, Business Name, and Website URL. We do not collect sensitive medical patient health records without explicit data handling agreements.
            </p>
            <h4 className="font-bold text-white text-[14px]">Use of Information</h4>
            <p>
              Your contact information is used strictly to prepare and deliver your 30-minute visibility audit, communicate territory availability, and answer your inquiries. We never sell, rent, or trade your data to third parties.
            </p>
            <h4 className="font-bold text-white text-[14px]">Data Protection &amp; Contact</h4>
            <p>
              All submissions are transmitted over encrypted TLS connections. If you wish to review, update, or delete your contact information, please email admin@adweh.com or contact +91 86670 31931.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 rounded-lg bg-[#1e2bc8] text-white font-bold text-[12px] cursor-pointer"
              >
                Close Privacy Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 15. TERMS OF ENGAGEMENT MODAL                                  */}
      {/* ============================================================== */}
      {showTermsModal && (
        <div
          onClick={() => setShowTermsModal(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl max-h-[85vh] bg-[#141414] border border-white/20 rounded-2xl p-6 overflow-y-auto text-[13px] text-bone/80 font-sans space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-display text-xl font-bold text-white">
                ADWEH — Terms of Engagement
              </h3>
              <button
                onClick={() => setShowTermsModal(false)}
                className="p-1 text-white hover:opacity-70 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p>
              The 30-Minute Search and AI Visibility Audit is a complimentary assessment provided to qualified healthcare clinics and high-value commercial enterprises.
            </p>
            <h4 className="font-bold text-white text-[14px]">Locality Exclusivity</h4>
            <p>
              ADWEH reserves the right to decline audit or engagement requests if an existing active partner already operates within the requested locality and medical specialty.
            </p>
            <h4 className="font-bold text-white text-[14px]">No Guaranteed Ranks</h4>
            <p>
              Search engines (Google) and conversational AI engines (OpenAI, Anthropic, Google) update algorithms dynamically. While ADWEH employs verified, technical SEO and AIEO best practices, no agency can guarantee specific algorithmic positions or permanent AI citations.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setShowTermsModal(false)}
                className="px-5 py-2 rounded-lg bg-[#1e2bc8] text-white font-bold text-[12px] cursor-pointer"
              >
                Close Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

