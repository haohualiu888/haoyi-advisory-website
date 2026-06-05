# Project Assessment Setup

The project assessment form is implemented at `/contact/project`. GitHub remains the source of
truth for all code and content changes.

## Production Values

Configure these values in Vercel:

```text
PROJECT_SUBMISSION_TO_EMAIL=contact@haoyiadvisory.com
RESEND_FROM_EMAIL=Haoyi Advisory <contact@haoyiadvisory.com>
PRIVACY_CONTROLLER_NAME=Haoyi Advisory
PRIVACY_CONTACT_EMAIL=contact@haoyiadvisory.com
PROJECT_ASSESSMENT_RETENTION_MONTHS=24
PROJECT_ASSESSMENT_ENABLED=false
```

Configure these secrets without committing them:

```text
RESEND_API_KEY
NEXT_PUBLIC_TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
```

## Email DNS

Preserve the existing mailbox provider.

1. Obtain its current MX, SPF, DKIM, and verification requirements.
2. Configure MX records so `contact@haoyiadvisory.com` can receive mail.
3. Add Resend's sending-domain records.
4. Merge SPF requirements into a single valid SPF TXT record. Do not publish competing SPF records.
5. Keep the mailbox provider's DKIM records and add Resend's DKIM records under their distinct hostnames.
6. Confirm that `contact@haoyiadvisory.com` can receive an external test message.
7. Confirm that Resend can send from `contact@haoyiadvisory.com`.

## Turnstile

1. Create a Cloudflare Turnstile widget for the production domain and Vercel preview domains used for testing.
2. Add the site key and secret to the matching Vercel environments.
3. Do not reuse production secrets in unrelated projects.

## Activation

Keep `PROJECT_ASSESSMENT_ENABLED=false` until:

- Mailbox inbound delivery works.
- The Resend sending domain is verified.
- Turnstile succeeds on the production page.
- The privacy controller and contact details are approved.
- A complete non-confidential test submission arrives at the mailbox.

Then change `PROJECT_ASSESSMENT_ENABLED` to `true` in Vercel and redeploy the current GitHub `main`
commit. No direct website code changes should be made in Vercel.

## Data Handling

- The application does not store submissions in a database.
- Submissions are delivered to the company mailbox through Resend.
- Do not log complete form payloads.
- Delete inactive submissions after 24 months.
- Do not request confidential technical, clinical, financial, or IP-sensitive information at this stage.
