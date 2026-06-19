/**
 * Portfolio Design System
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all shared design tokens.
 * Import from this file in every portfolio page/component.
 */

// ─── Typography ───────────────────────────────────────────────────────────────
export const typography = {
  heroTitle:  'clamp(2.2rem, 4.5vw, 3.8rem)',
  sectionH2:  'clamp(1.8rem, 3.5vw, 2.6rem)',
  lead:       'clamp(1rem, 1.5vw, 1.12rem)',
  heroSub:    'clamp(1rem, 1.6vw, 1.15rem)',
  body:       '1rem',
  overline:   '0.72rem',
  caption:    '0.78rem',
  metaLabel:  '0.7rem',
  metaValue:  '0.9rem',

  weightRegular: 400,
  weightMedium:  500,
  weightSemibold: 600,
  weightBold:    700,
  weightExtrabold: 800,
  weightBlack:   900,

  letterSpacingOverline: '0.18em',
  letterSpacingCaps:     '0.12em',
  letterSpacingMeta:     '0.13em',

  lineHeightBody:  1.82,
  lineHeightTitle: 1.1,
  lineHeightLead:  1.78,
} as const;

// ─── Spacing ──────────────────────────────────────────────────────────────────
export const spacing = {
  containerMaxWidth:  '1080px',
  containerPaddingLg: '2.5rem',
  containerPaddingMd: '1.5rem',
  containerPaddingSm: '1.2rem',

  sectionPaddingLg: '100px 0',
  sectionPaddingMd: '70px 0',
  sectionPaddingSm: '50px 0',

  sectionHeaderMb: '3.5rem',
  ruleWidth:       '48px',
  ruleHeight:      '3px',
  ruleMb:          '2rem',
} as const;

// ─── Border radius ────────────────────────────────────────────────────────────
export const radius = {
  imageCard:   '20px',
  galleryCard: '14px',
  sectionCard: '18px',
  inlineCard:  '16px',
  smallCard:   '12px',
  pill:        '100px',
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────
export const shadows = {
  sm:  '0 8px 32px rgba(0,0,0,0.07)',
  md:  '0 20px 60px rgba(0,0,0,0.10)',
  lg:  '0 24px 70px rgba(0,0,0,0.12)',
  xl:  '0 28px 80px rgba(0,0,0,0.14)',
  xxl: '0 32px 80px rgba(0,0,0,0.16)',
  dark: '0 20px 60px rgba(0,0,0,0.22)',
} as const;

// ─── Breakpoints ──────────────────────────────────────────────────────────────
export const bp = {
  xs:  '480px',
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
} as const;

// ─── Hover transitions ────────────────────────────────────────────────────────
export const transitions = {
  imageHover: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
  fade:       'opacity 0.55s ease',
  color:      'color 0.18s ease, background 0.18s ease',
} as const;

// ─── Page shell ───────────────────────────────────────────────────────────────
export const pageShell = {
  paddingTopDesktop: '80px',
  paddingTopMobile:  '60px',
} as const;
