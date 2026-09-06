"use client";

import { useEffect, useState } from "react";
import {
  Timer,
  Cpu,
  Radio,
  Rocket,
  Palette,
  Code2,
  Sparkles,
  Bot,
  ArrowRight,
} from "lucide-react";

/**
 * Home.tsx — "AI HACK x MRDU" landing page
 * -----------------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS configured in the project
 *  - lucide-react installed:  npm i lucide-react
 *  - A monospace/techno display font. This file self-loads "Orbitron" +
 *    "Rajdhani" from Google Fonts via the <style> block below so it works
 *    out of the box — swap for a local font import if you prefer.
 * -----------------------------------------------------------------------
 */

// ---------------------------------------------------------------------------
// Config / content — edit these to update copy without touching markup
// ---------------------------------------------------------------------------

const EVENT_TARGET_DATE = "2026-10-03T09:00:00"; // set your real event start
const REGISTRATION_URL = "https://app.studenttribe.in/events/ai-hack-x-mrdu-hackathon";

const STATS = [
  { value: "500+", label: "Participants" },
  { value: "50+", label: "Elite Teams" },
  { value: "₹2,00,000+", label: "Prize Pool" },
  { value: "24 Hours", label: "Non-Stop" },
];

const OPERATIONS = [
  {
    icon: Timer,
    title: "24-Hour Crucible",
    desc: "No sleep, no shortcuts. Build, break, and rebuild your system in a single relentless 24-hour cycle.",
  },
  {
    icon: Cpu,
    title: "GPU Lab Priority",
    desc: "Direct access to high-performance compute pods, reserved and queued exclusively for hack participants.",
  },
  {
    icon: Radio,
    title: "Real-Time War Room",
    desc: "Live mentor check-ins and a dedicated ops channel that tracks your progress against the leaderboard.",
  },
  {
    icon: Rocket,
    title: "Direct Elite Pipeline",
    desc: "Top squads get fast-tracked into partner internship and incubation pipelines after judging closes.",
  },
];

const SECTORS = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Craft interfaces that feel inevitable — systems users don't have to think about to trust.",
    color: "cyan",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Ship full-stack builds under pressure, from schema to deploy, before the clock runs out.",
    color: "purple",
  },
  {
    icon: Sparkles,
    title: "Vibe Coding",
    desc: "Fast, expressive, AI-assisted builds. Prioritize momentum and iteration speed over ceremony.",
    color: "yellow",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "Design autonomous agents that plan, act, and adapt without a human in every loop.",
    color: "orange",
  },
];

const SPONSORS = ["TechCorp", "NeuralNet", "CloudScale", "DevForge", "ByteWorks", "GridAI", "CoreStack"];

const colorMap = {
  cyan: {
    border: "border-cyan-400/60",
    text: "text-cyan-300",
    iconBg: "bg-cyan-400/10",
    glow: "hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.5)]",
  },
  purple: {
    border: "border-purple-400/60",
    text: "text-purple-300",
    iconBg: "bg-purple-400/10",
    glow: "hover:shadow-[0_0_25px_-5px_rgba(192,132,252,0.5)]",
  },
  yellow: {
    border: "border-yellow-400/60",
    text: "text-yellow-300",
    iconBg: "bg-yellow-400/10",
    glow: "hover:shadow-[0_0_25px_-5px_rgba(250,204,21,0.5)]",
  },
  orange: {
    border: "border-orange-400/60",
    text: "text-orange-300",
    iconBg: "bg-orange-400/10",
    glow: "hover:shadow-[0_0_25px_-5px_rgba(251,146,60,0.5)]",
  },
} as const;

// ---------------------------------------------------------------------------
// Countdown hook
// ---------------------------------------------------------------------------

function useCountdown(target: string) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetTime = new Date(target).getTime();

    const tick = () => {
      const diff = Math.max(0, targetTime - Date.now());
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTime({ d, h, m, s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

const pad = (n: number) => n.toString().padStart(2, "0");

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function Eyebrow({ children, tone = "cyan" }: { children: React.ReactNode; tone?: "cyan" | "orange" }) {
  const toneClasses =
    tone === "cyan"
      ? "border-cyan-400/50 text-cyan-300"
      : "border-orange-400/50 text-orange-300";
  return (
    <span
      className={`inline-block rounded-sm border px-3 py-1 text-[11px] tracking-[0.25em] font-mono ${toneClasses}`}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl text-white tracking-wide">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
      {subtitle && (
        <p className="mt-4 text-sm text-slate-400 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

/** Card with clipped corner brackets, used in "System Operations Overview" */
function OpsCard({ icon: Icon, title, desc }: (typeof OPERATIONS)[number]) {
  return (
    <div className="relative rounded-md border border-fuchsia-500/20 bg-[#0a0e1a] p-6 transition-colors hover:border-fuchsia-500/50">
      <span className="absolute -bottom-[1px] -left-[1px] h-4 w-4 border-b-2 border-l-2 border-fuchsia-500/70" />
      <span className="absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b-2 border-r-2 border-fuchsia-500/70" />
      <Icon className="h-6 w-6 text-cyan-300" strokeWidth={1.5} />
      <h3 className="mt-4 font-display text-sm tracking-wide text-cyan-300">
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{desc}</p>
    </div>
  );
}

/** Colored card used in "Battle Sectors" */
function SectorCard({ icon: Icon, title, desc, color }: (typeof SECTORS)[number]) {
  const c = colorMap[color as keyof typeof colorMap];
  return (
    <div
      className={`rounded-md border bg-[#0a0e1a] p-6 transition-shadow ${c.border} ${c.glow}`}
    >
      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${c.iconBg}`}>
        <Icon className={`h-5 w-5 ${c.text}`} strokeWidth={1.75} />
      </div>
      <h3 className="mt-4 font-display text-base text-white">{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{desc}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  const { d, h, m, s } = useCountdown(EVENT_TARGET_DATE);

  return (
    <div className="min-h-screen bg-[#05060b] text-white antialiased selection:bg-cyan-500/30">
      {/* Fonts + a couple of helper utility classes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
        .font-body { font-family: 'Rajdhani', ui-sans-serif, system-ui, sans-serif; }
        body { font-family: 'Rajdhani', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      {/* HERO */}
      <section className="home-hero relative overflow-hidden border-b border-white/5 px-4 py-16 text-center sm:px-10 sm:py-24">
        {/* subtle grid / circuit backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative mx-auto max-w-3xl home-hero-content">
          <div className="home-hero-item home-hero-item-1">
            <Eyebrow tone="cyan">REGISTRATION OPEN &middot; 24 HRS FORMAT</Eyebrow>
          </div>

          <h1 className="home-hero-item home-hero-item-2 mt-6 font-display text-3xl font-extrabold tracking-wide sm:text-6xl">
            <span className="text-white">AI HACK</span>{" "}
            <span className="text-cyan-400">x</span>{" "}
            <span className="text-yellow-400">MRDU</span>
          </h1>

          <p className="home-hero-item home-hero-item-3 mt-4 font-display text-xs tracking-[0.12em] text-orange-400 sm:text-base sm:tracking-[0.2em]">
            24 HRS NEURAL BATTLEGROUND
          </p>

          <p className="home-hero-item home-hero-item-4 mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Department of CSE-AIML, Anurag Engineering College invites coders, hackers, and
            architects to build alongside the brightest minds in the country.
          </p>

          {/* Countdown */}
          <div className="home-hero-item home-hero-item-5 mx-auto mt-10 max-w-md rounded-md border border-cyan-400/40 bg-cyan-400/[0.03] px-4 py-5 sm:px-6">
            <p className="font-mono text-[10px] tracking-[0.18em] text-cyan-400/80 sm:text-[11px] sm:tracking-[0.3em]">
              T-MINUS TO BREACH
            </p>
            <div className="mt-3 grid grid-cols-4 gap-1 font-display text-2xl text-white sm:gap-3 sm:text-4xl">
              <div>{pad(d)}</div>
              <div>{pad(h)}</div>
              <div>{pad(m)}</div>
              <div>{pad(s)}</div>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-1 text-[9px] tracking-[0.1em] text-slate-500 sm:gap-3 sm:text-[10px] sm:tracking-[0.2em]">
              <div>DAYS</div>
              <div>HRS</div>
              <div>MIN</div>
              <div>SEC</div>
            </div>
          </div>

          <a href={REGISTRATION_URL} className="home-hero-item home-hero-item-6 group mt-10 inline-flex max-w-full items-center gap-2 rounded-sm border border-orange-400/60 bg-orange-400/10 px-4 py-3 font-display text-[10px] tracking-[0.12em] text-orange-300 transition-colors hover:bg-orange-400/20 sm:px-6 sm:text-xs sm:tracking-[0.2em]">
            INITIATE REGISTRATION
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="home-hero-item home-hero-item-7 mt-3 text-[11px] tracking-wide text-slate-600">
            Limited slots &middot; Team size 2–4 &middot; Open nationwide
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-white/5 bg-[#070a14] px-6 py-10 sm:px-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-xl text-cyan-300 sm:text-2xl">{stat.value}</div>
              <div className="mt-1 text-[11px] tracking-[0.15em] text-slate-500">
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEM OPERATIONS OVERVIEW */}
      <section className="px-6 py-24 sm:px-10">
        <SectionHeading
          eyebrow="PROTOCOL"
          title="System Operations Overview"
          subtitle="Everything is engineered around uninterrupted, high-velocity building for a full 24-hour window."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OPERATIONS.map((op) => (
            <OpsCard key={op.title} {...op} />
          ))}
        </div>
      </section>

      {/* BATTLE SECTORS */}
      <section className="border-t border-white/5 bg-[#070a14] px-6 py-24 sm:px-10">
        <SectionHeading
          eyebrow="DOMAINS"
          title="Battle Sectors"
          subtitle="Choose your lane. Every sector is judged independently by domain specialists."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((sector) => (
            <SectorCard key={sector.title} {...sector} />
          ))}
        </div>
      </section>

      {/* REWARD SYSTEM */}
      <section className="relative overflow-hidden px-6 py-24 text-center sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"
        />
        <div className="relative">
          <SectionHeading eyebrow="PAYOUT" title="The Reward System" subtitle="Cash prizes, direct sponsor visibility, and fast-tracked opportunities." />

          <div className="relative mx-auto max-w-md rounded-md border-2 border-yellow-400/70 bg-[#0a0e1a]/90 px-8 py-10">
            <span className="absolute -top-[2px] -left-[2px] h-5 w-5 border-t-2 border-l-2 border-yellow-400" />
            <span className="absolute -top-[2px] -right-[2px] h-5 w-5 border-t-2 border-r-2 border-yellow-400" />
            <span className="absolute -bottom-[2px] -left-[2px] h-5 w-5 border-b-2 border-l-2 border-yellow-400" />
            <span className="absolute -bottom-[2px] -right-[2px] h-5 w-5 border-b-2 border-r-2 border-yellow-400" />

            <p className="font-display text-[11px] tracking-[0.25em] text-orange-400">
              GRAND PRIZE POOL
            </p>
            <p className="mt-3 font-display text-4xl text-white sm:text-5xl">₹2,00,000+</p>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-400">
              Distributed among the top 3 winning teams, sector champions in 2026, and
              special track awards recognized by elite sponsors.
            </p>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="border-t border-white/5 px-6 py-14 text-center sm:px-10">
        <p className="text-[11px] tracking-[0.3em] text-slate-600">POWERED BY OUR PARTNERS</p>
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {SPONSORS.map((name) => (
            <div
              key={name}
              className="rounded-sm border border-white/10 bg-white/[0.02] px-5 py-3 text-xs tracking-wide text-slate-500"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/5 px-6 py-24 text-center sm:px-10">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Ready To Hack The Future?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400">
          Spots in the arena are limited. Secure your squad's slot before registration closes.
        </p>
        <a href={REGISTRATION_URL} className="group mt-8 inline-flex items-center gap-2 rounded-sm border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 font-display text-xs tracking-[0.2em] text-cyan-300 transition-colors hover:bg-cyan-400/20">
          INITIATE CONNECTION
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-[11px] text-slate-600 sm:px-10">
        © {new Date().getFullYear()} AI Hack x MRDU. All systems nominal.
      </footer>
    </div>
  );
}