# sqroot.eu Blog

Source files of my personal blog, [sqroot.eu](https://sqroot.eu).

The site is a fully static [Nuxt 4](https://nuxt.com) site: posts are markdown files rendered with
[Nuxt Content](https://content.nuxt.com), images are resized at build time with
[Nuxt Image](https://image.nuxt.com), and styling is [Tailwind CSS](https://tailwindcss.com).
GitHub Actions builds the site on every push and deploys it to Cloudflare Pages.

## Writing a post

Create `content/posts/<year>/<slug>.md`. The URL becomes `/<year>/<slug>`.

```markdown
---
title: Post title
subtitle: Optional subtitle shown under the title
date: 2026-09-16
category: Projects
tags:
  - hardware
  - arduino
image: /content/2026/my-post/header.jpg   # optional header / social-card image
---

Markdown body. Images live in `public/content/<year>/...` and are embedded as usual:

![Alt text](/content/2026/my-post/photo.jpg)
```

Markdown images are rendered as responsive `<picture>` elements automatically (webp variants at
576/768/992/1200 px, linking to the original). Raw HTML such as `<iframe>` embeds works as-is.

Special embeds are Vue components, written in [MDC](https://content.nuxt.com/docs/files/markdown) syntax:

| Embed | Markdown | Notes |
|---|---|---|
| GitHub gist | `::gist{id="4647548"}` `::` | Gist source is vendored into `content/gists/<id>.md` – run `node scripts/fetch-gists.mjs` after adding a new one |
| asciinema recording | `::asciinema{id="18935"}` `::` | Loads the asciinema player on the client |

Reading time and word count are computed at build time (`modules/content-hooks.ts`).

## Building

Requires Node 22+.

```bash
npm ci               # install dependencies
npm run dev          # dev server at http://localhost:3000
npm run generate     # static site → .output/public
npm run clean        # drop build + content caches (needed after changing modules/content-hooks.ts)
npm run pages:dev    # serve .output/public with Cloudflare's wrangler (tests _headers / _redirects)
```

## Deployment

`.github/workflows/deploy.yml` runs `npm run generate` and `wrangler deploy` on every push.

Repository secrets: `CLOUDFLARE_API_TOKEN` (Pages: Edit), `CLOUDFLARE_ACCOUNT_ID`.
The Cloudflare Pages project is `sqroot-eu`; the custom domain `sqroot.eu` is attached in the
Cloudflare dashboard.

Response headers (CSP etc.) live in `public/_headers`; the scanner-honeypot redirects in
`public/_redirects`. Bot blocking by user agent and HTTP method restrictions, which the old nginx
config did, belong in Cloudflare WAF rules.

## History

2009–2011: WordPress · 2011–2026: Jekyll · 2026–: Nuxt. The Jekyll→Nuxt migration was a one-off
codemod (see the "Migrate the blog from Jekyll to Nuxt 4" commit) that only rewrote front matter and
Jekyll plugin tags; post text was never edited.

## License

Code under Apache 2 for learning purposes.

Content (images and text) © Ando Roots – do not re-publish without written permission!
