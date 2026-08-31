# NotLinear — Design System

> Brand & UI foundations for **NotLinear.AI** — AI education and trainings for non‑technical teams. Built and led by **Pietro Montaldo**.

---

## What is NotLinear?

NotLinear is an AI‑education brand. It teaches non‑technical teams (operators, founders, GTM leaders, marketers) how to design, adapt, and extend AI systems in their day‑to‑day work — via cohort‑style bootcamps, templates, frameworks, and content.

The name and visual identity sit on a single thesis: **growth, learning, and progress are rarely linear**. The wordmark pairs a fluid, flowing symbol with an editorial serif — at once intelligent and approachable.

**Voice:** confident, editorial, calm. **Look:** burgundy + ivory, serif display, generous space.

### Taglines
- **Long-form / functional lockup:** *AI trainings for non-technical teams*
- **Short / category lockup:** *AI education*
- **Editorial positioning line** (used in copy, not as a logo lockup): *From understanding to execution*

### Founder lockup
The secondary wordmark adds **"By Pietro Montaldo"** for creator‑led and educational touchpoints.

---

## Source materials

This system was derived directly from the assets you uploaded — keep them around in case a future agent needs them:

| Source | Path |
|---|---|
| NotLinear Brand Deck (28 pages, master spec) | `uploads/brand_deck.pdf` |
| Font files (STK Bureau Serif + Gilroy, TTF) | `uploads/notlinear_fonts.zip` |
| Logo files (EPS, JPEG, PNG, SVG; all lockups) | `uploads/notlinear_logos.zip` |

No website URL, codebase, or Figma file was provided. Components in `ui_kits/` are **derived from the deck**, not lifted from production — flag them with the team before shipping.

---

## Index — what lives where

```
README.md                ← you are here
SKILL.md                 ← agent skill manifest (cross-compat w/ Claude Code)
colors_and_type.css      ← CSS vars + semantic styles. Import this first.

fonts/                   ← TTFs for STK Bureau Serif + Gilroy
assets/logos/            ← Logo mark, primary logo, wordmarks, tagline lockups (SVG + PNG)
assets/icons/            ← Geometric line icons (Lucide CDN — see ICONOGRAPHY below)
assets/patterns/         ← Repeating mark-derived patterns

preview/                 ← Cards rendered into the Design System tab
ui_kits/marketing/       ← Marketing-site UI kit (hero, course card, nav, etc.)
slides/                  ← Editorial slide templates (1280×720)
uploads/                 ← Original source files; do not edit
```

---

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">
<body class="nl-base">
  <p class="nl-eyebrow">Lesson 03</p>
  <h1 class="nl-display">From understanding to execution.</h1>
  <p class="nl-body-lg">Build AI systems that survive contact with reality.</p>
</body>
```

---

## CONTENT FUNDAMENTALS — how NotLinear writes

NotLinear's copy reads like a smart editorial newsletter, not a SaaS landing page. It explains, it doesn't sell.

### Tone
- **Confident, calm, editorial.** Sentences are complete and considered. No hype, no hustle culture, no rocket emoji.
- **Practical, not theoretical.** Always anchors to *real workflows*, *templates*, *frameworks*, *use cases*.
- **Approachable but precise.** Plain words for technical ideas. The brand explicitly positions AI as "approachable and practical."
- **Quietly aspirational.** Words like *confidence*, *credibility*, *intelligent*, *enduring*, *refined* — implied, not shouted.

### Voice rules of thumb
| Rule | Yes | No |
|---|---|---|
| Use *you* | "Gain confidence to build & extend AI systems" | "Users will gain confidence…" |
| Verbs before features | "Explore a proprietary library of proven templates…" | "Our library has 50+ templates" |
| One idea per line | "From understanding to execution" | "Get the comprehensive, end‑to‑end…" |
| Editorial over playful | "Designed to educate, inspire, and drive action" | "Let's make AI fun! 🚀" |

### Casing
- **Sentence case** for everything — headlines, buttons, nav, eyebrows in body.
- The wordmark is **NotLinear** (camel-case, no space). The full name is **NotLinear.AI**.
- Eyebrow labels and small UI labels may be set in `UPPERCASE` with `letter-spacing: 0.14em` (Gilroy SemiBold). The brand uses this sparingly for section numbers ("01 / Logo system").

### Pronouns
- **Second person.** "Gain confidence", "Build", "Enroll now." Speak directly to the learner.
- Avoid "we" / "us" / "our" on marketing surfaces — the brand speaks *to* the reader, not *about* itself.
- The founder narrative ("By Pietro Montaldo") provides the only "I/me" moments — keep them reserved for personal essays or creator-led posts.

### Emoji
- **Do not use emoji** in headlines, body copy, buttons, or section headers. None appear anywhere in the brand deck. The serif typography is the personality.
- Unicode symbols (→, ·, ✕, ⌘) are acceptable as functional UI marks.

### Real copy examples (verbatim from the deck)
- *"Gain confidence to build & extend AI systems"* — H1 example
- *"Explore a proprietary library of proven templates and frameworks used by leading B2B teams to streamline their day to day workflows and execution"* — Body
- *"From understanding to execution"* — Editorial positioning line / eyebrow
- *"AI trainings for non-technical teams"* — Functional tagline (logo lockup)
- *"AI education"* — Short category tagline (logo lockup)
- *"Enroll now"* — CTA

### Length & rhythm
- **Headlines:** 4–8 words, often broken across two serif lines with an ampersand: *"Gain confidence to build & extend AI systems"*.
- **Body:** 1–3 sentences per block. Long paragraphs are reserved for editorial / about contexts and stay below ~60 chars/line.
- **CTAs:** verb-led, 2–3 words. *Enroll now. Explore the curriculum. Read the syllabus.*

### Things to avoid
- "Game-changing", "revolutionize", "unlock", "supercharge", "AI-powered"
- Stacked claims ("the world's most comprehensive…")
- Em-dash hype ("AI — but better")
- Stock metaphors (rockets, lightbulbs, brains)

---

## VISUAL FOUNDATIONS — the look

The system is **editorial first** — long lines, generous space, two-color compositions, a serif that anchors every layout. Think *The Economist meets a smart course platform*, not a SaaS dashboard.

### Color
- **Three primaries:** Deep Burgundy `#3A1721` (foundation), Warm Ivory `#FCFAF6` (canvas), Mist Blue `#CAE3F2` (accent).
- **Three secondaries** for moments of expression: Dust Lilac `#D5CFF5`, Cream Linen `#F4F1E2`, Forest Moss `#38422A`.
- **Default surface is ivory, not white.** White is a fallback for embedded forms; ivory is the brand.
- Pairings always lead with high contrast — burgundy ↔ ivory is the workhorse. Mist blue and lilac are **accent surfaces**, never primary text.
- The deck explicitly bans low‑contrast pairings and multi‑color text inside the same hierarchy.

### Type
- **Primary: STK Bureau Serif** (Book / Regular / Medium / SemiBold / Bold). Used for all display, headline, and editorial moments. *Never* used for long-form body.
- **Secondary: Gilroy** (Medium / SemiBold / Bold). Used for body, UI, nav, captions, labels, eyebrows.
- **Display sizes are big** (72–96px on hero, 56px on H1) with **tight leading** (1.02–1.08) and **negative tracking** (-0.015 to -0.02em).
- Body Gilroy Medium @ 17px / 1.5 line-height. Eyebrows: UPPERCASE Gilroy SemiBold 14px / +0.14em tracking.
- The deck demonstrates the brand by *setting* a hero block — title in serif, body in Gilroy, primary CTA below — and that pattern is the canonical layout.

### Spacing & rhythm
- **Generous vertical space.** Section padding rarely below 64px desktop; hero blocks 96–128px.
- 8px base unit, but the system reads at **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128**.
- Compositions are mostly **left-aligned**, with the occasional centered hero — never justified.

### Backgrounds
- **Solid colors**, not gradients. Burgundy or ivory dominate. Lilac/linen/mist used as accent panels.
- **No photographic backgrounds** in the deck. The "patterns" page introduces a flowing line pattern derived from the logo mark — used as decorative texture, never as page background.
- **No images at all** in the headline frames — the typography carries the page.
- Imagery in social application examples appears warm‑toned, editorial, human, with film‑like color — never cool, never blue‑tinted, never stock-looking.

### Animation
- Calm, not springy. **Fades + small translates**, 240ms, `cubic-bezier(0.2, 0.7, 0.2, 1)`. No bounces, no overshoot.
- Reserve motion for state changes (hover, page-in). The serif is meant to feel still and authoritative.
- The flowing mark *can* be animated subtly (line draw, gentle drift) on hero moments. Treat as a feature, not a default.

### Hover / press
- **Hover:** `opacity: 0.7` on text links; `transform: translateY(-1px)` + slight shadow lift on cards; background swap on buttons (burgundy → burgundy-90, ivory → ivory-warm).
- **Press:** `transform: translateY(0)` + shadow returns to base; no color flicker.
- Focus: 2px ivory ring offset on burgundy surfaces; 2px burgundy ring on ivory.

### Borders
- Hairline: `1px solid rgba(58,23,33, 0.14)`.
- Defined: `1px solid rgba(58,23,33, 0.28)`.
- Strong: `1px solid #3A1721` — used on inverted (burgundy) surfaces or as deliberate emphasis.

### Shadows / elevation
- **Restrained.** Three steps only:
  - `--shadow-1` for hairline rest state
  - `--shadow-2` for hover lift
  - `--shadow-3` for floating dialogs / overlays
- All tinted with burgundy (`rgba(58,23,33,…)`) — never pure black.

### Radii
- Tokens: 4 / 8 / 14 / 22 / 32 / pill.
- **Cards default to `--radius-lg` (22px)**, large hero panels to `--radius-xl` (32px). Buttons are **pill** (`--radius-pill`).
- Avoid hard 90° corners except for hairlines and inputs.

### Transparency / blur
- **Used sparingly.** Sticky header may sit on ivory with `backdrop-filter: blur(12px)` and `rgba(252,250,246,0.78)`. Modal scrim: `rgba(58,23,33,0.35)`.
- No frosted-glass cards on body content — clarity > flourish.

### Cards (canonical)
- Surface: `--bg-surface` (white) or `--nl-ivory-warm`
- Border: `1px solid var(--border-1)`
- Radius: `--radius-lg`
- Shadow: `--shadow-1` rest → `--shadow-2` hover
- Padding: `--space-6` (32px) on the inside

### Buttons
- **Primary:** burgundy fill, ivory text, pill, Gilroy SemiBold 16px, 14×28 padding, no shadow, opacity 0.9 on hover.
- **Secondary:** ivory fill, burgundy text, burgundy 1px border, pill.
- **Tertiary / link:** burgundy text, animated underline.

### Fixed elements
- Sticky top nav: 72px tall, ivory blurred surface, hairline bottom border.
- Section markers (`01 — Logo system`) live in the top‑left corner of editorial layouts — keep that pattern when laying out long-form pages.

---

## ICONOGRAPHY

The brand deck (§4.1) calls for icons built on **simple geometric forms with balanced line weights** — modern, approachable, functional. The deck shows examples but **does not ship an icon font or named set**.

### Decision
We've **substituted [Lucide Icons](https://lucide.dev)** (1.5px stroke, rounded line caps, 24px grid). Lucide matches the deck's stated criteria — geometric, balanced, line‑weight consistent — and is CDN‑available so designs stay light.

```html
<!-- pinned ESM bundle -->
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
<i data-lucide="arrow-up-right" style="width:20px;height:20px"></i>
<script>lucide.createIcons();</script>
```

> ⚠️ **Substitution flag — confirm with the brand owner.** If NotLinear has commissioned a proprietary icon set (the deck shows a small example grid), drop the SVGs into `assets/icons/` and update this section. Until then, Lucide is the fallback.

### Usage rules
- **Stroke weight:** 1.5px at 24px (Lucide default). Do not increase to 2px — it reads heavier than the brand's serif allows.
- **Color:** icons inherit `currentColor` and should sit at `--fg-1` or `--fg-2`. Avoid coloring icons in accent hues (mist/lilac) inside a body of text.
- **Size scale:** 16 / 20 / 24 / 32. Pair icon size to the type size next to it (~1.1×).
- **Emoji:** never use emoji as iconography. Unicode marks (→, ✓, ✕) are acceptable as inline glyphs in body text.
- **Hand-drawn / illustrative SVG:** reserved for the **flow mark pattern** (`assets/patterns/`). Do not invent additional brand illustrations without sign-off.

### Available logo assets
All under `assets/logos/` as transparent SVGs (and PNG for the primary):
- `logo_mark/logo_mark_[1–5].svg` — the flowing symbol alone, in different palette variants (burgundy, ivory, mist, etc.)
- `primary_logo_[1–3].svg` — mark + serif wordmark, stacked
- `primary_wordmark_[1–2].svg` — stacked "Not / Linear" wordmark with mist‑blue color blocks behind each word (stylized lockup, not a plain text wordmark)
- `secondary_wordmark_1.svg` — wordmark + "By Pietro Montaldo"
- `short_tagline_logo_[1–2].svg` — primary logo + "AI EDUCATION"
- `functional_tagline_logo_1.svg` — primary logo + "AI TRAININGS FOR NON-TECHNICAL TEAMS"

Variants `1`–`5` change color combination. Use the transparent files in product; the JPEG/EPS originals are still inside `uploads/notlinear_logos.zip` if a print artifact needs them.

---

## CAVEATS

- **No website, codebase, or Figma was supplied.** The marketing UI kit in `ui_kits/marketing/` is a **plausible reading** of the brand deck — confident on look, speculative on flow. Treat as a starting point.
- **No proprietary icon set was found.** Lucide is the substitute (flagged above).
- **Brand deck visual rendering timed out** during PDF rasterization. All conclusions are drawn from the deck's verbatim text plus the SVG assets directly — which is the highest-fidelity reading available.
- **Slide templates** are inspired by the editorial layout shown on the type-hierarchy page of the deck; no production deck template was provided.
