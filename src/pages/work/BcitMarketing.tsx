import React, { useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { motion, useInView, type Variants } from 'framer-motion';
import SEO from '../../components/SEO';
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';
import { EmailFooter } from '../../components/Footer';
import TopScrollButton from '../../components/TopScrollButton';
import BcitMarketingStickyMenu from '../../components/BcitMarketingStickyMenu';
import LazyVideo from '../../components/LazyVideo';

// ─── Asset imports ────────────────────────────────────────────────────────────
const moodboard  = new URL('../../assets/bcit-marcom/moodboard-m.png',     import.meta.url).href;
const xmasM2     = new URL('../../assets/bcit-marcom/bcit-xmas-m2.png',    import.meta.url).href;
const xmasM3     = new URL('../../assets/bcit-marcom/bcit-xmas-m3.png',    import.meta.url).href;
const xmasM4     = new URL('../../assets/bcit-marcom/bcit-xmas-m4.png',    import.meta.url).href;
const couponImg  = new URL('../../assets/bcit-marcom/bcit-coupan-m.png',   import.meta.url).href;
const xmasM11    = new URL('../../assets/bcit-marcom/bcit-xmas-m1-1.png',  import.meta.url).href;
const xmasM1     = new URL('../../assets/bcit-marcom/bcit-xmas-m1.png',    import.meta.url).href;
const bannerImg  = new URL('../../assets/bcit-marcom/bcit-banner-m.jpg',   import.meta.url).href;
const videoM     = new URL('../../assets/bcit-marcom/video-m.mp4',         import.meta.url).href;
const video1     = new URL('../../assets/bcit-marcom/bcit-video-m1.mp4',   import.meta.url).href;
const video2     = new URL('../../assets/bcit-marcom/bcit-video-m2.mp4',   import.meta.url).href;

// ─── Accent ───────────────────────────────────────────────────────────────────
const ACCENT = '#1b3a6e';

// ─── Framer variants ──────────────────────────────────────────────────────────
const revealY: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const revealScale: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden:  { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

// ─── Scroll-aware reveal ─────────────────────────────────────────────────────
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return {
    ref,
    animate: inView ? 'visible' : 'hidden',
    variants: revealY,
    initial: 'hidden' as const,
    transition: delay ? { delay } : undefined,
  };
}

// ─── Shimmer ──────────────────────────────────────────────────────────────────
const shimmer = keyframes`
  0%   { background-position: -800px 0; }
  100% { background-position:  800px 0; }
`;

// ─── Global ───────────────────────────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`
  body { background: #fff; margin: 0; padding: 0; overflow-y: auto; }
  html { overflow-x: hidden; }
`;

const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) { padding-top: 60px; }
`;

// ─── Layout ───────────────────────────────────────────────────────────────────
const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2.5rem;
  @media (max-width: 768px) { padding: 0 1.5rem; }
  @media (max-width: 480px) { padding: 0 1.2rem; }
`;

const Section = styled.section<{ $bg?: string }>`
  width: 100%;
  padding: 100px 0;
  background: ${p => p.$bg || '#fff'};
  @media (max-width: 768px) { padding: 70px 0; }
  @media (max-width: 480px) { padding: 50px 0; }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ebebeb;
`;

// ─── Typography ───────────────────────────────────────────────────────────────
const Overline = styled(motion.span)`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${ACCENT};
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #0d0d0d;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 1.2rem;
`;

const Lead = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #555;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 1.5rem;
`;

const BodyText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.82;
  margin: 0 0 1.2rem;
  max-width: 680px;
`;

const SectionRule = styled.div`
  width: 48px;
  height: 3px;
  background: ${ACCENT};
  border-radius: 2px;
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  margin-bottom: 3.5rem;
`;

const SectionNumber = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #bbb;
  display: block;
  margin-bottom: 0.5rem;
`;

// ─── HERO ─────────────────────────────────────────────────────────────────────
const HeroWrap = styled.section`
  width: 100%;
  padding: 80px 0 90px;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

const HeroInner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2.5rem;
  @media (max-width: 768px) { padding: 0 1.5rem; }
`;

const HeroEyebrow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const HeroEyebrowLine = styled.span`
  display: inline-block;
  width: 40px;
  height: 2px;
  background: ${ACCENT};
  border-radius: 2px;
`;

const HeroEyebrowText = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${ACCENT};
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 900;
  color: #0d0d0d;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0 0 1.8rem;
  max-width: 820px;
`;

const HeroSub = styled(motion.p)`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #666;
  line-height: 1.78;
  max-width: 640px;
  margin: 0 0 3.5rem;
`;

const MetaGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  overflow: hidden;
  width: min(860px, 92vw);
  @media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`;

const MetaCell = styled.div`
  padding: 1.6rem 1.8rem;
  border-right: 1px solid #e8e8e8;
  text-align: left;
  &:last-child { border-right: none; }
  @media (max-width: 700px) {
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

const MetaLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #bbb;
  margin: 0 0 0.4rem;
`;

const MetaValue = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`;

const HeroAccentBar = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, ${ACCENT} 0%, #4a7fd4 100%);
  opacity: 0.6;
  border-radius: 0 0 0 4px;
`;

const HeroVideoWrap = styled(motion.div)`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto 4rem;
  padding: 0 2.5rem;
  @media (max-width: 768px) { padding: 0 1.5rem; margin-bottom: 3rem; }
  @media (max-width: 480px) { padding: 0 1.2rem; margin-bottom: 2rem; }
`;

const HeroVideoInner = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 28px 80px rgba(0,0,0,0.14);
  aspect-ratio: 16 / 9;
  background: #0d0d0d;
`;

// ─── Overview Grid ────────────────────────────────────────────────────────────
const OverviewGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; gap: 2rem; }
`;

const OverviewCard = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 18px;
  padding: 2.2rem 2.4rem;
`;

const OverviewCardTitle = styled.h3`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${ACCENT};
  margin: 0 0 1.2rem;
`;

const OverviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const OverviewItem = styled.li`
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  &::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${ACCENT};
    flex-shrink: 0;
  }
`;

// ─── Image components ─────────────────────────────────────────────────────────
const FullBleedImg = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.08);
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.025); }
`;

const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; gap: 1rem; }
`;

const GalleryCard = styled(motion.div)`
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.04); }
`;

// ─── Callout Box ──────────────────────────────────────────────────────────────
const CalloutBox = styled(motion.div)`
  background: linear-gradient(135deg, #f0f4ff 0%, #eaf0fb 100%);
  border: 1px solid rgba(27, 58, 110, 0.15);
  border-left: 4px solid ${ACCENT};
  border-radius: 16px;
  padding: 2.4rem 2.8rem;
  margin-top: 3rem;
  @media (max-width: 480px) { padding: 1.8rem 1.6rem; }
`;

const CalloutTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${ACCENT};
  margin: 0 0 1.2rem;
`;

const CalloutPillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const CalloutPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(27, 58, 110, 0.07);
  color: ${ACCENT};
  border: 1px solid rgba(27, 58, 110, 0.2);
  border-radius: 100px;
  padding: 0.45rem 1rem;
  font-size: 0.82rem;
  font-weight: 600;
  &::before {
    content: '✦';
    font-size: 0.6rem;
  }
`;

// ─── Centered feature image ───────────────────────────────────────────────────
const CenteredImgWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const FeatureImgCard = styled(motion.div)`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.1);
  max-width: 680px;
  width: 100%;
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.03); }
`;

// ─── Split screen ─────────────────────────────────────────────────────────────
const SplitGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 2.5rem; }
`;

const SplitText = styled.div``;

const SplitImage = styled(motion.div)`
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1);
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.03); }
`;

const SplitImageStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

// ─── Banner ───────────────────────────────────────────────────────────────────
const BannerWrap = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.1);
  position: relative;
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.03); }
`;

const BannerBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.4rem 0.9rem;
  border-radius: 100px;
  pointer-events: none;
`;

// ─── Video grid ───────────────────────────────────────────────────────────────
const VideoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const VideoWrap = styled(motion.div)`
  border-radius: 18px;
  overflow: hidden;
  background: #0d0d0d;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoLabel = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  margin: 1rem 0 0;
`;

// ─── Reflection ───────────────────────────────────────────────────────────────
const ReflectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 3rem; }
`;

const ReflectionQuote = styled.blockquote`
  font-size: clamp(1.2rem, 2.2vw, 1.65rem);
  font-weight: 700;
  color: #0d0d0d;
  line-height: 1.45;
  letter-spacing: -0.015em;
  border-left: 4px solid ${ACCENT};
  padding-left: 1.5rem;
  margin: 0 0 2.5rem;
`;

const SkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
`;

const Tag = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  background: #f4f4f4;
  color: #333;
  border: 1px solid #e5e5e5;
  border-radius: 100px;
  padding: 0.45rem 1.05rem;
  font-size: 0.82rem;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    background: rgba(27, 58, 110, 0.07);
    border-color: rgba(27, 58, 110, 0.3);
    color: ${ACCENT};
  }
`;

// ─── Reveal wrapper component ────────────────────────────────────────────────
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; variants?: Variants }> = ({
  children,
  delay = 0,
  variants,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
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

// ─── Page Component ───────────────────────────────────────────────────────────
const BcitMarketing: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SEO
        title="BCIT Marketing Internship | Holiday Campaign Design"
        description="A premium case study of the BCIT Marketing Department Internship — holiday campaign assets including greeting cards, employee coupons, email banners, and LinkedIn content."
        keywords="BCIT marketing, holiday campaign, graphic design, internship, email banner, LinkedIn content"
        image={bannerImg}
      />

      <BcitMarketingStickyMenu />

      <PageBg data-page-scroll>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <HeroWrap id="bcitm-intro">
          <HeroAccentBar
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />

          {/* Video showcase at top */}
          <HeroVideoWrap
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <HeroVideoInner>
              <LazyVideo
                src={videoM}
                autoPlay
                loop
                muted
                playsInline
                objectFit="cover"
                style={{ width: '100%', height: '100%' }}
                aria-label="BCIT Marketing Internship — Holiday Campaign overview"
              />
            </HeroVideoInner>
          </HeroVideoWrap>

          {/* Introduction text */}
          <HeroInner>
            <HeroEyebrow
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <HeroEyebrowLine />
              <HeroEyebrowText>BCIT Marketing Department · Internship</HeroEyebrowText>
            </HeroEyebrow>

            <HeroTitle
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
            >
              Holiday Campaign<br />Design Collection
            </HeroTitle>

            <HeroSub
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.56 }}
            >
              During my internship with the BCIT Marketing Department, I worked on a collection
              of holiday campaign assets created for both internal teams and external stakeholders.
              My responsibilities included concept development, graphic design, campaign coordination,
              and visual asset production across multiple channels. The project included internal
              holiday greeting cards, employee leave coupons, institutional holiday cards, email
              marketing banners, and LinkedIn campaign content. Each design was developed with
              inclusivity, brand consistency, and audience engagement in mind.
            </HeroSub>

            <MetaGrid
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.68 }}
            >
              <MetaCell>
                <MetaLabel>Role</MetaLabel>
                <MetaValue>Graphic Designer &amp; Marketing Coordinator</MetaValue>
              </MetaCell>
              <MetaCell>
                <MetaLabel>Organisation</MetaLabel>
                <MetaValue>BCIT Marketing Department</MetaValue>
              </MetaCell>
              <MetaCell>
                <MetaLabel>Duration</MetaLabel>
                <MetaValue>Marketing Internship</MetaValue>
              </MetaCell>
              <MetaCell>
                <MetaLabel>Type</MetaLabel>
                <MetaValue>Campaign Design · Print &amp; Digital</MetaValue>
              </MetaCell>
            </MetaGrid>
          </HeroInner>
        </HeroWrap>

        <Divider />

        {/* ── PROJECT OVERVIEW ──────────────────────────────────────────────── */}
        <Section id="bcitm-overview">
          <Container>
            <Reveal>
              <SectionHeader>
                <Overline>Project Overview</Overline>
                <H2>Services &amp; Deliverables</H2>
                <SectionRule />
              </SectionHeader>
            </Reveal>

            <Reveal delay={0.1}>
              <OverviewGrid variants={staggerContainer} initial="hidden" animate="visible">
                <OverviewCard variants={revealY}>
                  <OverviewCardTitle>Services Provided</OverviewCardTitle>
                  <OverviewList>
                    {['Graphic Design', 'Marketing Coordination', 'Campaign Design', 'Digital Content Creation'].map(s => (
                      <OverviewItem key={s}>{s}</OverviewItem>
                    ))}
                  </OverviewList>
                </OverviewCard>
                <OverviewCard variants={revealY}>
                  <OverviewCardTitle>Deliverables</OverviewCardTitle>
                  <OverviewList>
                    {['Holiday Cards', 'Employee Leave Coupons', 'Email Marketing Banner', 'LinkedIn Campaign Posts'].map(s => (
                      <OverviewItem key={s}>{s}</OverviewItem>
                    ))}
                  </OverviewList>
                </OverviewCard>
              </OverviewGrid>
            </Reveal>
          </Container>
        </Section>

        <Divider />

        {/* ── SECTION 01: HOLIDAY CARD ──────────────────────────────────────── */}
        <div id="bcitm-card">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <SectionNumber>Section 01</SectionNumber>
                  <Overline>Holiday Campaign</Overline>
                  <H2>Holiday Card for the<br />Marketing Team</H2>
                  <SectionRule />
                  <Lead>
                    The objective of this card was to create an inclusive holiday greeting for the
                    internal marketing team while avoiding religious symbols or imagery associated
                    with any particular culture, nationality, or belief system.
                  </Lead>
                  <BodyText>
                    To create a meaningful connection with employees, I incorporated visual elements
                    that were familiar to the team. During winter months, bears are often spotted
                    around the Marketing building, and warning signs are commonly placed throughout
                    the area. Inspired by these local experiences, I used a bear character and bear
                    warning signage as nostalgic and recognizable elements within the design.
                  </BodyText>
                  <BodyText>
                    The final concept celebrates the holiday season through local storytelling, warmth,
                    and shared workplace experiences rather than traditional holiday symbolism.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              {/* 2 × 2 image grid */}
              <GalleryGrid
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{ gridTemplateColumns: '1fr 1fr' }}
              >
                <GalleryCard variants={revealY}>
                  <img src={moodboard} alt="Holiday Card Moodboard" loading="lazy" />
                </GalleryCard>
                <GalleryCard variants={revealY}>
                  <img src={xmasM3} alt="Holiday Card Design 3" loading="lazy" />
                </GalleryCard>
                <GalleryCard variants={revealY}>
                  <img src={xmasM4} alt="Holiday Card Design 4" loading="lazy" />
                </GalleryCard>
                <GalleryCard variants={revealY}>
                  <img src={xmasM2} alt="Holiday Card Design 2" loading="lazy" />
                </GalleryCard>
              </GalleryGrid>

              {/* Design Rationale callout */}
              <Reveal delay={0.1}>
                <CalloutBox variants={revealY} initial="hidden" animate="visible">
                  <CalloutTitle>Design Rationale</CalloutTitle>
                  <CalloutPillRow>
                    {['Inclusivity', 'Local Storytelling', 'Employee Connection', 'Nostalgic Experience'].map(p => (
                      <CalloutPill key={p}>{p}</CalloutPill>
                    ))}
                  </CalloutPillRow>
                </CalloutBox>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 02: EMPLOYEE COUPONS ──────────────────────────────────── */}
        <div id="bcitm-coupons">
          <Section $bg="#fafafa">
            <Container>
              <Reveal>
                <SectionHeader>
                  <SectionNumber>Section 02</SectionNumber>
                  <Overline>Staff Appreciation</Overline>
                  <H2>Employee Day-Off Coupons</H2>
                  <SectionRule />
                  <Lead>
                    As part of the holiday engagement initiative, I designed a set of employee
                    day-off coupons intended as appreciation gifts for staff members.
                  </Lead>
                  <BodyText>
                    The goal was to create a fun and visually engaging piece that aligned with
                    the overall holiday campaign while maintaining consistency with BCIT's brand
                    identity. The design balances playfulness and professionalism, making the
                    coupons feel rewarding and memorable for employees.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              <CenteredImgWrap
                variants={revealScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <FeatureImgCard variants={revealScale} initial="hidden" animate="visible">
                  <img src={couponImg} alt="Employee Day-Off Coupons" loading="lazy" />
                </FeatureImgCard>
              </CenteredImgWrap>

            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 03: INSTITUTIONAL CARD ───────────────────────────────── */}
        <div id="bcitm-institutional">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <SectionNumber>Section 03</SectionNumber>
                  <Overline>Institutional Design</Overline>
                  <H2>Institutional Holiday Card</H2>
                  <SectionRule />
                </SectionHeader>
              </Reveal>

              <SplitGrid
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{ alignItems: 'flex-start' }}
              >
                <SplitText>
                  <Reveal>
                    <Lead>
                      This holiday card was designed on behalf of the Vice President and distributed
                      to faculty members, government partners, and institutional stakeholders.
                    </Lead>
                    <BodyText>
                      The concept combines photography of the BCIT campus with the imagery of a snow
                      globe to create a nostalgic winter atmosphere. The design aims to evoke feelings
                      of warmth, connection, celebration, and seasonal reflection while maintaining a
                      professional and institutional tone.
                    </BodyText>
                    <BodyText>
                      The final result blends holiday charm with the visual identity of BCIT, creating
                      a memorable greeting for external audiences.
                    </BodyText>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <SplitImage variants={revealY} style={{ marginTop: '2rem' }}>
                      <img src={xmasM11} alt="Institutional Holiday Card Variation" loading="lazy" />
                    </SplitImage>
                  </Reveal>
                </SplitText>

                <SplitImageStack>
                  <SplitImage variants={revealY}>
                    <img src={xmasM1} alt="Institutional Holiday Card" loading="lazy" />
                  </SplitImage>
                </SplitImageStack>
              </SplitGrid>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 04: EMAIL BANNER ──────────────────────────────────────── */}
        <div id="bcitm-banner">
          <Section $bg="#fafafa">
            <Container>
              <Reveal>
                <SectionHeader>
                  <SectionNumber>Section 04</SectionNumber>
                  <Overline>Digital Marketing</Overline>
                  <H2>Email Marketing Banner</H2>
                  <SectionRule />
                  <Lead>
                    To extend the campaign across digital channels, I designed an email marketing
                    banner inspired directly by the visual language of the holiday card.
                  </Lead>
                  <BodyText>
                    The objective was to maintain visual consistency across touchpoints while ensuring
                    the banner remained effective in email environments. Typography, imagery, and
                    seasonal elements were adapted to create a cohesive campaign experience.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              <Reveal variants={revealScale}>
                <BannerWrap variants={revealScale} initial="hidden" animate="visible">
                  <img src={bannerImg} alt="BCIT Holiday Email Marketing Banner" loading="lazy" />
                  <BannerBadge>Email Banner</BannerBadge>
                </BannerWrap>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 05: LINKEDIN ──────────────────────────────────────────── */}
        <div id="bcitm-linkedin">
          <Section $bg="#0d0d0d">
            <Container>
              <Reveal>
                <SectionHeader>
                  <SectionNumber style={{ color: 'rgba(255,255,255,0.3)' }}>Section 05</SectionNumber>
                  <Overline style={{ color: '#7aaae8' }}>Social Media Campaign</Overline>
                  <H2 style={{ color: '#fff' }}>LinkedIn Campaign —<br />Flexible Learning</H2>
                  <SectionRule style={{ background: '#7aaae8' }} />
                  <Lead style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '640px' }}>
                    As part of BCIT's Flexible Learning campaign, I designed and produced LinkedIn
                    content intended to increase awareness and engagement across digital audiences.
                  </Lead>
                  <BodyText style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '640px' }}>
                    The campaign focused on communicating accessibility, flexibility, and educational
                    opportunities available through BCIT's learning programs. The visual direction
                    was designed to be modern, engaging, and optimized for social media performance
                    while maintaining consistency with BCIT's brand guidelines.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              <VideoSection>
                <Reveal>
                  <VideoWrap variants={revealY} initial="hidden" animate="visible">
                    <LazyVideo
                      src={video1}
                      controls
                      playsInline
                      controlsList="nodownload"
                      objectFit="contain"
                      style={{ width: '100%', height: '100%' }}
                      aria-label="LinkedIn Campaign Video 01"
                    />
                  </VideoWrap>
                  <VideoLabel>LinkedIn Post — 01</VideoLabel>
                </Reveal>

                <Reveal delay={0.12}>
                  <VideoWrap variants={revealY} initial="hidden" animate="visible">
                    <LazyVideo
                      src={video2}
                      controls
                      playsInline
                      controlsList="nodownload"
                      objectFit="contain"
                      style={{ width: '100%', height: '100%' }}
                      aria-label="LinkedIn Campaign Video 02"
                    />
                  </VideoWrap>
                  <VideoLabel>LinkedIn Post — 02</VideoLabel>
                </Reveal>
              </VideoSection>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── REFLECTION ────────────────────────────────────────────────────── */}
        <div id="bcitm-reflection">
          <Section>
            <Container>
              <ReflectionGrid>
                <Reveal>
                  <Overline>Project Impact &amp; Learning</Overline>
                  <ReflectionQuote>
                    "Working across print and digital platforms revealed how design contributes
                    to broader marketing objectives and meaningful audience engagement."
                  </ReflectionQuote>
                  <BodyText>
                    This internship provided valuable experience working within a large institutional
                    marketing team. Beyond graphic design, the project strengthened my skills in
                    stakeholder collaboration, campaign coordination, brand consistency, and strategic
                    visual communication.
                  </BodyText>
                  <BodyText>
                    Working across print and digital platforms allowed me to better understand how
                    design contributes to broader marketing objectives and audience engagement.
                  </BodyText>
                </Reveal>

                <Reveal delay={0.1}>
                  <Overline>Skills Applied</Overline>
                  <H2 style={{ marginBottom: '0.5rem' }}>Disciplines.</H2>
                  <SkillsWrap>
                    {[
                      'Graphic Design',
                      'Campaign Design',
                      'Brand Consistency',
                      'Adobe Illustrator',
                      'Adobe Photoshop',
                      'Email Marketing',
                      'LinkedIn Content',
                      'Print Production',
                      'Inclusive Design',
                      'Stakeholder Communication',
                    ].map(s => (
                      <Tag
                        key={s}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        {s}
                      </Tag>
                    ))}
                  </SkillsWrap>
                </Reveal>
              </ReflectionGrid>
            </Container>
          </Section>
        </div>

        <MenuWork />
        <EmailFooter />
      </PageBg>

      <TopScrollButton />
    </>
  );
};

export default BcitMarketing;
