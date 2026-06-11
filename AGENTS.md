# Haoyi Advisory website operating rules

- The canonical production domain is `https://haoyiadvisory.co`.
- GitHub `haohualiu888/haoyi-advisory-website` on branch `main` is the source of truth.
- Every production website change must be made in this repository, tested, committed, and pushed to `main`.
- Vercel auto-deploys `main`; completion requires verifying the change on `https://haoyiadvisory.co`, not only on localhost or a Vercel preview URL.
- Keep `NEXT_PUBLIC_SITE_URL` set to `https://haoyiadvisory.co`.
- Do not edit production content directly in Vercel.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes: APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
