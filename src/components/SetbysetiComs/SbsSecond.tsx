import React from 'react';
import styled from 'styled-components';
import logo1 from '../../assets/sbsimg/s-logo1.png';
import logo2 from '../../assets/sbsimg/s-logo2.mp4';
import logo3 from '../../assets/sbsimg/s-logo3.png';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  @media (max-width: 900px) {
    min-height: 60vw;
    padding: 0;
  }
`;

const ContentRow = styled.div`
  width: 70vw;
  max-width: 1200px;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    min-height: 40vw;
    padding: 0 2vw;
  }
`;

const LeftCol = styled.div`
  min-width: 320px;
  max-width: 460px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 4vw;
  @media (max-width: 900px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 4vw;
    min-width: 0;
    padding: 0 2vw;
  }
`;

const TopLabels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 0.35em;
`;

const TopLabel = styled.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888888;
  margin-bottom: 0.35em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MainTextBlock = styled.div`
  margin-top: 0;
`;

const BigTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 400;
  color: #111;
  margin: 0 0 2rem 0;
  line-height: 1.07;
  letter-spacing: -1px;
  text-transform: uppercase;
  @media (max-width: 900px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
`;

const OverviewText = styled.p`
  font-size: 1.06rem;
  color: #504f51;
  font-weight: 400;
  line-height: 1.54;
  margin: 0;
  max-width: 620px;
  white-space: pre-line;
  @media (max-width: 900px) {
    max-width: 100vw;
    font-size: 0.98rem;
  }
`;

const RightCol = styled.div`
  flex: 1 1 0;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  @media (max-width: 900px) {
    min-width: 0;
    align-items: center;
    width: 100vw;
    padding: 0 2vw;
    margin-bottom: 2vw;
  }
`;

const MediaLayout = styled.div`
  position: relative;
  width: 580px;
  height: 420px;
  @media (max-width: 900px) {
    width: 94vw;
    height: 60vw;
    min-width: 0;
    max-width: 100vw;
  }
`;

const Img1 = styled.img`
  position: absolute;
  top: 0;
  left: 230px;
  width: 180px;
  height: 180px;
  object-fit: contain;
  @media (max-width: 900px) {
    position: static;
    width: 45vw;
    height: 22vw;
    display: block;
    margin: 0 auto 2vw auto;
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  left: 0;
  top: 130px;
  width: 400px;
  height: 320px;
  object-fit: contain;
  @media (max-width: 900px) {
    position: static;
    width: 85vw;
    height: 34vw;
    display: block;
    margin: 0 auto 2vw auto;
  }
`;

const Img2 = styled.img`
  position: absolute;
  left: 370px;
  top: 250px;
  width: 180px;
  height: 180px;
  object-fit: contain;
  @media (max-width: 900px) {
    position: static;
    width: 45vw;
    height: 22vw;
    display: block;
    margin: 0 auto;
  }
`;

const SbsSecond: React.FC = () => (
  <Section>
    <ContentRow>
      {/* Left Text */}
      <LeftCol>
        <TopLabels>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.7 }}
            style={{ fontSize: '1.01rem', fontWeight: 600, color: '#888888', marginBottom: '0.35em', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            Logo
          </motion.div>
        </TopLabels>
        <MainTextBlock>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.7 }}
            style={{ fontSize: '2.7rem', fontWeight: 400, color: '#111', margin: '0 0 2rem 0', lineHeight: 1.07, letterSpacing: '-1px', textTransform: 'uppercase' }}
          >
            Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.7 }}
            style={{ fontSize: '1.06rem', color: '#504f51', fontWeight: 400, lineHeight: 1.54, margin: 0, maxWidth: 620, whiteSpace: 'pre-line' }}
          >
            <span style={{ display: 'block', fontSize: '1rem', color: '#504f51', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35em' }}>Challenge</span>
            Design a logo that reflects the values of freedom, movement, and carefreeness and also functions as part of every clothing graphic.

            <span style={{ display: 'block', fontSize: '1rem', color: '#504f51', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '1.2em 0 0.35em 0' }}>Solution</span>
            For the logo, I designed a graphic mark using the three initials of the brand name: Set by Sei (S.B.S). My goal was for this logo not only to represent the brand but to exist as part of every clothing design, acting as both a symbol and a visual element. If you look at the clothing graphics, you'll notice the logo appears in almost every design — placed in different spots, blending into the artwork.

            To reflect the brand's spirit, I used curved lines that represent movement, emotional freedom, and carefreeness. These curves bring softness and rhythm to the logo, allowing it to feel alive and in motion, just like the brand's audience.
          </motion.p>
        </MainTextBlock>
      </LeftCol>

      {/* Right Media */}
      <RightCol>
        <MediaLayout>
          <Img1 src={logo1} alt="S.B.S Logo 1" />
          <StyledVideo
            src={logo2}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            aria-label="S.B.S Logo 2"
          />
          <Img2 src={logo3} alt="S.B.S Logo 3" />
        </MediaLayout>
      </RightCol>
    </ContentRow>
  </Section>
);

export default SbsSecond;