# ronellagustin.com

Source repository for **ronellagustin.com**, the personal portfolio and interactive resume of Ronell Agustin.

## Site

The site uses an IDE / code-editor visual language and presents four primary areas:

- **Home** — selected professional work and site navigation
- **Work** — commercial web, ecommerce, agency, and publishing work
- **Portfolio** — illustration, photography, videography, and 3D environment design
- **Resume** — IT skills, professional experience, education, and military service record

The creative portfolio includes original-art process galleries with transparent AI-assisted finishing workflows, a Unity-based dream-house case study, curated photography, and a live YouTube feed from The Home Base PH.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules and shared CSS design tokens
- Tailwind CSS 4 / PostCSS tooling
- Vercel
- YouTube Data API v3

The site intentionally does not use a database. Most content is maintained directly in the repository; YouTube data is fetched server-side and periodically revalidated.

## Local development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` when local YouTube integration is needed.

- `YOUTUBE_API_KEY` — required for live YouTube channel/video data
- `YOUTUBE_HANDLE` — optional handle override
- `YOUTUBE_CHANNEL_ID` — optional channel ID override
- `YOUTUBE_UPLOADS_PLAYLIST_ID` — optional uploads-playlist override

The API key is server-side and should be configured in Vercel for deployed environments.

## Deployment

The `main` branch deploys through Vercel. Static creative assets live under `public/portfolio/`, including the site favicon.

## Repository notes

This repository is the source of truth for the public portfolio, resume, project descriptions, creative-work metadata, and site implementation.
