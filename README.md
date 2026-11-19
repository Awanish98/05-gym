# IRON DISTRICT — Premium Gym & Strength Studio Demo

A standalone, client-showcase-ready website demo built with React 19, TypeScript and Vite. **IRON DISTRICT is an invented brand. Every price, coach, class time, profile and image caption on this site is sample or illustrative content — nothing here is a real business claim.**

## Brand and design system

- **Brand story:** a disciplined independent strength studio concept built around coached sessions, visible progression and a no-nonsense training floor.
- **Art direction:** graphite/black surfaces, chalk-white type and one acid-lime accent (`#d8ff3e`); hard 1px grid, oversized condensed numerals, clipped-corner buttons and a diagonal hero rule. Distinct from the other demo sites' editorial, pastel or rounded directions.
- **Type pairing:** `Barlow Condensed` for display type, tabular labels and big numbers; `Inter` for body copy. Fonts are linked in `index.html` from Google Fonts.
- **Tokens:** defined in `src/styles.css` under `:root` — surface, text, accent/line colours, display/body families, a 6-step spacing scale, `--shell-max`, `--gutter`, header height and zero-radius component shapes.
- **Motion:** short 120–350ms transitions on transform/opacity/colour and a slow lime ticker. All animation is disabled by `prefers-reduced-motion: reduce`; there is no scroll-jacking, autoplay video or external animation library.
- **Image direction:** only the nine local photos in `public/images` are used. High-contrast, grayscale-tinted hero; disciplined aspect-ratio crops elsewhere; dark gradient fallbacks behind every image. No remote or generated images.

## Sections and features

Single-page anchors with a sticky header and an accessible mobile menu:

1. **Home / hero** (`#top`) — full-bleed local photography, oversized headline, two CTAs and a sample figures rail.
2. **Training programs** (`#programs`) — four-tab panel with arrow-key/Home/End keyboard support, `role="tablist"`/`tab`/`tabpanel`, per-program image, session details and a CTA that pre-fills the trial goal.
3. **Coaches** (`#coaches`) — three clearly labelled sample profiles with a native `<dialog>` detail overlay (backdrop click, Escape and focus return) and a CTA that pre-fills the trial form.
4. **Membership plans** (`#memberships`) — three sample tiers, monthly vs 6-month sample billing, a selectable inclusion comparison table and a cost-comparison calculator that shows its formula inputs (`sample rate × months × sample discount`). Selecting a plan pre-fills the trial form.
5. **Transformations** (`#transformations`) — illustrative environment gallery, explicitly marked **not client results, not before/after imagery**. Enlarged viewer supports arrow keys, Escape, labelled controls, focus management and a visible backdrop.
6. **Weekly schedule** (`#schedule`) — day and discipline filters with `aria-pressed`, a live result count, reset control and a designed empty state (Sunday has no sample sessions). "Request info" pre-fills a note in the trial form.
7. **Free trial** (`#free-trial`) — controlled form with visible labels, `autoComplete`, blur/submit validation, `aria-invalid`/`aria-describedby`, first-invalid-field focus and a demo-only success panel with "send another" reset. Nothing is transmitted.
8. **FAQ** (`#faq`) — accessible accordion with `aria-expanded`/`aria-controls` and region-labelled panels.
9. **Contact** (`#contact`) — placeholder address, email, phone and sample hours, plus a clearly labelled demo WhatsApp link.
10. **Footer** — section links, demo disclosure and back-to-top link.

Every visible CTA scrolls to a section, changes a filter/tab, opens a dialog/viewer, pre-fills the form or submits the validated demo form. There are no `href="#"` links, dead buttons or `alert()`-only feedback.

## Commands

From `P:\Demo_websites\05-gym`:

```bash
npm install
npm run dev       # Vite dev server on 0.0.0.0
npm run typecheck # tsc --noEmit (also the lint script)
npm run build     # tsc --noEmit && vite build
npm run preview   # serve the production build
```

## Deployment

`npm run build` emits a static site in `dist/`. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3/CloudFront or Nginx). No server, environment variables, backend or API keys are required. If hosting under a sub-path, set Vite's `base` option accordingly.

Build-environment note: this machine's application-control policy blocked Rollup's native Windows binary, so `package.json` includes an override that uses Rollup's official WASM build (`@rollup/wasm-node`) instead. On a normal machine that override can be removed; with it in place `npm install`, `npm run typecheck` and `npm run build` all succeed here.

## Demo-data disclosure and placeholders to replace

This is a **demo concept — sample information**. No real bookings, payments, client results, testimonials, ratings, awards or credentials exist. The form never sends data anywhere. A real client must replace all of the following before launch:

- Studio name/brand story and the invented hero/stat copy.
- **Address**, directions and real opening hours (currently placeholders/sample week).
- **Phone number** and **WhatsApp number** — the link is `https://wa.me/000000000000` with the accessible label "Demo WhatsApp link — replace with client number".
- **Email address** — currently `hello@example.com`.
- **Prices**: `$39 / $59 / $79` sample monthly rates, the sample 10% six-month discount and all comparison-table inclusions.
- **Coach names** (`Alex R.`, `Jordan M.`, `Sam K.`), sample bios, specialties and availability. These are invented profiles, not real people or verified credentials.
- **Class schedule**: all days, times, durations, levels, coaches and availability; Sunday is intentionally empty as an empty-state demonstration.
- **Training program** descriptions, session lengths and cadence; FAQ answers are about this demo and need real policies.
- **Transformation gallery**: environment photos only. Add verified, permissioned client results only if the client can supply them; never label these scenes as real results.
- **Free-trial flow**: replace the browser-only success panel with the client's confirmed enquiry/booking process, privacy notice and data handling.
- **SEO metadata** in `index.html` (title/description only describe a demo), favicon, and any real-world schema markup. Structured data is intentionally omitted because all values would be sample.
- **Photography**: replace local images with licensed, permissioned client photography if desired; update `src/data.ts` and the hero image together with any alt text.

Sample content is centralised in `src/data.ts`; UI labels that disclose demo status live in the components and in the footer. Accessibility notes: skip link, semantic landmarks, single `h1`, visible focus rings, 40px+ tap targets, keyboard-operated menus/tabs/dialogs/viewer/accordion, and reduced-motion support.
