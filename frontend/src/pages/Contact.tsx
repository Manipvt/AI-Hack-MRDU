import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Phone, MapPin, Mail, User } from "lucide-react";

/**
 * Contact.jsx — "Get In Touch" page for AI HACK x MRDU
 * -----------------------------------------------------------------------
 * Requirements:
 *  - TailwindCSS configured in the project
 *  - lucide-react installed:  npm i lucide-react
 *  - Same Orbitron/Rajdhani font pairing as the other pages in this set.
 *  - Replace the placeholder <img> for the venue hologram with your own asset.
 * -----------------------------------------------------------------------
 */

const TONES = {
  cyan: { border: "border-cyan-400/50", text: "text-cyan-300", icon: "text-cyan-400" },
  pink: { border: "border-pink-500/50", text: "text-pink-300", icon: "text-pink-400" },
  yellow: { border: "border-yellow-400/50", text: "text-yellow-300", icon: "text-yellow-400" },
};
type Tone = keyof typeof TONES;
type FormField = "name" | "email" | "subject" | "message";

const OPERATORS = [
  { name: "Mr. B Srinivas", role: "Assist Prof., CSE-AIML", phone: "+91 9063605156", tone: "cyan" },
  { name: "Mr. P Panduraju ", role: "Faculty Co ordinator", phone: "+91 8985847780", tone: "pink" },
  { name: "Mr. K Shashikanth", role: "Host & Student Co ordinator", phone: "+91 9908604595", tone: "cyan" },
  { name: "Mr. K Manoj ", role: "Student Co ordinator", phone: "+91 7013335234", tone: "pink" },
] as const;

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-cyan-400/50 px-3 py-1 text-[11px] tracking-[0.25em] font-mono text-cyan-300">
      {children}
    </span>
  );
}

function OperatorCard({ name, role, phone, tone }: { name: string; role: string; phone: string; tone: Tone }) {
  const c = TONES[tone];
  return (
    <div className={`relative rounded-md border bg-[#0a0e1a] px-5 py-4 ${c.border}`}>
      <span className={`absolute -top-[1px] -left-[1px] h-3 w-3 border-t-2 border-l-2 ${c.border}`} />
      <span className={`absolute -top-[1px] -right-[1px] h-3 w-3 border-t-2 border-r-2 ${c.border}`} />
      <span className={`absolute -bottom-[1px] -left-[1px] h-3 w-3 border-b-2 border-l-2 ${c.border}`} />
      <span className={`absolute -bottom-[1px] -right-[1px] h-3 w-3 border-b-2 border-r-2 ${c.border}`} />

      <div className="flex items-center gap-3">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ${c.icon}`}>
          <User className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-xs tracking-wide text-white">{name}</p>
          <p className={`truncate text-[11px] ${c.text}`}>{role}</p>
        </div>
      </div>

      <div className={`mt-3 flex items-center gap-2 border-t pt-3 text-[11px] text-slate-400 ${c.border}`}>
        <Phone className={`h-3.5 w-3.5 ${c.icon}`} strokeWidth={1.75} />
        {phone}
      </div>
    </div>
  );
}

function Field({ label, children, required = false }: { label: string; children: ReactNode; required?: boolean }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block font-mono text-[11px] tracking-[0.1em] text-cyan-300">
        // {label} {required && <span className="text-pink-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full rounded-sm border border-white/10 bg-[#05060b] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-colors focus:border-cyan-400/60";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (field: FormField) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your form handler / API route
    console.log("Dispatching transmission:", form);
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
              "radial-gradient(circle at 50% 30%, rgba(56,189,248,0.15), transparent 50%)",
          }}
        />
        <div className="relative">
          <Eyebrow>// COMMUNICATIONS_UPLINK</Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* SYSTEM OPERATORS */}
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg tracking-wide text-white sm:text-xl">
            System Operators &amp; Coordinators
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OPERATORS.map((op) => (
              <OperatorCard key={op.name} {...op} />
            ))}
          </div>
        </div>
      </section>

      {/* FORM + VENUE */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative rounded-md border border-cyan-400/50 bg-[#0a0e1a] px-6 py-7 sm:px-8"
          >
            <span className="absolute -top-[1px] -left-[1px] h-4 w-4 border-t-2 border-l-2 border-cyan-400" />
            <span className="absolute -top-[1px] -right-[1px] h-4 w-4 border-t-2 border-r-2 border-cyan-400" />
            <span className="absolute -bottom-[1px] -left-[1px] h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
            <span className="absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b-2 border-r-2 border-cyan-400" />

            <h3 className="mb-6 font-display text-base tracking-wide text-white sm:text-lg">
              Dispatch Secure Transmission
            </h3>

            <Field label="FULL NAME" required>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange("name")}
                required
                className={inputClasses}
              />
            </Field>

            <Field label="COMM LINK" required>
              <input
                type="email"
                placeholder="email@domain.com"
                value={form.email}
                onChange={handleChange("email")}
                required
                className={inputClasses}
              />
            </Field>

            <Field label="SUBJECT">
              <input
                type="text"
                placeholder="Inquiry Category"
                value={form.subject}
                onChange={handleChange("subject")}
                className={inputClasses}
              />
            </Field>

            <Field label="PAYLOAD MESSAGE">
              <textarea
                rows={4}
                placeholder="Enter message log..."
                value={form.message}
                onChange={handleChange("message")}
                className={`${inputClasses} resize-none`}
              />
            </Field>

            <button
              type="submit"
              className="mt-2 w-full rounded-sm border border-cyan-400/60 bg-cyan-400/10 py-3 font-display text-xs tracking-[0.2em] text-cyan-300 transition-colors hover:bg-cyan-400/20"
            >
              DISPATCH MESSAGE
            </button>
          </form>

          {/* VENUE PROTOCOL */}
          <div className="rounded-md border border-white/5 bg-[#0a0e1a] px-6 py-7 sm:px-8">
            <h3 className="font-display text-base tracking-wide text-white sm:text-lg">
              Venue Protocol
            </h3>

            <p className="mt-4 flex items-start gap-2 text-[13px] leading-relaxed text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" strokeWidth={1.75} />
              Malla Reddy Deemed to be University, Maisammaguda, Dhulapally,
              Secunderabad, Telangana 500100
            </p>

            {/* TODO: replace with your own venue hologram / map render */}
            <div className="mt-6 overflow-hidden rounded-md border border-cyan-400/50">
              <img
                src="/images/venue-hologram.jpg"
                alt="Holographic map of the venue"
                className="h-40 w-full object-cover sm:h-48"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}