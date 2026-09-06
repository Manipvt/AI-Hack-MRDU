import { useState, type PropsWithChildren } from "react";
import { Plus } from "lucide-react";

/**
 * Faqs.tsx — "Frequently Asked" page for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS configured in the project
 *  - lucide-react installed:  npm i lucide-react
 *  - Same Orbitron/Rajdhani font pairing as the rest of the page set.
 * -----------------------------------------------------------------------
 */

const FAQS = [
  {
    tag: "FQ_01",
    question: "What is AI HACK x MRDU?",
    answer:
      "It is an immersive, high-octane 24-hour neural battleground and hackathon organized by the Department of CSE-AIML at Malla Reddy Deemed to be University. Code, design, and pitch projects side-by-side with India's brightest developer networks.",
  },
  {
    tag: "FQ_02",
    question: "Who can participate in the hackathon?",
    answer:
      "Any undergraduate or graduate college student with active enrollment credentials. Inter-college and inter-departmental teams are highly welcome.",
  },
  {
    tag: "FQ_03",
    question: "What is the registration fee structure?",
    answer:
      "The entry protocol fee is ₹469 per person. This covers full 24-hour access, catered tactical meals, energy drinks, bonfire credentials, and high-performance server sandboxes.",
  },
  {
    tag: "FQ_04",
    question: "What equipment is mandatory to bring?",
    answer:
      "Every participant must bring their personal laptop, charger setups, power extension adapters, valid student identification badges, and optimal focus.",
  },
  {
    tag: "FQ_05",
    question: "Are all meals and hydration protocols covered?",
    answer:
      "Yes. Registration unlocks power breakfast, lunch buffets, late-night catered tactical menus, energy bars, and persistent hot caffeine/Red Bull supply.",
  },
  {
    tag: "FQ_06",
    question: "Which domains can my team apply to?",
    answer:
      "You can apply to any of our 4 key battle sectors: UI/UX Design (Absolute Interface), Web Development (Modern Engines), Vibe Coding (AI Rapid Orchestration), or Agentic AI (Autonomous Agents).",
  },
  {
    tag: "FQ_07",
    question: "Is prior hackathon experience required?",
    answer:
      "Negative. We cater challenges to intermediate, advanced, and expert domains. Mentors will be present to supervise and guide new teams.",
  },
  {
    tag: "FQ_08",
    question: "Who are the mentors monitoring our progress?",
    answer:
      "50+ industry-leading engineers from corporate sponsors, core university research fellows, and tech leaders specialized in Large Language Models.",
  },
];

type Faq = (typeof FAQS)[number];

type FaqItemProps = Faq & {
  isOpen: boolean;
  onToggle: () => void;
};

function Eyebrow({ children }: PropsWithChildren) {
  return (
    <span className="inline-block rounded-sm border border-yellow-400/50 px-3 py-1 text-[11px] tracking-[0.25em] font-mono text-yellow-400">
      {children}
    </span>
  );
}

function FaqItem({ tag, question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="rounded-md border border-cyan-400/20 bg-[#0a0e1a]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-cyan-400">// {tag}</span>
          <span className="font-display text-sm tracking-wide text-white sm:text-base">
            {question}
          </span>
        </span>
        <Plus
          className={`h-4 w-4 shrink-0 text-cyan-400 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          strokeWidth={2}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[13px] leading-relaxed text-slate-400 sm:pl-[4.5rem]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

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
              "radial-gradient(circle at 50% 30%, rgba(56,189,248,0.12), transparent 50%)",
          }}
        />
        <div className="relative">
          <Eyebrow>// ARCHIVAL_INFORMATION_STORE</Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            Frequently Asked
          </h1>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.tag}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </section>

    </div>
  );
}