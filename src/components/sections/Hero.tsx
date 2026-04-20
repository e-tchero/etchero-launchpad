import { motion } from "framer-motion";
import { CTA } from "../CTA";
import { MatrixRain } from "../MatrixRain";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; to?: string; href?: string };
  secondaryCta?: { label: string; to?: string; href?: string };
  stats?: { value: string; label: string }[];
}

export function Hero({
  eyebrow = "FORWARD-DEPLOYED AI",
  headline,
  subheadline,
  primaryCta = { label: "Get Your Free Lead Loss Audit", to: "/contact" },
  secondaryCta = { label: "See How It Works", href: "#how" },
  stats,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 opacity-40">
        <MatrixRain />
      </div>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      <div className="container relative z-10 flex min-h-[88vh] flex-col justify-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <CTA variant="primary" to={primaryCta.to} href={primaryCta.href} withArrow>
            {primaryCta.label}
          </CTA>
          <CTA variant="ghost" to={secondaryCta.to} href={secondaryCta.href}>
            {secondaryCta.label}
          </CTA>
        </motion.div>

        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid divide-y divide-border border border-border bg-card/40 backdrop-blur-sm md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="p-6">
                <div className="font-display text-3xl font-bold neon-text md:text-4xl">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
