# Mike Verse

React + TypeScript site for Mike Verse. Smile with Mike is the Instagram comedy page; this site is the home. Brand look stays in `src/styles/global.css`.

## Stack

- React 19
- Vite 7
- TypeScript 5.9
- Tailwind CSS 4
- React Router 7
- Framer Motion
- Yarn

## Structure

```
src/
  app/            Router
  assets/         Mike artwork (do not redraw)
  components/     chatbot, common, layout, sections
  config/         Brand, nav, EmailJS env
  content/        Copy, products, FAQ, portfolio
  context/        Theme
  hooks/          Reveal, count-up, cursor
  layouts/        Shell around every page
  lib/            Email + mailto helpers
  pages/          Home, shop, 404
  styles/         Tokens and motion
  types/          Shared types
```

Edit `src/content/` and `src/config/brand.ts` for copy. Do not restyle Mike's character art.

## Setup

```bash
yarn
```

Copy `.env.example` to `.env.local` and fill EmailJS keys (already present in this repo's local env).

## Commands

```bash
yarn dev        # local site
yarn build      # production bundle
yarn preview    # serve the bundle
yarn typecheck  # TypeScript only
```

Then open the URL Vite prints (usually http://localhost:5173).

## Email

Contact uses EmailJS from the browser. Keys live in `.env.local` as `VITE_EMAILJS_*`. Restrict allowed domains in the EmailJS dashboard.
