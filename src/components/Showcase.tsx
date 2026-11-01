import { useState, useEffect } from "react";
import { SectionHead } from "./About";

type TabType = "DAILY" | "WEEKLY" | "MONTHLY" | "ALL";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<TabType>("MONTHLY");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scene, setScene] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDataCard, setMobileDataCard] = useState<"ranks" | "velocity">("ranks");
  const [tilt, setTilt] = useState<{ id: number; x: number; y: number } | null>(null);

  // Monitor screen size to disable 3D rotation on mobile viewports
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play the iPhone screen scene slideshow (walkthrough animation)
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setScene((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  // Trigger dynamic island notification wave on scene changes
  useEffect(() => {
    setIslandExpanded(true);
    const timer = setTimeout(() => {
      setIslandExpanded(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [scene]);

  // Handle dynamic gimbal 3D tilt tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    if (isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({ id: cardId, x, y });

    // Set cursor coordinate CSS properties for radial spotlight glow
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    card.style.setProperty("--mx", `${px}px`);
    card.style.setProperty("--my", `${py}px`);
  };

  const handleMouseLeave = () => {
    setTilt(null);
  };

  // Real data mapped to ADWEH website metrics
  const dailyLeads = [1, 3, 2, 4, 6, 8, 5, 9, 7, 10, 8, 12];
  const weeklyLeads = [10, 15, 12, 22, 28, 35, 30, 42, 48, 55, 52, 60];
  const monthlyLeads = [45, 62, 78, 95, 112, 135, 154, 172, 198, 215, 230, 238];
  const allLeads = [130, 250, 420, 680, 950, 1200, 1450, 1800, 2100, 2350, 2600, 2850];

  const getLeads = (): number[] => {
    switch (activeTab) {
      case "DAILY": return dailyLeads;
      case "WEEKLY": return weeklyLeads;
      case "MONTHLY": return monthlyLeads;
      case "ALL": return allLeads;
    }
  };

  // Convert lead values to percentage heights for the bar chart
  const getHeights = (): number[] => {
    const leads = getLeads();
    const maxVal = Math.max(...leads);
    return leads.map((val) => (val / maxVal) * 90 + 10);
  };

  // Compute card transform inline styles based on tilt states
  const getCardStyle = (cardId: number) => {
    const isHovered = tilt?.id === cardId;
    if (isMobile) {
      return {
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.4s ease",
      };
    }

    switch (cardId) {
      case 1:
        return {
          transform: hoveredCard === 1
            ? "rotateY(8deg) translateZ(10px) scale(0.96)"
            : "rotateY(20deg) translateZ(-30px) scale(0.91)",
          transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
        };
      case 2:
        return {
          transform: (isHovered && tilt)
            ? `rotateY(${13 + tilt.x * 16}deg) rotateX(${-tilt.y * 16}deg) translateZ(25px) scale(1.03)`
            : "rotateY(13deg) translateZ(-10px) scale(0.97)",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
          transformStyle: "preserve-3d" as const,
        };
      case 3:
        return {
          transform: (isHovered && tilt)
            ? `translateZ(60px) scale(1.04) rotateY(${tilt.x * 12}deg) rotateX(${-tilt.y * 12}deg)`
            : "translateZ(35px) scale(1.01)",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
          transformStyle: "preserve-3d" as const,
        };
      case 4:
        return {
          transform: (isHovered && tilt)
            ? `rotateY(${-13 + tilt.x * 16}deg) rotateX(${-tilt.y * 16}deg) translateZ(25px) scale(1.03)`
            : "rotateY(-13deg) translateZ(-10px) scale(0.97)",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
          transformStyle: "preserve-3d" as const,
        };
      case 5:
        return {
          transform: hoveredCard === 5
            ? "rotateY(-8deg) translateZ(10px) scale(0.96)"
            : "rotateY(-20deg) translateZ(-30px) scale(0.91)",
          transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
        };
      default:
        return {};
    }
  };

  // Determine theme mode inside the iPhone mockup (always dark theme)
  const isLightScene = false;

  // Calculate dynamic specular light reflection shift on iPhone glass
  const rx = (tilt?.id === 3 && tilt) ? -tilt.x * 35 : 0;
  const ry = (tilt?.id === 3 && tilt) ? -tilt.y * 35 : 0;

  return (
    <section className="relative py-8 sm:py-24 bg-[#020202] text-bone overflow-hidden" style={{ background: "#050505", color: "#f5f1ea" }}>
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0000cd]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 -left-40 w-96 h-96 bg-[#4169e1]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="008" label="How We Measure Progress" light />

        <div className="mt-5 sm:mt-12 grid lg:grid-cols-12 gap-5 sm:gap-10 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[28px] xs:text-[36px] sm:text-[60px] lg:text-[76px] leading-[1.0] sm:leading-[0.95] tracking-[-0.035em] text-white">
              Visibility is useful.
              <br className="hidden sm:inline" />{" "}
              <span className="font-serif-i italic text-[#5c85ff]">Business outcomes</span> matter more.
            </h2>
          </div>
          <p className="lg:col-span-4 text-[13.5px] sm:text-[15px] leading-relaxed text-bone/70 max-w-md lg:ml-auto">
            We look beyond rankings alone to understand whether your digital presence is reaching the right people and supporting meaningful action.
          </p>
        </div>

        {/* Widescreen Behance-style Layout with 3D Perspective Container */}
        <div 
          className="mt-5 sm:mt-16 relative flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-6 py-2 sm:py-16 max-w-full px-2 sm:px-4 md:px-0"
          style={{ perspective: isMobile ? "none" : "1500px", transformStyle: isMobile ? "flat" : "preserve-3d" }}
        >
          
          {/* Card 1: Leftmost Abstract Vertical Bars (3D Curled Back) */}
          <div 
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="hidden xl:flex w-44 h-[380px] bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden items-end justify-between p-6 opacity-35 hover:opacity-75 shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.8)]"
            style={getCardStyle(1)}
          >
            <div className="w-3 bg-gradient-to-t from-[#0000cd] to-transparent rounded-full" style={{ height: "60%" }} />
            <div className="w-3 bg-gradient-to-t from-[#4169e1] to-transparent rounded-full" style={{ height: "80%" }} />
            <div className="w-3 bg-gradient-to-t from-[#0000cd] to-transparent rounded-full" style={{ height: "40%" }} />
            <div className="w-3 bg-gradient-to-t from-[#4169e1] to-transparent rounded-full" style={{ height: "90%" }} />
            <div className="w-3 bg-gradient-to-t from-[#0000cd] to-transparent rounded-full" style={{ height: "70%" }} />
          </div>

          {/* Card 2: Total Client Value Chart (3D Angled Left) */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => { handleMouseLeave(); setHoveredCard(null); }}
            className={`relative w-full max-w-[340px] sm:w-80 h-[320px] sm:h-[380px] bg-[#0d0d0d]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),_0_25px_60px_-15px_rgba(0,0,0,0.9),_0_0_40px_rgba(0,0,205,0.05)] hover:border-white/20 shrink-0 flex-col justify-between overflow-hidden order-3 md:order-1 ${
              mobileDataCard === "ranks" ? "flex" : "hidden md:flex"
            }`}
            style={getCardStyle(2)}
          >
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#0000cd]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] rounded-2xl sm:rounded-3xl" />
            
            {/* Spotlight Glow Layer */}
            <div 
              className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl sm:rounded-3xl z-10"
              style={{ 
                background: `radial-gradient(circle 180px at var(--mx, 0px) var(--my, 0px), rgba(0, 0, 205, 0.18), transparent 80%)`,
                opacity: tilt?.id === 2 ? 1 : 0
              }}
            />

            <div style={{ transform: "translateZ(15px)" }}>
              <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-bone/45">Search &amp; AI Visibility</div>
              <div className="text-[8.5px] sm:text-[9px] font-mono text-bone/30 mt-0.5">Observed Impressions &amp; Citations</div>
              <div className="mt-3 sm:mt-5 text-3xl sm:text-4xl font-display font-medium tracking-tight text-white">Top 3</div>
            </div>

            {/* Glowing Chart Peak Tooltip */}
            <div 
              className="absolute right-6 sm:right-8 top-[135px] sm:top-[165px] bg-[#0000cd] text-white text-[9px] sm:text-[10px] font-mono font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-lg shadow-[#0000cd]/30 animate-pulse z-10 border border-white/10"
              style={{ transform: "translateZ(30px)" }}
            >
              ▲ Top Ranks &amp; AI Citations
            </div>

            <div className="relative h-32 sm:h-44 w-full mt-3 sm:mt-4 overflow-hidden rounded-lg sm:rounded-xl bg-black/30 border border-white/5" style={{ transform: "translateZ(10px)" }}>
              <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0000cd" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0000cd" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal reference grid lines */}
                <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                {/* Area Gradient */}
                <path d="M 0 170 Q 50 160 100 130 T 200 90 T 300 40 L 300 200 L 0 200 Z" fill="url(#chartGlow)" />
                {/* Stroke Line */}
                <path d="M 0 170 Q 50 160 100 130 T 200 90 T 300 40" fill="none" stroke="#0000cd" strokeWidth="3.5" strokeLinecap="round" />
                {/* Point pulse */}
                <circle cx="300" cy="40" r="5" fill="#4169e1" className="animate-ping" />
                <circle cx="300" cy="40" r="4.5" fill="#0000cd" />
              </svg>
            </div>
          </div>

          {/* Center: 3D iPhone Mockup (Elevated & Hover Interactive) - Centered on Mobile */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 3)}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => { handleMouseLeave(); setHoveredCard(null); }}
            className="relative w-[270px] xs:w-[290px] sm:w-[310px] max-w-[calc(100vw-36px)] h-[510px] xs:h-[550px] sm:h-[620px] shrink-0 z-20 select-none order-1 md:order-2 mx-auto"
            style={getCardStyle(3)}
          >
            {/* Volume & Power Buttons (3D Protrusions) */}
            <div className="absolute top-[100px] -left-[3px] w-[3px] h-[28px] bg-gradient-to-b from-[#6e717a] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" style={{ transform: "translateZ(-3px)" }} />
            <div className="absolute top-[145px] -left-[3px] w-[3px] h-[52px] bg-gradient-to-b from-[#6e717a] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" style={{ transform: "translateZ(-3px)" }} />
            <div className="absolute top-[210px] -left-[3px] w-[3px] h-[52px] bg-gradient-to-b from-[#6e717a] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" style={{ transform: "translateZ(-3px)" }} />
            <div className="absolute top-[170px] -right-[3px] w-[3px] h-[78px] bg-gradient-to-b from-[#6e717a] via-[#3a3b3f] to-[#121314] rounded-r-md shadow-lg" style={{ transform: "translateZ(-3px)" }} />

            {/* 3D Side Depth/Thickness Frames */}
            <div 
              className="absolute inset-0 rounded-[52px] bg-gradient-to-b from-[#4a4c52] via-[#1c1d1f] to-[#0a0a0b] border border-black/40 shadow-2xl" 
              style={{ transform: "translateZ(-8px)" }} 
            />
            <div 
              className="absolute inset-0 rounded-[52px] bg-gradient-to-b from-[#6d7077] via-[#2f3135] to-[#101113] border border-black/35 shadow-xl" 
              style={{ transform: "translateZ(-4px)" }} 
            />

            {/* Outer Titanium Chassis (3D Frame) */}
            <div 
              className="w-full h-full rounded-[52px] p-[3.5px] bg-gradient-to-b from-[#8f939d] via-[#3d4045] to-[#121315] shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.55),_inset_0_-1.5px_2.5px_rgba(0,0,0,0.75),_0_35px_80px_rgba(0,0,0,0.95),_0_0_50px_rgba(0, 0, 205,0.25)] flex items-center justify-center relative"
              style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
            >
              
              {/* Inner bezel & screen container */}
              <div className="w-full h-full rounded-[49px] p-[8px] bg-[#000000] flex items-center justify-center relative">
                
                {/* Speaker Ear Piece Grill */}
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#222] rounded-full z-30" />

                {/* Main Screen */}
                <div 
                  className={`w-full h-full rounded-[41px] overflow-hidden relative flex flex-col justify-between p-6 select-none transition-colors duration-500 ${
                    isLightScene ? "bg-[#fbfbfa]" : "bg-[#050505]"
                  }`}
                  style={{
                    backgroundImage: isLightScene 
                      ? `
                        radial-gradient(circle at 50% 35%, rgba(0, 0, 205,0.04) 0%, transparent 60%),
                        radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.005) 0px, rgba(0,0,0,0.005) 40px, transparent 40px, transparent 80px)
                      `
                      : `
                        radial-gradient(circle at 50% 35%, rgba(0, 0, 205,0.18) 0%, transparent 60%),
                        radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 40px, transparent 40px, transparent 80px)
                      `,
                    backgroundSize: "100% 100%, 20px 20px, 80px 100%"
                  }}
                >
                  {/* Dynamic Island */}
                  <div 
                    className={`absolute top-3 left-1/2 -translate-x-1/2 bg-[#000000] rounded-full z-50 flex items-center justify-between px-3 border border-white/5 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out overflow-hidden ${
                      islandExpanded ? "w-[185px] h-[26px]" : "w-[90px] h-[24px]"
                    }`}
                  >
                    {islandExpanded ? (
                      <div className="flex items-center justify-between w-full text-[8.5px] font-mono font-bold text-white px-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#0000cd] rounded-full animate-ping" />
                          <span className="w-1.5 h-1.5 bg-[#0000cd] rounded-full absolute" />
                          <span className="text-white/90 text-[8px] tracking-tight whitespace-nowrap">
                            {scene === 0 && "Initializing Sync..."}
                            {scene === 1 && "Leads Scaled +428%"}
                            {scene === 2 && "Syncing Funnel Pipeline..."}
                            {scene === 3 && "Loading MD Feedback"}
                          </span>
                        </div>
                        {/* Tiny live waves */}
                        <div className="flex gap-[1px] h-2 items-center">
                          <span className="w-[1.5px] h-1.5 bg-[#0000cd] rounded-xs animate-bounce" style={{ animationDelay: "0.1s" }} />
                          <span className="w-[1.5px] h-2.5 bg-[#0000cd] rounded-xs animate-bounce" style={{ animationDelay: "0.2s" }} />
                          <span className="w-[1.5px] h-2 bg-[#0000cd] rounded-xs animate-bounce" style={{ animationDelay: "0.3s" }} />
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Camera Lens */}
                        <div className="w-[7px] h-[7px] bg-[#0c0c0c] rounded-full flex items-center justify-center border border-white/5 shrink-0">
                          <div className="w-[3px] h-[3px] bg-[#1a2c5b] rounded-full opacity-65" />
                        </div>
                        {/* Proximity / Light Sensor */}
                        <div className="w-[12px] h-[3px] bg-[#0a0a0a] rounded-full opacity-50 border border-white/5 shrink-0" />
                      </>
                    )}
                  </div>

                  {/* Status Bar */}
                  <div className={`absolute top-0 inset-x-0 h-10 px-8 pt-3 flex items-center justify-between text-[10px] font-semibold transition-colors duration-500 z-40 select-none ${
                    isLightScene ? "text-[#0a0a0a]/95" : "text-white/95"
                  }`}>
                    <span>09:41</span>
                    <div className="flex items-center gap-[6px] opacity-90">
                      {/* Cellular Signal Icons */}
                      <div className="flex items-end gap-[1.5px] h-[9px]">
                        <div className={`w-[2px] h-[3px] rounded-xs transition-colors duration-500 ${isLightScene ? "bg-[#0a0a0a]" : "bg-white"}`} />
                        <div className={`w-[2px] h-[5px] rounded-xs transition-colors duration-500 ${isLightScene ? "bg-[#0a0a0a]" : "bg-white"}`} />
                        <div className={`w-[2px] h-[7px] rounded-xs transition-colors duration-500 ${isLightScene ? "bg-[#0a0a0a]" : "bg-white"}`} />
                        <div className={`w-[2px] h-[9px] rounded-xs transition-colors duration-500 ${isLightScene ? "bg-[#0a0a0a]" : "bg-white"}`} />
                      </div>
                      {/* Wi-Fi Icon */}
                      <svg className="w-[13px] h-[13px] fill-current transition-colors duration-500" viewBox="0 0 24 24">
                        <path d="M12 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-6.236-4.5a8.775 8.775 0 0 1 12.472 0 .75.75 0 0 1 0 1.06l-.47.47a.75.75 0 0 1-1.06 0 6.675 6.675 0 0 0-9.412 0 .75.75 0 0 1-1.06 0l-.47-.47a.75.75 0 0 1 0-1.06zm-3-3a13.175 13.175 0 0 1 18.708 0 .75.75 0 0 1 0 1.06l-.47.47a.75.75 0 0 1-1.06 0 11.075 11.075 0 0 0-15.648 0 .75.75 0 0 1-1.06 0l-.47-.47a.75.75 0 0 1 0-1.06zm-3-3a17.575 17.575 0 0 1 24.944 0 .75.75 0 0 1 0 1.06l-.47.47a.75.75 0 0 1-1.06 0 15.475 15.475 0 0 0-21.884 0 .75.75 0 0 1-1.06 0l-.47-.47a.75.75 0 0 1 0-1.06z" />
                      </svg>
                      {/* Battery Icon with Protruding Right Tip */}
                      <div className="flex items-center gap-[1px]">
                        <div className={`w-[20px] h-[10px] border rounded-[2.5px] p-[1px] flex items-center transition-colors duration-500 ${isLightScene ? "border-[#0a0a0a]/80" : "border-white/80"}`}>
                          <div className={`h-full w-[80%] rounded-[1px] transition-colors duration-500 ${isLightScene ? "bg-[#0a0a0a]" : "bg-white"}`} />
                        </div>
                        <div className={`w-[1.2px] h-[3.5px] rounded-r-[0.8px] transition-colors duration-500 ${isLightScene ? "bg-[#0a0a0a]/80" : "bg-white/80"}`} />
                      </div>
                    </div>
                  </div>

                  {/* Specular Glare Reflection overlay (moves with mouse tilt) */}
                  <div 
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.09] z-30 transition-transform duration-300 ease-out"
                    style={{ transform: `translate(${rx}px, ${ry}px) rotate(30deg) scale(1.5)` }}
                  />

                  {/* Diagonal glowing lines */}
                  {!isLightScene && (
                    <>
                      <div className="absolute top-[22%] left-[5%] w-[120px] h-[1px] bg-gradient-to-r from-[#0000cd]/60 to-transparent rotate-[32deg] transform-origin-left pointer-events-none" />
                      <div className="absolute bottom-[26%] right-[5%] w-[120px] h-[1px] bg-gradient-to-r from-transparent to-[#0000cd]/60 rotate-[32deg] transform-origin-right pointer-events-none" />
                    </>
                  )}

                  {/* Phone Header (Pushed down to clear status bar and Dynamic Island) */}
                  <div className={`flex items-center justify-between border-b pb-3.5 pt-6 mt-4 transition-colors duration-500 z-10 ${
                    isLightScene ? "border-black/5" : "border-white/5"
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[12px] font-display font-bold tracking-wider transition-colors duration-500 ${
                        isLightScene ? "text-[#0a0a0a]/95" : "text-white/95"
                      }`}>ADWEH</span>
                    </div>
                    {/* Burger Menu icon */}
                    <div className="w-4.5 h-4.5 flex flex-col justify-center gap-1 cursor-pointer">
                      <span className={`w-3.5 h-0.5 transition-colors duration-500 ${isLightScene ? "bg-black/70" : "bg-white/70"} self-end`} />
                      <span className={`w-4.5 h-0.5 transition-colors duration-500 ${isLightScene ? "bg-black/70" : "bg-white/70"} self-end`} />
                    </div>
                  </div>

                  {/* SCENE 0: Brand Intro (Dark Theme) */}
                  <div 
                    className={`absolute inset-x-6 top-24 bottom-20 flex flex-col justify-center items-center text-center space-y-5 transition-all duration-700 ease-in-out ${
                      scene === 0 ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                    }`}
                  >
                    {/* Animated 3D Glass Badge */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/12 to-white/0 border border-white/15 shadow-[0_15px_30px_rgba(0,0,205,0.25)] flex items-center justify-center animate-pulse relative group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0000cd]/20 to-transparent rounded-2xl opacity-50 blur-xs" />
                      <span className="text-white font-display font-extrabold text-xl tracking-tight z-10">AW</span>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-[19px] font-display font-semibold leading-[1.2] tracking-tight text-white/95">
                        Pioneering AIEO, GEO, SEO & Secure Web Infrastructure
                      </h4>
                      <p className="text-[10.5px] text-white/60 leading-relaxed max-w-[220px] mx-auto">
                        Scaling leading businesses across real estate, hospitality, healthcare, manufacturing & commerce.
                      </p>
                    </div>
                  </div>

                  {/* SCENE 1: Performance Metrics (Dark Theme) */}
                  <div 
                    className={`absolute inset-x-5 top-24 bottom-20 flex flex-col justify-center gap-3.5 transition-all duration-700 ease-in-out ${
                      scene === 1 ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-center text-[#0000cd] font-bold">
                      // Campaign Performance
                    </div>
                    
                    {/* Circular Radial Gauge */}
                    <div className="relative w-24 h-24 flex items-center justify-center mx-auto">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="38" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="transparent" />
                        <circle 
                          cx="48" 
                          cy="48" 
                          r="38" 
                          stroke="#0000cd" 
                          strokeWidth="8" 
                          fill="transparent" 
                          strokeDasharray="238" 
                          strokeDashoffset="38" 
                          strokeLinecap="round" 
                        />
                      </svg>
                      {/* Metric Text */}
                      <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="text-xl font-display font-extrabold text-white leading-none">+428%</span>
                        <span className="text-[7.5px] font-mono uppercase tracking-wider text-white/40 mt-0.5">Growth</span>
                      </div>
                    </div>

                    {/* Metric Card Details */}
                    <div className="grid grid-cols-2 gap-2 w-full mt-1">
                      <div className="bg-[#0f0f11]/90 border border-white/5 rounded-xl p-2 flex flex-col text-left shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
                        <span className="text-[8px] font-mono text-white/40 uppercase">Avg Leads</span>
                        <span className="text-[13px] font-display font-bold text-white mt-0.5">238 / mo</span>
                      </div>
                      <div className="bg-[#0f0f11]/90 border border-white/5 rounded-xl p-2 flex flex-col text-left shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
                        <span className="text-[8px] font-mono text-white/40 uppercase">Cost Per Lead</span>
                        <span className="text-[13px] font-display font-bold text-[#0000cd] mt-0.5">-89% CPL</span>
                      </div>
                    </div>
                  </div>

                  {/* SCENE 2: Enterprise Conversion Funnel (Dark Theme) */}
                  <div 
                    className={`absolute inset-x-6 top-24 bottom-20 flex flex-col justify-center items-center text-center space-y-3.5 transition-all duration-700 ease-in-out ${
                      scene === 2 ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#0000cd] font-bold">Acquisition Pipeline</div>
                      <h4 className="text-[19px] font-display font-semibold leading-tight text-white/95">
                        Enterprise Conversion Funnel
                      </h4>
                      <p className="text-[10px] text-white/50">End-to-end secure, high-intent client conversion flow</p>
                    </div>

                    {/* Funnel Stage Horizontal Bars */}
                    <div className="w-full space-y-2 text-left bg-black/45 p-3 rounded-2xl border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(0, 0, 205,0.06)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                      
                      {/* Funnel Stage 1 */}
                      <div className="space-y-1 relative z-10">
                        <div className="flex justify-between text-[8px] font-mono text-white/50">
                          <span>1. SEARCH & AI DISCOVERY</span>
                          <span className="text-white font-semibold">145.2K</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#0000cd] to-[#4169e1] rounded-full" style={{ width: "100%" }} />
                        </div>
                      </div>

                      {/* Funnel Stage 2 */}
                      <div className="space-y-1 relative z-10">
                        <div className="flex justify-between text-[8px] font-mono text-white/50">
                          <span className="flex items-center gap-1">2. SECURE WEB FORMS <span className="text-[7.5px] opacity-75">🔒</span></span>
                          <span className="text-[#0000cd] font-semibold">2,840 (1.9%)</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#0000cd] to-[#4169e1] rounded-full" style={{ width: "70%" }} />
                        </div>
                      </div>

                      {/* Funnel Stage 3 */}
                      <div className="space-y-1 relative z-10">
                        <div className="flex justify-between text-[8px] font-mono text-white/50">
                          <span className="flex items-center gap-1">3. AIEO & GEO ROUTING <span className="text-[7.5px] opacity-75">🔒</span></span>
                          <span className="text-white font-semibold">1,150 (40%)</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#0000cd] to-[#4169e1] rounded-full" style={{ width: "45%" }} />
                        </div>
                      </div>

                      {/* Funnel Stage 4 */}
                      <div className="space-y-1 relative z-10">
                        <div className="flex justify-between text-[8px] font-mono text-white/50">
                          <span className="flex items-center gap-1">4. QUALIFIED INQUIRIES <span className="text-[7.5px] opacity-75">🔒</span></span>
                          <span className="text-[#0000cd] font-semibold">238 Clients</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#0000cd] to-[#4169e1] rounded-full shadow-[0_0_8px_rgba(0, 0, 205,0.6)]" style={{ width: "25%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SCENE 3: Testimonials / Social Proof (Dark Theme) */}
                  <div 
                    className={`absolute inset-x-5 top-24 bottom-20 flex flex-col justify-center gap-3.5 transition-all duration-700 ease-in-out ${
                      scene === 3 ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-center text-[#0000cd] font-bold">
                      // Verified Results
                    </div>
                    {/* Glass Testimonial bubble in Dark mode */}
                    <div className="bg-[#0f0f11]/90 border border-white/10 rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.2)] space-y-2 text-left relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-[#0000cd]/5 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="flex items-center gap-0.5 text-[#0000cd] text-[10px]">
                        {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
                      </div>
                      
                      <p className="text-[10px] leading-relaxed text-white/80 italic font-serif">
                        "We went from 45 leads per month to 238 leads per month in just 6 months. Our ROI has been incredible."
                      </p>
                      
                      <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {/* SJ Initial Avatar */}
                          <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-[#0000cd] to-[#4169e1] flex items-center justify-center text-[8.5px] font-mono font-bold text-white shadow-md shadow-[#0000cd]/20">
                            SJ
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-white">Sarah Jenkins</div>
                            <div className="text-[8px] text-white/50">Apex Enterprise Partners</div>
                          </div>
                        </div>
                        <div className="text-[9px] font-mono bg-[#0000cd]/10 text-[#0000cd] px-1.5 py-0.5 rounded font-bold">
                          +428%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive iOS Tab Bar */}
                  <div 
                    className={`mt-auto z-10 px-2 py-1.5 rounded-2xl border transition-colors duration-500 flex items-center justify-between gap-1 backdrop-blur-md ${
                      isLightScene 
                        ? "bg-[#f3f2ee]/90 border-black/5 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]" 
                        : "bg-[#0d0d0f]/90 border-white/5 shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
                    }`}
                  >
                    {[
                      { label: "Home", sceneId: 0, icon: (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )},
                      { label: "Growth", sceneId: 1, icon: (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )},
                      { label: "Network", sceneId: 2, icon: (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      )},
                      { label: "Feedback", sceneId: 3, icon: (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )},
                    ].map((tab) => {
                      const isActive = scene === tab.sceneId;
                      return (
                        <button
                          key={tab.sceneId}
                          onClick={() => {
                            setScene(tab.sceneId);
                            setIsAutoplay(false); // Stop autoplay when clicked
                          }}
                          className={`flex-1 flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-300 relative cursor-pointer ${
                            isActive 
                              ? "text-[#0000cd] scale-105" 
                              : isLightScene 
                                ? "text-black/40 hover:text-black/70" 
                                : "text-white/40 hover:text-white/70"
                          }`}
                        >
                          {tab.icon}
                          <span className="text-[7.5px] font-mono font-medium tracking-tight mt-0.5">{tab.label}</span>
                          {isActive && (
                            <span className="absolute bottom-0.5 w-3.5 h-[1.5px] bg-[#0000cd] rounded-full shadow-[0_0_8px_rgba(0, 0, 205,0.8)] animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Phone Bottom Footer */}
                  <div className="space-y-2.5 z-10 mt-2">
                    <div className={`h-[1px] transition-colors duration-500 ${
                      isLightScene ? "bg-black/5" : "bg-gradient-to-r from-transparent via-[#0000cd]/45 to-transparent"
                    }`} />
                    <div className={`text-[8.5px] font-mono uppercase tracking-[0.25em] text-center transition-colors duration-500 ${
                      isLightScene ? "text-black/40" : "text-white/35"
                    }`}>
                      Search · AIEO · GEO · Web Architecture
                    </div>
                    {/* Screen Bottom Bar Indicator */}
                    <div className={`w-28 h-1 mx-auto rounded-full mt-1.5 transition-colors duration-500 ${
                      isLightScene ? "bg-black/60" : "bg-white/60"
                    }`} />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Mobile Interactive Performance Switcher (< md) */}
          <div className="flex md:hidden items-center justify-center gap-2 order-2 mt-2 mb-1 z-20">
            <button
              onClick={() => setMobileDataCard("ranks")}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                mobileDataCard === "ranks"
                  ? "bg-[#0000cd] text-white font-bold shadow-md shadow-[#0000cd]/40 border border-white/20"
                  : "bg-white/5 text-bone/50 hover:text-white border border-white/10"
              }`}
            >
              ● Top 3 Visibility
            </button>
            <button
              onClick={() => setMobileDataCard("velocity")}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                mobileDataCard === "velocity"
                  ? "bg-[#0000cd] text-white font-bold shadow-md shadow-[#0000cd]/40 border border-white/20"
                  : "bg-white/5 text-bone/50 hover:text-white border border-white/10"
              }`}
            >
              ⚡ Lead Velocity
            </button>
          </div>

          {/* Card 4: Acquisition Volume Bar Chart (3D Angled Right) */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 4)}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => { handleMouseLeave(); setHoveredCard(null); }}
            className={`relative w-full max-w-[340px] sm:w-80 h-[340px] sm:h-[380px] bg-[#0d0d0d]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),_0_25px_60px_-15px_rgba(0,0,0,0.9),_0_0_40px_rgba(0, 0, 205,0.05)] hover:border-white/20 shrink-0 flex-col justify-between overflow-hidden order-4 md:order-3 ${
              mobileDataCard === "velocity" ? "flex" : "hidden md:flex"
            }`}
            style={getCardStyle(4)}
          >
            <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-[#4169e1]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] rounded-3xl" />
            
            {/* Spotlight Glow Layer */}
            <div 
              className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-3xl z-10"
              style={{ 
                background: `radial-gradient(circle 180px at var(--mx, 0px) var(--my, 0px), rgba(0, 0, 205, 0.18), transparent 80%)`,
                opacity: tilt?.id === 4 ? 1 : 0
              }}
            />

            <div style={{ transform: "translateZ(15px)" }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-bone/45">Acquisition Velocity</div>
                  <div className="text-[9px] font-mono text-bone/30 mt-0.5">Leads Generated</div>
                </div>
                {/* Mini trend icon */}
                <div className="h-6 w-6 bg-[#0000cd]/15 border border-[#0000cd]/20 rounded-md grid place-items-center">
                  <svg className="w-3 h-3 text-[#0000cd] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="mt-5 flex gap-3 border-b border-white/5 pb-2 text-[9px] font-mono font-medium tracking-wide">
                {(["DAILY", "WEEKLY", "MONTHLY", "ALL"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`transition-colors cursor-pointer ${activeTab === tab ? "text-white font-bold" : "text-bone/30 hover:text-bone/60"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Column Bars */}
            <div className="relative h-40 w-full mt-4 flex items-end justify-between gap-1.5 p-2 bg-black/30 rounded-xl overflow-hidden border border-white/5" style={{ transform: "translateZ(10px)" }}>
              {/* Horizontal target lead line */}
              <div className="absolute top-[30%] inset-x-0 h-[1px] bg-[#0000cd]/20 border-t border-dashed border-[#0000cd]/30 z-0 pointer-events-none" />
              <div className="absolute top-[20%] left-2 text-[7px] font-mono text-[#0000cd]/60 z-10 select-none bg-[#09090a]/80 px-1 py-0.2 rounded border border-[#0000cd]/10">
                Target Met
              </div>

              {getHeights().map((heightPct, i) => {
                const rawValue = getLeads()[i];
                return (
                  <div
                    key={`${activeTab}-${i}`}
                    className="flex-1 bg-[#0000cd]/20 hover:bg-[#0000cd] transition-all duration-500 rounded-t-sm relative group cursor-pointer z-10"
                    style={{ height: `${heightPct}%` }}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-ink border border-white/10 text-[8px] font-mono text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20 shadow-md">
                      {rawValue} Leads
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 4: Rightmost Abstract Horizontal Blocks (3D Curled Back) */}
          <div 
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            className="hidden xl:flex w-44 h-[380px] bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden flex-col justify-between p-6 opacity-35 hover:opacity-75 shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_20px_40px_rgba(0,0,0,0.8)]"
            style={getCardStyle(5)}
          >
            <div className="h-5 w-full bg-gradient-to-r from-transparent to-[#0000cd]/60 rounded-full" />
            <div className="h-5 w-4/5 bg-gradient-to-r from-transparent to-[#4169e1]/60 rounded-full self-end" />
            <div className="h-5 w-5/6 bg-gradient-to-r from-transparent to-[#0000cd]/60 rounded-full" />
            <div className="h-5 w-full bg-gradient-to-r from-transparent to-[#4169e1]/60 rounded-full" />
            <div className="h-5 w-3/4 bg-gradient-to-r from-transparent to-[#0000cd]/60 rounded-full self-end" />
            <div className="h-5 w-11/12 bg-gradient-to-r from-transparent to-[#4169e1]/60 rounded-full" />
          </div>

        </div>

        {/* 4 Measurement Pillars from Section 08 */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#5c85ff] font-bold">01 · Search Visibility</div>
            <p className="mt-2 text-xs text-bone/70 leading-relaxed font-sans">Relevant organic impressions, clicks, rankings, and local discovery where applicable.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#5c85ff] font-bold">02 · AI Visibility</div>
            <p className="mt-2 text-xs text-bone/70 leading-relaxed font-sans">Observed brand mentions and references in defined research prompts, with methodology and limitations documented.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#5c85ff] font-bold">03 · Website Experience</div>
            <p className="mt-2 text-xs text-bone/70 leading-relaxed font-sans">Page performance, technical health, usability, and enquiry-path effectiveness.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#5c85ff] font-bold">04 · Commercial Signals</div>
            <p className="mt-2 text-xs text-bone/70 leading-relaxed font-sans">Qualified form submissions, calls, booking requests, and attributable pipeline where tracking is available.</p>
          </div>
        </div>

        {/* Dashboard disclaimer & CTA */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-bone/50 max-w-2xl leading-relaxed">
            * Dashboard visuals are illustrative unless connected to live, permissioned client data. AI response samples vary by platform, prompt, geography, personalization, and time.
          </p>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/contact");
            }}
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#0a0a0a] px-5 py-2.5 text-xs font-semibold hover:bg-[#1e2bc8] hover:text-white transition shrink-0 cursor-pointer"
          >
            See What We Could Measure For You →
          </a>
        </div>
      </div>
    </section>
  );
}
