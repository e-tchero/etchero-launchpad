import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone as PhoneIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";

interface FormState {
  name: string;
  agency: string;
  email: string;
  phone: string;
  leads: string;
  message: string;
}

const initial: FormState = { name: "", agency: "", email: "", phone: "", leads: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.agency.trim()) e.agency = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.leads) e.leads = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    // Portable submission: open user's mail client with a pre-filled message.
    // Swap this for a fetch('/api/contact', ...) call when you wire a backend.
    const subject = encodeURIComponent(`ETCHERO Audit Request — ${form.agency}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Agency: ${form.agency}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || "—"}\n` +
      `Monthly leads: ${form.leads}\n\n` +
      `Message:\n${form.message}\n`
    );
    window.location.href = `mailto:hello@etchero.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact ETCHERO — Request Your Free Lead Loss Audit</title>
        <meta name="description" content="Request a free audit. We'll map your lead flow, find the leaks, and show you what we'd deploy to fix it." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <Nav />
      <PageTransition>
        <section className="relative border-b border-border bg-background">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="container relative z-10 py-20 md:py-28">
            <Reveal>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">// CONTACT</p>
              <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
                Let's talk about your lead flow.
              </h1>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Tell us how leads currently reach you. We'll send back a free audit within 48 hours — no pitch, no obligation.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* Form */}
            <Reveal>
              <form onSubmit={onSubmit} className="space-y-6 border border-border bg-card p-6 md:p-10">
                {sent && (
                  <div className="flex items-start gap-3 border border-primary/40 bg-primary/5 p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Email opened in your client.</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        If nothing happened, write directly to <a className="text-primary hover:underline" href="mailto:hello@etchero.com">hello@etchero.com</a>.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Name" error={errors.name}>
                    <input value={form.name} onChange={update("name")} className={inputCls} placeholder="Jane Smith" />
                  </Field>
                  <Field label="Agency name" error={errors.agency}>
                    <input value={form.agency} onChange={update("agency")} className={inputCls} placeholder="Mayfair Residential" />
                  </Field>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Email" error={errors.email}>
                    <input type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="jane@agency.com" />
                  </Field>
                  <Field label="Phone (optional)">
                    <input type="tel" value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+44 …" />
                  </Field>
                </div>

                <Field label="How many leads do you get per month?" error={errors.leads}>
                  <select value={form.leads} onChange={update("leads")} className={inputCls}>
                    <option value="">Select range…</option>
                    <option value="under-20">Under 20</option>
                    <option value="20-50">20–50</option>
                    <option value="50-100">50–100</option>
                    <option value="100+">100+</option>
                  </select>
                </Field>

                <Field label="Message" error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    className={`${inputCls} min-h-[120px] resize-y`}
                    placeholder="Tell us about your current lead flow…"
                  />
                </Field>

                <button
                  type="submit"
                  className="group inline-flex h-12 w-full items-center justify-center bg-primary px-6 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:neon-glow-strong sm:w-auto"
                >
                  Request Free Audit
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>

            {/* Direct contact */}
            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="border border-border bg-card p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">// DIRECT</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold">Skip the form.</h2>
                  <p className="mt-3 text-sm text-muted-foreground">Write to us directly. We reply within one business day.</p>

                  <div className="mt-6 space-y-4">
                    <a href="mailto:hello@etchero.com" className="group flex items-center gap-3 text-foreground hover:text-primary">
                      <Mail size={18} className="text-primary" />
                      <span>hello@etchero.com</span>
                    </a>
                    <a href="mailto:etchero@outlook.com" className="group flex items-center gap-3 text-foreground hover:text-primary">
                      <Mail size={18} className="text-primary" />
                      <span>etchero@outlook.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <PhoneIcon size={18} className="text-primary" />
                      <span>By appointment only</span>
                    </div>
                  </div>
                </div>

                <div className="border border-primary/40 bg-primary/5 p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">// SLA</p>
                  <p className="mt-3 text-sm text-foreground">
                    Audit delivered in <span className="font-semibold neon-text">48 hours</span>.
                    First system live in <span className="font-semibold neon-text">14 days</span>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </PageTransition>
      <Footer />
    </>
  );
};

const inputCls =
  "h-11 w-full border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

export default Contact;
