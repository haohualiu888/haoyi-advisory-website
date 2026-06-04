# Deployment Setup

This document records the intended first-time setup for the Haoyi Advisory website.

## Current Local Repo

- Local path: `C:\Users\haohu\Documents\haoyi-advisory-website`
- Branch: `main`
- Initial commit: `cf49308 Initial Haoyi Advisory website`

## GitHub Setup

Create an empty GitHub repository:

- Owner: `haohualiu888`
- Repository: `haoyi-advisory-website`
- Suggested visibility: private until public launch
- Do not initialize with README, `.gitignore`, or license because this local repo already has those files.

After the empty repo exists, run from the project root:

```bash
git remote add origin https://github.com/haohualiu888/haoyi-advisory-website.git
git push -u origin main
```

If `origin` already exists, update it instead:

```bash
git remote set-url origin https://github.com/haohualiu888/haoyi-advisory-website.git
git push -u origin main
```

## Vercel Setup

Use the Vercel dashboard or CLI to import the GitHub repository.

Recommended settings:

- Vercel team: `Haohua` / `haohua1`
- Git repository: `haohualiu888/haoyi-advisory-website`
- Production branch: `main`
- Framework preset: Next.js
- Root directory: repository root
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: Vercel default for Next.js

Optional environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://<final-production-domain>
```

Set `NEXT_PUBLIC_SITE_URL` after the final production domain is known so Open Graph metadata uses the production URL.

## Verification

After import and first production deployment:

1. Open the Vercel production URL.
2. Confirm these routes load:
   - `/`
   - `/about`
   - `/focus`
   - `/services`
   - `/partners`
   - `/contact`
3. Confirm removed routes are not present:
   - `/china-entry-european-medtech`
   - `/overseas-bd-chinese-healthcare`
   - `/insights`
4. Confirm the Vercel project shows GitHub integration enabled.
5. Make a small future commit to `main` and confirm Vercel auto-deploys.

## Operating Rule

GitHub is the single source of truth. Future website changes must be made in this codebase, committed to GitHub, pushed to `main`, and deployed through Vercel auto-deployment.
