import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, useInView, type Variants } from 'framer-motion';
import SEO from '../../components/SEO';
import { EmailFooter } from '../../components/Footer';
import TopScrollButton from '../../components/TopScrollButton';
import WorksNavMenu from '../../components/WorksNavMenu';
import LazyVideo from '../../components/LazyVideo';

// ─── Assets ──────────────────────────────────────────────────────────────────
const funhome     = new URL('../../assets/fun/funhome.jpg',       import.meta.url).href;
const straw2      = new URL('../../assets/fun/straw2.jpg',        import.meta.url).href;
const straw3      = new URL('../../assets/fun/straw3.png',        import.meta.url).href;
const straw4      = new URL('../../assets/fun/straw4.jpg',        import.meta.url).href;
const straw5      = new URL('../../assets/fun/straw5.png',        import.meta.url).href;
const g41         = new URL('../../assets/fun/41.jpg',            import.meta.url).href;
const g51         = new URL('../../assets/fun/51.jpg',            import.meta.url).href;
const g61         = new URL('../../assets/fun/61.jpg',            import.meta.url).href;
const g71         = new URL('../../assets/fun/71.jpg',            import.meta.url).href;
const g81         = new URL('../../assets/fun/81.jpg',            import.meta.url).href;
const g91         = new URL('../../assets/fun/91.jpg',            import.meta.url).href;
const g10         = new URL('../../assets/fun/10.jpg',            import.meta.url).href;
const g11         = new URL('../../assets/fun/11.jpg',            import.meta.url).href;
const g12         = new URL('../../assets/fun/12.jpg',            import.meta.url).href;
const before1     = new URL('../../assets/fun/1-1before.jpg',     import.meta.url).href;
const after1      = new URL('../../assets/fun/1-2after.jpg',      import.meta.url).href;
const before2     = new URL('../../assets/fun/5-1.png',           import.meta.url).href;
const after2      = new URL('../../assets/fun/5.jpg',             import.meta.url).href;
const before3     = new URL('../../assets/fun/1-5-before.jpg',    import.meta.url).href;
const after3      = new URL('../../assets/fun/1-6-after.jpg',     import.meta.url).href;
const before4     = new URL('../../assets/fun/4-1.png',           import.meta.url).href;
const after4      = new URL('../../assets/fun/4.jpg',             import.meta.url).href;
const montage1    = new URL('../../assets/fun/g4.jpg',            import.meta.url).href;
const montage2    = new URL('../../assets/fun/g2.jpg',            import.meta.url).href;
const video1      = new URL('../../assets/fun/viv-1.mp4',         import.meta.url).href;
const video2      = new URL('../../assets/fun/viv-2.mp4',         import.meta.url).href;

// ─── Accent ──────────────────────────────────────────────────────────────────
const ACCENT = '#8b6f47';

// ─── Variants ────────────────────────────────────────────────────────────────
const revealY: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const revealScale: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
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

// ─── Global ──────────────────────────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`
  body { background: #fff; margin: 0; padding: 0; }
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
  padding: 90px 0;
  background: ${p => p.$bg || '#fff'};
  @media (max-width: 768px) { padding: 65px 0; }
  @media (max-width: 480px) { padding: 48px 0; }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #e8e8e8;
`;

// ─── Typography ──────────────────────────────────────────────────────────────
const Overline = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${ACCENT};
  margin-bottom: 0.8rem;
`;

const H2 = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #0d0d0d;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 1rem;
`;

const Lead = styled.p`
  font-size: clamp(0.95rem, 1.4vw, 1.08rem);
  color: #555;
  line-height: 1.82;
  margin: 0 0 1.4rem;
`;

const SectionRule = styled.div`
  width: 48px;
  height: 3px;
  background: ${ACCENT};
  border-radius: 2px;
  margin-bottom: 2.5rem;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
`;

// ─── HERO ────────────────────────────────────────────────────────────────────
const HeroWrap = styled.section`
  width: 100%;
  padding: 70px 0 80px;
  background: #fafaf8;
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
  margin-bottom: 1.8rem;
`;

const HeroLine = styled.span`
  display: inline-block;
  width: 40px;
  height: 2px;
  background: ${ACCENT};
  border-radius: 2px;
`;

const HeroEyebrowText = styled.span`
  font-size: 0.78rem;
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
  margin: 0 0 3rem;
`;

// ─── Info table ───────────────────────────────────────────────────────────────
const InfoTable = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  overflow: hidden;
  max-width: 900px;
  background: #fff;
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const InfoCell = styled.div`
  padding: 1.6rem 1.8rem;
  border-right: 1px solid #e5e5e5;
  &:last-child { border-right: none; }
  @media (max-width: 768px) {
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    &:nth-child(2n) { border-right: none; }
  }
  @media (max-width: 480px) {
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
    &:last-child { border-bottom: none; }
  }
`;

const InfoLabel = styled.p`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #bbb;
  margin: 0 0 0.5rem;
`;

const InfoValue = styled.p`
  font-size: 0.88rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.5;
`;

// ─── Featured image ───────────────────────────────────────────────────────────
const FeaturedImg = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1);
  margin-bottom: 2.5rem;
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.025); }
`;

// ─── Process gallery (horizontal) ────────────────────────────────────────────
const ProcessRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const ProcessCard = styled(motion.div)`
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.08);
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.06); }
  @media (max-width: 768px) { img { height: 160px; } }
`;

const Caption = styled.p`
  font-size: 0.82rem;
  color: #999;
  font-style: italic;
  text-align: center;
  margin: 1.2rem 0 0;
  line-height: 1.6;
`;

// ─── Photo grid ───────────────────────────────────────────────────────────────
const PhotoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const PhotoCard = styled(motion.div)`
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.06); }
  @media (max-width: 768px) { img { height: 200px; } }
  @media (max-width: 480px) { img { height: 240px; } }
`;

// ─── Before / After ───────────────────────────────────────────────────────────
const CompareGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CompareRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const CompareItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const CompareLabel = styled.span<{ $type: 'before' | 'after' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${p => p.$type === 'before' ? '#888' : ACCENT};
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p => p.$type === 'before' ? '#ccc' : ACCENT};
  }
`;

const CompareImg = styled(motion.div)`
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.03); }
`;

// ─── Montage grid ─────────────────────────────────────────────────────────────
const MontageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const MontageCard = styled(motion.div)`
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.03); }
`;

// ─── Video grid ───────────────────────────────────────────────────────────────
const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const VideoWrap = styled(motion.div)`
  border-radius: 18px;
  overflow: hidden;
  background: #0d0d0d;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  aspect-ratio: 16 / 9;
`;

const VideoLabel = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  color: #aaa;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0.8rem 0 0;
`;

// ─── Page ─────────────────────────────────────────────────────────────────────
const PhotoVideo: React.FC = () => {
  const galleryImages = [g41, g51, g61, g71, g81, g91, g10, g11, g12];

  const comparisons = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
    { before: before4, after: after4 },
  ];

  return (
    <>
      <GlobalStyle />
      <SEO
        title="Photo & Videography | Nooshin Shahsavan"
        description="Photography, videography, color correction, photo editing, and photomontage work by Nooshin Shahsavan using DSLR, Adobe Photoshop, and Adobe Lightroom."
        keywords="photography, videography, photo editing, color correction, photomontage, DSLR, Lightroom, Photoshop"
        image={funhome}
      />

      <WorksNavMenu />

      <PageBg data-page-scroll>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <HeroWrap id="pv-hero">
          <HeroInner>
            <HeroEyebrow
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <HeroLine />
              <HeroEyebrowText>Personal Project · 2024</HeroEyebrowText>
            </HeroEyebrow>

            <HeroTitle
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            >
              Photo &amp;<br />Videography
            </HeroTitle>

            <InfoTable
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <InfoCell>
                <InfoLabel>Role</InfoLabel>
                <InfoValue>Photographer</InfoValue>
              </InfoCell>
              <InfoCell>
                <InfoLabel>Responsibilities</InfoLabel>
                <InfoValue>Photography · Videography · Photo Editing · Color Correction · Photo Manipulation</InfoValue>
              </InfoCell>
              <InfoCell>
                <InfoLabel>Camera</InfoLabel>
                <InfoValue>DSLR Camera</InfoValue>
              </InfoCell>
              <InfoCell>
                <InfoLabel>Software</InfoLabel>
                <InfoValue>Adobe Photoshop · Adobe Lightroom</InfoValue>
              </InfoCell>
            </InfoTable>
          </HeroInner>
        </HeroWrap>

        <Divider />

        {/* ── SECTION 1: PHOTOGRAPHY FEATURED ──────────────────────────── */}
        <div id="pv-photography">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Section 01</Overline>
                  <H2>Photography</H2>
                  <SectionRule />
                </SectionHeader>
              </Reveal>

              <Reveal variants={revealScale}>
                <FeaturedImg>
                  <img src={funhome} alt="Featured Photography" loading="lazy" />
                </FeaturedImg>
              </Reveal>

              <Reveal delay={0.1}>
                <ProcessRow
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {[straw2, straw3, straw4, straw5].map((src, i) => (
                    <ProcessCard key={i} variants={revealY}>
                      <img src={src} alt={`Process step ${i + 1}`} loading="lazy" />
                    </ProcessCard>
                  ))}
                </ProcessRow>
                <Caption>
                  These images show the process and setup used to create the final featured photograph.
                </Caption>
              </Reveal>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 2: PHOTO GALLERY ─────────────────────────────────── */}
        <div id="pv-gallery">
          <Section $bg="#fafaf8">
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Section 02</Overline>
                  <H2>Photography Gallery</H2>
                  <SectionRule />
                </SectionHeader>
              </Reveal>

              <PhotoGrid
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
              >
                {galleryImages.map((src, i) => (
                  <PhotoCard key={i} variants={revealY}>
                    <img src={src} alt={`Gallery photo ${i + 1}`} loading="lazy" />
                  </PhotoCard>
                ))}
              </PhotoGrid>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 3: COLOR CORRECTION ──────────────────────────────── */}
        <div id="pv-editing">
          <Section>
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Section 03</Overline>
                  <H2>Color Correction &amp; Editing</H2>
                  <SectionRule />
                  <Lead>All edits were completed using Adobe Photoshop and Adobe Lightroom.</Lead>
                </SectionHeader>
              </Reveal>

              <CompareGrid>
                {comparisons.map((pair, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <CompareRow variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                      <CompareItem>
                        <CompareLabel $type="before">Before</CompareLabel>
                        <CompareImg variants={revealScale}>
                          <img src={pair.before} alt={`Before ${i + 1}`} loading="lazy" />
                        </CompareImg>
                      </CompareItem>
                      <CompareItem>
                        <CompareLabel $type="after">After</CompareLabel>
                        <CompareImg variants={revealScale}>
                          <img src={pair.after} alt={`After ${i + 1}`} loading="lazy" />
                        </CompareImg>
                      </CompareItem>
                    </CompareRow>
                  </Reveal>
                ))}
              </CompareGrid>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 4: PHOTOMONTAGE ──────────────────────────────────── */}
        <div id="pv-montage">
          <Section $bg="#fafaf8">
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline>Section 04</Overline>
                  <H2>Photomontage</H2>
                  <SectionRule />
                  <Lead>
                    These final artworks were created by photographing multiple individual elements
                    and combining them into a single composition. Adobe Photoshop was used for
                    compositing, color grading, lighting adjustments, and digital painting techniques
                    to achieve the final result.
                  </Lead>
                </SectionHeader>
              </Reveal>

              <MontageGrid
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <MontageCard variants={revealScale}>
                  <img src={montage1} alt="Photomontage 1" loading="lazy" />
                </MontageCard>
                <MontageCard variants={revealScale}>
                  <img src={montage2} alt="Photomontage 2" loading="lazy" />
                </MontageCard>
              </MontageGrid>
            </Container>
          </Section>
        </div>

        <Divider />

        {/* ── SECTION 5: VIDEOGRAPHY ───────────────────────────────────── */}
        <div id="pv-video">
          <Section $bg="#0d0d0d">
            <Container>
              <Reveal>
                <SectionHeader>
                  <Overline style={{ color: '#c9a96e' }}>Section 05</Overline>
                  <H2 style={{ color: '#fff' }}>Videography</H2>
                  <SectionRule style={{ background: '#c9a96e' }} />
                </SectionHeader>
              </Reveal>

              <VideoGrid>
                <Reveal>
                  <VideoWrap variants={revealY} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <LazyVideo
                      src={video1}
                      controls
                      playsInline
                      muted
                      controlsList="nodownload"
                      objectFit="contain"
                      style={{ width: '100%', height: '100%' }}
                      aria-label="Videography clip 01"
                    />
                  </VideoWrap>
                  <VideoLabel style={{ color: 'rgba(255,255,255,0.45)' }}>Video — 01</VideoLabel>
                </Reveal>

                <Reveal delay={0.12}>
                  <VideoWrap variants={revealY} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <LazyVideo
                      src={video2}
                      controls
                      playsInline
                      muted
                      controlsList="nodownload"
                      objectFit="contain"
                      style={{ width: '100%', height: '100%' }}
                      aria-label="Videography clip 02"
                    />
                  </VideoWrap>
                  <VideoLabel style={{ color: 'rgba(255,255,255,0.45)' }}>Video — 02</VideoLabel>
                </Reveal>
              </VideoGrid>
            </Container>
          </Section>
        </div>

        <EmailFooter />
      </PageBg>

      <TopScrollButton />
    </>
  );
};

export default PhotoVideo;
