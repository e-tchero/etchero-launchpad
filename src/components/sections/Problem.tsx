import { Clock, Zap, AlertTriangle } from "lucide-react";
import { Reveal } from "../Reveal";

const cards = [
  { icon: Clock, title: "Leads arrive at 11PM.", body: "You're asleep. They're already on Rightmove looking at the next listing." },
  { icon: Zap, title: "Your team replies in 30 minutes.", body: "The deal is gone. 78% of buyers work with whoever replies first." },
  { icon: AlertTriangle, title: "You have no idea how many slipped through.", body: "No tracking. No audit trail. Just a phantom pipeline of lost commission." },
];

export function Problem() {
  return (
    <section id="problem" className="border-b border-border bg-background py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">// THE PROBLEM</p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            You're losing deals you don't even know about.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="bg-background">
              <div className="hover-glow hairline -m-px h-full bg-card p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/40 text-primary">
                  <c.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
