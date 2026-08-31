---
name: notlinear-design
description: Use this skill to generate well-branded interfaces and assets for NotLinear (NotLinear.AI — AI growth systems education for non-technical teams), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick-reference index

- `README.md` — brand context, content fundamentals, visual foundations, iconography, caveats.
- `colors_and_type.css` — the source of truth for color + type tokens. Import this first when building any HTML artifact.
- `fonts/` — STK Bureau Serif (display) and Gilroy (body) TTFs.
- `assets/logos/` — logo mark, primary lockups, wordmarks, tagline lockups (SVG + PNG).
- `preview/` — small reference cards showing colors, type, spacing, components.
- `ui_kits/marketing/` — a plausible marketing-site implementation (React JSX components + CSS).
- `slides/` — five editorial 1280×720 slide templates inside a `<deck-stage>` deck.
- `uploads/` — original brand deck, font files, logo files.

## Hard rules

- **Always import `colors_and_type.css`** rather than hand-coding hex values. The token names (`--nl-burgundy`, `--fg-1`, `--space-6`, `--radius-lg`) are the brand contract.
- **Default background is ivory `#FCFAF6`, not white.** White is the fallback for embedded forms.
- **Serif for display, Gilroy for body.** Never mix.
- **Sentence case everywhere.** Eyebrows may use UPPERCASE + `letter-spacing: 0.14em`.
- **No emoji.** Unicode marks (→ · ✓) are acceptable as UI glyphs.
- **No gradients as backgrounds, no stock photography, no rocket / lightbulb / brain metaphors.**
- **Pill buttons.** Cards on `--radius-lg` (22px). Hero panels on `--radius-xl` (32px).
- **Iconography:** Lucide via CDN. 1.5px stroke at 24px. (Substitution — confirm with brand owner.)

## When the user asks for…

- **A landing page or marketing surface** → start from `ui_kits/marketing/` and remix.
- **A slide deck** → start from `slides/index.html`. It uses `deck-stage.js` (handles scaling, keyboard nav, print).
- **A new component** → check `preview/components-*.html` for the visual language before building.
- **Anything else** → still load `colors_and_type.css` first, and reach for components from the marketing kit before inventing new patterns.
