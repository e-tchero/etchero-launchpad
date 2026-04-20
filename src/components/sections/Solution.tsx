import { Reveal } from "../Reveal";

const steps = [
  { n: "01", title: "Lead Arrives", desc: "From any source — Rightmove, Zoopla, web form, WhatsApp." },
  { n: "02", title: "AI Captures", desc: "In under 5 seconds. Branded. On-tone. Human-feeling." },
  { n: "03", title: "AI Qualifies", desc: "Budget, timeline, intent — surfaced and scored." },
  { n: "04", title: "Appointment Booked", desc: "Straight into your calendar. Confirmed by the prospect." },
  { n: "05", title: "CRM Updated", desc: "Every interaction logged, tagged, auditable." },
  { n: "06", title: "You Close", desc: "Walk into a warm meeting. The work is done." },
];

export function Solution() {
  return (
    <section id="how" className="border-b border-border bg-background py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">// THE SYSTEM</p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            ETCHERO installs your AI revenue machine.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Six precision-engineered stages. Deployed inside your stack. Operating 24/7.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} className="bg-background">
              <div className="hover-glow group relative h-full bg-card p-6">
                <div className="font-mono text-xs text-primary">{s.n}</div>
                <h3 className="mt-3 font-display text-base font-semibold leading-tight">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-primary/40 lg:block" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
