# The Quizmaster General — Next.js Site (Non‑WordPress)

A clean, fast, SEO‑friendly rebuild of your site using **Next.js 14 (App Router) + Tailwind CSS**.

## Quick start

```bash
# 1) Install
npm i

# 2) Run locally
npm run dev

# 3) Build for prod
npm run build && npm start
```

Deploy easily on **Vercel** (recommended) or any Node host.

## Content

- Edit data in `/data/*.json` (events, venues, testimonials).
- Update pages under `/app/*` — Home, What's On, Venues, Services, Team, Reviews, Gallery, Contact.
- Drop images into `/public`.

## Email (Contact form)

This demo logs form submissions to the server. To send emails, set env vars in `.env.local` and add your provider:

```
CONTACT_TO_EMAIL=you@example.com
MAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=...
```

Then replace the logic in `app/api/contact/route.js` to call your provider. (Vercel env vars supported.)

## SEO

- Proper `<title>`, meta description, and Open Graph configured in `app/layout.jsx`.
- `robots.txt` included.

## Next steps

- Swap placeholder logo blocks for your real SVG/PNG.
- Populate `data/events.json`, `data/venues.json`, `data/testimonials.json`.
- Add real gallery images to `/public/gallery` and update the Gallery page to import them.
- Optionally connect a headless CMS (Sanity/Contentful/Notion) later.
```



---

## Static hosting (no Node server)

1. Replace `FORMSPREE_URL` in `app/contact/page.jsx` with your Formspree endpoint, or change the form to a `mailto:` action.
2. Build a static site:
   ```bash
   npm i
   npm run build
   # output appears in /out
   ```
3. Upload the contents of `/out` to your web host's `public_html` (or web root).
   
Notes:
- Images use `next/image` in unoptimized mode for static export.
- API routes are removed in this static variant.
