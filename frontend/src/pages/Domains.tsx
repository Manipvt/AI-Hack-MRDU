import { Palette, Code2, Sparkles, Bot } from "lucide-react";

/**
 * Domains.tsx — "Hack Domains" page for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS configured in the project
 *  - lucide-react installed:  npm i lucide-react
 *  - Same Orbitron/Rajdhani font pairing as Home.tsx / About.tsx.
 * -----------------------------------------------------------------------
 */

type Tone = "cyan" | "purple" | "yellow" | "orange";

const TONE_STYLES: Record<
  Tone,
  {
    border: string;
    text: string;
    iconBg: string;
    badgeBorder: string;
    badgeText: string;
    numText: string;
    cornerBorder: string;
  }
> = {
  cyan: {
    border: "border-cyan-400/60",
    text: "text-cyan-300",
    iconBg: "bg-cyan-400/10",
    badgeBorder: "border-cyan-400/60",
    badgeText: "text-cyan-300",
    numText: "text-cyan-400",
    cornerBorder: "border-cyan-400",
  },
  purple: {
    border: "border-fuchsia-500/60",
    text: "text-fuchsia-300",
    iconBg: "bg-fuchsia-500/10",
    badgeBorder: "border-fuchsia-500/60",
    badgeText: "text-fuchsia-300",
    numText: "text-fuchsia-400",
    cornerBorder: "border-fuchsia-500",
  },
  yellow: {
    border: "border-yellow-400/60",
    text: "text-yellow-300",
    iconBg: "bg-yellow-400/10",
    badgeBorder: "border-yellow-400/60",
    badgeText: "text-yellow-300",
    numText: "text-yellow-400",
    cornerBorder: "border-yellow-400",
  },
  orange: {
    border: "border-orange-500/60",
    text: "text-orange-300",
    iconBg: "bg-orange-500/10",
    badgeBorder: "border-orange-500/60",
    badgeText: "text-orange-300",
    numText: "text-orange-400",
    cornerBorder: "border-orange-500",
  },
};

const DOMAINS: {
  num: string;
  tone: Tone;
  icon: typeof Palette;
  title: string;
  desc: string;
  toolkit: string[];
  difficulty: string;
  slots: string;
}[] = [
  {
    num: "01",
    tone: "cyan",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Architect the visual control layer of the future. Deliver layouts that translate complex system state into intuitive human experiences.",
    toolkit: ["Figma", "Framer", "Webflow", "Three.js", "CSS Shaders"],
    difficulty: "DIFFICULTY: INTERMEDIATE",
    slots: "OPEN SLOTS: 24",
  },
  {
    num: "02",
    tone: "purple",
    icon: Code2,
    title: "Web Development",
    desc: "Build highly-responsive modern web systems. Integrate APIs, deploy resilient databases, and connect real-time sockets.",
    toolkit: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "gRPC"],
    difficulty: "DIFFICULTY: ADVANCED",
    slots: "OPEN SLOTS: 32",
  },
  {
    num: "03",
    tone: "yellow",
    icon: Sparkles,
    title: "Vibe Coding",
    desc: "Unleash rapid AI-assisted development. Use generative modules, construct natural language interfaces, and harden pipelines at speed.",
    toolkit: ["Cursor", "Copilot", "Claude Code", "LangChain", "Replit Agent"],
    difficulty: "DIFFICULTY: BEGINNER",
    slots: "OPEN SLOTS: 40",
  },
  {
    num: "04",
    tone: "orange",
    icon: Bot,
    title: "Agentic AI",
    desc: "Deploy autonomous systems with self-correcting logic. Build workflows where multiple LLM agents coordinate to complete complex tasks.",
    toolkit: ["LangChain", "AutoGen", "CrewAI", "OpenAI Assistants API"],
    difficulty: "DIFFICULTY: EXPERT",
    slots: "OPEN SLOTS: 16",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-cyan-400/50 px-3 py-1 text-[11px] tracking-[0.25em] font-mono text-cyan-300">
      {children}
    </span>
  );
}

function DomainCard({
  num,
  tone,
  icon: Icon,
  title,
  desc,
  toolkit,
  difficulty,
  slots,
}: (typeof DOMAINS)[number]) {
  const c = TONE_STYLES[tone];

  return (
    <div className={`relative rounded-md border bg-[#0a0e1a]/90 px-6 py-7 sm:px-8 ${c.border}`}>
      {/* corner accents */}
      <span className={`absolute -top-[1px] -left-[1px] h-4 w-4 border-t-2 border-l-2 ${c.cornerBorder}`} />
      <span className={`absolute -top-[1px] -right-[1px] h-4 w-4 border-t-2 border-r-2 ${c.cornerBorder}`} />
      <span className={`absolute -bottom-[1px] -left-[1px] h-4 w-4 border-b-2 border-l-2 ${c.cornerBorder}`} />
      <span className={`absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b-2 border-r-2 ${c.cornerBorder}`} />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        {/* number */}
        <div className="shrink-0 sm:w-20">
          <div className={`font-display text-4xl font-extrabold sm:text-5xl ${c.numText}`}>
            {num}
          </div>
          <div className="mt-1 text-[10px] tracking-[0.2em] text-slate-600">SECTOR</div>
        </div>

        {/* body */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-md ${c.iconBg}`}>
              <Icon className={`h-4 w-4 ${c.text}`} strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-lg text-white">{title}</h3>
          </div>

          <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-slate-400">{desc}</p>

          <p className="mt-4 text-[11px] tracking-wide text-slate-600">
            TOOLKIT/FOCUS:{" "}
            {toolkit.map((tool, i) => (
              <span key={tool}>
                <span className={c.text}>{tool}</span>
                {i < toolkit.length - 1 && <span className="text-slate-600">, </span>}
              </span>
            ))}
          </p>
        </div>

        {/* meta */}
        <div className="shrink-0 sm:text-right">
          <span
            className={`inline-block rounded-sm border px-3 py-1.5 font-display text-[10px] tracking-[0.15em] ${c.badgeBorder} ${c.badgeText}`}
          >
            {difficulty}
          </span>
          <div className="mt-2 text-[10px] tracking-wide text-slate-600">{slots}</div>
        </div>
      </div>
    </div>
  );
}

export default function Domains() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white antialiased selection:bg-cyan-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
        body { font-family: 'Rajdhani', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      {/* NAV */}
      <header className="border-b border-white/5 px-6 py-5 sm:px-10">
        <span className="font-display text-lg text-slate-300">domains</span>
      </header>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:px-10">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(56,189,248,0.15), transparent 45%), radial-gradient(circle at 80% 70%, rgba(217,70,239,0.12), transparent 50%)",
          }}
        />
        <div className="relative">
          <Eyebrow>SELECT_YOUR_DOMAIN</Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            Hack Domains
          </h1>
        </div>
      </section>

      {/* DOMAIN LIST */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {DOMAINS.map((domain) => (
            <DomainCard key={domain.num} {...domain} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-[11px] text-slate-600 sm:px-10">
        © {new Date().getFullYear()} AI Hack x MRDU. All systems nominal.
      </footer>
    </div>
  );
}