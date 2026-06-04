# Haoyi Advisory Website

Official independent website codebase for Haoyi Advisory, a cross-border medical device and healthcare commercialization platform connecting Europe and China.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel deployment target

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
npm.cmd run lint
npm.cmd run build
```

For custom production domains, set `NEXT_PUBLIC_SITE_URL` in Vercel so social metadata resolves to the final domain.

## Content Rules

- Do not add fake clients, hospitals, logos, government commitments, certifications, or unsupported claims.
- Use category-based partner descriptions unless public names have been approved.
- Mark missing or unverified public information as `To be confirmed`.
- Keep BD content inside the Services section only.

## Deployment Workflow

GitHub is the single source of truth. Future website changes must be made in this codebase, committed to GitHub, pushed to `main`, and deployed through Vercel auto-deployment.

See [docs/AI_WORKFLOW.md](docs/AI_WORKFLOW.md).
