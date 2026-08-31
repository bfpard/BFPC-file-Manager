---
name: astro-routing
description: "Use when creating Astro routes, file-based navigation, dynamic pages, and url redirects. Focus on page structure, route configuration, link navigation, and static/dynamic route patterns."
---

# Astro Routing

## File-based routing

Astro uses the structure of `src/pages/` to generate routes. Each page file becomes a route automatically.

```astro
<!-- src/pages/index.astro -->
<a href="/about">About</a>
<a href="/blog">Blog</a>
```

## Dynamic routes

Use `getStaticPaths()` for slug-based content.

```astro
---
export async function getStaticPaths() {
  return [
    { params: { slug: 'intro' } },
    { params: { slug: 'guide' } },
  ];
}

const { slug } = Astro.params;
---

<h1>Article: {slug}</h1>
```

## Redirect configuration

Redirects are configured in `astro.config.mjs`.

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  redirects: {
    "/old": "/new",
    "/blog/[...slug]": "/articles/[...slug]",
    "/about": "https://example.com/about",
    "/news": {
      status: 302,
      destination: "https://example.com/news",
    },
  },
});
```

## Navigation guidance

- Use standard HTML anchors for page navigation.
- Prefer meaningful href values and current page labeling.
- Ensure nav items are keyboard accessible.
- For active states, use `aria-current="page"` when appropriate.

## When to use this skill

Use this skill when creating pages, route directories, links between pages, static/dynamic routes, or redirect rules in Astro.
