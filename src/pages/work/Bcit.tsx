import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, useInView, type Variants } from 'framer-motion';
import SEO from '../../components/SEO';
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';
import { EmailFooter } from '../../components/Footer';
import TopScrollButton from '../../components/TopScrollButton';
import BcitStickyMenu from '../../components/BcitStickyMenu';

// ─── Asset imports ────────────────────────────────────────────────────────────
const wordmark    = new URL('../../assets/bcitenergy/wordmark-bcit.png',   import.meta.url).href;
const moodboard   = new URL('../../assets/bcitenergy/moodboard-bcit.png',  import.meta.url).href;
const banner1     = new URL('../../assets/bcitenergy/banner-bcit1.png',    import.meta.url).href;
const banner2     = new URL('../../assets/bcitenergy/banner-bcit2.png',    import.meta.url).href;
const stickersAll = new URL('../../assets/bcitenergy/stickers-bcit.jpg',   import.meta.url).href;
const sticker1    = new URL('../../assets/bcitenergy/sticker-bcit1.png',   import.meta.url).href;
const sticker2    = new URL('../../assets/bcitenergy/sticker-bcit2.png',   import.meta.url).href;
const sticker3    = new URL('../../assets/bcitenergy/sticker-bcit3.png',   import.meta.url).href;
const poster      = new URL('../../assets/bcitenergy/poster-bcit.png',     import.meta.url).href;
const igVideo1    = new URL('../../assets/bcitenergy/ig-bcit1.mp4',        import.meta.url).href;
const igVideo2    = new URL('../../assets/bcitenergy/ig-bcit2.mp4',        import.meta.url).href;

// ─── Framer variants ──────────────────────────────────────────────────────────
const revealY = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const revealScale = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden:  { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

// ─── Scroll-aware reveal hook (works inside fixed scroll containers) ──────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return { ref, animate: inView ? 'visible' : 'hidden' };
}

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

const Section = styled.section<{ bg?: string }>`
  width: 100%;
  padding: 100px 0;
  background: ${p => p.bg || '#fff'};
  @media (max-width: 768px) { padding: 70px 0; }
  @media (max-width: 480px) { padding: 50px 0; }
`;

// ─── Typography ───────────────────────────────────────────────────────────────
const Overline = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #5a8a3c;
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
`;

const SectionRule = styled.div`
  width: 48px;
  height: 3px;
  background: #5a8a3c;
  border-radius: 2px;
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  margin-bottom: 3.5rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ebebeb;
`;

// ─── HERO ─────────────────────────────────────────────────────────────────────
const HeroWrap = styled.section`
  width: 100%;
  padding: 80px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
`;

const HeroWordmark = styled(motion.img)`
  width: min(420px, 80vw);
  height: auto;
  display: block;
  margin: 0 auto 3rem;
  object-fit: contain;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2rem, 4.5vw, 3.6rem);
  font-weight: 900;
  color: #0d0d0d;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 1rem;
  max-width: 800px;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #666;
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto 3.5rem;
`;

const MetaGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  overflow: hidden;
  width: min(860px, 92vw);
  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`;

const MetaCell = styled.div`
  padding: 1.6rem 1.8rem;
  border-right: 1px solid #e8e8e8;
  text-align: left;
  &:last-child { border-right: none; }
  @media (max-width: 640px) {
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    &:nth-child(2n) { border-right: none; }
    &:nth-last-child(-n+2) { border-bottom: none; }
  }
`;

const MetaLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #aaa;
  margin: 0 0 0.4rem;
`;

const MetaValue = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`;

// ─── Overview ─────────────────────────────────────────────────────────────────
const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 2.5rem; }
`;

// ─── Challenge ────────────────────────────────────────────────────────────────
const ChallengeBlock = styled(motion.div)`
  background: #0d0d0d;
  border-radius: 24px;
  padding: 3.5rem 4rem;
  @media (max-width: 768px) { padding: 2.5rem 2rem; }
`;

const ChallengeQ = styled.p`
  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: 700;
  line-height: 1.5;
  color: #fff;
  margin: 0 0 2rem;
`;

const ChallengeAnswer = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.68);
  line-height: 1.82;
  margin: 0;
`;

// ─── Images ───────────────────────────────────────────────────────────────────
const FullBleedImg = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1);
  img { width: 100%; height: auto; display: block; }
`;

// ─── Colour cards ─────────────────────────────────────────────────────────────
const ColorCards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const ColorCard = styled(motion.div)<{ $accent: string }>`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;
  .swatch { height: 80px; background: ${p => p.$accent}; }
  .body { padding: 1.2rem 1.4rem; }
  h4 { font-size: 0.85rem; font-weight: 700; color: #111; margin: 0 0 0.4rem; text-transform: uppercase; letter-spacing: 0.06em; }
  p  { font-size: 0.85rem; color: #666; margin: 0; line-height: 1.5; }
`;

// ─── Wordmark ─────────────────────────────────────────────────────────────────
const WordmarkSpotlight = styled(motion.div)`
  background: #f5f5f5;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem;
  margin-bottom: 4rem;
  img { width: min(380px, 70%); height: auto; display: block; }
`;

const WordmarkDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const DetailCard = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
  h4 { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5a8a3c; margin: 0 0 0.6rem; }
  p  { font-size: 0.92rem; color: #555; line-height: 1.65; margin: 0; }
`;

// ─── Banners ──────────────────────────────────────────────────────────────────
const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const BannerCard = styled(motion.div)`
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.1);
  position: relative;
  img { width: 100%; height: auto; display: block; }
`;

const BannerLabel = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(0,0,0,0.72);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
`;

// ─── Stickers ─────────────────────────────────────────────────────────────────
const StickerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  @media (max-width: 500px) { gap: 1rem; }
`;

const StickerCard = styled(motion.div)`
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  overflow: hidden;
  background: #f8f8f8;
  box-shadow: 0 8px 28px rgba(0,0,0,0.07);
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;

// ─── Poster ───────────────────────────────────────────────────────────────────
const PosterWrap = styled(motion.div)`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.13);
  img { width: 100%; height: auto; display: block; }
`;

// ─── Videos ───────────────────────────────────────────────────────────────────
const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const VideoCard = styled(motion.div)`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 56px rgba(0,0,0,0.2);
  background: #000;
  video { width: 100%; height: auto; display: block; }
`;

const VideoLabel = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  text-align: center;
  margin: 0.9rem 0 0;
`;

// ─── Reflection ───────────────────────────────────────────────────────────────
const ReflectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 3rem; }
`;

const ReflectionQuote = styled.blockquote`
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  font-weight: 700;
  color: #0d0d0d;
  line-height: 1.5;
  margin: 0 0 2rem;
  padding-left: 1.5rem;
  border-left: 4px solid #5a8a3c;
`;

// ─── Skills ───────────────────────────────────────────────────────────────────
const SkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Tag = styled.span<{ $accent?: boolean }>`
  display: inline-block;
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  background: ${p => p.$accent ? '#5a8a3c' : '#f2f2f2'};
  color: ${p => p.$accent ? '#fff' : '#333'};
`;

const skills = [
  { label: 'Graphic Design',         accent: true  },
  { label: 'Brand Identity',         accent: true  },
  { label: 'Campaign Design',        accent: true  },
  { label: 'Environmental Graphics', accent: false },
  { label: 'Motion Graphics',        accent: true  },
  { label: 'Social Media Design',    accent: false },
  { label: 'Adobe Illustrator',      accent: false },
  { label: 'Adobe Photoshop',        accent: false },
  { label: 'Adobe After Effects',    accent: false },
  { label: 'Visual Communication',   accent: false },
];

// ─── Reveal wrapper (works inside fixed scroll containers) ────────────────────
const Reveal: React.FC<{
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, variants = revealY, delay = 0, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={delay ? { delay } : undefined}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Page component
// ─────────────────────────────────────────────────────────────────────────────
const Bcit: React.FC = () => {
  return (
    <>
      <PageBg>
        <SEO
          title="BCIT Energy Awareness Campaign | Nooshin Shahsavan"
          description="A full-scope awareness campaign for the BCIT Green Team — branding, posters, banners, stickers, and social media motion graphics."
          keywords="BCIT, energy awareness, green team, campaign design, brand identity, poster design, motion graphics, Nooshin Shahsavan"
          image="/src/assets/bcitenergy/wordmark-bcit.png"
        />
        <GlobalStyle />
        <BcitStickyMenu />

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <HeroWrap>
          <HeroWordmark
            src={wordmark}
            alt="BCIT Energy Campaign Wordmark"
            variants={revealScale}
            initial="hidden"
            animate="visible"
          />
          <motion.div variants={revealY} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
            <Overline>BCIT Green Team — 2024</Overline>
          </motion.div>
          <HeroTitle variants={revealY} initial="hidden" animate="visible">
            BCIT Energy<br />Awareness Campaign
          </HeroTitle>
          <HeroSubtitle variants={revealY} initial="hidden" animate="visible">
            Encouraging sustainable energy habits through a friendly and engaging visual campaign.
          </HeroSubtitle>
          <MetaGrid variants={revealY} initial="hidden" animate="visible">
            <MetaCell>
              <MetaLabel>Client</MetaLabel>
              <MetaValue>BCIT Green Team</MetaValue>
            </MetaCell>
            <MetaCell>
              <MetaLabel>Role</MetaLabel>
              <MetaValue>Graphic Designer</MetaValue>
            </MetaCell>
            <MetaCell>
              <MetaLabel>Scope</MetaLabel>
              <MetaValue>Brand Identity, Posters, Stickers, Banners, Motion</MetaValue>
            </MetaCell>
            <MetaCell>
              <MetaLabel>Goal</MetaLabel>
              <MetaValue>Reduce energy & heating consumption on campus</MetaValue>
            </MetaCell>
          </MetaGrid>
        </HeroWrap>

        <Divider />

        {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
        <div id="bcit-overview">
          <Section>
            <Container>
              <TwoCol>
                <Reveal>
                  <SectionHeader>
                    <Overline>Project Overview</Overline>
                    <H2>A campaign built from<br />concept to production.</H2>
                    <SectionRule />
                  </SectionHeader>
                </Reveal>
                <Reveal delay={0.1}>
                  <Lead>
                    The BCIT Energy Awareness Campaign was created to encourage students, faculty, and staff to adopt energy-saving habits during the colder months.
                  </Lead>
                  <BodyText>
                    Working independently from concept to final execution, I developed a cohesive visual system that communicated environmental responsibility in a way that felt friendly, positive, and accessible.
                  </BodyText>
                  <BodyText>
                    The campaign was deployed across multiple touchpoints including banners, posters, stickers, and social media content, ensuring a consistent message across both physical and digital environments.
                  </BodyText>
                </Reveal>
              </TwoCol>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── CHALLENGE ────────────────────────────────────────────────────── */}
        <div id="bcit-challenge">
          <Section>
            <Container>
              <Reveal>
                <div style={{ marginBottom: '1.5rem' }}><Overline>The Challenge</Overline></div>
                <ChallengeBlock variants={revealY} initial="hidden" animate="visible">
                  <ChallengeQ>
                    "Environmental campaigns often feel technical, dry, and overly serious — how do you make sustainability feel approachable?"
                  </ChallengeQ>
                  <ChallengeAnswer>
                    Environmental messaging can easily fall flat when it leans too heavily on obligation and severity. The challenge was to create a visual identity that felt welcoming and engaging while clearly communicating the importance of reducing energy consumption. The visual language needed to appeal to a broad campus audience while maintaining a strong connection to sustainability and energy efficiency.
                  </ChallengeAnswer>
                </ChallengeBlock>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── MOODBOARD ────────────────────────────────────────────────────── */}
        <div id="bcit-moodboard">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Moodboard & Visual Direction</Overline>
                  <H2>A visual language rooted<br />in nature and efficiency.</H2>
                  <SectionRule />
                  <Lead>
                    The visual direction was inspired by the relationship between sustainability and energy efficiency. A leaf was chosen as a primary visual element — a simple, universally recognised symbol of nature and environmental responsibility.
                  </Lead>
                  <BodyText>
                    The letter <strong>"A"</strong> was integrated into the concept because it represents the highest rating within energy efficiency labelling systems. Combining the leaf with the letter A established a direct visual relationship between smart energy use and environmental stewardship.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              <Reveal variants={revealScale}>
                <FullBleedImg variants={revealScale} initial="hidden" animate="visible">
                  <img src={moodboard} alt="BCIT Energy Campaign Moodboard" />
                </FullBleedImg>
              </Reveal>

              <Reveal>
                <ColorCards variants={staggerContainer} initial="hidden" animate="visible">
                  <ColorCard $accent="#5a8a3c" variants={revealY}>
                    <div className="swatch" />
                    <div className="body">
                      <h4>Green</h4>
                      <p>Represents nature, sustainability, and growth — the core identity colour of the campaign.</p>
                    </div>
                  </ColorCard>
                  <ColorCard $accent="#2e6fa3" variants={revealY}>
                    <div className="swatch" />
                    <div className="body">
                      <h4>Blue</h4>
                      <p>Represents winter, cold weather, and the seasonal context of heating consumption.</p>
                    </div>
                  </ColorCard>
                  <ColorCard $accent="#f0b429" variants={revealY}>
                    <div className="swatch" />
                    <div className="body">
                      <h4>Yellow</h4>
                      <p>Represents warmth, energy, and the positive action the campaign encourages.</p>
                    </div>
                  </ColorCard>
                </ColorCards>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── WORDMARK ─────────────────────────────────────────────────────── */}
        <div id="bcit-wordmark">
          <Section bg="#fafafa">
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Wordmark Design</Overline>
                  <H2>Where nature meets<br />energy efficiency.</H2>
                  <SectionRule />
                </SectionHeader>
              </Reveal>

              <Reveal variants={revealScale}>
                <WordmarkSpotlight variants={revealScale} initial="hidden" animate="visible">
                  <img src={wordmark} alt="BCIT Energy Awareness Campaign Wordmark" />
                </WordmarkSpotlight>
              </Reveal>

              <Reveal>
                <WordmarkDetails>
                  <DetailCard variants={revealY} initial="hidden" animate="visible">
                    <h4>Concept</h4>
                    <p>The wordmark combines a leaf motif with the letter A, creating an immediate visual connection between environmental awareness and energy efficiency ratings.</p>
                  </DetailCard>
                  <DetailCard variants={revealY} initial="hidden" animate="visible">
                    <h4>Symbolism</h4>
                    <p>The letter A references the top tier of energy efficiency labelling systems, linking responsible energy use to the campaign identity through a single recognisable mark.</p>
                  </DetailCard>
                  <DetailCard variants={revealY} initial="hidden" animate="visible">
                    <h4>Application</h4>
                    <p>The wordmark was applied consistently across all campaign materials — from large-format banners and posters to stickers and digital social media assets.</p>
                  </DetailCard>
                  <DetailCard variants={revealY} initial="hidden" animate="visible">
                    <h4>Foundation</h4>
                    <p>As the anchor of the visual system, the wordmark established the tone and personality of the entire campaign — approachable, modern, and purposeful.</p>
                  </DetailCard>
                </WordmarkDetails>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── BANNERS ──────────────────────────────────────────────────────── */}
        <div id="bcit-banners">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Campus Banner System</Overline>
                  <H2>Bold, visible, and<br />impossible to ignore.</H2>
                  <SectionRule />
                  <Lead>
                    Large-format banners were designed to maximise visibility in campus environments. Both images represent the same banner design displayed in different mockup environments.
                  </Lead>
                  <BodyText>
                    The banner system uses bold typography, recognisable campaign branding, and clear visual hierarchy to quickly communicate energy-saving behaviours.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              <BannerGrid>
                <Reveal>
                  <BannerCard variants={revealY} initial="hidden" animate="visible">
                    <img src={banner1} alt="BCIT Energy Campaign Banner – Mockup 1" />
                    <BannerLabel>Environment 01</BannerLabel>
                  </BannerCard>
                </Reveal>
                <Reveal delay={0.12}>
                  <BannerCard variants={revealY} initial="hidden" animate="visible">
                    <img src={banner2} alt="BCIT Energy Campaign Banner – Mockup 2" />
                    <BannerLabel>Environment 02</BannerLabel>
                  </BannerCard>
                </Reveal>
              </BannerGrid>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── STICKERS ─────────────────────────────────────────────────────── */}
        <div id="bcit-stickers">
          <Section bg="#fafafa">
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Sticker Design</Overline>
                  <H2>Small reminders,<br />big impact.</H2>
                  <SectionRule />
                  <Lead>
                    Stickers were developed as a playful extension of the campaign identity — transforming key messages into small, memorable visual reminders placed throughout campus.
                  </Lead>
                  <BodyText>
                    Friendly illustrations and recognisable branding made sustainability feel approachable and engaging rather than instructional or demanding.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              <Reveal variants={revealScale}>
                <StickerGrid>
                  <StickerCard variants={revealY} initial="hidden" animate="visible">
                    <img src={stickersAll} alt="BCIT Energy Sticker Collection" />
                  </StickerCard>
                  <StickerCard variants={revealY} initial="hidden" animate="visible">
                    <img src={sticker1} alt="BCIT Energy Sticker 1" />
                  </StickerCard>
                  <StickerCard variants={revealY} initial="hidden" animate="visible">
                    <img src={sticker2} alt="BCIT Energy Sticker 2" />
                  </StickerCard>
                  <StickerCard variants={revealY} initial="hidden" animate="visible">
                    <img src={sticker3} alt="BCIT Energy Sticker 3" />
                  </StickerCard>
                </StickerGrid>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── POSTER ───────────────────────────────────────────────────────── */}
        <div id="bcit-poster">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Poster Campaign</Overline>
                  <H2>Strong typography.<br />Clear message.</H2>
                  <SectionRule />
                  <Lead>
                    The poster system was designed to capture attention quickly while delivering clear and actionable energy-saving messages across campus.
                  </Lead>
                  <BodyText>
                    Strong typography, bold visuals, and consistent branding communicated the campaign message effectively through a direct and confident visual approach.
                  </BodyText>
                </SectionHeader>
              </Reveal>

              <Reveal variants={revealScale}>
                <PosterWrap variants={revealScale} initial="hidden" animate="visible">
                  <img src={poster} alt="BCIT Energy Awareness Campaign Poster" />
                </PosterWrap>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── MOTION GRAPHICS ──────────────────────────────────────────────── */}
        <div id="bcit-motion">
          <Section bg="#0d0d0d">
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline style={{ color: '#8bc34a' }}>Social Media Motion Graphics</Overline>
                  <H2 style={{ color: '#fff' }}>Bringing the campaign<br />to life digitally.</H2>
                  <SectionRule style={{ background: '#8bc34a' }} />
                  <Lead style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '620px' }}>
                    Short-form social media videos were created for Instagram, translating the campaign's visual identity into engaging digital content and reinforcing energy-saving behaviours through dynamic storytelling.
                  </Lead>
                </SectionHeader>
              </Reveal>

              <VideoGrid>
                <Reveal>
                  <VideoCard variants={revealY} initial="hidden" animate="visible">
                    <video src={igVideo1} controls playsInline loop preload="metadata" controlsList="nodownload" />
                  </VideoCard>
                  <VideoLabel>Motion Graphic — 01</VideoLabel>
                </Reveal>
                <Reveal delay={0.12}>
                  <VideoCard variants={revealY} initial="hidden" animate="visible">
                    <video src={igVideo2} controls playsInline loop preload="metadata" controlsList="nodownload" />
                  </VideoCard>
                  <VideoLabel>Motion Graphic — 02</VideoLabel>
                </Reveal>
              </VideoGrid>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── REFLECTION ───────────────────────────────────────────────────── */}
        <div id="bcit-reflection">
          <Section>
            <Container>
              <ReflectionGrid>
                <Reveal>
                  <Overline>Reflection</Overline>
                  <ReflectionQuote>
                    "A unified visual identity, applied with consistency across every touchpoint, is what turns a campaign into a movement."
                  </ReflectionQuote>
                  <BodyText>
                    This project provided an opportunity to develop and execute a complete awareness campaign from concept through production. By creating a unified visual identity and applying it consistently across print, environmental graphics, and digital media, the campaign successfully communicated energy-saving messages in a way that felt approachable, positive, and memorable.
                  </BodyText>
                  <BodyText>
                    The project strengthened skills in branding, campaign design, visual storytelling, and multi-channel communication.
                  </BodyText>
                </Reveal>

                <Reveal delay={0.1}>
                  <Overline>Skills & Tools</Overline>
                  <H2 style={{ marginBottom: '2rem' }}>Disciplines applied.</H2>
                  <SkillsWrap>
                    {skills.map(s => (
                      <Tag key={s.label} $accent={s.accent}>{s.label}</Tag>
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

export default Bcit;
