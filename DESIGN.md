---
name: Royal Bharat Excellence
colors:
  surface: '#16130b'
  surface-dim: '#16130b'
  surface-bright: '#3d392f'
  surface-container-lowest: '#110e07'
  surface-container-low: '#1f1b13'
  surface-container: '#231f17'
  surface-container-high: '#2d2a21'
  surface-container-highest: '#38342b'
  on-surface: '#eae1d4'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#eae1d4'
  inverse-on-surface: '#343027'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffc290'
  on-tertiary: '#4c2700'
  tertiary-container: '#ff9b39'
  on-tertiary-container: '#6a3800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77a'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#16130b'
  on-background: '#eae1d4'
  surface-variant: '#38342b'
typography:
  headline-display:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system embodies "Royal Indian Glamour"—a fusion of heritage prestige and modern cinematic luxury. It is designed for high-end storytelling, catering to an audience that values cultural depth, premium craftsmanship, and national pride.

The visual style is a sophisticated blend of **Glassmorphism** and **Cinematic Noir**. It utilizes deep, "velvet" dark backgrounds to make metallic gold and silver elements pop with a three-dimensional, foil-like quality. The interface should feel like a premium gala invitation: high-contrast, atmospheric, and meticulously detailed. Subtle Indian geometric patterns (Jaali motifs) serve as low-opacity watermarks to anchor the digital experience in traditional architectural aesthetics.

## Colors

The palette is rooted in **Deep Velvet Black**, providing a high-fashion canvas for metallic accents.

- **Primary Gold:** Used for headlines, primary CTAs, and significant branding moments. It should always be rendered with a multi-stop gradient to mimic light hitting metallic foil.
- **Secondary Silver:** Used for borders, secondary buttons, and supporting metadata. It provides a cool-toned contrast to the warmth of the gold.
- **National Accents:** The Saffron, White, and Green are never used as solid fills for large areas. Instead, they appear as "auras" or soft glow effects behind cards or buttons to evoke a subtle sense of patriotism and vitality.
- **Glass Surfaces:** Semi-transparent layers use #1A1A1D at 60-80% opacity with a heavy backdrop blur (20px+) to maintain legibility.

## Typography

The typography strategy balances the authority of **Montserrat** with the modern, technical precision of **Manrope**.

- **Headlines:** Use Montserrat in Bold or Extra Bold. For a "Royal" effect, apply the Gold Gradient as a text-clipping mask on Display and LG headlines.
- **Body Text:** Manrope provides excellent legibility against dark backgrounds. Use a slightly increased line-height (1.6) to ensure the text feels airy and premium.
- **Labels:** Uppercase styling with generous letter-spacing is used for navigation and small headers to evoke the feel of luxury brand marking.

## Layout & Spacing

This design system uses a **Fluid Grid** with wide margins to create a sense of "Gallery" spacing.

- **Desktop:** A 12-column grid with 24px gutters. Significant "white space" (black space) is encouraged; avoid cluttering the screen with multiple cards.
- **Mobile:** A 4-column grid with 16px margins.
- **Rhythm:** Spacing follows an 8px incremental scale. Larger vertical gaps (stack-lg) should be used between thematic sections to maintain a cinematic pace as the user scrolls.

## Elevation & Depth

Depth is conveyed through **Light and Transparency** rather than traditional drop shadows.

- **Glassmorphism:** Use surface containers with 1px semi-transparent Silver borders (#FFFFFF20). Apply a `backdrop-filter: blur(24px)` to all elevated cards.
- **Cinematic Lighting:** Use radial gradients in the background (Saffron at top-left, Green at bottom-right) with very low opacity (5-10%) to create a sense of environmental lighting.
- **Glows:** Instead of black shadows, use "Bloom" effects. A primary Gold button should have a soft #D4AF37 outer glow (spread 15px, opacity 0.3) to simulate it emitting light.

## Shapes

The shape language is **Soft (0.25rem - 0.75rem)**. This maintains a sharp, professional architectural feel while avoiding the harshness of 0px corners. 

- **Primary Buttons:** Use a standard `rounded` (0.25rem) for a precise, "cut gem" look.
- **Cards/Modals:** Use `rounded-lg` (0.5rem) to differentiate large containers from interactive elements.
- **Inputs:** Maintain `rounded` (0.25rem) for consistency with buttons.

## Components

- **Buttons:** 
  - *Primary:* Gold gradient fill, black text, soft gold glow on hover.
  - *Secondary:* Transparent background, 1px Silver border, silver text. On hover, fills with a subtle silver-to-white gradient.
- **Input Fields:** Dark background (#1A1A1D), 1px Silver border. Focus state changes border to Gold with a subtle gold inner-glow.
- **Cards:** Glassmorphic backgrounds with 1px silver borders. Include a faint Indian geometric pattern (Jaali) as a background-image watermark at 5% opacity.
- **Chips/Badges:** Small, pill-shaped elements with Saffron or Green borders to denote categories or status, using the national accent colors in a functional way.
- **Progress Indicators:** Use the Indian Tricolor as a linear gradient (Saffron-White-Green) for loading bars or story progress indicators.
- **Dividers:** Use ultra-thin (0.5px) silver lines that fade out at the edges (radial mask) to keep transitions elegant.