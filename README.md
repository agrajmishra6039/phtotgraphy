# Frame & Film

A cinematic photography and videography marketing site. Dark luxury aesthetic, centralized content file, WhatsApp + contact form, and SEO/analytics placeholders.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## How to add photos, videos, and copy

All client-facing content lives in **`src/data/portfolioData.js`**. You do not need to edit React components for new work.

### Studio details

Update `site` for name, email, phone, WhatsApp number (digits only, country code, no `+`), Formspree ID, Google Analytics ID, and social URLs.

### Portfolio gallery

Append an object to the `portfolio` array:

```js
{
  id: "w-04",                    // unique string
  title: "Tuscany Evening",
  category: "Weddings",          // must match a tag in `categories`
  type: "photo",                 // or "video"
  src: "/images/tuscany.jpg",    // or a full Unsplash/CDN URL
  caption: "Villa dinner, blue hour.",
}
```

For videography items, keep a still in `src` (used as the grid thumbnail) and add:

```js
type: "video",
youtubeId: "dQw4w9WgXcQ",
```

The lightbox loads that YouTube video. Replace the sample IDs with your own films.

### Local image uploads

1. Put files in `public/images/` (create the folder if needed).
2. Reference them as `/images/your-file.jpg` in `src`.

Use compressed JPEGs/WebP (around 1600px on the long edge) so the gallery stays fast. The site already lazy-loads gallery images.

### Services, about, Instagram grid, hero

- `services` — names, “from” prices, feature bullets.
- `about` — bio, philosophy, gear, portrait URL.
- `instagram` — six (or more) stills; each tile links to `site.social.instagram`.
- `hero` — headline, video URL, poster fallback image, CTA labels.

## Contact form & WhatsApp

- **WhatsApp:** the floating button uses `site.whatsapp` and `https://wa.me/...`.
- **Formspree:** create a form at [formspree.io](https://formspree.io), then set `site.formspreeId` to the ID in the form URL (`https://formspree.io/f/XXXX`). Until that ID is set, the form opens a `mailto:` draft instead.
- **EmailJS** is optional: you can swap the `fetch` in `src/components/Contact.jsx` for EmailJS if you prefer that provider.

## Google Analytics

1. Create a GA4 property and copy the measurement ID (`G-XXXXXXXXXX`).
2. Put it in `site.gaId` in `portfolioData.js` **and** replace both `G-XXXXXXXXXX` strings in `index.html`.

Until you replace the placeholder, the gtag script is a no-op for real traffic.

## SEO

Open Graph, Twitter, description, and canonical tags live in `index.html`. Update `seo` in `portfolioData.js` as a reminder, then mirror the same strings in `index.html` (Vite SPAs serve one HTML shell). After you have a live domain, set `seo.url` and the `og:url` / canonical href to match.

## Deploy for free

### Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import the repo.
3. Framework preset: Vite. Build command `npm run build`, output `dist`.
4. Deploy. You get a `*.vercel.app` URL immediately.

### Netlify

1. Push to GitHub, then **Add new site** → **Import** on [netlify.com](https://netlify.com).
2. Build command: `npm run build`. Publish directory: `dist`.
3. Or drag the `dist` folder onto Netlify Drop after `npm run build`.

A `public/_redirects` file is included so Netlify serves `index.html` for client routes.

## Custom domain

**Vercel:** Project → Settings → Domains → add `www.yourstudio.com`. Point your DNS:

- Apex: A record to `76.76.21.21` (or follow Vercel’s current IPs)
- `www`: CNAME to `cname.vercel-dns.com`

**Netlify:** Site configuration → Domain management → Add custom domain, then set the nameservers or CNAME Netlify shows.

Wait for HTTPS (automatic on both hosts) before sharing Open Graph URLs.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide icons
