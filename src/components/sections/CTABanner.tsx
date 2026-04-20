import { CTA } from "../CTA";
import { Reveal } from "../Reveal";

export function CTABanner({
  title = "Find out exactly how many deals you're losing.",
  sub = "Free. No pitch. Just the numbers — and what we'd build to fix it.",
  ctaLabel = "Book Your Free Audit",
}: {
  title?: string;
  sub?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="container relative z-10 py-20 md:py-28">
        <Reveal>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
              <p className="mt-4 text-muted-foreground">{sub}</p>
            </div>
            <CTA variant="primary" to="/contact" withArrow>
              {ctaLabel}
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
