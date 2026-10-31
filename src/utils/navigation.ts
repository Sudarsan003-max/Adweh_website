import { useEffect, useState } from "react";

export type RouteType =
  | "home"
  | "contact"
  | "founder"
  | "blog"
  | "results"
  | "seo"
  | "aieo"
  | "geo"
  | "website-development"
  | "mainframe"
  | "landing";

interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
}

const ROUTE_META: Record<RouteType, RouteMeta> = {
  home: {
    title: "SEO, AI Search Optimization & Website Development | ADWEH",
    description:
      "Grow your visibility across Google and AI-powered search. ADWEH combines SEO, AIEO, GEO and security-focused website development. Request an assessment.",
    canonical: "https://adweh.com/",
  },
  contact: {
    title: "Request a Search & AI Visibility Assessment | ADWEH",
    description:
      "Find out where your business may be missing visibility across Google, AI search and your website. Contact ADWEH to discuss practical next steps.",
    canonical: "https://adweh.com/contact",
  },
  founder: {
    title: "Isaac Vivian | Founder of ADWEH",
    description:
      "Meet Isaac Vivian, founder of ADWEH, a search visibility and website development partner focused on SEO, AIEO, GEO and business growth.",
    canonical: "https://adweh.com/founder",
  },
  blog: {
    title: "SEO, AIEO, GEO & Website Insights | ADWEH",
    description:
      "Practical guides to SEO, AI search visibility, GEO, local search and security-focused website development for business owners and decision-makers.",
    canonical: "https://adweh.com/blog",
  },
  results: {
    title: "Verified Results & Case Studies | ADWEH",
    description:
      "Explore verified search, AIEO, and GEO outcomes with real ranking screenshots across Google, ChatGPT, and Gemini for businesses in Tamil Nadu and India.",
    canonical: "https://adweh.com/results",
  },
  seo: {
    title: "SEO Services for Growing Businesses | ADWEH",
    description:
      "Improve organic search visibility with technical SEO, service-page optimization, content strategy and local SEO. Explore ADWEH's SEO services.",
    canonical: "https://adweh.com/seo",
  },
  aieo: {
    title: "AI Engine Optimization (AIEO) Services | ADWEH",
    description:
      "Help AI-powered tools better understand your business with clearer entities, structured answers, reliable facts and AI visibility reviews. Explore AIEO.",
    canonical: "https://adweh.com/aieo",
  },
  geo: {
    title: "Generative Engine Optimization (GEO) Services | ADWEH",
    description:
      "Strengthen content structure, authority signals and business information for generative search experiences. Explore ADWEH's GEO approach.",
    canonical: "https://adweh.com/geo",
  },
  "website-development": {
    title: "Security-Focused Website Development | ADWEH",
    description:
      "Build a fast, mobile-friendly, security-conscious website with strong SEO foundations and clear enquiry pathways. Explore ADWEH website development.",
    canonical: "https://adweh.com/website-development",
  },
  mainframe: {
    title: "Mainframe Labs — ADWEH",
    description:
      "Interactive enterprise technology and service inquiry portal by ADWEH.",
    canonical: "https://adweh.com/mainframe",
  },
  landing: {
    title: "Patient & Client Acquisition Engine — Claim Your Free Audit | ADWEH",
    description:
      "Dominate Google Maps Top 3, rank #1 for high-intent searches, and become the top recommendation on ChatGPT & Gemini. Claim your free 30-minute visibility audit.",
    canonical: "https://adweh.com/lp",
  },
};

export function parseCurrentRoute(): RouteType {
  if (typeof window === "undefined") return "home";

  const path = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const hash = window.location.hash.toLowerCase();

  // Landing page route detection (PPC / Google Ads)
  if (
    path === "/lp" ||
    path === "/landing" ||
    path === "/audit" ||
    path === "/growth" ||
    path === "/ads" ||
    path === "/google-ads"
  ) {
    return "landing";
  }

  // Pathname-based detection
  if (path === "/contact") return "contact";
  if (path === "/founder") return "founder";
  if (path === "/blog" || path === "/insights" || path === "/articles") return "blog";
  if (path === "/results" || path === "/case-studies") return "results";
  if (path === "/seo") return "seo";
  if (path === "/aieo") return "aieo";
  if (path === "/geo") return "geo";
  if (path === "/website-development" || path === "/web-development") return "website-development";
  if (path === "/mainframe") return "mainframe";

  // Hash-based backward compatibility
  if (
    hash === "#lp" ||
    hash === "#landing" ||
    hash === "#audit" ||
    hash === "#growth" ||
    hash === "#ads"
  ) {
    return "landing";
  }
  if (hash === "#contact-page") return "contact";
  if (hash === "#founder") return "founder";
  if (hash === "#blog" || hash === "#insights" || hash === "#articles") return "blog";
  if (hash === "#results-page" || hash === "#case-studies") return "results";
  if (hash === "#seo") return "seo";
  if (hash === "#aieo") return "aieo";
  if (hash === "#geo") return "geo";
  if (hash === "#website-development") return "website-development";
  if (hash === "#mainframe") return "mainframe";

  return "home";
}

export function updatePageMetadata(route: RouteType) {
  if (typeof document === "undefined") return;

  const meta = ROUTE_META[route] || ROUTE_META.home;

  document.title = meta.title;

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute("content", meta.description);

  const canonEl = document.querySelector('link[rel="canonical"]');
  if (canonEl) canonEl.setAttribute("href", meta.canonical);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", meta.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", meta.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", meta.canonical);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute("content", meta.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute("content", meta.description);
}

export function navigateTo(target: string) {
  if (typeof window === "undefined") return;

  // External URLs
  if (
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("tel:") ||
    target.startsWith("mailto:")
  ) {
    window.location.href = target;
    return;
  }

  // Handle root or hash navigation
  if (target === "/" || target === "/#top" || target === "#top") {
    const currentRoute = parseCurrentRoute();
    if (currentRoute !== "home") {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new Event("adweh-route-change"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Target has a section anchor (e.g. "/#services", "#services", "/#work", etc.)
  const hashIndex = target.indexOf("#");
  if (hashIndex !== -1) {
    const sectionId = target.slice(hashIndex + 1);
    const currentRoute = parseCurrentRoute();

    if (currentRoute !== "home") {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new Event("adweh-route-change"));
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  // Dedicated routes (/contact, /founder, /blog, /results, /seo, /aieo, /geo, /website-development, /mainframe)
  window.history.pushState({}, "", target);
  window.dispatchEvent(new Event("adweh-route-change"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useRoute(): RouteType {
  const [route, setRoute] = useState<RouteType>(parseCurrentRoute);

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = parseCurrentRoute();
      setRoute(nextRoute);
      updatePageMetadata(nextRoute);
    };

    syncRoute();

    window.addEventListener("popstate", syncRoute);
    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("adweh-route-change", syncRoute);

    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("adweh-route-change", syncRoute);
    };
  }, []);

  return route;
}
