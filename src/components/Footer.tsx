import { GradientBars } from "./ui/gradient-bars-background";
import Footer3DBackground from "./ui/footer-3d-background";
import ParticleText from "./ui/particle-text";
import logo from "./logo.png";
import logoWordmark from "./logo-wordmark.png";
import { navigateTo } from "../utils/navigation";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-bone pt-8 pb-20 sm:pb-32 overflow-hidden" style={{ background: "#0a0a0a", color: "#f5f1ea" }}>
      {/* Background Animated Gradient Bars */}
      <GradientBars
        numBars={18}
        gradientFrom="rgba(27, 59, 245, 0.15)"
        gradientTo="transparent"
        animationDuration={3}
      />

      {/* Cinematic 3D "ADWEH" background */}
      <Footer3DBackground text="ADWEH" className="pointer-events-none absolute inset-0 z-0 overflow-hidden" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 -mt-8 sm:-mt-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Column: Studio profile */}
          <div className="relative w-full md:max-w-[300px] flex-shrink-0">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="relative grid place-items-center h-8 w-8 rounded-full bg-[#0000cd] shadow-md shadow-[#0000cd]/30">
                <img src={logo} className="h-4 w-auto object-contain" alt="ADWEH Logo" />
              </span>
              <img src={logoWordmark} className="h-[15px] w-auto object-contain brightness-105" alt="ADWEH" />
            </div>
            <div className="relative z-10 text-[10px] font-mono uppercase tracking-[0.22em] opacity-85">[ Studio · 010 ]</div>
            <p className="relative z-10 mt-4 text-[15px] leading-relaxed opacity-95">
              Healthcare's #1 growth partner. We engineer AIEO, GEO, SEO, and
              cybersecurity-focused web infrastructure that scales clinics into category leaders.
            </p>

            <div className="relative z-10 mt-6 flex items-center gap-2">
              {[
                { l: "Twitter", s: "X", href: "#" },
                { l: "LinkedIn", s: "in", href: "https://www.linkedin.com/company/adweh/posts/?feedView=all" },
                { l: "Instagram", s: "IG", href: "https://www.instagram.com/adweh/" },
                { l: "YouTube", s: "YT", href: "#" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/15 hover:bg-[#0000cd] hover:text-bone hover:border-[#0000cd] transition text-[11px] font-medium"
                >
                  {s.s}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Links and Newsletter */}
          <div className="w-full md:max-w-[300px] flex-shrink-0 grid grid-cols-2 gap-x-4 gap-y-8">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-85">Studio</div>
              <ul className="mt-4 space-y-2 text-[14px] opacity-90">
                <li><a href="/#work" onClick={(e) => { e.preventDefault(); navigateTo("/#work"); }} className="underline-draw cursor-pointer">About</a></li>
                <li><a href="/#why" onClick={(e) => { e.preventDefault(); navigateTo("/#why"); }} className="underline-draw cursor-pointer">Why us</a></li>
                <li><a href="/#results" onClick={(e) => { e.preventDefault(); navigateTo("/#results"); }} className="underline-draw cursor-pointer">Results</a></li>
                <li><a href="/blog" onClick={(e) => { e.preventDefault(); navigateTo("/blog"); }} className="underline-draw cursor-pointer">Blog</a></li>
                <li><a href="/founder" onClick={(e) => { e.preventDefault(); navigateTo("/founder"); }} className="underline-draw cursor-pointer">Founder</a></li>
                <li><a href="/mainframe" onClick={(e) => { e.preventDefault(); navigateTo("/mainframe"); }} className="underline-draw cursor-pointer">Mainframe</a></li>
                <li><a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo("/contact"); }} className="underline-draw cursor-pointer">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-85">Services</div>
              <ul className="mt-4 space-y-2 text-[14px] opacity-90">
                <li><a href="/#services" onClick={(e) => { e.preventDefault(); navigateTo("/#services"); }} className="underline-draw cursor-pointer">AIEO</a></li>
                <li><a href="/#services" onClick={(e) => { e.preventDefault(); navigateTo("/#services"); }} className="underline-draw cursor-pointer">GEO</a></li>
                <li><a href="/#services" onClick={(e) => { e.preventDefault(); navigateTo("/#services"); }} className="underline-draw cursor-pointer">SEO</a></li>
                <li><a href="/#services" onClick={(e) => { e.preventDefault(); navigateTo("/#services"); }} className="underline-draw cursor-pointer">Website Development</a></li>
              </ul>
            </div>

            <div className="col-span-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-85">Newsletter</div>
              <p className="mt-3 text-[13px] opacity-90">Monthly insights on healthcare growth, compliance & conversion.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center rounded-full border border-white/15 p-1 bg-black/40 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="you@clinic.com"
                  className="flex-1 min-w-0 bg-transparent px-4 py-2 text-[16px] sm:text-[13px] placeholder:opacity-40 focus:outline-none"
                />
                <button className="rounded-full bg-[#0000cd] text-ink px-4 py-2 text-[12px] font-semibold hover:bg-white transition shrink-0 cursor-pointer">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 3D Particle Text in natural flow below content columns */}
        <div className="relative z-10 mx-auto max-w-[1400px] w-full h-[clamp(130px,24vw,270px)] px-5 mt-2 mb-1">
          <ParticleText text="ADWEH" className="h-full w-full" />
        </div>

        {/* Office Contact Info */}
        <div className="mt-8 pt-6 sm:pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-3.5 sm:gap-6">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-4 sm:p-6 hover:border-[#5c85ff]/30 hover:bg-[#0e0e12]/95 hover:shadow-[0_15px_30px_-10px_rgba(92,133,255,0.15)] transition-all duration-300 group/card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5c85ff]/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff5d3b] animate-pulse" />
              [ Head Office ]
            </div>
            <p className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-bone/80">
              2/17B Palyathan Street, Alandur<br />
              <span className="text-white font-medium">Chennai – 600 016</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-4 sm:p-6 hover:border-[#5c85ff]/30 hover:bg-[#0e0e12]/95 hover:shadow-[0_15px_30px_-10px_rgba(92,133,255,0.15)] transition-all duration-300 group/card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5c85ff]/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5c85ff] animate-pulse" />
              [ Working Hours ]
            </div>
            <p className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-bone/80">
              Monday – Friday<br />
              <span className="text-white font-medium">07:00 AM – 09:00 PM</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-4 sm:p-6 hover:border-green-500/30 hover:bg-[#0e0e12]/95 hover:shadow-[0_15px_30px_-10px_rgba(34,197,94,0.15)] transition-all duration-300 group/card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              [ Call Us ]
            </div>
            <div className="mt-3">
              <a href="tel:+918667031931" className="text-xl sm:text-2xl font-display font-semibold text-white hover:text-green-400 transition-colors duration-300 block tracking-tight">
                +91 86670 31931
              </a>
              <div className="mt-1 text-[10.5px] sm:text-[11px] text-white/40 font-mono">Mon–Fri · IST (Online Now)</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] opacity-50">
          <div>© {new Date().getFullYear()} ADWEH · All rights reserved</div>
          <div className="flex items-center gap-5">
            <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo("/contact"); }} className="hover:text-[#0000cd] cursor-pointer">Privacy</a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo("/contact"); }} className="hover:text-[#0000cd] cursor-pointer">Terms</a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo("/contact"); }} className="hover:text-[#0000cd] cursor-pointer">HIPAA</a>
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("/"); }} className="hover:text-[#0000cd] cursor-pointer">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
