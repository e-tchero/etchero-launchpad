
## ETCHERO — Production Website Plan

A premium, dark "hacker-luxury" marketing site. Built portably (React 18 + Vite + TS + Tailwind + Framer Motion + shadcn/ui) so it deploys to Vercel, Netlify, Cloudflare Pages, or any static host with zero lock-in.

### Brand system
- Colors: Neon green `#00FF41`, near-black `#0A0A0A`, secondary `#111111`, white, warm grey `#A0A0A0`
- Fonts: **Space Grotesk** (headings) + **Inter** (body) via Google Fonts
- Aesthetic: sharp edges (no rounded corners), thin neon borders, subtle green glow on hover, no gradients
- Inline SVG ETCHERO wordmark with animated claw slashes; PNG kept as favicon

### Pages & routes (react-router-dom)

**1. `/` — Homepage**
- Sticky nav (Logo · Services · How It Works · Results · Contact · "Book a Call" CTA)
- Hero with matrix-rain canvas background, dual CTAs, stat bar (78% / 62% / £15k)
- Problem section — 3 icon cards (Clock, Zap, AlertTriangle)
- Solution — 6-step horizontal flow (Lead → Capture → Qualify → Book → CRM → Close)
- **Industries We Deploy In** — 6-card grid (Real Estate, Legal, Healthcare, Financial, Logistics, E-Commerce) + "Don't see your industry?" CTA
- Pricing — 3 tiers, "Most Popular" badge on Sovereign Agent, 30-day guarantee called out
- Trust pillars — GDPR Sovereign · Human-in-Loop · No Black Boxes
- **Loss Calculator** — interactive widget (leads/mo × commission × industry leak rate) with live neon readout
- Full-width CTA banner
- Footer with updated tagline: *"AI Systems for businesses that move at machine speed."*

**2. `/real-estate-uk` — London campaign landing page**
- London-specific hero + £15k/month hook
- "Built for independent London agencies with 5–25 agents" qualifier
- "Who This Is For" bullets (Prime Central London, non-enterprise CRM, post-6PM losses)
- Reuses Problem, Pricing, Trust, CTA banner sections

**3. `/contact`**
- Form: Name, Agency Name, Email, Phone (optional), Leads/month dropdown, Message
- Zod validation + inline errors
- Submit opens a pre-filled email to `hello@etchero.com` via `mailto:` (portable, no backend). Form is structured so a fetch-to-API swap is one-line later.
- Direct contact block below

**4. `*` — 404** (themed to match)

### Animations (Framer Motion)
- Page transitions: fade + 8px upward slide
- `whileInView` scroll reveals on every section (staggered children)
- Hero matrix rain on lightweight `<canvas>` (pauses off-screen, respects `prefers-reduced-motion`)
- Hover glow on cards & buttons via Tailwind + box-shadow

### Technical
- Fully responsive (mobile-first, tested at 360 / 768 / 1024 / 1440)
- SEO via `react-helmet-async` (title, description, OG tags per page)
- Static `public/robots.txt` + `public/sitemap.xml`
- Inline SVG logo component (reused in nav, footer, favicon)
- All CTAs route to `/contact` or scroll to pricing
- No placeholder copy — all real ETCHERO text from your brief
- Clean component structure: `components/sections/*`, `components/ui/*`, `components/Logo.tsx`, `components/MatrixRain.tsx`, `components/LossCalculator.tsx`

### Deployment
- One command (`npm run build`) → static `dist/` deployable to Vercel, Netlify, Cloudflare Pages, or any static host
- README with setup + deploy instructions for all three platforms
- No Lovable-specific runtime dependencies
