import { GradientBars } from "./ui/gradient-bars-background";
import Footer3DBackground from "./ui/footer-3d-background";
import ParticleText from "./ui/particle-text";
import logoWordmark from "./logo-wordmark.png";
import { navigateTo } from "../utils/navigation";

export default function Footer() {
  return (
    <footer
      className="relative bg-ink text-bone pt-8 pb-14 sm:pb-32 overflow-hidden"
      style={{ background: "#0a0a0a", color: "#f5f1ea" }}
    >
      {/* Background Animated Gradient Bars */}
      <GradientBars
        numBars={18}
        gradientFrom="rgba(30, 43, 200, 0.15)"
        gradientTo="transparent"
        animationDuration={3}
      />

      {/* Cinematic 3D "ADWEH" background */}
      <Footer3DBackground
        text="ADWEH"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 -mt-4 sm:-mt-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-10">
          {/* Left Column: Brand & Promise */}
          <div className="relative w-full md:max-w-[360px] flex-shrink-0">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src={logoWordmark}
                className="h-[22px] w-auto object-contain brightness-110"
                alt="ADWEH"
              />
            </div>
            <div className="font-display text-lg font-bold text-[#5c85ff] tracking-tight">
              Get Found. Get Trusted. Get Chosen.
            </div>
            <p className="mt-3 text-[13.5px] leading-relaxed text-bone/70 font-sans">
              SEO, AI Engine Optimization, Generative Engine Optimization, and security-focused website development for businesses that want to be easier to discover and easier to choose.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {[
                {
                  l: "LinkedIn",
                  s: "in",
                  href: "https://www.linkedin.com/company/adweh/",
                },
                {
                  l: "Instagram",
                  s: "IG",
                  href: "https://www.instagram.com/adweh/",
                },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/15 hover:bg-[#1e2bc8] hover:text-white hover:border-[#1e2bc8] transition text-[11px] font-medium"
                >
                  {s.s}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Explore & Services */}
          <div className="w-full md:max-w-[420px] flex-shrink-0 grid grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold">
                Explore
              </div>
              <ul className="mt-4 space-y-2 text-[13.5px] text-bone/80">
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/#about");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/#services");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/#industries"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/#industries");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="/results"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/results");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Results &amp; Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/founder"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/founder");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Founder
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/blog");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Insights &amp; Guides
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/contact");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] font-bold">
                Services
              </div>
              <ul className="mt-4 space-y-2 text-[13.5px] text-bone/80">
                <li>
                  <a
                    href="/seo"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/seo");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Search Engine Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="/aieo"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/aieo");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    AI Engine Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="/geo"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/geo");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Generative Engine Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="/website-development"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/website-development");
                    }}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Website Development
                  </a>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/contact");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5c85ff] hover:underline"
                >
                  Ready to Be Easier to Find? Request an Assessment →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Particle Text in natural flow below content columns */}
        <div className="relative z-10 mx-auto max-w-[1400px] w-full h-[clamp(110px,22vw,270px)] px-4 sm:px-6 mt-3 sm:mt-4 mb-2">
          <ParticleText text="ADWEH" className="h-full w-full" />
        </div>

        {/* Office Contact Info Strip */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-3 sm:gap-6 font-sans">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-4 sm:p-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1e2bc8]" />
              [ Office ]
            </div>
            <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-bone/80">
              2/17B Palyathan Street, Alandur<br />
              <span className="text-white font-medium">Chennai – 600 016, Tamil Nadu, India</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-4 sm:p-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1e2bc8]" />
              [ Direct Email ]
            </div>
            <div className="mt-2.5 sm:mt-3">
              <a
                href="mailto:admin@adweh.com"
                className="text-base sm:text-lg font-display font-semibold text-white hover:text-[#5c85ff] transition"
              >
                admin@adweh.com
              </a>
              <div className="mt-1 text-[11px] text-white/50 font-mono">Enquiries &amp; Consultations</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-4 sm:p-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5c85ff] flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              [ Phone &amp; WhatsApp ]
            </div>
            <div className="mt-2.5 sm:mt-3">
              <a
                href="tel:+918667031931"
                className="text-lg sm:text-2xl font-display font-semibold text-white hover:text-green-400 transition block tracking-tight"
              >
                +91 86670 31931
              </a>
              <div className="mt-1 text-[11px] text-white/50 font-mono">IST · Direct Line</div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] opacity-50">
          <div>© {new Date().getFullYear()} ADWEH · All rights reserved</div>
          <div className="flex items-center gap-5">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/contact");
              }}
              className="hover:text-[#5c85ff] cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/contact");
              }}
              className="hover:text-[#5c85ff] cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              className="hover:text-[#5c85ff] cursor-pointer"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
