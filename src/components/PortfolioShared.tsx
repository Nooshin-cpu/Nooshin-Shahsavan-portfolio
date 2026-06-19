/**
 * Shared Portfolio Styled Components
 * ─────────────────────────────────────────────────────────────────────────────
 * Import these into every portfolio page to guarantee visual consistency.
 * Do not duplicate these in page files — extend via $accent or style props.
 */
import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { typography, spacing, radius, shadows, bp, pageShell } from '../styles/designSystem';
import { revealY, inViewConfig } from '../styles/animations';
import type { Variants } from 'framer-motion';

// ─── Global reset ─────────────────────────────────────────────────────────────
export const PortfolioGlobalStyle = createGlobalStyle`
  body { background: #fff; margin: 0; padding: 0; overflow-y: auto; }
  html { overflow-x: hidden; }
`;

// ─── Page shell ───────────────────────────────────────────────────────────────
export const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: ${pageShell.paddingTopDesktop};
  @media (max-width: ${bp.xs}) { padding-top: ${pageShell.paddingTopMobile}; }
`;

// ─── Layout ───────────────────────────────────────────────────────────────────
export const Container = styled.div`
  width: 100%;
  max-width: ${spacing.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${spacing.containerPaddingLg};
  @media (max-width: ${bp.md}) { padding: 0 ${spacing.containerPaddingMd}; }
  @media (max-width: ${bp.xs}) { padding: 0 ${spacing.containerPaddingSm}; }
`;

export const Section = styled.section<{ $bg?: string }>`
  width: 100%;
  padding: ${spacing.sectionPaddingLg};
  background: ${p => p.$bg || '#fff'};
  @media (max-width: ${bp.md}) { padding: ${spacing.sectionPaddingMd}; }
  @media (max-width: ${bp.xs}) { padding: ${spacing.sectionPaddingSm}; }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ebebeb;
`;

// ─── Typography ───────────────────────────────────────────────────────────────
export const HeroTitle = styled(motion.h1)`
  font-size: ${typography.heroTitle};
  font-weight: ${typography.weightBlack};
  color: #0d0d0d;
  letter-spacing: -0.03em;
  line-height: ${typography.lineHeightTitle};
  margin: 0 0 1.8rem;
  max-width: 820px;
`;

export const SectionH2 = styled.h2`
  font-size: ${typography.sectionH2};
  font-weight: ${typography.weightExtrabold};
  color: #0d0d0d;
  letter-spacing: -0.025em;
  line-height: ${typography.lineHeightTitle};
  margin: 0 0 1.2rem;
`;

export const Lead = styled.p`
  font-size: ${typography.lead};
  color: #555;
  line-height: ${typography.lineHeightBody};
  max-width: 680px;
  margin: 0 0 1.5rem;
`;

export const HeroSub = styled(motion.p)`
  font-size: ${typography.heroSub};
  color: #666;
  line-height: ${typography.lineHeightLead};
  max-width: 640px;
  margin: 0 0 3.5rem;
`;

export const BodyText = styled.p`
  font-size: ${typography.body};
  color: #555;
  line-height: ${typography.lineHeightBody};
  margin: 0 0 1.2rem;
  max-width: 680px;
`;

export const Overline = styled(motion.span)`
  display: inline-block;
  font-size: ${typography.overline};
  font-weight: ${typography.weightBold};
  letter-spacing: ${typography.letterSpacingOverline};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const SectionNumber = styled.span`
  font-size: ${typography.overline};
  font-weight: ${typography.weightBold};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #bbb;
  display: block;
  margin-bottom: 0.5rem;
`;

export const SectionRule = styled.div<{ $color?: string }>`
  width: ${spacing.ruleWidth};
  height: ${spacing.ruleHeight};
  background: ${p => p.$color || '#000'};
  border-radius: 2px;
  margin-bottom: ${spacing.ruleMb};
`;

export const SectionHeader = styled.div`
  margin-bottom: ${spacing.sectionHeaderMb};
`;

// ─── Meta grid (4-column project info bar) ────────────────────────────────────
export const MetaGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #e8e8e8;
  border-radius: ${radius.inlineCard};
  overflow: hidden;
  width: min(860px, 92vw);
  @media (max-width: ${bp.sm}) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 420px)    { grid-template-columns: 1fr; }
`;

export const MetaCell = styled.div`
  padding: 1.6rem 1.8rem;
  border-right: 1px solid #e8e8e8;
  text-align: left;
  &:last-child { border-right: none; }
  @media (max-width: ${bp.sm}) {
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    &:nth-child(2n) { border-right: none; }
    &:nth-last-child(-n+2) { border-bottom: none; }
  }
  @media (max-width: 420px) {
    border-right: none;
    &:last-child { border-bottom: none; }
  }
`;

export const MetaLabel = styled.p`
  font-size: ${typography.metaLabel};
  font-weight: ${typography.weightBold};
  letter-spacing: ${typography.letterSpacingMeta};
  text-transform: uppercase;
  color: #bbb;
  margin: 0 0 0.4rem;
`;

export const MetaValue = styled.p`
  font-size: ${typography.metaValue};
  font-weight: ${typography.weightSemibold};
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`;

// ─── Image components ─────────────────────────────────────────────────────────
export const FullBleedImg = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  border-radius: ${radius.imageCard};
  box-shadow: ${shadows.lg};
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.025); }
`;

export const GalleryGrid = styled(motion.div)<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${p => p.$cols ?? 2}, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  @media (max-width: ${bp.xs}) { grid-template-columns: 1fr; gap: 1rem; }
`;

export const GalleryCard = styled(motion.div)`
  overflow: hidden;
  border-radius: ${radius.galleryCard};
  box-shadow: ${shadows.sm};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.04); }
`;

export const VideoCard = styled(motion.div)`
  width: 100%;
  border-radius: ${radius.sectionCard};
  overflow: hidden;
  background: #0d0d0d;
  box-shadow: ${shadows.xl};
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ─── Two-column split ─────────────────────────────────────────────────────────
export const SplitGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: start;
  @media (max-width: ${bp.md}) { grid-template-columns: 1fr; gap: 2.5rem; }
`;

// ─── Tags / Pills ─────────────────────────────────────────────────────────────
export const Tag = styled(motion.span)<{ $accent?: string }>`
  display: inline-flex;
  align-items: center;
  background: #f4f4f4;
  color: #333;
  border: 1px solid #e5e5e5;
  border-radius: ${radius.pill};
  padding: 0.45rem 1.05rem;
  font-size: ${typography.overline};
  font-weight: ${typography.weightMedium};
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  &:hover {
    background: ${p => p.$accent ? `${p.$accent}11` : 'rgba(0,0,0,0.05)'};
    border-color: ${p => p.$accent ? `${p.$accent}44` : 'rgba(0,0,0,0.15)'};
    color: ${p => p.$accent || '#000'};
  }
`;

// ─── Reflection layout ────────────────────────────────────────────────────────
export const ReflectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: ${bp.md}) { grid-template-columns: 1fr; gap: 3rem; }
`;

export const ReflectionQuote = styled.blockquote<{ $accent?: string }>`
  font-size: clamp(1.2rem, 2.2vw, 1.65rem);
  font-weight: ${typography.weightBold};
  color: #0d0d0d;
  line-height: 1.45;
  letter-spacing: -0.015em;
  border-left: 4px solid ${p => p.$accent || '#000'};
  padding-left: 1.5rem;
  margin: 0 0 2.5rem;
`;

export const SkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
`;

// ─── Scroll-reveal wrapper component ─────────────────────────────────────────
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  variants?: Variants;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, variants }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, inViewConfig);
  return (
    <motion.div
      ref={ref}
      variants={variants ?? revealY}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
};
