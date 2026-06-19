/**
 * Portfolio Animation System
 * ─────────────────────────────────────────────────────────────────────────────
 * Shared Framer Motion variants for consistent scroll-reveal animations
 * across all portfolio pages.
 */
import type { Variants } from 'framer-motion';

/** Standard easing curve used across the entire portfolio */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Fade-up reveal — primary scroll animation.
 * Elements slide up 40px and fade in.
 */
export const revealY: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

/**
 * Scale-up reveal — used for full-bleed images and feature cards.
 * Elements scale from 96% and fade in.
 */
export const revealScale: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: EASE },
  },
};

/**
 * Stagger container — wraps lists of items to stagger their children.
 */
export const staggerContainer: Variants = {
  hidden:  { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

/**
 * Subtle fade — for secondary elements (labels, captions, badges).
 */
export const revealFade: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

/**
 * Standard IntersectionObserver options for useInView.
 * Use `once: true` so the animation does not repeat on scroll-back.
 */
export const inViewConfig = {
  once: true,
  amount: 0.12,
} as const;
