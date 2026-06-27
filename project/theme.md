# Event Space BDA — Theme Documentation

A complete reference for recreating both versions of the Event Space BDA website.

---

## Files

| File | Description |
|------|-------------|
| `Event Space BDA.dc.html` | Version 1 — Dark (Black & Gold) |
| `events2.dc.html` | Version 2 — Light (White, Black, Gold & Silver) |
| `images/hero-video.mp4` | Hero background video |
| `images/event-baby-shower.png` | Baby shower event photo |
| `images/event-wedding1.png` | Wedding ceremony photo |
| `images/event-glow1.png` | Glow party photo |
| `images/event-seminar.png` | Corporate seminar photo |
| `images/event-glow2.png` | Celebration night photo |
| `images/logo.png` | Official dragonfly script logo |

---

## Typography

### Fonts
Both versions use the same two Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

| Role | Font | Usage |
|------|------|-------|
| **Display / Serif** | Cormorant Garamond | All headings (h1–h3), pull quotes, large numbers, italic accents |
| **UI / Body** | Plus Jakarta Sans | Nav, body copy, labels, buttons, form fields |

### Type Scale

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|-------|
| Hero H1 | Cormorant Garamond | 92–118px | 300 / 400 italic | Letter-spacing: -0.025 to -0.035em |
| Section H2 | Cormorant Garamond | 54–58px | 400 | Letter-spacing: -0.01 to -0.02em |
| Card H3 | Cormorant Garamond | 26–34px | 500 | Line-height: 1.2 |
| Eyebrow labels | Plus Jakarta Sans | 9–10px | 700 | Letter-spacing: 0.28–0.36em, UPPERCASE |
| Nav links | Plus Jakarta Sans | 10px | 600 | Letter-spacing: 0.16–0.18em, UPPERCASE |
| Body copy | Plus Jakarta Sans | 14–16px | 300–400 | Line-height: 1.72–1.8 |
| Stat figures | Cormorant Garamond | 52–56px | 300–500 | Color: Gold |
| Italic accents | Cormorant Garamond | varies | 400 italic | Used for emphasis within headings |

---

## Color Palette

### Version 1 — Dark (Black & Gold)

| Token | Hex | Usage |
|-------|-----|-------|
| **Page background** | `#080808` | Main background |
| **Surface** | `#0d0d0d` | Stats band |
| **Card background** | `#121212` | Cards, form, testimonials |
| **Elevated surface** | `#090909` | Alternate sections |
| **Gold primary** | `#C9A84C` | All accents, borders, labels, icons |
| **Gold dark** | `#7a5c10` | Gradient start for buttons |
| **Gold light** | `#E8C96A` | Gradient mid for buttons/hero |
| **Gold bright** | `#F0D060` | Shimmer highlight in hero |
| **Body text** | `#E8DFC8` | Primary text on dark |
| **Muted text** | `#8A7A62` | Body copy, descriptions |
| **Subtle text** | `#6A5E4C` | Card body copy |
| **Faint text** | `#5A4E3C` | Footer links, tertiary |
| **Darkest text** | `#3A3028` | Footer legal |
| **Border** | `rgba(201,168,76,0.1)` | Default card borders |
| **Border hover** | `rgba(201,168,76,0.42)` | Hovered card borders |

#### Gold Gradient (buttons & hero)
```css
background: linear-gradient(135deg, #7a5c10 0%, #C9A84C 45%, #E8C96A 75%, #C9A84C 100%);
```

#### Gold Shimmer (hero headline)
```css
background: linear-gradient(110deg, #7a5c10 0%, #C9A84C 25%, #F0D060 50%, #C9A84C 75%, #7a5c10 100%);
background-size: 250% auto;
animation: shimmerGold 4–5s linear infinite;
```

#### Section Divider
```css
background: linear-gradient(90deg, transparent, rgba(201,168,76,0.28), transparent);
```

---

### Version 2 — Light (White, Black, Gold & Silver)

| Token | Hex | Usage |
|-------|-----|-------|
| **Page background** | `#FFFFFF` | Main background |
| **Warm white** | `#FAFAF8` | Alternate sections, form bg |
| **Near-black** | `#0A0A0A` | Text, nav CTAs, stats band bg, footer bg |
| **Gold** | `#C9A84C` | Accents, eyebrows, dividers, shimmer, hover |
| **Gold dark** | `#7a5c10` | Gradient start |
| **Gold bright** | `#F0D060` | Shimmer highlight |
| **Silver / light grey** | `#E0E0E0` | Form borders |
| **Silver divider** | `#F0F0F0` | Grid gaps, section dividers |
| **Silver border** | `#EBEBEB` | Card borders |
| **Chip bg** | `#F5F5F5` | Tag/chip background |
| **Body text** | `#0A0A0A` | Primary text |
| **Muted text** | `#6B6B6B` | Body copy |
| **Subtle text** | `#7A7A7A` | Card descriptions |
| **Label text** | `#9A9A9A` | Nav links, secondary labels |
| **Placeholder** | `#B0B0B0` | Form placeholders, column labels |

#### Button — Dark version (light theme)
```css
background: #0A0A0A;
color: #FFFFFF;
/* Hover → */ background: #C9A84C; color: #0A0A0A;
```

#### Ghost Button (light theme)
```css
border: 1px solid #D4D4D4;
color: #0A0A0A;
/* Hover → */ border-color: #0A0A0A;
```

---

## Layout & Spacing

### Page Width
- Max content width: **1100px** (dark version) / **1200px** (light version)
- Horizontal padding: **72px** (dark) / **64px** (light)
- Always: `margin: 0 auto` on the inner container

### Section Padding
All major sections use consistent vertical rhythm:
```css
padding: 120–128px [horizontal];
```

### Grid Patterns

| Section | Grid | Gap |
|---------|------|-----|
| Spaces cards | `repeat(3, 1fr)` | `3–4px` |
| Occasions (dark) | `repeat(2, 1fr)` | `3px` |
| Occasions (light) | `repeat(4, 1fr)` | `1px` + border |
| Gallery | `repeat(3, 1fr)` rows `300px 300px` | `3–4px` |
| About / Contact | `1fr 1fr` | `88–96px` |
| Stats band | `repeat(4, 1fr)` | none |
| Testimonials | `repeat(3, 1fr)` | `24px` |
| Services | `repeat(2, 2fr)` inner grid | `36px 28px` |

### Gallery Layout
The gallery uses a mastered 2-row grid where the first card spans both rows:
```css
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 300px 300px;
/* First card: */ grid-row: 1 / 3;
```

---

## Components

### Navigation
- **Fixed**, `z-index: 1000`
- `backdrop-filter: blur(18–20px)`
- Height: ~72px
- Dark version: `background: rgba(8,8,8,0.93–0.95)`
- Light version: `background: rgba(255,255,255,0.97)`
- Border-bottom: 1px gold/silver hairline
- Logo (left) + links (center) + CTA button (right)

### Section Eyebrow Pattern
Every section uses the same eyebrow pattern:
```html
<div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22–36px;">
  <div style="width: 24–28px; height: 1px; background: #C9A84C;"></div>
  <span style="font-size: 9–10px; font-weight: 700; letter-spacing: 0.32–0.36em; text-transform: uppercase; color: #C9A84C;">Label Text</span>
  <!-- optional second line for centered eyebrows: -->
  <div style="width: 24–28px; height: 1px; background: #C9A84C;"></div>
</div>
```

### Cards (Dark Version)
```css
background: #121212;
border: 1px solid rgba(201,168,76,0.1);
border-radius: 3px;
overflow: hidden;
transition: border-color 0.3s, transform 0.3s;
/* Hover → */
border-color: rgba(201,168,76,0.42);
transform: translateY(-4px);
```

### Cards (Light Version)
```css
background: #FFFFFF;
border: 1px solid #EBEBEB;
overflow: hidden;
transition: border-color 0.3s, box-shadow 0.3s;
/* Hover → */
border-color: #C9A84C;
box-shadow: 0 8px 40px rgba(201,168,76,0.12);
```

### Card Image Overlay
```css
/* Dark → fades into card bg */
background: linear-gradient(to top, #121212 0%, transparent 55%);
/* Light → fades into white */
background: linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 50%);
```

### Badge on Card Images
```css
/* Dark */
padding: 6px 14px;
background: rgba(0,0,0,0.68–0.70);
backdrop-filter: blur(8px);
border: 1px solid rgba(201,168,76,0.28–0.30);
border-radius: 2px;
font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C;

/* Light */
background: #0A0A0A;
border-radius: 2px;
color: #C9A84C;
```

### Buttons

#### Primary (Dark version)
```css
padding: 17px 44px;
background: linear-gradient(135deg, #7a5c10 0%, #C9A84C 45%, #E8C96A 75%, #C9A84C 100%);
color: #080808;
font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase;
border-radius: 2px;
box-shadow: 0 8px 48px rgba(201,168,76,0.35);
```

#### Ghost (Dark version)
```css
padding: 17px 44px;
border: 1px solid rgba(201,168,76,0.38);
color: #C9A84C;
border-radius: 2px;
/* Hover → */
background: rgba(201,168,76,0.08);
border-color: rgba(201,168,76,0.65);
```

#### Primary (Light version)
```css
padding: 17px 48px;
background: #0A0A0A;
color: #FFFFFF;
border-radius: 2px;
/* Hover → */
background: #C9A84C;
color: #0A0A0A;
```

### Form Inputs

#### Dark version
```css
padding: 13px 16px;
background: #0d0d0d;
border: 1px solid rgba(201,168,76,0.18);
border-radius: 2px;
color: #D4C5A0;
font-size: 14px;
```

#### Light version
```css
padding: 13px 16px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 2px;
color: #0A0A0A;
font-size: 14px;
```

### Gold Dot (Light version contact info)
```css
width: 10px; height: 10px;
background: #C9A84C;
border-radius: 50%;
```

### Gold Accent Card (decorative box on About section)
```css
background: #C9A84C;
padding: 26–30px 22–24px;
border-radius: 2px;
/* Text */
font-family: 'Cormorant Garamond', serif;
font-size: 20–22px; font-weight: 500–600; color: #080808; font-style: italic;
```

---

## Animations

```css
@keyframes shimmerGold {
  0%   { background-position: 0% center; }
  100% { background-position: 300% center; }
}
/* Apply to: gold gradient text with background-size: 250% auto */

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32–40px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Apply to: hero content on load */

@keyframes scrollPulse {
  0%, 100% { opacity: 0.25–0.3; transform: translateY(0); }
  50%       { opacity: 0.7–0.8; transform: translateY(6px); }
}
/* Apply to: scroll indicator line at bottom of hero */
```

---

## Hero Section

### Dark Version
- Full-viewport (`min-height: 100vh`)
- `<video>` background at `opacity: 0.55–0.6`, muted, autoplay, loop
- Dark gradient overlay: `linear-gradient(to bottom, rgba(8,8,8,0.45) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.85) 100%)`
- Gold grid texture: `background-image: linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px), linear-gradient(90deg, ...)` at `90px × 90px`
- Center-aligned text, flex column, justify-content: center

### Light Version
- Full-viewport, `padding-bottom: 88px`, `justify-content: flex-end`
- `<video>` background at `opacity: 0.28`, muted via JS
- Light gradient overlay: `linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.7) 100%)`
- Left-aligned massive type, CTA row at bottom
- Small top-right label floated: `position: absolute; top: 106px; right: 64px`

---

## Gallery

```css
/* Grid structure */
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 300px 300px;
gap: 3–4px;

/* First cell spans both rows */
grid-row: 1 / 3;

/* All cells */
position: relative; overflow: hidden; cursor: pointer;
transition: filter 0.3s;
/* Hover → */ filter: brightness(1.12) /* dark */ or brightness(0.95) /* light */

/* Image inside */
width: 100%; height: 100%; object-fit: cover; display: block;
transition: transform 0.6s;

/* Label overlay — dark */
background: linear-gradient(to top, rgba(8,8,8,0.78) 0%, transparent 52%);
color: rgba(255,255,255,0.82–0.85); font-style: italic;

/* Label overlay — light */
background: linear-gradient(to top, rgba(255,255,255,0.82–0.88) 0%, transparent 45%);
color: #0A0A0A; font-style: italic;
```

---

## Scroll Indicator
```html
<div style="position: absolute; bottom: 44px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px;">
  <!-- Dark only: -->
  <span style="font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(201,168,76,0.35);">Scroll</span>
  <div style="width: 1px; height: 44px; background: linear-gradient(to bottom, rgba(201,168,76,0.4), transparent); animation: scrollPulse 2s ease-in-out infinite;"></div>
</div>
```

---

## Design Principles

1. **Radii are always `2–3px`** — never rounded corners, never pill buttons. Sharp, architectural.
2. **Borders before shadows** — cards use hairline borders as the primary separation. Shadows only appear on hover (light version) or primary CTAs.
3. **Gold is always the accent, never the fill** — gold fills only appear on the CTA gradient button and the decorative quote box. Everywhere else it's a border, a line, a label, a glow.
4. **Type hierarchy is sharp** — massive display serifs (96–118px) contrast against tiny uppercase labels (9–10px). Almost nothing lives at a medium size.
5. **Sections alternate backgrounds** — `#080808` ↔ `#090909` (dark) / `#FFFFFF` ↔ `#FAFAF8` (light) to create visual rhythm without adding color.
6. **Inline styles only** — no CSS classes used anywhere. Every style is a direct inline `style=""` attribute.
7. **Video hero** — both versions use `images/hero-video.mp4` as `<video autoplay muted loop playsinline>`. The video is always muted via JS on mount to bypass browser quirks.
8. **Shimmer headline** — the italic word in the hero uses a `background-clip: text` shimmer animation in gold tones.

---

## Section Order (Both Versions)

1. **Nav** — fixed, logo/wordmark + links + book CTA
2. **Hero** — full-viewport video bg, oversized type, two CTAs, scroll indicator
3. **Stats Band** — 4-column, inverted background (dark vs white page)
4. **About** — 2-column, copy left + image right with gold quote card overlay
5. **The Space** — 3 configuration cards (Ceremony / Party / Corporate)
6. **Occasions** — 8-cell grid of event types (last cell is gold CTA tile)
7. **Gallery** — 5-photo mastered grid (large left spanning 2 rows)
8. **Contact** — 2-column, info left + enquiry form right
9. **Footer** — 4-column dark footer, tagline, copyright

---

## Video Notes

- File: `images/hero-video.mp4`
- Always add `muted` attribute AND enforce via JS: `video.muted = true; video.volume = 0;`
- Dark version opacity: `0.55–0.6`
- Light version opacity: `0.28`
- Both use `object-fit: cover` to fill the section

---

*Generated June 2025 — Event Space BDA redesign*
