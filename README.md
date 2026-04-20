# ETCHERO

Production marketing site for ETCHERO — autonomous AI revenue systems.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animations + page transitions)
- react-router-dom (routing)
- react-helmet-async (SEO)

Portable — no platform lock-in. Builds to a static `dist/` deployable anywhere.

## Routes

- `/` — Homepage
- `/real-estate-uk` — London real-estate landing page
- `/contact` — Contact form (mailto-based, swappable to any backend)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

The static site is output to `dist/`.

## Deploy

### Vercel
```bash
npm i -g vercel
vercel --prod
```
No config needed — Vite is auto-detected.

### Netlify
Drag `dist/` into Netlify, or:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```
Add a `_redirects` file in `public/` with `/*  /index.html  200` for SPA routing.

### Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`

## Contact form

The contact form currently opens the user's mail client (`mailto:hello@etchero.com`) with a pre-filled message — fully portable, no backend needed.

To wire a real backend (Resend, SendGrid, etc.) later:
1. Replace the `window.location.href = mailto:...` block in `src/pages/Contact.tsx` with a `fetch('/api/contact', ...)` call.
2. Add an API route on your platform of choice (Vercel Functions, Netlify Functions, Cloudflare Workers).

## Brand

- Primary: `#00FF41` (neon green)
- Background: `#0A0A0A`
- Card: `#111111`
- Fonts: Space Grotesk (display), Inter (body)
- Aesthetic: dark hacker-luxury, sharp edges, neon glow on hover

All design tokens live in `src/index.css` and `tailwind.config.ts`.
