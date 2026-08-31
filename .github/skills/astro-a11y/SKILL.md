---
name: astro-a11y
description: "Use when building accessible Astro and Tailwind interfaces. Focus on semantic HTML, keyboard support, labels, focus states, contrast, and screen-reader-friendly patterns."
---

# Astro Accessibility

## Core rules

- Use semantic HTML before decorative wrappers.
- Buttons should be used for actions; links should be used for navigation.
- Inputs require labels or accessible names.
- Provide visible focus states via `focus-visible:` and `ring-*` Tailwind utilities.
- Use sufficient color contrast.
- Avoid purely visual indicators without text or ARIA labels.

## Forms

```astro
<label for="email" class="block text-sm font-medium text-slate-700">Email</label
>
<input
  id="email"
  type="email"
  class="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
/>
```

## Screen-reader helpers

```astro
<span class="sr-only">Close menu</span>
```

## Navigation and states

```astro
<a href="/" aria-current="page" class="font-semibold text-sky-600">Home</a>
```

## Focus styles

```html
<button
  class="rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:outline-none"
>
  Continue
</button>
```

## When to use this skill

Use this skill when creating forms, navigation, modals, menu buttons, CTA actions, cards, and any interactive UI that must be accessible to keyboard and assistive technologies.
