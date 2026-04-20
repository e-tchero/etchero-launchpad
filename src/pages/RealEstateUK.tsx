import { Helmet } from "react-helmet-async";
import { Check } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Pricing } from "@/components/sections/Pricing";
import { Trust } from "@/components/sections/Trust";
import { CTABanner } from "@/components/sections/CTABanner";
import { Reveal } from "@/components/Reveal";

const fitList = [
  "Boutique firms in Prime Central London",
  "Independent agencies not on enterprise CRM",
  "Teams losing leads after 6PM",
  "Negotiators juggling 30+ live enquiries",
  "Founders tired of WhatsApp chaos",
];

const RealEstateUK = () => {
  return (
    <>
      <Helmet>
        <title>ETCHERO for London Real Estate — Sovereign AI Agent</title>
        <meta
          name="description"
          content="London's boutique agencies are losing £15,000/month to slow replies. ETCHERO deploys a GDPR-compliant Sovereign AI Agent that responds in under 5 seconds and books viewings 24/7."
        />
        <link rel="canonical" href="/real-estate-uk" />
      </Helmet>

      <Nav />
      <PageTransition>
        <Hero
          eyebrow="LONDON CAMPAIGN — REAL ESTATE"
          headline={"London's boutique agencies are losing £15,000/month to slow replies. We fix that."}
          subheadline="ETCHERO deploys a GDPR-compliant Sovereign AI Agent inside your firm. Responds in under 5 seconds. Books viewings. Updates your CRM. Never sleeps."
          primaryCta={{ label: "Get Your Free Lead Loss Audit", to: "/contact" }}
          secondaryCta={{ label: "See Pricing", href: "#services" }}
          stats={[
            { value: "<5s", label: "average reply time after deployment" },
            { value: "24/7", label: "always on — even at 2AM" },
            { value: "5–25", label: "agent firms is our sweet spot" },
          ]}
        />

        {/* Target qualifier */}
        <section className="border-b border-border bg-card py-10">
          <div className="container">
            <Reveal>
              <p className="text-center font-mono text-sm uppercase tracking-[0.25em] text-primary">
                Built specifically for independent London agencies with 5–25 agents
              </p>
            </Reveal>
          </div>
        </section>

        <Problem />

        {/* Who this is for */}
        <section className="border-b border-border bg-background py-24 md:py-32">
          <div className="container">
            <Reveal>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">// QUALIFICATION</p>
              <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
                Who this is for.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
              {fitList.map((item, i) => (
                <Reveal key={item} delay={i * 0.05} className="bg-background">
                  <div className="hover-glow flex items-start gap-4 bg-card p-6">
                    <Check size={20} className="mt-1 shrink-0 text-primary" />
                    <p className="text-base text-foreground">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Pricing />
        <Trust />
        <CTABanner
          title="Stop losing £15,000/month to slow replies."
          sub="Free audit. We map your lead flow, find the leaks, and tell you exactly what to do."
          ctaLabel="Get Your Free Audit"
        />
      </PageTransition>
      <Footer />
    </>
  );
};

export default RealEstateUK;
