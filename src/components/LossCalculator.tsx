import { useMemo, useState } from "react";
import { Reveal } from "../Reveal";
import { CTA } from "../CTA";

export function LossCalculator() {
  const [leads, setLeads] = useState(60);
  const [commission, setCommission] = useState(15000);
  const [responseRate, setResponseRate] = useState(40); // % of leads currently reaching a human in time

  const result = useMemo(() => {
    // Industry data: ~78% choose first responder. Lost leads = leads * (1 - responseRate%) * 0.78 conversion-to-lost
    const missed = leads * (1 - responseRate / 100);
    const lostDeals = missed * 0.05; // ~5% of missed leads would have closed
    const monthly = lostDeals * commission;
    const annual = monthly * 12;
    return {
      missed: Math.round(missed),
      lostDeals: lostDeals.toFixed(1),
      monthly: Math.round(monthly),
      annual: Math.round(annual),
    };
  }, [leads, commission, responseRate]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);

  return (
    <section className="border-b border-border bg-background py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">// LOSS CALCULATOR</p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            How much revenue are you leaking?
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Three inputs. Live readout. Built on industry-standard conversion data.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-8 bg-card p-8 md:p-10">
              <Field
                label="Average leads per month"
                value={leads}
                onChange={setLeads}
                min={10}
                max={500}
                step={5}
                display={leads.toString()}
              />
              <Field
                label="Average commission per deal"
                value={commission}
                onChange={setCommission}
                min={1000}
                max={50000}
                step={500}
                display={fmt(commission)}
              />
              <Field
                label="% of leads your team replies to in <5 min"
                value={responseRate}
                onChange={setResponseRate}
                min={0}
                max={100}
                step={5}
                display={`${responseRate}%`}
              />
            </div>

            {/* Output */}
            <div className="bg-card p-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Estimated leak</p>
              <div className="mt-6 space-y-6">
                <Stat label="Missed leads / month" value={result.missed.toString()} />
                <Stat label="Lost deals / month" value={result.lostDeals} />
                <div className="border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Monthly revenue lost</p>
                  <p className="mt-2 font-display text-4xl font-bold neon-text md:text-5xl">{fmt(result.monthly)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Annual revenue lost</p>
                  <p className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">{fmt(result.annual)}</p>
                </div>
              </div>

              <div className="mt-8">
                <CTA variant="primary" to="/contact" withArrow className="w-full">
                  Stop the leak
                </CTA>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, min, max, step, display,
}: { label: string; value: number; onChange: (n: number) => void; min: number; max: number; step: number; display: string }) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <label className="text-sm text-muted-foreground">{label}</label>
        <span className="font-display text-xl font-semibold neon-text">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none bg-border accent-primary"
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-display text-xl font-semibold">{value}</span>
    </div>
  );
}
