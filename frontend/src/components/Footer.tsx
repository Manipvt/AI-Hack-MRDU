import { Globe, MessageCircle, Users, Code2 } from "lucide-react";

/**
 * Footer.tsx — reusable site footer for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - Next.js (uses next/link)
 *  - TailwindCSS configured in the project
 *  - lucide-react installed:  npm i lucide-react
 *  - Same Orbitron/Rajdhani font pairing as the rest of the page set.
 *
 * Drop this at the bottom of your root layout, after {children}:
 *    import Footer from "@/components/Footer";
 *    ...
 *    {children}
 *    <Footer />
 * -----------------------------------------------------------------------
 */

const COLUMNS = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Domains", href: "/domains" },
      { label: "Challenges", href: "/challenges" },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Timeline", href: "/timeline" },
      { label: "Prizes", href: "/prizes" },
      { label: "Sponsors", href: "/sponsors" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Participation", href: "/terms" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ],
  },
];

const SOCIALS = [
  { icon: Globe, href: "https://instagram.com", label: "Instagram" },
  { icon: MessageCircle, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Users, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Code2, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05060b] px-6 pt-16 pb-8 sm:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <span className="font-display text-lg tracking-wide text-white">
              AI HACK <span className="text-cyan-400">x</span> MRDU
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Join the premium 24-hour neural battleground organized by the
              Department of CSE-AIML, Malla Reddy Deemed to be University. Code
              the future.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-[11px] tracking-[0.15em] text-cyan-400">
                {col.heading.toUpperCase()}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/5" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.05em] text-slate-500">
            © {new Date().getFullYear()} AI HACK x MRDU. ALL SYSTEM OPERATIONS SECURED.
          </p>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 text-cyan-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400/10"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}