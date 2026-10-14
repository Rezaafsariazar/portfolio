#!/usr/bin/env bash
# Manual deploy from your Mac. Needs: `npx wrangler login` once (or CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID).
# --branch must equal the Pages production branch (main), otherwise it is only a Preview deploy.
set -euo pipefail
cd "$(dirname "$0")/.."
BRANCH="${PAGES_BRANCH:-main}"
npm ci
npm run build
npx wrangler pages deploy dist --project-name=portfolio --branch="$BRANCH"
