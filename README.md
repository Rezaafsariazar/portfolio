# portfolio

Static portfolio for rezaafsariazar.com. Astro, TypeScript, no UI framework.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run deploy   # manual deploy to Cloudflare Pages (see scripts/deploy.sh)
```

Content lives in `src/data/site.ts` (items with `placeholder: true` show a badge).
Replace `public/Reza-Afsariazar-CV.pdf` with the real CV, keep the file name.

Deploy: push to `main` runs `.github/workflows/deploy.yml`
(secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`; Pages project `portfolio`, production branch `main`).
