# Smile With Mike — Website

A React + TypeScript + Tailwind + React Router site for the Smile With Mike animation brand.

## Structure

```
src/
  assets/         Mike character artwork (untouched original PNG)
  components/
    common/       Reusable pieces — Mike, Dot, Reveal, Counter, CursorDot
    layout/       Nav (top), Footer, BottomNav (fixed dock nav)
    chatbot/       MikeAssistant — the floating FAQ chatbot
    sections/     One file per landing-page section (Hero, Stats, About, Services, Portfolio, Team, Contact)
  constants/      Brand info (email, socials, nav links)
  context/        ThemeContext — dark/light mode
  data/           JSON/TS content for stats/about/services/team/portfolio/products/faq — edit these, not the components
  hooks/          useReveal (scroll-in animation), useCountUp, useCursorDot
  layouts/        MainLayout — Nav + Footer + BottomNav + MikeAssistant + <Outlet /> wrapper for every route
  pages/          Home, MikeUniverse (e-commerce demo store), NotFound — one per route
  types/          Shared TypeScript interfaces
  App.tsx         Route table (react-router-dom) with Framer Motion page transitions
  main.tsx        Entry point
```

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What's here now

- **Mike Assistant chatbot** (`components/chatbot/MikeAssistant.tsx`) — floating button, FAQ quick replies, English/Tamil/Tanglish switching, typing indicator, all content in `data/faq.ts`.
- **Portfolio section** (`components/sections/Portfolio.tsx`) — filterable grid; the "Mike's Universe" card is a real e-commerce entry that triggers a Framer Motion circle-wipe transition into `/mike-universe`.
- **Mike's Universe** (`pages/MikeUniverse.tsx`) — a small demo storefront (product grid, add-to-cart animation). Wire it up to real checkout (Shopify, Razorpay, Stripe) when ready.
- **Bottom dock nav** (`components/layout/BottomNav.tsx`) — fixed pill-shaped icon nav with a spring-animated active indicator, replacing inline top nav links.
- Framer Motion is now a real dependency, used for the dock, chatbot, portfolio card, storefront and route transitions.

## Adding a new section

1. Add a data file in `src/data/` if it needs content.
2. Build the component in `src/components/sections/`.
3. Import it into `src/pages/Home.tsx` (or a new page in `src/pages/` + a route in `src/App.tsx`).

## Adding a new page/route

1. Create `src/pages/YourPage.tsx`.
2. Add `<Route path="/your-path" element={<YourPage />} />` inside the `MainLayout` route in `src/App.tsx`.

## Not yet built (next passes)

- Full Tamil / Tanglish translation across the whole site (currently only the chatbot is multilingual)
- Horizontal scroll timeline
- Testimonials with Mike reacting
- Real checkout/cart persistence on Mike's Universe
