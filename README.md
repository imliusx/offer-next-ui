# Status Dashboard Template

A `Next.js` monitoring dashboard starter with `shadcn/ui` structure and a visual style close to the `check-cx` frontend.

## Stack

- `Next.js 16` with App Router
- `React 19`
- `Tailwind CSS 4`
- `shadcn/ui` conventions
- `next-themes`
- `lucide-react`

## Run

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Included

- `components.json` for `shadcn/ui`
- `Button`, `Card`, `Badge` primitives in `components/ui`
- Theme toggle
- Glassmorphism cards
- Neutral design tokens in `app/globals.css`
- Mock status grid ready to replace with API data

## Files to edit first

- `app/page.tsx`: page content and mock data
- `components/status-card.tsx`: card layout
- `app/globals.css`: theme tokens and background treatment

## Add more shadcn components

You can keep extending this template with the shadcn CLI, for example:

```bash
pnpm dlx shadcn@latest add hover-card tabs dialog
```
