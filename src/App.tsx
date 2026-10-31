import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import About from "./components/About";
import Founder from "./components/Founder";
import Problems from "./components/Problems";
import Approach from "./components/Approach";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Showcase from "./components/Showcase";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MainframeHero from "./components/MainframeHero";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import ServicePage from "./components/ServicePage";
import LandingPage from "./components/LandingPage";
import { useRoute } from "./utils/navigation";

export default function App() {
  const route = useRoute();

  // Reveal on scroll observer for animated elements
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger, .mask-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [route]);

  if (route === "mainframe") {
    return <MainframeHero />;
  }

  if (route === "landing") {
    return <LandingPage />;
  }

  return (
    <div className="relative min-h-screen bg-paper text-ink grain overflow-x-hidden">
      <Nav />
      {route === "contact" ? (
        <main className="pt-24">
          <ContactPage />
        </main>
      ) : route === "founder" ? (
        <main className="pt-24">
          <Founder />
        </main>
      ) : route === "blog" ? (
        <main className="pt-24">
          <BlogPage />
        </main>
      ) : route === "results" ? (
        <main className="pt-24">
          <CaseStudies isStandalone={true} />
        </main>
      ) : route === "seo" ? (
        <main className="pt-24">
          <ServicePage service="seo" />
        </main>
      ) : route === "aieo" ? (
        <main className="pt-24">
          <ServicePage service="aieo" />
        </main>
      ) : route === "geo" ? (
        <main className="pt-24">
          <ServicePage service="geo" />
        </main>
      ) : route === "website-development" ? (
        <main className="pt-24">
          <ServicePage service="website-development" />
        </main>
      ) : (
        <main>
          <Hero />
          <Logos />
          <About />
          <Problems />
          <Approach />
          <Solutions />
          <Industries />
          <Showcase />
          <WhyUs />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}
