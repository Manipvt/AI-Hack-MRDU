
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Domains from "./pages/Domains";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import HowItWorks from "./pages/How-it-Works";
import Prizes from "./pages/Prizes";
import Sponsers from "./pages/Sponsers";
import Timeline from "./pages/Timeline";

const normalizePath = (path: string) => path.replace(/\/$/, "") || "/";

function PageContent({ path }: { path: string }) {
  switch (path) {
    case "/": return <Home />;
    case "/about": return <About />;
    case "/domains": return <Domains />;
    case "/timeline": return <Timeline />;
    case "/prizes": return <Prizes />;
    case "/sponsors": return <Sponsers />;
    case "/faq": return <Faqs />;
    case "/contact": return <Contact />;
    case "/how-it-works":
    case "/challenges": return <HowItWorks />;
    default:
      return (
        <main className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-cyan-400">404 / ROUTE NOT FOUND</p>
            <h1 className="mt-4 font-display text-3xl text-white">This page is still being built.</h1>
            <a href="/" className="mt-8 inline-block border border-cyan-400/60 px-5 py-3 font-display text-xs tracking-[0.15em] text-cyan-300">RETURN HOME</a>
          </div>
        </main>
      );
  }
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const sections = document.querySelectorAll<HTMLElement>("#page-content section");
    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    sections.forEach((section, index) => {
      section.classList.add("scroll-reveal");
      section.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [path]);

  return (
    <div className="min-h-screen bg-[#05060b] text-white">
      <Navbar />
      <div id="page-content" key={path}>
        <PageContent path={path} />
      </div>
      <Footer />
    </div>
  );
}

export default App