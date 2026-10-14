# portfolio

Static portfolio for rezaafsariazar.com. Astro, TypeScript, no UI framework.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run deploy   # manual deploy to Cloudflare Pages (see scripts/deploy.sh)
```

Languages: English (`/`) and Deutsch (`/de/`). UI strings in `src/i18n/ui.ts`, personal data in `src/data/site.ts`.

Add a project: drop one YAML file into `src/content/projects/` (copy `shadeka.yaml`; fields: title, year, type, summary en/de, stack, links, status). It appears as the next plate on both language pages. `status: placeholder` shows a badge.

Deploy: push to `main` runs `.github/workflows/deploy.yml`
(secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`; Pages project `portfolio`, production branch `main`).

## Security headers

`npm run build` runs `scripts/headers.mjs` after Astro, which writes `dist/_headers`
with a Content-Security-Policy whose hashes match the inline scripts of that build.
Do not add `style="…"` attributes in components — the build fails on them, because
the CSP would block them. Use a class in `src/styles/global.css` instead.
