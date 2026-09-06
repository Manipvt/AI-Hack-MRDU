import { Trophy, Medal, Award } from "lucide-react";

/**
 * Prizes.tsx — "Prizes & Rewards" page for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS configured in the project
 *  - lucide-react installed:  npm i lucide-react
 *  - Same Orbitron/Rajdhani font pairing as the other pages in this set.
 * -----------------------------------------------------------------------
 */

type Tone = "cyan" | "yellow" | "orange" | "purple";

const TONE_STYLES: Record<
  Tone,
  { border: string; text: string; iconText: string; glow: string }
> = {
  cyan: {
    border: "border-cyan-400/60",
    text: "text-cyan-300",
    iconText: "text-cyan-400",
    glow: "",
  },
  yellow: {
    border: "border-yellow-400/70",
    text: "text-yellow-300",
    iconText: "text-yellow-400",
    glow: "shadow-[0_0_35px_-8px_rgba(250,204,21,0.4)]",
  },
  orange: {
    border: "border-orange-500/60",
    text: "text-orange-300",
    iconText: "text-orange-400",
    glow: "",
  },
  purple: {
    border: "border-fuchsia-500/60",
    text: "text-fuchsia-300",
    iconText: "text-fuchsia-400",
    glow: "",
  },
};

const PODIUM = [
  {
    tone: "cyan" as Tone,
    icon: Medal,
    tag: "2ND PROTOCOL",
    amount: "₹30,000",
    desc: "Awarded to the squad displaying elite architectural rigor and refined pipeline integration.",
    perk: "INCUBATOR SEAT + SWAG PACK",
    featured: false,
  },
  {
    tone: "yellow" as Tone,
    icon: Trophy,
    tag: "CHAMPION PROTOCOL",
    amount: "₹50,000",
    desc: "Ultimate champions of the 2026 battleground. Displays supreme execution across design, development, and systems logic.",
    perk: "GUARANTEED INTERNSHIP (3M) + GRID CERTIFICATE",
    featured: true,
    badge: "PODIUM CHAMPION",
  },
  {
    tone: "orange" as Tone,
    icon: Award,
    tag: "3RD PROTOCOL",
    amount: "₹20,000",
    desc: "Awarded to the team displaying outstanding capability, speed, and clean code application.",
    perk: "GRID CERTIFICATE",
    featured: false,
  },
];

const SECTOR_AWARDS: { title: string; desc: string; tone: Tone }[] = [
  {
    title: "UI/UX Design Champion",
    desc: "₹10,000 award for constructing the most compelling, state-of-the-art digital interface.",
    tone: "cyan",
  },
  {
    title: "Agentic AI Logic Champion",
    desc: "₹10,000 award for constructing the most self-correcting multi-agent orchestration loop.",
    tone: "purple",
  },
  {
    title: "Vibe Coding Innovation Award",
    desc: "₹10,000 award for the fastest, most expressive AI-assisted build of the event.",
    tone: "yellow",
  },
  {
    title: "Special Track: Best Pitch",
    desc: "₹10,000 award for the team that defends its system with the sharpest technical narrative.",
    tone: "orange",
  },
];

function Eyebrow({ children, tone = "cyan" }: { children: React.ReactNode; tone?: Tone }) {
  const c = TONE_STYLES[tone];
  return (
    <span
      className={`inline-block rounded-sm border px-3 py-1 text-[11px] tracking-[0.25em] font-mono ${c.border} ${c.text}`}
    >
      {children}
    </span>
  );
}

function PodiumCard({ tone, icon: Icon, tag, amount, desc, perk, featured, badge }: (typeof PODIUM)[number]) {
  const c = TONE_STYLES[tone];
  return (
    <div
      className={`relative rounded-md border bg-[#0a0e1a] px-6 py-7 ${c.border} ${
        featured ? `scale-100 lg:scale-105 ${c.glow}` : ""
      }`}
    >
      {badge && (
        <span
          className={`absolute -top-3 left-6 rounded-sm border bg-[#05060b] px-2 py-0.5 font-display text-[9px] tracking-[0.15em] ${c.border} ${c.text}`}
        >
          {badge}
        </span>
      )}

      <div className={`flex items-center gap-2 font-display text-xs tracking-[0.15em] ${c.text}`}>
        <Icon className={`h-4 w-4 ${c.iconText}`} strokeWidth={1.75} />
        {tag}
      </div>

      <div className="mt-4 font-display text-3xl text-white sm:text-4xl">{amount}</div>

      <p className="mt-4 text-[13px] leading-relaxed text-slate-400">{desc}</p>

      <div className={`mt-6 border-t pt-4 text-[10px] tracking-[0.1em] ${c.border} ${c.text}`}>
        + {perk}
      </div>
    </div>
  );
}

function SectorAwardCard({ title, desc, tone }: (typeof SECTOR_AWARDS)[number]) {
  const c = TONE_STYLES[tone];
  return (
    <div className="rounded-md border border-white/5 bg-[#0a0e1a] px-6 py-5">
      <h3 className={`font-display text-sm tracking-wide ${c.text}`}>{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{desc}</p>
    </div>
  );
}

export default function Prizes() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white antialiased selection:bg-cyan-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
        body { font-family: 'Rajdhani', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      {/* NAV */}
      <header className="border-b border-cyan-400/60 px-6 py-5 sm:px-10">
        <span className="font-display text-lg text-slate-300">prizes</span>
      </header>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 text-center sm:px-10">
        {/* TODO: replace with your own server-room / cyberpunk hero photo */}
        <div className="absolute inset-0">
          <img
            src="/images/prizes-hero.jpg"
            alt="Server room backdrop"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05060b]" />
        </div>
        <div className="relative">
          <Eyebrow>// VALUE_LEDGER_DISTRIBUTION</Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            Prizes &amp; Rewards
          </h1>
        </div>
      </section>

      {/* GRAND POOL */}
      <section className="px-6 pt-20 pb-14 text-center sm:px-10">
        <Eyebrow tone="yellow">| MAXIMUM_PAYLOAD |</Eyebrow>
        <h2 className="mx-auto mt-4 font-display text-3xl text-white sm:text-5xl">
          ₹2,00,000+ Pool
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-16 bg-gradient-to-r from-yellow-400 to-transparent" />
      </section>

      {/* PODIUM CARDS */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {PODIUM.map((p) => (
            <PodiumCard key={p.tag} {...p} />
          ))}
        </div>
      </section>

      {/* SECTOR CHAMPION ESCROWS */}
      <section className="border-t border-white/5 bg-[#070a14] px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg tracking-wide text-white sm:text-xl">
            Sector Champion Escrows
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SECTOR_AWARDS.map((award) => (
              <SectorAwardCard key={award.title} {...award} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}