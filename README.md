# Personal Portfolio

The source for my personal portfolio — [ashwinderbhupal.com](https://ashwinderbhupal.com).
Built with React 19 + Vite and deployed to GitHub Pages via GitHub Actions.

## Tech stack

- React 19 + React Router 7
- Vite 7 (build tooling)
- Plain CSS (design system via CSS custom properties)
- GitHub Actions → GitHub Pages (custom domain)

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- Git

## Local development

```bash
npm ci        # install dependencies
npm run dev   # start the Vite dev server (http://localhost:5173)
```

## Production build

```bash
npm run build     # output to dist/
npm run preview   # serve the built site locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. The custom domain is configured via
`public/CNAME` (`ashwinderbhupal.com`); the SPA fallback is handled by copying
`index.html` to `404.html` during the build.

```bash
git add -A
git commit -m "Describe your change"
git push origin main   # builds and deploys automatically
```

A Cloudflare Pages workflow (`.github/workflows/cloudflare-pages.yml`) is also
available as an optional manual deploy (`workflow_dispatch`).

## Project structure

```
.
├─ public/            # static assets (images, resume, CNAME)
├─ src/
│  ├─ components/     # reusable UI (Nav, Footer, ScrollReveal, …)
│  ├─ data/           # site content (projects, skills, experience, personal)
│  ├─ pages/          # route pages (Home, About, Projects, …)
│  ├─ styles/         # global CSS + design tokens
│  └─ lib/            # helpers (asset URLs)
├─ index.html
├─ vite.config.js
└─ .github/workflows/ # CI/CD
```

## Editing content

Site content lives in `src/data/`, separate from presentation:

- `projects.js` — project cards
- `skills.js` — skill categories, certifications, learning
- `experience.js` — work history, leadership, metrics
- `personal.js` — name, bio, stats, navigation, contact details
