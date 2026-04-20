import { Helmet } from "react-helmet-async";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 — ETCHERO</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Nav />
      <main className="relative flex min-h-[70vh] items-center justify-center bg-background">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative z-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">// SIGNAL LOST</p>
          <h1 className="mt-4 font-display text-7xl font-bold neon-text md:text-9xl">404</h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            This route doesn't exist in our deployment graph. Let's get you back to operational territory.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTA variant="primary" to="/" withArrow>Return home</CTA>
            <CTA variant="ghost" to="/contact">Contact us</CTA>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
