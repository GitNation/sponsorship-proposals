# GitNation Sponsorship Proposals

## Overview
Website for GitNation conference sponsorship proposals. Multi-brand site generating pages for different conferences (JSNation, React Summit, etc.).

- **Frontend**: Gulp + Webpack build, deployed to Netlify (`staging-sponsors.gitnation.org` / `sponsors.gitnation.org`)
- **Backend**: Sanity CMS (schemas, studio)
- Deploys: Netlify builds dev commits; production release via internal Slack command

## Project Structure
```
frontend/          # Website code (Gulp, Webpack, Nunjucks templates)
  content/         # JSON content config per brand
  src/             # JS, SCSS, templates
  gulp/            # Gulp tasks
  build/           # Build output
backend/           # Sanity CMS studio & schemas
netlify.toml       # Netlify build config
```

## Common Commands

### Frontend
```bash
cd frontend
yarn install
yarn dev              # Local dev server (gulp)
yarn build            # Build current brand (set BRAND_NAME env var)
yarn build-all-brands # Build all conference brands
yarn lint             # ESLint
yarn lint-fix         # ESLint with auto-fix
```

### Backend
```bash
cd backend
yarn install
yarn start            # Sanity studio
yarn deploy           # Deploy GraphQL API
yarn deploy:studio    # Deploy Sanity studio
```

## Brands
Brands are set via `BRAND_NAME` env variable: C3Festival, JSNation, JSNationUs, reactSummit, TestJSSummit, NodeCongress, reactAdvanced, vueLondon, tscongress, ReactDayBerlin, remixconfeu, techleadconf, reactsummitus, webgamedevsummit, DevOpsJS, aicodingsummit, reactAdvancedCanada.

## Notes
- Node version: ^10.0.0 (frontend)
- Frontend uses Nunjucks templates, SCSS, and vanilla JS
- Content is fetched from Sanity CMS and stored as JSON in `frontend/content/`
