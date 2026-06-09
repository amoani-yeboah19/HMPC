# HMPC — Tiles & Tiling Company Website

Premium, modern multi-page marketing website for HMPC, a tiles and tiling company.
Black & yellow brand, luxury/industrial feel, heavy whitespace, smooth motion.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`) + **shadcn/ui** (new-york, neutral base)
- **wouter** for routing
- **Framer Motion** for animation
- **@tanstack/react-query** for data fetching

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — typecheck + production build to `dist/`
- `pnpm preview` — preview the production build
- `pnpm typecheck` — type-check only

## Structure

```
src/
  components/      # shared components + ui/ (shadcn primitives)
  pages/           # Home, About, Products, Services, Gallery, Contact, not-found
  hooks/           # use-mobile, use-toast
  lib/             # utils (cn helper)
  App.tsx          # router + providers
  main.tsx         # entry
  index.css        # Tailwind v4 theme + design tokens
public/images/     # tile collection & gallery imagery
```

## Pages

Home · About · Products · Services · Gallery · Contact

## Path alias

`@/` → `src/` (configured in `vite.config.ts` and `tsconfig.json`).
