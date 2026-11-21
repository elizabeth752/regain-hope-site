# Blog post standard — regain-hope-site

How to build and ship a blog post on this site (Regain Hope Detox and Recovery Center, Burbank CA), so every post ships with the same asset set, interlinking discipline, and working schema/social preview. Read the most recent merged post too (`git log --oneline origin/main -- src/pages/blog/`) — this doc explains *why* each piece exists, the diff shows the current exact pattern.

## 0. Before you start: check for cannibalization

Grep `src/pages/blog/*.astro` and the `posts` array in `src/data/blog.js` for the brief's topic/keyword before writing anything. If an existing post already covers substantially the same ground (same core facts, same target query), **stop and ask** how to proceed — refresh the existing post, re-angle the new one, or publish anyway for a stated reason — rather than quietly shipping a second page that competes with the first in search. This happened for real with a "What Is Dabbing?" brief against the already-published `dab-drug-what-is-it-and-is-it-dangerous` post; don't repeat it silently.

## 1. Branch safely

```
git fetch origin
git checkout -b add-<slug>-blog-post origin/main
```

Always branch off `origin/main`, not off whatever local branch you happen to be on — a previous post's feature branch can sit around locally long after its PR merged while `main` moves on. Branching off a stale local branch risks bundling in already-merged or diverged history.

## 2. Per-post file set

- `src/pages/blog/{slug}.astro` — the post body via `<BlogPost slug="..." toc={toc}>`. **Never hand-author JSON-LD, meta description, or the related-posts grid** — `src/layouts/BlogPost.astro` and `src/layouts/Layout.astro` generate all of that automatically from the `src/data/blog.js` entry (see §4).
- `src/data/blog.js` — add one object to the top of the `posts` array (most recent first): `slug`, `title`, `category`, `author` (key into `authors`), `date`, `image`, `excerpt`.
- 2–4 `public/images/blog/infographics/{name}.svg` — section-adjacent stat/process graphics, site palette (see §3), embedded inline via:
  ```html
  <figure class="bp-infographic">
    <img src="/images/blog/infographics/{name}.svg" alt="..." loading="lazy" width="W" height="H" />
    <figcaption>...</figcaption>
  </figure>
  ```
- **One of those infographics is the featured image** — see §5. Its raster PNG is what `image` in the `blog.js` entry points to.

## 3. Palette and style for infographics

Gradient bg `#FBF6EC` → `#F1E6EF`; decorative soft circles `#E6D6E6` / `#D6C2DA` / `#BFDAE0`; ink `#3B1A3F` / `#3F2C3F`; muted purple `#5A3F5A` / `#C3A9C3`; teal `#3C7E8E`; gold accent `#C77B2B`. Headings in `'Fraunces', Georgia, serif`, body/labels in `'Poppins', system-ui, sans-serif`. Keep graphics conceptual/data-driven (stat dials, timelines, comparison bars, process steps) — not literal photography.

## 4. Schema and meta are automatic — don't break them

`BlogPost.astro` builds the `BlogPosting` JSON-LD from the `blog.js` entry, and `Layout.astro` turns the same `image` field into `og:image`, `twitter:image` (card type `summary_large_image`), and the schema `image`, with **no raster conversion at build time** — whatever file `image` points to is served as-is to Facebook/LinkedIn/X/Slack crawlers.

**This means `image` must be a raster file (PNG/JPG/WebP), never a bare `.svg`.** Most social-platform crawlers don't render SVG for link-preview images, so an SVG `image` silently produces a blank/missing preview card. This is why the featured-infographic step in §5 exists.

## 5. The featured infographic (1.91:1, doubles as og:image and the social card)

Pick one of the post's infographics — the one that works best as a standalone thumbnail — and author it at `viewBox="0 0 1200 630"` (1.91:1, the standard Open Graph / Twitter-card / Facebook-link-preview ratio). Design it so it reads with no caption: clear focal stat or comparison, room for the idea to land at thumbnail size.

Rasterize it with `sharp` (already present transitively in `node_modules`, no extra install needed):

```js
import sharp from 'sharp';
await sharp('public/images/blog/infographics/{featured-name}.svg')
  .resize(1200, 630)
  .png()
  .toFile('public/images/blog/{slug}.png');
```

Then **look at the rendered PNG before shipping** — `scale()` transforms and leader-lines in hand-authored SVG can render wrong once rasterized, and this won't be caught by `astro build`.

Point the `blog.js` entry's `image` field at that PNG (`/images/blog/{slug}.png`). This one file now serves four jobs at once: the blog-grid card thumbnail, the related-posts card thumbnail, the JSON-LD `image`, and the `og:image`/`twitter:image` social-share graphic — so there's no separate square social asset to maintain.

## 6. Interlinking

Add internal `<a href="/blog/...">` / `/programs/...">` links inside the new post's body wherever topically natural, **and** add one reciprocal link from an existing, topically related post back to the new one — either turn an existing phrase into a link or append one short sentence at the end of a relevant paragraph. Don't hand-build a "related posts" section; the site auto-generates one from category/recency.

## 7. Citations

In-text citations are bracketed numbers like `[1]`, matching the `<ol>` in a closing `<div class="bp-sources">` block. **No inline hyperlinks**, including in the Sources list itself — plain text: author, year, italicized title, publication name. Fetch-verify every citation against the specific claim it's attached to before publishing; don't take a brief's citation at face value.

## 8. Compliance

Closing insurance/CTA line matches the site's standard sentence — don't promise specific coverage (e.g. "we accept Medicaid") unless that's actually confirmed site-wide. If a brief names a therapy or service with no corresponding page on this site, link to the closest real page instead of inventing one.
