import { useEffect, useState } from "react";

export type RouteType = "home" | "contact" | "founder" | "articles" | "mainframe";

interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
}

const ROUTE_META: Record<RouteType, RouteMeta> = {
  home: {
    title: "ADWEH — Healthcare's #1 Growth Partner",
    description: "Healthcare growth partner scaling medical practices with HIPAA-aware AIEO, GEO, SEO, and cybersecurity-focused website development.",
    canonical: "https://adweh.com/",
  },
  contact: {
    title: "Contact ADWEH — Healthcare Growth Advisory & Audits",
    description: "Connect with ADWEH to schedule your healthcare growth consultation across AIEO, GEO, SEO, and cybersecurity-focused website development.",
    canonical: "https://adweh.com/contact",
  },
  founder: {
    title: "Isaac Vivian — Founder, ADWEH",
    description: "Isaac Vivian is the Founder of ADWEH, engineering comprehensive patient discovery engines across AIEO, GEO, SEO, and cybersecurity-focused website development.",
    canonical: "https://adweh.com/founder",
  },
  articles: {
    title: "All Articles & Guides — ADWEH Insights",
    description: "Explore guides, case studies, and growth insights across AIEO, GEO, SEO, and website development for healthcare and aesthetic clinics.",
    canonical: "https://adweh.com/articles",
  },
  mainframe: {
    title: "Mainframe Labs — ADWEH",
    description: "Interactive healthcare technology and service inquiry portal by ADWEH.",
    canonical: "https://adweh.com/mainframe",
  },
};

export function parseCurrentRoute(): RouteType {
  if (typeof window === "undefined") return "home";

  const path = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const hash = window.location.hash.toLowerCase();

  // Pathname-based detection
  if (path === "/contact") return "contact";
  if (path === "/founder") return "founder";
  if (path === "/articles" || path === "/all-articles") return "articles";
  if (path === "/mainframe") return "mainframe";

  // Hash-based backward compatibility
  if (hash === "#contact-page") return "contact";
  if (hash === "#founder") return "founder";
  if (hash === "#all-articles" || hash === "#articles") return "articles";
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
  if (target.startsWith("http://") || target.startsWith("https://") || target.startsWith("tel:") || target.startsWith("mailto:")) {
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
      // Wait for home components to mount before scrolling
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

  // Dedicated routes (/contact, /founder, /articles, /mainframe)
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
