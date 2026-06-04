# Deployment Setup

This document records the GitHub and Vercel setup for the Haoyi Advisory website.

## Current Local Repo

- Local path: `C:\Users\haohu\Desktop\Haoyi website`
- Branch: `main`
- GitHub remote: `https://github.com/haohualiu888/haoyi-advisory-website.git`
- Production URL: `https://haoyi-advisory-website.vercel.app`

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
- Production URL: `https://haoyi-advisory-website.vercel.app`
- Git repository: `haohualiu888/haoyi-advisory-website`
- Production branch: `main`
- Framework preset: Next.js
- Root directory: repository root
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: Vercel default for Next.js

Optional environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://haoyi-advisory-website.vercel.app
```

Set or update `NEXT_PUBLIC_SITE_URL` if a custom production domain is added later.

## Verification

Verified on 2026-06-04:

1. Vercel production deployment reached `READY`.
2. These routes returned HTTP 200:
   - `/`
   - `/about`
   - `/focus`
   - `/services`
   - `/partners`
   - `/contact`
3. Vercel deployment metadata points to GitHub `main`:
   - Repository: `haohualiu888/haoyi-advisory-website`
   - Branch: `main`
4. Removed routes must remain absent:
   - `/china-entry-european-medtech`
   - `/overseas-bd-chinese-healthcare`
   - `/insights`
5. Future commits pushed to `main` should trigger Vercel auto-deployment.

## Operating Rule

GitHub is the single source of truth. Future website changes must be made in this codebase, committed to GitHub, pushed to `main`, and deployed through Vercel auto-deployment.
