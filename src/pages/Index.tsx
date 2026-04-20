import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Industries } from "@/components/sections/Industries";
import { Pricing } from "@/components/sections/Pricing";
import { Trust } from "@/components/sections/Trust";
import { LossCalculator } from "@/components/LossCalculator";
import { CTABanner } from "@/components/sections/CTABanner";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ETCHERO — Autonomous AI Revenue Systems</title>
        <meta
          name="description"
          content="ETCHERO embeds autonomous AI systems inside your business. Every lead captured. Every process automated. Every decision auditable."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Nav />
      <PageTransition>
        <Hero
          headline="Your agents sleep. Your competition responds. ETCHERO closes."
          subheadline="We embed autonomous AI systems inside your business. Every lead captured. Every process automated. Every decision auditable. Built for the way your industry actually works."
          stats={[
            { value: "78%", label: "of buyers work with the first agent who responds" },
            { value: "62%", label: "of leads arrive after hours" },
            { value: "£15,000", label: "average London commission per deal" },
          ]}
        />
        <Problem />
        <Solution />
        <Industries />
        <Pricing />
        <Trust />
        <LossCalculator />
        <CTABanner />
      </PageTransition>
      <Footer />
    </>
  );
};

export default Index;
