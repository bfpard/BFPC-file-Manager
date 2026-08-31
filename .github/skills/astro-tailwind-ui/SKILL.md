---
name: astro-tailwind-ui
description: "Use when building Astro components, pages, landing pages, and reusable UI with Tailwind CSS. Focus on responsive layouts, utility-first styling, component composition, and accessible markup."
---

# Astro + Tailwind UI

## Goal
Create Astro components and pages that are visually consistent, responsive, fast, and accessible.

## Best practices

### Components
- Keep each component small and focused.
- Use props for content and variant differences.
- Prefer `src/components/` for reusable pieces like cards, buttons, navbars, and sections.
- Use `<slot />` inside layouts and wrapper components.

### Layout
```astro
---
interface Props {
  title?: string;
  description?: string;
}

const { title = 'My Page', description = 'Page description' } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body class="min-h-screen bg-slate-50 text-slate-900">
    <slot />
  </body>
</html>
```

### Card example
```astro
<div class="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
  <img class="h-12 w-12 rounded-full object-cover" src="/logo.svg" alt="Product logo" />
  <div class="mt-4">
    <h3 class="text-xl font-semibold text-slate-900 dark:text-white">ChitChat</h3>
    <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">You have a new message.</p>
  </div>
</div>
```

### Responsive patterns
```html
<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  <article class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"></article>
</div>
```

### Accessibility targets
- Use labels with form controls.
- Add `focus-visible:` utilities on interactive elements.
- Ensure visible contrast between text and backgrounds.
- Use `aria-label` only when visible text is not enough.
- Use `alt` on informative images and empty alt on decorative images.

## When to use this skill
Use this skill when generating landing pages, dashboards, cards, hero sections, navigation, CTA blocks, and reusable UI pieces in Astro with Tailwind CSS.
