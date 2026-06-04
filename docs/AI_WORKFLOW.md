# AI Website Workflow

This repository is the single source of truth for the Haoyi Advisory website.

## Required Workflow

All future website modifications must be made in the local/project codebase first.

1. Edit the website code in this repository.
2. Run local checks:

```bash
npm.cmd run lint
npm.cmd run build
```

3. Commit the changes to Git.
4. Push the commit to the GitHub `main` branch.
5. Let Vercel deploy automatically from GitHub.
6. Verify the production deployment after Vercel finishes.

## Vercel Rule

Do not make direct manual edits in Vercel unless absolutely necessary.

Allowed Vercel-side actions:

- Domain configuration
- Environment variable configuration
- Emergency rollback
- Account, team, or project settings that cannot live in code

Content, design, routing, and code changes must be made in GitHub-tracked source code and deployed through the GitHub-to-Vercel workflow.

## Publication Discipline

- Do not publish fake clients, fake hospitals, fake logos, fake government commitments, fake certifications, or unsupported claims.
- Use `To be confirmed` where public information has not been approved.
- Keep approved partner names and representative examples out of the site until they are explicitly cleared for public use.
