import { ShieldCheck, UserCheck, FileSearch } from "lucide-react";
import { Reveal } from "../Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    title: "GDPR Sovereign",
    desc: "Data never leaves your stack. Hosted in your infrastructure, your jurisdiction.",
  },
  {
    icon: UserCheck,
    title: "Human-in-Loop",
    desc: "Your broker approves every AI decision. The system is autonomous, never unsupervised.",
  },
  {
    icon: FileSearch,
    title: "No Black Boxes",
    desc: "Full audit trail. Every prompt, every reply, every action — logged and reviewable.",
  },
];

export function Trust() {
  return (
    <section id="results" className="border-b border-border bg-background py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">// TRUST ARCHITECTURE</p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Built for the London market.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="bg-background">
              <div className="hover-glow h-full bg-card p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center border border-primary/40 text-primary">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
