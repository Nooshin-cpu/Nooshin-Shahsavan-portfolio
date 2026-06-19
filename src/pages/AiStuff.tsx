import React, { useRef, useState, useCallback } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { motion, useInView, type Variants } from 'framer-motion';
import SEO from '../components/SEO';
import { EmailFooter } from '../components/Footer';
import TopScrollButton from '../components/TopScrollButton';
import WorksNavMenu from '../components/WorksNavMenu';
import LazyVideo from '../components/LazyVideo';

// ─── Assets ──────────────────────────────────────────────────────────────────
const storyboardMirror = new URL('../assets/AI-videos/storyboard preview-Mirrormii-AppVideo.png', import.meta.url).href;
const videoMirror      = new URL('../assets/AI-videos/mirrormii-Final-file.mp4',                  import.meta.url).href;
const emailMarketing   = new URL('../assets/AI-videos/email-marketing.png',                       import.meta.url).href;
const storyboardSave1  = new URL('../assets/AI-videos/ai-save1.png',                              import.meta.url).href;
const videoSave1       = new URL('../assets/AI-videos/ai-save1.mp4',                              import.meta.url).href;
const storyboardSave2  = new URL('../assets/AI-videos/ai-save2.png',                              import.meta.url).href;
const videoSave2       = new URL('../assets/AI-videos/ai-save2.mp4',                              import.meta.url).href;

// ─── Theme ───────────────────────────────────────────────────────────────────
const ACCENT  = '#6d28d9';
const ACCENT2 = '#a855f7';

// ─── Animations ──────────────────────────────────────────────────────────────
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-18px) rotate(1deg); }
  66%       { transform: translateY(-8px) rotate(-1deg); }
`;

const shimmer = keyframes`
  0%   { background-position: -800px 0; }
  100% { background-position:  800px 0; }
`;

const revealY: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const revealScale: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Reveal wrapper ──────────────────────────────────────────────────────────
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; variants?: Variants }> = ({
  children, delay = 0, variants,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
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

// ─── Lightbox ────────────────────────────────────────────────────────────────
const LightboxOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: zoom-out;
`;

const LightboxImg = styled(motion.img)`
  max-width: min(90vw, 1200px);
  max-height: 90vh;
  width: auto;
  height: auto;
  border-radius: 12px;
  object-fit: contain;
  cursor: default;
`;

const LightboxClose = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(6px);
  transition: background 0.2s;
  &:hover { background: rgba(255,255,255,0.2); }
`;

// ─── Global ───────────────────────────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`
  body { background: #fff; margin: 0; padding: 0; }
  html { overflow-x: hidden; }
`;

// ─── Page shell ───────────────────────────────────────────────────────────────
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

// ─── Typography ──────────────────────────────────────────────────────────────
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

const ProjectTypeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(109, 40, 217, 0.08);
  color: ${ACCENT};
  border: 1px solid rgba(109, 40, 217, 0.2);
  border-radius: 100px;
  padding: 0.35rem 0.9rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
`;

// ─── HERO ─────────────────────────────────────────────────────────────────────
const HeroWrap = styled.section`
  width: 100%;
  padding: 90px 0 80px;
  background: #fafafa;
  position: relative;
  overflow: hidden;
`;

const HeroOrb = styled.div<{ $size: number; $x: number; $y: number; $delay: number }>`
  position: absolute;
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  border-radius: 50%;
  background: radial-gradient(circle, ${ACCENT2}22 0%, transparent 70%);
  left: ${p => p.$x}%;
  top: ${p => p.$y}%;
  animation: ${float} ${p => 6 + p.$delay}s ease-in-out infinite;
  animation-delay: ${p => p.$delay}s;
  pointer-events: none;
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2.5rem;
  @media (max-width: 768px) { padding: 0 1.5rem; }
`;

const HeroTag = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(109, 40, 217, 0.08);
  border: 1px solid rgba(109, 40, 217, 0.18);
  border-radius: 100px;
  padding: 0.45rem 1.1rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${ACCENT};
  margin-bottom: 2rem;
`;

const HeroTagDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${ACCENT};
  display: inline-block;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  font-weight: 900;
  color: #0d0d0d;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin: 0 0 1.8rem;
  max-width: 820px;
`;

const HeroAccent = styled.span`
  background: linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT2} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSub = styled(motion.p)`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #666;
  line-height: 1.78;
  max-width: 660px;
  margin: 0 0 4rem;
`;

const StatsRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid #e5e5e5;
  border-radius: 18px;
  overflow: hidden;
  max-width: 780px;
  background: #fff;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const StatCell = styled.div`
  padding: 1.8rem 2rem;
  border-right: 1px solid #e5e5e5;
  &:last-child { border-right: none; }
  @media (max-width: 640px) {
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
    &:last-child { border-bottom: none; }
  }
`;

const StatLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #bbb;
  margin: 0 0 0.5rem;
`;

const StatValue = styled.p`
  font-size: 0.88rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`;

const StatNumber = styled.span`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT2} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  line-height: 1;
  margin-bottom: 0.3rem;
`;

// ─── Image cards ─────────────────────────────────────────────────────────────
const ClickableImg = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  cursor: zoom-in;
  position: relative;
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.03); }
`;

const ZoomHint = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.8rem;
  border-radius: 100px;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
  ${ClickableImg}:hover & { opacity: 1; }
`;

const VideoCard = styled(motion.div)`
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  background: #0d0d0d;
  box-shadow: 0 24px 70px rgba(0,0,0,0.16);
  aspect-ratio: 16 / 9;
  margin: 2.5rem 0;
`;

const VideoLabel = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  color: #aaa;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0.8rem 0 2.5rem;
`;

// ─── Workflow box ─────────────────────────────────────────────────────────────
const WorkflowBox = styled(motion.div)`
  background: linear-gradient(135deg, #0d0d0d 0%, #1a0a2e 100%);
  border-radius: 20px;
  padding: 3rem 3.5rem;
  margin: 3rem 0 0;
  @media (max-width: 640px) { padding: 2rem 1.8rem; }
`;

const WorkflowTitle = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${ACCENT2};
  margin: 0 0 1.8rem;
`;

const WorkflowSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const WorkflowStep = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const WorkflowStepLabel = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
`;

const WorkflowDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${ACCENT2};
  flex-shrink: 0;
`;

const WorkflowArrow = styled.div`
  width: 1px;
  height: 28px;
  background: rgba(168, 85, 247, 0.3);
  margin-left: 4.5px;
`;

// ─── Split layout ─────────────────────────────────────────────────────────────
const SplitGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 2rem; }
`;

// ─── Focus points ─────────────────────────────────────────────────────────────
const FocusList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const FocusItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${ACCENT};
    flex-shrink: 0;
  }
`;

// ─── Reflection ──────────────────────────────────────────────────────────────
const ReflectionWrap = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: left;
`;

const ReflectionQuote = styled.blockquote`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 800;
  color: #0d0d0d;
  line-height: 1.4;
  letter-spacing: -0.02em;
  margin: 0 0 2.5rem;
  position: relative;
  &::before {
    content: '"';
    font-size: 6rem;
    line-height: 0;
    color: ${ACCENT};
    opacity: 0.12;
    position: absolute;
    top: 2.5rem;
    left: -1.5rem;
    font-family: Georgia, serif;
  }
`;

const SkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: flex-start;
  margin-top: 2.5rem;
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
  cursor: default;
  &:hover {
    background: rgba(109, 40, 217, 0.07);
    border-color: rgba(109, 40, 217, 0.3);
    color: ${ACCENT};
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────
const AiStuff: React.FC = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = useCallback((src: string) => setLightboxSrc(src), []);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  const workflowSteps = [
    'Concept Development',
    'Storyboard Creation',
    'AI Video Generation',
    'After Effects Editing',
    'Marketing Asset Design',
  ];

  const skills = [
    'AI Video Generation', 'Adobe After Effects', 'Storyboarding',
    'Motion Graphics', 'Concept Development', 'Marketing Design',
    'Brand Storytelling', 'Post-Production Editing', 'Digital Marketing',
  ];

  return (
    <>
      <GlobalStyle />
      <SEO
        title="AI Creative Projects | Nooshin Shahsavan"
        description="Exploring AI-assisted creative workflows — concept development, storyboarding, AI video generation, and After Effects editing for marketing and brand storytelling."
        keywords="AI video, motion design, After Effects, storyboard, MirrorMei, Save-On-Foods, AI marketing"
        image={emailMarketing}
      />

      <WorksNavMenu />

      {/* Lightbox */}
      {lightboxSrc && (
        <LightboxOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <LightboxClose onClick={closeLightbox} aria-label="Close">✕</LightboxClose>
          <LightboxImg
            src={lightboxSrc}
            alt="Enlarged view"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
          />
        </LightboxOverlay>
      )}

      <PageBg data-page-scroll>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <HeroWrap id="ai-hero">
          <HeroOrb $size={500} $x={70} $y={-10} $delay={0} />
          <HeroOrb $size={320} $x={-5} $y={50}  $delay={2} />
          <HeroOrb $size={240} $x={85} $y={60}  $delay={4} />

          <HeroInner>
            <HeroTag
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <HeroTagDot />
              AI-Assisted Creative Workflow
            </HeroTag>

            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            >
              AI <HeroAccent>Creative</HeroAccent><br />Projects
            </HeroTitle>

            <HeroSub
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            >
              Exploring the intersection of Artificial Intelligence, storytelling, motion design,
              and digital marketing. These projects demonstrate my ability to transform concepts
              into engaging visual content using AI-generated assets combined with professional
              editing and motion graphics workflows.
            </HeroSub>

            <StatsRow
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.54 }}
            >
              <StatCell>
                <StatNumber>3</StatNumber>
                <StatLabel>Projects Featured</StatLabel>
              </StatCell>
              <StatCell>
                <StatLabel>AI Workflow</StatLabel>
                <StatValue>Storyboard → AI Generation → After Effects</StatValue>
              </StatCell>
              <StatCell>
                <StatLabel>Focus Areas</StatLabel>
                <StatValue>Marketing · Product Promotion · Brand Storytelling</StatValue>
              </StatCell>
            </StatsRow>
          </HeroInner>
        </HeroWrap>

        <Divider />

        {/* ── SECTION 01: MIRRORMEI ─────────────────────────────────────── */}
        <div id="ai-mirrormei">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <SectionNumber>Section 01</SectionNumber>
                  <ProjectTypeBadge>AI Product Marketing Video</ProjectTypeBadge>
                  <Overline>Health &amp; Lifestyle App</Overline>
                  <H2>MirrorMei – AI Health &amp;<br />Lifestyle Companion</H2>
                  <SectionRule />
                  <Lead>
                    MirrorMei is a health and lifestyle application concept designed to help users
                    build healthier habits and visualize their future selves.
                  </Lead>
                  <BodyText>
                    The idea behind the application is that every action a user takes — from exercise
                    and nutrition to skincare and wellness routines — contributes to a virtual version
                    of themselves. The platform provides visual feedback, motivation, and personalized
                    recommendations to encourage long-term healthy behaviors.
                  </BodyText>
                  <BodyText>
                    For this project, I used AI tools to develop storyboards and generate visual
                    content, then refined and edited the final video using Adobe After Effects.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              {/* Storyboard */}
              <Reveal variants={revealScale}>
                <ClickableImg
                  variants={revealScale}
                  initial="hidden"
                  animate="visible"
                  onClick={() => openLightbox(storyboardMirror)}
                  role="button"
                  aria-label="View storyboard full size"
                >
                  <img src={storyboardMirror} alt="MirrorMei App Video Storyboard" loading="lazy" />
                  <ZoomHint>Click to enlarge</ZoomHint>
                </ClickableImg>
              </Reveal>
              <VideoLabel>Storyboard Preview</VideoLabel>

              {/* Final video */}
              <Reveal variants={revealScale}>
                <VideoCard variants={revealScale} initial="hidden" animate="visible">
                  <LazyVideo
                    src={videoMirror}
                    controls
                    playsInline
                    controlsList="nodownload"
                    objectFit="contain"
                    style={{ width: '100%', height: '100%' }}
                    aria-label="MirrorMei Final Video"
                  />
                </VideoCard>
              </Reveal>
              <VideoLabel>Final Video — MirrorMei App Concept</VideoLabel>

              {/* Email marketing asset */}
              <Reveal variants={revealScale}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ClickableImg
                    variants={revealScale}
                    initial="hidden"
                    animate="visible"
                    onClick={() => openLightbox(emailMarketing)}
                    role="button"
                    aria-label="View email marketing design full size"
                    style={{ maxWidth: '320px' }}
                  >
                    <img
                      src={emailMarketing}
                      alt="MirrorMei Email Marketing Design"
                      loading="lazy"
                      style={{ maxHeight: '50vh', objectFit: 'contain' }}
                    />
                    <ZoomHint>Click to enlarge</ZoomHint>
                  </ClickableImg>
                </div>
              </Reveal>
              <VideoLabel>Email Marketing Asset</VideoLabel>

              {/* Workflow box */}
              <Reveal delay={0.1}>
                <WorkflowBox variants={revealY} initial="hidden" animate="visible">
                  <WorkflowTitle>Creative Workflow</WorkflowTitle>
                  <WorkflowSteps>
                    {workflowSteps.map((step, i) => (
                      <React.Fragment key={step}>
                        <WorkflowStep
                          variants={revealY}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <WorkflowDot />
                          <WorkflowStepLabel>{step}</WorkflowStepLabel>
                        </WorkflowStep>
                        {i < workflowSteps.length - 1 && <WorkflowArrow />}
                      </React.Fragment>
                    ))}
                  </WorkflowSteps>
                </WorkflowBox>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 02: SAVE-ON-FOODS I ───────────────────────────────── */}
        <div id="ai-saveon1">
          <Section $bg="#fafafa">
            <Container>
              <Reveal>
                <SectionHeader>
                  <SectionNumber>Section 02</SectionNumber>
                  <ProjectTypeBadge>AI Advertising Video</ProjectTypeBadge>
                  <Overline>Retail Campaign</Overline>
                  <H2>Save-On-Foods AI<br />Advertising Concept</H2>
                  <SectionRule />
                </SectionHeader>
              </Reveal>

              <SplitGrid
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Left — storyboard */}
                <div>
                  <Reveal>
                    <ClickableImg
                      variants={revealY}
                      onClick={() => openLightbox(storyboardSave1)}
                      role="button"
                      aria-label="View Save-On-Foods storyboard full size"
                    >
                      <img src={storyboardSave1} alt="Save-On-Foods Campaign Storyboard" loading="lazy" />
                      <ZoomHint>Click to enlarge</ZoomHint>
                    </ClickableImg>
                  </Reveal>
                  <VideoLabel>Storyboard</VideoLabel>
                </div>

                {/* Right — description + focus points */}
                <Reveal delay={0.1}>
                  <Lead>
                    This concept explores how artificial intelligence can be used to rapidly create
                    promotional advertising content for retail and grocery brands.
                  </Lead>
                  <BodyText>
                    The project began with storyboarding and concept development before moving into
                    AI-generated visuals and motion sequences. Final refinements and editing were
                    completed in After Effects to create a polished marketing video.
                  </BodyText>
                  <FocusList>
                    {['Retail marketing', 'AI-assisted content creation', 'Brand storytelling', 'Motion graphics enhancement'].map(f => (
                      <FocusItem key={f}>{f}</FocusItem>
                    ))}
                  </FocusList>
                </Reveal>
              </SplitGrid>

              {/* Full-width video below */}
              <Reveal variants={revealScale}>
                <VideoCard
                  variants={revealScale}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <LazyVideo
                    src={videoSave1}
                    controls
                    playsInline
                    controlsList="nodownload"
                    objectFit="contain"
                    style={{ width: '100%', height: '100%' }}
                    aria-label="Save-On-Foods Campaign Video 01"
                  />
                </VideoCard>
              </Reveal>
              <VideoLabel>Final Video — Save-On-Foods Campaign Concept</VideoLabel>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 03: SAVE-ON-FOODS II ──────────────────────────────── */}
        <div id="ai-saveon2">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <SectionNumber>Section 03</SectionNumber>
                  <ProjectTypeBadge>AI Advertising Video</ProjectTypeBadge>
                  <Overline>Campaign Variation</Overline>
                  <H2>Save-On-Foods AI<br />Campaign Variation</H2>
                  <SectionRule />
                </SectionHeader>
              </Reveal>

              {/* Alternated: description first, storyboard second */}
              <SplitGrid
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Left — description */}
                <Reveal>
                  <Lead>
                    This second concept explores an alternative creative direction for Save-On-Foods
                    using AI-generated imagery, motion design, and storytelling techniques.
                  </Lead>
                  <BodyText>
                    The project demonstrates experimentation with different visual styles, pacing,
                    and messaging approaches while maintaining alignment with brand communication goals.
                  </BodyText>
                  <FocusList>
                    {['Storyboarding', 'AI-generated visuals', 'Motion design', 'Video editing', 'Marketing-focused storytelling'].map(f => (
                      <FocusItem key={f}>{f}</FocusItem>
                    ))}
                  </FocusList>
                </Reveal>

                {/* Right — storyboard */}
                <div>
                  <Reveal delay={0.1}>
                    <ClickableImg
                      variants={revealY}
                      onClick={() => openLightbox(storyboardSave2)}
                      role="button"
                      aria-label="View Save-On-Foods variation storyboard full size"
                    >
                      <img src={storyboardSave2} alt="Save-On-Foods Campaign II Storyboard" loading="lazy" />
                      <ZoomHint>Click to enlarge</ZoomHint>
                    </ClickableImg>
                  </Reveal>
                  <VideoLabel>Storyboard — Variation II</VideoLabel>
                </div>
              </SplitGrid>

              {/* Full-width video */}
              <Reveal variants={revealScale}>
                <VideoCard
                  variants={revealScale}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <LazyVideo
                    src={videoSave2}
                    controls
                    playsInline
                    controlsList="nodownload"
                    objectFit="contain"
                    style={{ width: '100%', height: '100%' }}
                    aria-label="Save-On-Foods Campaign Video 02"
                  />
                </VideoCard>
              </Reveal>
              <VideoLabel>Final Video — Save-On-Foods Campaign Variation</VideoLabel>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── REFLECTION ────────────────────────────────────────────────── */}
        <div id="ai-reflection">
          <Section $bg="#fafafa">
            <Container>
              <Reveal>
                <ReflectionWrap>
                  <Overline style={{ display: 'block', textAlign: 'left', marginBottom: '2rem' }}>
                    AI + Creativity
                  </Overline>
                  <ReflectionQuote>
                    AI accelerates ideation — but storytelling, design thinking, and creative judgment remain irreplaceable.
                  </ReflectionQuote>
                  <BodyText style={{ textAlign: 'left', margin: '0 0 1.2rem', maxWidth: '640px' }}>
                    Artificial Intelligence has become a valuable tool within my creative workflow,
                    allowing me to rapidly prototype ideas, generate visual concepts, and explore
                    multiple creative directions efficiently.
                  </BodyText>
                  <BodyText style={{ textAlign: 'left', margin: '0 0 3rem', maxWidth: '640px' }}>
                    While AI accelerates production and ideation, the success of each project still
                    relies on strong design thinking, storytelling, editing, and creative
                    decision-making. These projects demonstrate how AI can be combined with
                    traditional design tools such as Adobe After Effects to create engaging
                    marketing and promotional content.
                  </BodyText>
                  <SkillsWrap>
                    {skills.map(s => (
                      <Tag
                        key={s}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        {s}
                      </Tag>
                    ))}
                  </SkillsWrap>
                </ReflectionWrap>
              </Reveal>
            </Container>
          </Section>
        </div>
        <EmailFooter />
      </PageBg>

      <TopScrollButton />
    </>
  );
};

export default AiStuff;
