# Marketing UI kit — NotLinear

A plausible reading of a course-platform marketing site for **NotLinear.AI**. Derived from the brand deck — no production code or Figma file was supplied, so flag any choices with the brand owner before shipping.

## Files

```
index.html             ← demo page (hero + curriculum + templates + CTA + footer)
components.jsx         ← Nav, Hero, ModuleList, TemplateGrid, EnrollBlock, Footer
```

## Components

| Component | What it is |
|---|---|
| `<NavBar />` | Sticky pill nav, blurred ivory surface |
| `<Hero />` | Editorial hero — eyebrow + serif H1 + body + primary CTA |
| `<ModuleList />` | Numbered curriculum modules (01 → 06) |
| `<TemplateGrid />` | Three-up library teaser cards |
| `<TestimonialQuote />` | Single editorial pull quote, linen panel |
| `<EnrollBlock />` | Burgundy closing CTA with cohort dates |
| `<Footer />` | Wordmark + nav links + creator credit |

## Verified visuals

- Sticky nav with backdrop blur sits on the ivory canvas
- Hero serif headline is 72–88px and tightly leaded
- Module list uses `01 — …` numbering pattern from the brand deck
- All buttons are pill-shaped; primary is burgundy/ivory
- No emoji; Lucide icons via CDN where iconography is needed
