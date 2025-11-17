# MYND — Official Site

A modern, responsive site for MYND — an independent R&B artist. This project is a small React + Vite site that showcases music, videos, news, tour dates, and links to streaming platforms such as Spotify, Apple Music, Tidal, YouTube, and more.

## Contents

- Overview
- Features
- Tech stack
- Getting started
- Development & build
- Deployment
- Adding music & embeds
- Contributing
- License & credits
- Contact / Links

## Overview

This repository powers the public-facing website for MYND. It provides:
- Artist bio, photos, and branding
- Music pages with links to streaming platforms
- Embedded players (YouTube, Spotify, Apple Music, etc.)
- Tour / events listing and newsletter signup
- Simple CMS-friendly structure so content can be updated easily

## Features

- Fast, HMR-enabled development with Vite
- SEO-friendly, accessible components
- Responsive design optimized for mobile and desktop
- Easily updateable streaming links and releases
- Optional analytics and environment-based config

## Tech stack

- React
- Vite
- CSS (Tailwind, Sass, or plain CSS — choose as configured)
- Optional: a headless CMS or markdown-driven content for releases
- Optional: analytics (Google Analytics, Plausible, etc.)

## Getting started

Prerequisites:
- Node.js (LTS recommended)
- npm or yarn

Install dependencies:
```
npm install
# or
yarn
```

Run local dev server:
```
npm run dev
# or
yarn dev
```

Build for production:
```
npm run build
```

Preview production build locally:
```
npm run preview
```

## Environment / Configuration

Common environment variables (add to .env):
- PUBLIC_SITE_TITLE=MYND
- PUBLIC_CONTACT_EMAIL=hi@mynd.example
- STREAMING_LINKS_JSON or individual links for Spotify/Apple/Tidal/YT
- ANALYTICS_ID (if using analytics)

Store streaming links in a single JSON/config file or the CMS to keep content separate from code.

## Adding music & embeds

- For Spotify: use Spotify Embed or official SDK — include track/album/playlist URIs.
- For Apple Music: use Apple Music embeds or links.
- For YouTube: use iframe embed for official videos or YouTube player components.
- Keep each release’s metadata (title, release date, platforms) in a single source of truth (JSON, CMS entry, or markdown) and render it across the site.

Example structure:
```
/content/releases/
    2025-01-01-single-title.json
    2024-08-15-ep-title.json
```

Each file might contain:
```json
{
    "title": "Single Title",
    "date": "2025-01-01",
    "spotify": "https://open.spotify.com/...",
    "apple": "https://music.apple.com/...",
    "tidal": "...",
    "youtube": "https://www.youtube.com/..."
}
```

## Deployment

Recommended hosts:
- Vercel — automatic deploys from Git
- Netlify — automatic deploys with preview branches
- Static hosting (S3 + CloudFront)

Set environment variables on your host to enable production-only integrations (analytics, API keys, newsletter provider).

## Contributing

- Keep UI and content changes separate: prefer content files or CMS updates.
- Open issues for bugs or feature requests.
- Pull requests should include a brief description and screenshots when relevant.

Suggested branch workflow:
- main — production
- develop — integration / staging
- feature/* — new features

## License & credits

- License: Add your project license (MIT, Apache-2.0, etc.) in LICENSE file.
- Artwork and audio rights remain with MYND and collaborators.

## Contact & Links

Artist: MYND — Indie R&B

Streaming & channels (example placeholders — replace with real links):
- Spotify: https://open.spotify.com/artist/...
- Apple Music: https://music.apple.com/artist/...
- Tidal: https://tidal.com/browse/artist/...
- YouTube: https://www.youtube.com/@mynd
- Linktree / Link in Bio: https://linktr.ee/mynd

For booking, press, or general inquiries: hi@mynd.example

---

If you want, I can:
- Populate README with your real streaming URLs and social links
- Add a sample release JSON and components for embeds
- Provide a deployment-ready Vercel configuration

Replace placeholder links and details with real info before publishing.
