# UI UX Pro Max — Design System

The brand design system for **UI UX Pro Max** (uupm.cc) — an AI design-intelligence
tool that ships as a CLI (`uipro`) and an agent skill. It gives AI assistants a
searchable database of UI styles, color palettes, font pairings, chart types and
UX guidelines, and generates complete, tailored design systems on request.

This repository defines the brand's **own** visual identity (not the database it
serves): a dark-first, developer-tool aesthetic built around a deep navy canvas,
an electric-blue primary, a warm orange accent, and the signature blue→orange
"spectrum" gradient of the wordmark.

> **Tagline:** *Design Intelligence.*

---

## Sources

This system was reverse-engineered from the product's public materials. The
reader is encouraged to explore them to build richer, more accurate designs:

- **GitHub:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
  - `screenshots/website.png` — the uupm.cc landing page (primary visual source).
  - `preview/xiaomaomi-app.html` — a sample app generated *by* the tool.
  - `src/ui-ux-pro-max/data/*.csv` — the styles / colors / typography databases.
  - `README.md`, `CLAUDE.md`, `templates/base/skill-content.md` — product copy & voice.
- **Website:** https://uupm.cc
- **npm:** `uipro-cli` · **Marketplace:** `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill`

Brand colors, type and layout below were sampled directly from the website
screenshot; copy tone was drawn from the README and skill content.

---

## Content fundamentals

How the brand writes.

- **Voice:** confident, technical, benefit-led. Speaks to developers and AI
  agents. "Build beautiful interfaces with AI-powered design recommendations."
- **Person:** imperative/instructional ("Build a landing page", "Generate a
  design system"). Addresses *you*; the product is the silent operator. Rarely "we".
- **Casing:** Title Case for nav and short labels (Features, Stacks, Styles,
  Get Started); sentence case for body copy. The product name is always
  **UI UX Pro Max** (spaces, no hyphens); CLI is lowercase `uipro`.
- **Numbers as proof:** quantified everything — "67 UI Styles", "161 Reasoning
  Rules", "95 Color Palettes", "WCAG AA". Stats are a core rhetorical device;
  use real figures, never invented ones.
- **Terminal as voice:** commands are first-class copy — `$ uipro init --ai claude`.
  The monospace prompt pill appears in the hero, docs and CTAs.
- **Tone words:** *intelligence, reasoning, tailored, professional, anti-patterns,
  pre-delivery checklist.* The brand frames design as an engineering discipline.
- **No emoji** in product chrome (the skill itself forbids emoji as icons). Emoji
  may appear only inside generated example content, never in brand UI.
- **Concise:** short hero sentences, scannable feature blurbs (1–2 lines), mono
  labels/eyebrows above headings.

Examples:
- Eyebrow → heading: `161 REASONING RULES` / "Industry-aware by default".
- CTA: "Install once. Design smarter."
- Feature blurb: "Describe your product; get pattern, style, colors, type,
  effects and anti-patterns in seconds."

---

## Visual foundations

- **Mode:** dark-first. There is effectively no light theme in the brand chrome;
  everything sits on a deep navy canvas (`--bg-base` #0a0e1a).
- **Color:** electric blue `#2666F3` (primary — actions, links, focus, stat
  figures) and warm orange `#F97316` (accent — terminal prompt, the "Max" in the
  wordmark, secondary emphasis). They meet in the **spectrum gradient**
  (`blue → indigo → orange`) used on the wordmark and one hero emphasis per view.
  Surfaces are a navy ramp (900 page → 820 card → 740 elevated → 680 border).
- **Backgrounds:** flat navy with **ambient radial glows** — a cool blue glow
  upper-left and a warm orange glow lower-right (`--glow-blue`, `--glow-orange`,
  combined in `.uupm-glow-canvas`). No photographic imagery, no textures, no
  hand-drawn illustration. Decorative gradients are reserved for the spectrum and
  the glows — not slapped on every surface.
- **Type:** **Space Grotesk** for display/headings (techy geometric), **Plus
  Jakarta Sans** for UI/body, **JetBrains Mono** for code/CLI/labels. Tight
  display tracking (`-0.03em`); mono uppercase eyebrows with `0.14em` tracking.
- **Spacing:** 4/8 rhythm. Generous vertical sectioning (64–96px between
  sections); 14–18px gaps in card grids.
- **Corner radii:** soft but not pill-everything — cards `16px`, buttons/inputs
  `12px`, feature panels `22–28px`. Pills (`999px`) for chips, badges and the nav.
- **Cards:** navy surface, 1px hairline border (`rgba(255,255,255,.10)`), medium
  dark shadow. Interactive cards lift `-3px` and brighten their border on hover.
  No colored left-border accents.
- **Borders:** hairline, low-opacity white (`.06`–`.10`) on dark; a solid navy
  `#26324f` for stronger separation.
- **Shadows:** two systems — neutral dark elevation (`xs→lg`) and **colored glow**
  shadows for brand surfaces (`--glow-primary` blue, `--glow-accent` orange) used
  on primary buttons and emphasized cards.
- **Transparency & blur:** the nav is a glassy `blur(14px)` pill over the canvas;
  badges use ~14–16% tinted fills. Blur is reserved for floating chrome.
- **Hover states:** lighten background a step + raise elevation/lift; primary
  actions add their glow. **Press states:** nudge down 1px + scale `0.99`.
- **Motion:** quick and purposeful — `120–320ms`, `ease-out` for most, a gentle
  spring (`--ease-spring`) for toggles. No infinite decorative loops.
  `prefers-reduced-motion` is honoured globally in `base.css`.
- **Imagery vibe:** none photographic; the "imagery" is gradient swatches, glows
  and terminal blocks — cool blues warming to orange.

---

## Iconography

- **Brand chrome / kits:** the website uses **Lucide-style** outline icons —
  2px stroke, round caps/joins, `currentColor`, 22px default. This system ships a
  small hand-built Lucide-equivalent set in `ui_kits/website/icons.jsx`
  (`window.UIcons`: Layers, Brush, Message, Stack, BarChart, Grid, Arrow, Moon,
  Sun, Check, Spark, Search, Terminal, Zap, Shield, Type, Sliders, Copy, X).
  For production, link **Lucide** from CDN (`lucide` / `lucide-react`).
- **The product's own default (documented in the skill):** **Phosphor**
  (`@phosphor-icons/react`), with **Heroicons** as the fallback — keep stroke
  weight and filled/outline discipline consistent. When building *generated app*
  UIs that follow the skill, prefer Phosphor; when recreating the *brand site*,
  use Lucide outline (matches the screenshot).
- **Rules (from the skill):** never emoji as structural icons; vector only (no
  raster); consistent sizing via tokens; one stroke weight per layer; one
  filled/outline style per hierarchy level; ≥44pt touch targets.
- **Logo:** `assets/logomark.svg` (two overlapping rounded squares — blue + orange)
  and `assets/logo-lockup.svg` (mark + spectrum wordmark). These are recreations
  of the site mark; replace with official brand files if provided.

> ⚠️ **Substitutions flagged:** the exact brand webfonts and the official
> integration logos (Claude Code, Cursor, Windsurf, Antigravity) were not in the
> source repo. Fonts use the closest Google Fonts matches; integration chips use a
> generic glyph. See *Caveats* and please supply licensed assets to finalize.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this one file). `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — `logomark.svg`, `logo-lockup.svg`.
- `README.md` (this), `SKILL.md`.

**Foundations** — `guidelines/cards/` (specimen cards shown in the Design System tab)
- Colors: spectrum, blue, orange, navy surfaces, text-on-dark, status.
- Type: display, body, mono, scale.
- Spacing: scale, radii, elevation, glow shadows.
- Brand: logo, glow canvas, terminal motif, eyebrow.

**Components** — `components/core/` (`window.UIUXProMaxDesignSystem_*`)
- `Button`, `Badge`, `Pill`, `Card`, `StatCard`, `Terminal`, `Input`, `Switch`,
  `Tabs`, `GradientText`. Each has `.jsx`, `.d.ts`, `.prompt.md`; showcase cards
  live in the same folder (`buttons.card.html`, `badges-pills.card.html`,
  `cards-stats.card.html`, `forms.card.html`, `terminal-text.card.html`).

**UI kits** — `ui_kits/`
- `website/` — uupm.cc marketing landing page (composes the primitives).
- `cli/` — interactive `uipro` terminal + design-system generator output.

---

## Using it

Consumers link the single global stylesheet and read components off the window
namespace (run `check_design_system` for the exact suffix):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>const { Button, Pill, Terminal } = window.UIUXProMaxDesignSystem_3a9fac;</script>
```

---

## Caveats

- **Fonts are substitutes.** Space Grotesk / Plus Jakarta Sans / JetBrains Mono
  are the closest free matches to the site's display/UI/mono fonts — please
  confirm or send the licensed brand fonts. (Loaded via Google Fonts, so the
  compiler reports 0 local `@font-face` files — expected.)
- **Integration logos** (Claude Code, Cursor, Windsurf, Antigravity) are
  represented by a generic glyph to avoid trademark reproduction.
- **Logo** is a recreation of the site mark, not an official asset file.
- Only the marketing landing page has a full visual reference (screenshot); the
  CLI kit is grounded in the repo's documented `--design-system` output. No other
  product surfaces were recreated since no reference exists.
