import { ArrowRight } from "lucide-react";

/**
 * How-it-Works.tsx — "How It Works" / Operational Pipeline page
 * for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS configured in the project
 *  - Same Orbitron/Rajdhani font pairing as Home.tsx / About.tsx / Domains.tsx.
 * -----------------------------------------------------------------------
 */

type Tone = "cyan" | "purple" | "orange" | "yellow";

const TONE_STYLES: Record<
  Tone,
  { border: string; text: string; badgeBorder: string; badgeText: string }
> = {
  cyan: {
    border: "border-cyan-400/60",
    text: "text-cyan-400",
    badgeBorder: "border-cyan-400/50",
    badgeText: "text-cyan-300",
  },
  purple: {
    border: "border-fuchsia-500/60",
    text: "text-fuchsia-400",
    badgeBorder: "border-fuchsia-500/50",
    badgeText: "text-fuchsia-300",
  },
  orange: {
    border: "border-orange-500/60",
    text: "text-orange-400",
    badgeBorder: "border-orange-500/50",
    badgeText: "text-orange-300",
  },
  yellow: {
    border: "border-yellow-400/60",
    text: "text-yellow-400",
    badgeBorder: "border-yellow-400/50",
    badgeText: "text-yellow-300",
  },
};

const STEPS: {
  num: string;
  tag: string;
  tone: Tone;
  title: string;
  desc: string;
}[] = [
  {
    num: "01",
    tag: "REG_001",
    tone: "cyan",
    title: "Register",
    desc: "Assemble your squad of 2–5 operators. Complete the protocol access registration at mrdu.edu/ai-hack to secure your high-performance sandbox.",
  },
  {
    num: "02",
    tag: "IDEA_002",
    tone: "purple",
    title: "Ideate",
    desc: "Select your target sector: UI/UX, Agentic AI, Vibe Coding, or Web Dev, and structure your team's initial system blueprint.",
  },
  {
    num: "03",
    tag: "CODE_003",
    tone: "orange",
    title: "Build",
    desc: "Unleash pure neural computation. Sustain a rapid, focused, relentless 24 hours of programming, compiling, and configuring solutions.",
  },
  {
    num: "04",
    tag: "MENTOR_004",
    tone: "yellow",
    title: "Mentor",
    desc: "Absorb world-class insight. Sync your progress checkpoints with 50+ industry veterans to accelerate and de-risk your pipeline velocity.",
  },
  {
    num: "05",
    tag: "SUBMIT_005",
    tone: "cyan",
    title: "Submit",
    desc: "Finalize your submission before the automated technical freeze. Push your codebase, working demo, and repository packages.",
  },
  {
    num: "06",
    tag: "PITCH_006",
    tone: "purple",
    title: "Pitch",
    desc: "Defend your algorithm. Deliver a high-impact technical pitch directly to our elite sponsor and judge circuit.",
  },
  {
    num: "07",
    tag: "WIN_007",
    tone: "yellow",
    title: "Win",
    desc: "Dominate the arena. Claim from our ₹2,00,000+ prize matrix, gain global sponsor visibility, and secure immediate hiring rounds.",
  },
];

function Eyebrow({ children, tone = "cyan" }: { children: React.ReactNode; tone?: "cyan" | "purple" }) {
  const toneClasses =
    tone === "cyan"
      ? "border-cyan-400/50 text-cyan-300"
      : "border-fuchsia-500/50 text-fuchsia-300";
  return (
    <span
      className={`inline-block rounded-sm border px-3 py-1 text-[11px] tracking-[0.25em] font-mono ${toneClasses}`}
    >
      {children}
    </span>
  );
}

function StepRow({ num, tag, tone, title, desc }: (typeof STEPS)[number]) {
  const c = TONE_STYLES[tone];
  return (
    <div className={`relative rounded-md border bg-[#0a0e1a]/90 px-6 py-5 sm:px-8 ${c.border}`}>
      <span className={`absolute -top-[1px] -left-[1px] h-3.5 w-3.5 border-t-2 border-l-2 ${c.border}`} />
      <span className={`absolute -top-[1px] -right-[1px] h-3.5 w-3.5 border-t-2 border-r-2 ${c.border}`} />
      <span className={`absolute -bottom-[1px] -left-[1px] h-3.5 w-3.5 border-b-2 border-l-2 ${c.border}`} />
      <span className={`absolute -bottom-[1px] -right-[1px] h-3.5 w-3.5 border-b-2 border-r-2 ${c.border}`} />

      <div className="flex items-start gap-5 sm:gap-8">
        <div className="shrink-0 sm:w-20">
          <div className={`font-display text-2xl font-extrabold sm:text-3xl ${c.text}`}>{num}</div>
          <div className="mt-1 text-[9px] tracking-[0.15em] text-slate-600">{tag}</div>
        </div>

        <div className="flex-1">
          <h3 className="font-display text-base tracking-wide text-white sm:text-lg">{title}</h3>
          <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-slate-400">{desc}</p>
        </div>

        <span
          className={`hidden shrink-0 self-center rounded-sm border px-2.5 py-1 font-display text-[9px] tracking-[0.15em] sm:inline-block ${c.badgeBorder} ${c.badgeText}`}
        >
          ACTIVE
        </span>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white antialiased selection:bg-cyan-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
        body { font-family: 'Rajdhani', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 text-center sm:px-10">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 30%, rgba(56,189,248,0.15), transparent 50%)",
          }}
        />
        <div className="relative">
          <Eyebrow>// SYSTEM_PROTOCOL.EXE</Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            How It Works
          </h1>
        </div>
      </section>

      {/* OPERATIONAL PIPELINE */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Eyebrow tone="purple">[ PROTOCOL_SEQUENCE ]</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl tracking-wide">
            Operational Pipeline
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Navigate the bootup sequence carefully to ensure full validation of your team's
            final output.
          </p>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          {STEPS.map((step) => (
            <StepRow key={step.num} {...step} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/5 px-6 py-20 text-center sm:px-10">
        <h2 className="font-display text-2xl text-white sm:text-3xl">Ready To Commence?</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400">
          Configure your terminal, register your team, and step onto the neural
          battlefield.
        </p>
        <button className="group mt-8 inline-flex items-center gap-2 rounded-sm border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 font-display text-xs tracking-[0.2em] text-cyan-300 transition-colors hover:bg-cyan-400/20">
          INITIATE SECURE REGISTRATION
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </section>
    </div>
  );
}