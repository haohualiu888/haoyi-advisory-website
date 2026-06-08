# Haoyi Advisory Website

Official independent website codebase for Haoyi Advisory, a cross-border medical device and healthcare commercialization platform connecting Europe and China.

## Live Links

- Production: https://haoyi-advisory-website.vercel.app
- GitHub: https://github.com/haohualiu888/haoyi-advisory-website

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel production deployment

## Main Sections

The public site has exactly six one-word main navigation sections:

- Home
- About
- Focus
- Services
- Partners
- Contact

## Local Development

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm.cmd run test
npm.cmd run lint
npm.cmd run build
```

The default production URL is `https://haoyi-advisory-website.vercel.app`. For a custom production domain, set `NEXT_PUBLIC_SITE_URL` in Vercel so social metadata resolves to the final domain.

## Content Rules

- Do not add fake clients, hospitals, logos, government commitments, certifications, or unsupported claims.
- Use category-based partner descriptions unless public names have been approved.
- Mark missing or unverified public information as `To be confirmed`.
- Keep BD content inside the Services section only.
- Record government-region facts and image provenance in [docs/PARK_EVIDENCE.md](docs/PARK_EVIDENCE.md).
- Do not collect confidential technical, clinical, financial, or IP-sensitive information through the public project assessment form.

## Project Assessment

The Contact page links to `/contact/project`, where overseas medical-device companies can submit
basic non-confidential project information.

Submissions are disabled by default. Copy `.env.example` to an ignored local environment file and
configure Resend and Cloudflare Turnstile before enabling the endpoint.

Required activation steps are documented in [docs/PROJECT_ASSESSMENT_SETUP.md](docs/PROJECT_ASSESSMENT_SETUP.md).

## Deployment Workflow

GitHub is the single source of truth. Future website changes must be made in this codebase, committed to GitHub, pushed to `main`, and deployed through Vercel auto-deployment.

See [docs/AI_WORKFLOW.md](docs/AI_WORKFLOW.md).

For the first GitHub and Vercel setup runbook, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).
