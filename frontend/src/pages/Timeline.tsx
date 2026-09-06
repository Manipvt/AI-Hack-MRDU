
/**
 * Timeline.tsx — "Event Timeline" page for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS configured in the project
 *  - Same Orbitron/Rajdhani font pairing as the other pages in this set.
 * -----------------------------------------------------------------------
 */

type Tone = "cyan" | "purple";

const TONE_STYLES: Record<Tone, { time: string; bar: string; dayText: string }> = {
  cyan: {
    time: "text-cyan-300",
    bar: "border-l-2 border-cyan-400/40",
    dayText: "text-cyan-400",
  },
  purple: {
    time: "text-fuchsia-300",
    bar: "border-l-2 border-fuchsia-500/40",
    dayText: "text-fuchsia-400",
  },
};

const DAYS: {
  day: string;
  date: string;
  tone: Tone;
  events: { time: string; title: string; desc: string }[];
}[] = [
  {
    day: "DAY 1",
    date: "OCTOBER 3, 2025",
    tone: "cyan",
    events: [
      {
        time: "09:00 AM",
        title: "Registration & Terminal Check-in",
        desc: "Secure your operational credentials, map out team routes, and set up your physical terminal on Malla Reddy campus.",
      },
      {
        time: "10:00 AM",
        title: "System Initiation & Keynotes",
        desc: "Opening parameters declared by CSE-AIML leadership. Release of sandbox configurations and sponsor APIs.",
      },
      {
        time: "11:00 AM",
        title: "Hacking Commencement",
        desc: "The 24-hour neural clock begins countdown. Prompt pipelines open and compile loops commence.",
      },
      {
        time: "01:00 PM",
        title: "Fuel Protocol (Lunch)",
        desc: "Energy replenishment at the cafeteria core.",
      },
      {
        time: "02:00 PM",
        title: "Mentor Checkpoint Round 1",
        desc: "Targeted auditing from sector architects to review initial architecture paradigms.",
      },
      {
        time: "06:00 PM",
        title: "Mid-Point Code Telemetry",
        desc: "Voluntary logic loads submitted to the war room dashboard for operational feedback.",
      },
      {
        time: "08:00 PM",
        title: "Dinner & Cyberpunk Synthwave",
        desc: "Recharge your physical cells with high-fidelity music under the neon rays.",
      },
      {
        time: "10:00 PM",
        title: "Midnight Coding Sprint",
        desc: "A post-deep-dive focus filter applied, technical comms take surge.",
      },
    ],
  },
  {
    day: "DAY 2",
    date: "OCTOBER 4, 2025",
    tone: "purple",
    events: [
      {
        time: "12:00 AM",
        title: "Midnight Caffeine Surge",
        desc: "Direct distribution of Red Bull and smart foods to maintain mental focus during high-load execution.",
      },
      {
        time: "06:00 AM",
        title: "Sunrise Breakfast Calibration",
        desc: "Replenish glucose reserves, clear logs, and prepare the final GUI wrapper implementations.",
      },
      {
        time: "09:00 AM",
        title: "Pre-Flight Mentorship Round 2",
        desc: "Critical testing loop with systems engineers to ensure clean deployment.",
      },
      {
        time: "11:00 AM",
        title: "System Lockdown",
        desc: "Hacking terminated. Sandbox writes disabled. Git repositories committed and locked.",
      },
      {
        time: "12:00 PM",
        title: "Lunch Protocol",
        desc: "Post-hack system wind-down.",
      },
      {
        time: "01:00 PM",
        title: "Neural Pitch & Judge Audits",
        desc: "Live terminal demonstrations on the big screen. Defend your algorithms before specialized clusters.",
      },
      {
        time: "04:00 PM",
        title: "Awards Ceremony & Closing",
        desc: "Prize distribution from the reserve. Announcement of sector champions and closing parameters.",
      },
    ],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-cyan-400/50 px-3 py-1 text-[11px] tracking-[0.25em] font-mono text-cyan-300">
      {children}
    </span>
  );
}

function EventRow({
  time,
  title,
  desc,
  tone,
}: {
  time: string;
  title: string;
  desc: string;
  tone: Tone;
}) {
  const c = TONE_STYLES[tone];
  return (
    <div
      className={`flex flex-col gap-1 rounded-md bg-[#0a0e1a] px-6 py-4 sm:flex-row sm:gap-8 ${c.bar}`}
    >
      <div className={`shrink-0 font-mono text-xs tracking-wide sm:w-24 ${c.time}`}>{time}</div>
      <div>
        <h3 className="font-display text-sm tracking-wide text-white sm:text-base">{title}</h3>
        <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function DayBlock({ day, date, tone, events }: (typeof DAYS)[number]) {
  const c = TONE_STYLES[tone];
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-6 flex items-baseline gap-3">
        <h2 className={`font-display text-2xl tracking-wide ${c.dayText}`}>{day}</h2>
        <span className="text-[11px] tracking-wide text-slate-500">[ {date} ]</span>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <EventRow key={event.time + event.title} tone={tone} {...event} />
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white antialiased selection:bg-cyan-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
        body { font-family: 'Rajdhani', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      {/* NAV */}
      <header className="border-b border-white/5 px-6 py-5 sm:px-10">
        <span className="font-display text-lg text-slate-300">timeline</span>
      </header>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 text-center sm:px-10">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(56,189,248,0.15), transparent 45%), radial-gradient(circle at 75% 60%, rgba(217,70,239,0.12), transparent 50%)",
          }}
        />
        <div className="relative">
          <Eyebrow>// SCHEDULE.PROTOCOL</Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            Event Timeline
          </h1>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          {DAYS.map((day) => (
            <DayBlock key={day.day} {...day} />
          ))}
        </div>
      </section>
    </div>
  );
}