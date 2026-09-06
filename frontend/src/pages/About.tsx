"use client";

import {
  Zap,
  Users,
  GraduationCap,
  TrendingUp,
  Trophy,
  Flame,
} from "lucide-react";

/**
 * About.tsx — "About the Hackathon" page for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS configured in the project
 *  - lucide-react installed:  npm i lucide-react
 *  - Same Orbitron/Rajdhani font pairing as Home.tsx (self-loaded below).
 *  - Replace the two <img> placeholders with your real event / campus
 *    photography — paths are marked with TODO comments.
 * -----------------------------------------------------------------------
 */

// ---------------------------------------------------------------------------
// Content — edit copy here without touching markup
// ---------------------------------------------------------------------------

const WHY_CARDS = [
  {
    icon: Zap,
    title: "High Innovation",
    desc: "Experiment with LLM pipelines, prompt engineering, and autonomous workflows.",
  },
  {
    icon: Users,
    title: "Elite Networking",
    desc: "Meet top-tier mentors from leading AI companies, VC firms, and tech leaders.",
  },
  {
    icon: GraduationCap,
    title: "Accelerated Mentorship",
    desc: "Get real feedback from domain specialists monitoring your progress live.",
  },
  {
    icon: TrendingUp,
    title: "Fast-Track Career",
    desc: "Corporate sponsors run active placement loops tracking high performers.",
  },
  {
    icon: Trophy,
    title: "Grand Rewards",
    desc: "Claim your share of a ₹2,00,000+ grand pool and sector-specific prizes.",
  },
  {
    icon: Flame,
    title: "Pure Crucible",
    desc: "The ultimate 24-hour test of grit, capability, and design endurance.",
  },
];

const PROTOCOL_STEPS = [
  {
    num: "01",
    title: "System Boot (Launch & Networking)",
    desc: "Check in at the Malla Reddy campus, receive your credential packet, and finalize your developer teams of 2 to 5 members.",
  },
  {
    num: "02",
    title: "Hacking Commencement",
    desc: "The countdown starts. Access sandbox APIs and specialized model endpoints provided by Grid AI Labs.",
  },
  {
    num: "03",
    title: "Status Checkpoint Updates",
    desc: "Present your initial architecture and pipeline logs to the audit panel for progress verification.",
  },
  {
    num: "04",
    title: "Deploy & Defend",
    desc: "Submit your code repository and pitch your working system directly to the elite judging panel.",
  },
];

// ---------------------------------------------------------------------------
// Small building blocks (mirrors Home.tsx styling)
// ---------------------------------------------------------------------------

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-cyan-400/50 px-3 py-1 text-[11px] tracking-[0.25em] font-mono text-cyan-300">
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

function WhyCard({ icon: Icon, title, desc }: (typeof WHY_CARDS)[number]) {
  return (
    <div className="rounded-md border border-white/5 bg-[#0a0e1a] p-6 transition-colors hover:border-cyan-400/40">
      <Icon className="h-5 w-5 text-cyan-300" strokeWidth={1.75} />
      <h3 className="mt-4 font-display text-sm tracking-wide text-cyan-300">{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{desc}</p>
    </div>
  );
}

function ProtocolStep({ num, title, desc }: (typeof PROTOCOL_STEPS)[number]) {
  return (
    <div className="flex gap-5 rounded-md border border-white/5 bg-[#0a0e1a] px-6 py-5">
      <span className="shrink-0 font-display text-2xl text-cyan-400">{num}</span>
      <div>
        <h3 className="font-display text-sm tracking-wide text-white border-b border-cyan-400/30 inline-block pb-1">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function About() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white antialiased selection:bg-cyan-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
        body { font-family: 'Rajdhani', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      {/* NAV */}
      <header className="border-b border-white/5 px-6 py-5 sm:px-10">
        <span className="font-display text-lg text-slate-300">about</span>
      </header>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:px-10">
        {/* TODO: replace with your own nebula / particle background image */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(56,189,248,0.15), transparent 45%), radial-gradient(circle at 75% 60%, rgba(217,70,239,0.12), transparent 50%)",
          }}
        />
        <div className="relative">
          <Eyebrow>CLASSIFIED_ARC</Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            About The Hackathon
          </h1>
        </div>
      </section>

      {/* INTRO — text + image */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl leading-snug text-white sm:text-3xl">
              A 24-Hour Collision Of AI And Creativity
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              AI HACK x MRDU is designed to challenge limits. The event pulls together
              developers, designers, and innovators under one high-octane pressure system.
              The task: leverage state-of-the-art AI tooling to create scalable products
              from scratch in just 24 hours.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Organized by the Department of CSE-AIML at Malla Reddy Deemed to be
              University, this event represents a fusion of academic rigor and industry
              execution.
            </p>
          </div>

          {/* TODO: replace with real event / render image */}
          <div className="overflow-hidden rounded-md border border-cyan-400/40">
            <img
              src="/images/about-hero-render.jpg"
              alt="AI-generated data cube render representing the hackathon theme"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY COMMIT TO THE HACK */}
      <section className="border-t border-white/5 bg-[#070a14] px-6 py-24 sm:px-10">
        <SectionHeading
          eyebrow="AI_HACK_PERKS"
          title="Why Commit To The Hack?"
          subtitle="Unlock key components for your professional and technical arsenal."
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card) => (
            <WhyCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* THE PROTOCOL LAYOUT */}
      <section className="px-6 py-24 sm:px-10">
        <SectionHeading
          eyebrow="TIMELINE"
          title="The Protocol Layout"
          subtitle="What happens during your 24 hours in the Malla Reddy arena."
        />
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {PROTOCOL_STEPS.map((step) => (
            <ProtocolStep key={step.num} {...step} />
          ))}
        </div>
      </section>

      {/* ORGANIZERS */}
      <section className="border-t border-white/5 bg-[#070a14] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>ORGANIZERS</Eyebrow>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-white sm:text-2xl">
              Department of CSE-AIML
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              The Malla Reddy Deemed to be University Department of Computer Science and
              Engineering (AIML) is at the cutting edge of artificial intelligence research
              and practical application, bringing world-class infrastructure and
              specialized model labs to this event.
            </p>
          </div>

          {/* TODO: replace with real campus photography */}
          <div className="overflow-hidden rounded-md border border-white/10">
            <img
              src="/images/campus.jpg"
              alt="Malla Reddy Deemed to be University campus"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}