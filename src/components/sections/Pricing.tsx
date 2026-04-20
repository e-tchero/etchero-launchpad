import { Check } from "lucide-react";
import { CTA } from "../CTA";
import { Reveal } from "../Reveal";

const tiers = [
  {
    name: "First Responder",
    pricing: "£2,500 setup + £400/mo",
    altPricing: null,
    features: [
      "AI responder live in under 14 days",
      "Sub-5-second reply across web + WhatsApp",
      "Lead scoring & intent tagging",
      "Email handoff to your team",
      "Monthly performance report",
    ],
    popular: false,
    guarantee: false,
  },
  {
    name: "Sovereign Agent",
    pricing: "£3,000 setup + £900/mo",
    altPricing: "or £0 setup + £1,400/mo (12mo)",
    features: [
      "Everything in First Responder",
      "Full conversational qualification flow",
      "Calendar integration — books viewings live",
      "CRM bi-directional sync",
      "Branded voice & tone calibration",
      "Human-in-loop approval workflows",
      "GDPR-sovereign data architecture",
      "Dedicated forward-deployed engineer",
    ],
    popular: true,
    guarantee: true,
  },
  {
    name: "Full Deployment",
    pricing: "£10,000 setup + £2,000/mo",
    altPricing: "or £0 setup + £3,000/mo (12mo)",
    features: [
      "Everything in Sovereign Agent",
      "Multi-agent orchestration (sales + ops + support)",
      "Custom workflows for your business model",
      "Voice AI inbound + outbound",
      "Compliance & audit dashboard",
      "Bespoke integrations (any API)",
      "Quarterly strategic review",
      "Priority 24/7 incident response",
      "Dedicated infra in your cloud",
      "White-glove onboarding for full team",
    ],
    popular: false,
    guarantee: false,
  },
];

export function Pricing() {
  return (
    <section id="services" className="border-b border-border bg-background py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">// DEPLOYMENTS</p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Three ways to deploy.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`hover-glow relative flex h-full flex-col border bg-card p-8 ${
                  t.popular ? "border-primary neon-glow" : "border-border"
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-8 bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold">{t.name}</h3>
                <div className="mt-4">
                  <p className="font-display text-xl font-semibold text-foreground">{t.pricing}</p>
                  {t.altPricing && <p className="mt-1 text-sm text-muted-foreground">{t.altPricing}</p>}
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {t.guarantee && (
                  <div className="mt-6 border border-primary/40 bg-primary/5 p-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">30-Day Guarantee</p>
                    <p className="mt-1 text-sm text-foreground">
                      If you don't see measurable results in 30 days, we work free until you do.
                    </p>
                  </div>
                )}

                <div className="mt-8">
                  <CTA variant={t.popular ? "primary" : "ghost"} to="/contact" className="w-full">
                    Deploy {t.name}
                  </CTA>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
