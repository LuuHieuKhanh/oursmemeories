---
name: Premium Editorial Album
colors:
  surface: '#fcf8f7'
  surface-dim: '#ddd9d8'
  surface-bright: '#fcf8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#454742'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#767872'
  outline-variant: '#c6c7c0'
  surface-tint: '#5e5e5c'
  primary: '#5e5e5c'
  on-primary: '#ffffff'
  primary-container: '#fffdf9'
  on-primary-container: '#757572'
  inverse-primary: '#c8c6c3'
  secondary: '#5f5e5d'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfdd'
  on-secondary-container: '#636261'
  tertiary: '#5e604b'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffffe4'
  on-tertiary-container: '#757661'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2de'
  primary-fixed-dim: '#c8c6c3'
  on-primary-fixed: '#1b1c1a'
  on-primary-fixed-variant: '#474744'
  secondary-fixed: '#e5e2e0'
  secondary-fixed-dim: '#c8c6c4'
  on-secondary-fixed: '#1c1c1b'
  on-secondary-fixed-variant: '#474745'
  tertiary-fixed: '#e4e4ca'
  tertiary-fixed-dim: '#c8c8af'
  on-tertiary-fixed: '#1b1d0d'
  on-tertiary-fixed-variant: '#474835'
  background: '#fcf8f7'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  unit-1: 8px
  unit-2: 16px
  unit-3: 24px
  unit-4: 32px
  unit-6: 48px
  unit-8: 64px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is centered on the concept of "Digital Heirloom." It merges the structured, high-end editorial feel of a Korean graduation photobook with the airy, functional minimalism of modern industrial design. The goal is to evoke nostalgia, pride, and warmth, ensuring the interface feels like a physical object rather than a software application.

The aesthetic leans heavily into **Minimalism** with a **Tactile/Scrapbook** twist. It prioritizes the "breathability" of layouts, using generous white space to let photography serve as the primary narrative driver. While the core framework is clean and disciplined, it is punctuated by analog "memory" elements like masking tape and handwritten-style accents to break the digital fourth wall.

## Colors
The color strategy employs a **Warm White (#FFFDF9)** foundation to mimic high-quality archival paper. This reduces eye strain and provides a more sophisticated backdrop than pure digital white. 

The accent palette is a curated spectrum of soft pastels. These colors are never used for structural dominance but rather for categorization, decorative "paper" elements, and subtle highlights. Contrast is maintained through the **Rich Charcoal (#2D2D2D)** typography, ensuring accessibility while avoiding the harshness of true black.

## Typography
Typography is treated with an editorial hierarchy. **Outfit** provides a geometric, modern confidence for headers, reminiscent of high-fashion mastheads. **Inter** handles all functional and long-form text, ensuring legibility and a neutral, systematic feel that doesn't compete with the imagery.

Scale is used to create focal points. Captions should often be set in italics to mimic the feel of handwritten notes or formal annotations in a physical album.

## Layout & Spacing
The layout follows an **8pt grid system**, emphasizing generous margins that frame the content. It utilizes a **Fixed Grid** for desktop (12 columns) to maintain the "page-like" composition, transitioning to a fluid single-column layout for mobile.

- **Desktop:** 64px outer margins to create a "letterbox" effect.
- **Image-Heavy Layouts:** Use asymmetrical spacing to mimic a handmade scrapbook.
- **Vertical Rhythm:** 32px or 48px spacing between major content sections to prevent the UI from feeling "cramped" or "app-like."

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than structural dividers. 

- **Surface Shadows:** Use very large blurs (30px+) with low opacity (3-5%) and a slight downward Y-offset to make cards appear as if they are resting gently on paper.
- **Scrapbook Layers:** Elements like sticky notes or masking tape should have a slightly higher elevation (more opacity in the shadow) to suggest they are "stuck on top" of the base page.
- **Depth Color:** Shadows should be tinted with a hint of the primary text color (#2D2D2D) to maintain the warm, organic feel.

## Shapes
The shape language is diverse to reflect the "assembled" nature of a photobook.
- **Buttons:** Fully pill-shaped (999px) for a soft, friendly touch.
- **Cards:** Large 24px radius to create a distinct, modern container.
- **Photography:** Slightly tighter 20px radius to distinguish the "content" from the "container."
- **Analog Accents:** Masking tape strips should have jagged, 0px edges, while sticky notes use a very subtle 2px radius to look like cut paper.

## Components

### Buttons
Primary buttons are pill-shaped with subtle pastel backgrounds. Text is always centered and uses `label-caps` for a sophisticated touch. Avoid heavy borders; use a 1px stroke in a slightly darker shade of the background color if needed for definition.

### Cards & Images
Cards act as the "pages" or "sections." They should always be white (#FFFFFF) against the Warm White background to create a soft, layered effect. Images should fill their containers or be presented with a white "Polaroid-style" border for an extra nostalgic touch.

### Scrapbook Elements
- **Masking Tape:** Semi-transparent pastel strips (60% opacity) placed over the corners of images.
- **Sticky Notes:** Square containers using the `Butter` or `Peach` palette, featuring `body-md` text.
- **Handwritten Doodles:** Use SVG strokes for arrows, circles, and underlines to highlight specific student photos or quotes.

### Input Fields
Inputs should be minimal with only a bottom border (1px) in a light grey, keeping the focus on the content. Labels should be small and positioned above the line.

### Chips
Used for graduation years or departments. These should be small, pill-shaped, and use the lightest versions of the pastel palette with high-contrast text.