# Copilot instructions for this Astro project

## General
- Prioritize Astro file-based routing and reusable component composition.
- Use Tailwind utility classes for styling.
- Keep accessibility in every UI decision: labels, focus states, semantic structure, and contrast.
- Prefer simple, composable components and layouts over large monolithic files.
- Keep content and logic separated cleanly across `src/components/`, `src/layouts/`, and `src/pages/`.

## Astro guidance
- Use `src/pages/` for all routes.
- Use `src/layouts/` for shared page shells.
- Use standard HTML anchors for navigation between pages.
- Use `getStaticPaths()` for dynamic slug-based pages.
- Configure redirects in `astro.config.mjs` when needed.

## Tailwind guidance
- Use utility-first styling for spacing, typography, colors, and responsiveness.
- Use `sm:`, `md:`, and `lg:` classes for responsive behavior.
- Keep design tokens consistent and avoid arbitrary CSS unless necessary.

## Accessibility guidance
- Add visible keyboard focus styles with `focus-visible:` utilities.
- Ensure all form controls have labels.
- Use the correct semantic role for interactive elements.
- Provide descriptive text for links and buttons.
- Prefer accessible patterns over purely visual solutions.

## Project-specific expectations
- When creating landing pages or UI, prefer modern and polished Tailwind patterns.
- Keep components responsive across mobile, tablet, and desktop.
- Maintain a clean and readable HTML structure.
- Keep navigation and actions intuitive and accessible.
