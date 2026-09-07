import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navbar.tsx — reusable top navigation for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - Next.js (uses next/link + next/navigation for active-link detection)
 *  - TailwindCSS configured in the project
 *  - lucide-react installed:  npm i lucide-react
 *  - Same Orbitron/Rajdhani font pairing as the rest of the page set.
 *
 * Drop this at the top of your root layout:
 *    import Navbar from "@/components/Navbar";
 *    ...
 *    <Navbar />
 *    {children}
 * -----------------------------------------------------------------------
 */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Domains", href: "/domains" },
  { label: "Challenges", href: "/challenges" },
  { label: "Timeline", href: "/timeline" },
  { label: "Prizes", href: "/prizes" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
const REGISTRATION_URL = "https://app.studenttribe.in/events/ai-hack-x-mrdu-hackathon";

export default function Navbar() {
  const [pathname, setPathname] = useState(() => window.location.pathname.replace(/\/$/, "") || "/");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname.replace(/\/$/, "") || "/");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05060b]/95 backdrop-blur">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-10">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2">
          <span className="font-display text-sm tracking-wide text-white sm:text-lg">
            AI HACK <span className="text-cyan-400">x</span> <span className="text-yellow-400">MRDU</span>
          </span>
          <span className="hidden rounded-full border border-pink-500/50 bg-pink-500/10 px-2 py-0.5 font-mono text-[9px] tracking-wide text-pink-300 sm:inline-block">
            CSE-AIML
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-display text-[11px] tracking-[0.1em] transition-colors ${
                  active ? "text-cyan-400" : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {link.label.toUpperCase()}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href={REGISTRATION_URL}
          className="hidden shrink-0 rounded-sm border border-cyan-400/60 bg-cyan-400/10 px-5 py-2.5 font-display text-[11px] tracking-[0.15em] text-cyan-300 transition-colors hover:bg-cyan-400/20 lg:inline-block"
        >
          REGISTER NOW
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-sm border border-white/10 p-2 text-slate-300 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/5 px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-sm px-2 py-2.5 font-display text-xs tracking-[0.1em] transition-colors ${
                    active ? "text-cyan-400" : "text-slate-300 hover:text-cyan-300"
                  }`}
                >
                  {link.label.toUpperCase()}
                </a>
              );
            })}
          </div>
          <a
            href={REGISTRATION_URL}
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-sm border border-cyan-400/60 bg-cyan-400/10 px-5 py-3 text-center font-display text-xs tracking-[0.15em] text-cyan-300"
          >
            REGISTER NOW
          </a>
        </nav>
      )}
    </header>
  );
}