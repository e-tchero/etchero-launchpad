import { CTA } from "../CTA";
import { Reveal } from "../Reveal";

const industries = [
  { emoji: "🏠", name: "Real Estate", desc: "Lead capture & viewing automation" },
  { emoji: "⚖️", name: "Legal", desc: "Client intake & document triage" },
  { emoji: "🏥", name: "Healthcare", desc: "Appointment booking & follow-up" },
  { emoji: "🏦", name: "Financial Services", desc: "Lead qualification & compliance workflows" },
  { emoji: "🏭", name: "Logistics", desc: "Operations monitoring & alert systems" },
  { emoji: "🛍️", name: "E-Commerce", desc: "Customer support & order automation" },
];

export function Industries() {
  return (
    <section id="industries" className="border-b border-border bg-background py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">// INDUSTRIES WE DEPLOY IN</p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            We build for any business that can't afford to be slow.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05} className="bg-background">
              <div className="hover-glow group h-full bg-card p-8">
                <div className="text-4xl">{ind.emoji}</div>
                <h3 className="mt-5 font-display text-xl font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-border bg-card p-8 md:flex-row md:items-center">
            <p className="max-w-xl text-base text-foreground">
              Don't see your industry? <span className="text-muted-foreground">We've probably already solved your problem.</span>
            </p>
            <CTA variant="ghost" to="/contact" withArrow>Talk to us</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
