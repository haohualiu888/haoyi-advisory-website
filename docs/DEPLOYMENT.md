# Deployment Setup

This document records the GitHub and Vercel setup for the Haoyi Advisory website.

## Current Local Repo

- Local path: `C:\Users\haohu\Documents\haoyi-advisory-website`
- Branch: `main`
- GitHub remote: `https://github.com/haohualiu888/haoyi-advisory-website.git`
- Canonical production URL: `https://haoyiadvisory.co`

## GitHub Setup

GitHub repository:

- Owner: `haohualiu888`
- Repository: `haoyi-advisory-website`
- URL: `https://github.com/haohualiu888/haoyi-advisory-website`
- Default branch: `main`

The local repository is connected with:

```bash
git remote set-url origin https://github.com/haohualiu888/haoyi-advisory-website.git
git push
```

Do not create content directly in GitHub's web editor. Edit locally, commit, and push from this codebase.

## Vercel Setup

Vercel project:

- Vercel team: `Haohua` / `haohua1`
- Project: `haoyi-advisory-website`
- Canonical production URL: `https://haoyiadvisory.co`
- Vercel alias: `https://haoyi-advisory-website.vercel.app`
- Git repository: `haohualiu888/haoyi-advisory-website`
- Production branch: `main`
- Framework preset: Next.js
- Root directory: repository root
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: Vercel default for Next.js

Required public URL environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://haoyiadvisory.co
```

Do not point `NEXT_PUBLIC_SITE_URL` at a Vercel preview or alias URL.

Project assessment environment variables and activation checks are documented in
`docs/PROJECT_ASSESSMENT_SETUP.md`.

## Verification

Verified on 2026-06-11:

1. Vercel production deployment reached `READY`.
2. `https://haoyiadvisory.co` returned HTTP 200 and served the Vercel production deployment.
3. `https://www.haoyiadvisory.co` redirected to `https://haoyiadvisory.co/`.
4. These routes returned HTTP 200 on the canonical domain:
   - `/`
   - `/about`
   - `/focus`
   - `/services`
   - `/partners`
   - `/contact`
   - `/contact/project`
5. Vercel deployment metadata points to GitHub `main`:
   - Repository: `haohualiu888/haoyi-advisory-website`
   - Branch: `main`
6. Removed routes returned HTTP 404:
   - `/china-entry-european-medtech`
   - `/overseas-bd-chinese-healthcare`
   - `/insights`
7. Future commits pushed to `main` must trigger Vercel auto-deployment and be verified on the canonical domain.

## Operating Rule

GitHub is the single source of truth. Future website changes must be made in this codebase, committed to GitHub, pushed to `main`, deployed through Vercel auto-deployment, and verified at `https://haoyiadvisory.co`.
