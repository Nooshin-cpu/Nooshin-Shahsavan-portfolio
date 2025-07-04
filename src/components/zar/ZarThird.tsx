import React from 'react';
import styled from 'styled-components';
import logo1 from '../../assets/zar/logo-zar-1.png';
import logo2 from '../../assets/zar/zar-logo.mp4';
import logo3 from '../../assets/zar/logo-zar-2.png';
import { motion } from 'framer-motion';

const Section = styled.section`
  width: 100vw;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  padding: 2rem 0;
  height: 100vh;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const ContentRow = styled.div`
  width: 70vw;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    width: 100vw;
    max-width: 100vw;
    padding: 0 0.5rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const LeftCol = styled.div`
  min-width: 220px;
  max-width: 460px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 4vw;
  box-sizing: border-box;
  @media (max-width: 900px) {
    max-width: 100vw;
    margin-right: 0;
    margin-bottom: 2vw;
    padding: 0 0.5rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const TopLabels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 0.35em;
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
`;

const StyledLabel = styled.span`
  display: block;
  font-size: 1rem;
  color: #504f51;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35em;
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
  }
`;

const RightCol = styled.div`
  flex: 1 1 0;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 900px) {
    min-width: 0;
    align-items: center;
    padding: 0 0.5rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const MediaLayout = styled.div`
  position: relative;
  width: 580px;
  height: 420px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const Img1 = styled.img`
  position: absolute;
  top: 0;
  left: 230px;
  width: 180px;
  height: 180px;
  object-fit: contain;
  box-sizing: border-box;
  @media (max-width: 900px) {
    position: static;
    width: 80vw;
    height: auto;
    max-width: 300px;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  left: 0;
  top: 130px;
  width: 400px;
  height: 320px;
  object-fit: contain;
  box-sizing: border-box;
  @media (max-width: 900px) {
    position: static;
    width: 90vw;
    height: auto;
    max-width: 400px;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const Img2 = styled.img`
  position: absolute;
  left: 370px;
  top: 250px;
  width: 180px;
  height: 180px;
  object-fit: contain;
  box-sizing: border-box;
  @media (max-width: 900px) {
    position: static;
    width: 80vw;
    height: auto;
    max-width: 300px;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const ZarThird: React.FC = () => (
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
          <OverviewText>
            <StyledLabel>Challenge</StyledLabel>
            Create a logo that represents luxury, culture, and authenticity while balancing modern minimalism and Persian elegance.<br/><br/>
            <StyledLabel>Solution</StyledLabel>
            The primary logo is a custom wordmark of "ZAR" using elongated, elegant letterforms inspired by Persian calligraphy. It combines sharp angles and soft curves, symbolizing the brand's dual values of precision and beauty.<br/><br/>
            The submark includes a stylized saffron flower illustration with organic lines, framed by the words "ZAR," "SAFFRON," "PREMIUM," and "1988." This version emphasizes heritage and craftsmanship, adding an artisanal, authentic character to the brand for use in packaging, stamps, and seals.
          </OverviewText>
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
            aria-label="zar Logo 2"
          />
          <Img2 src={logo3} alt="zar Logo 3" />
        </MediaLayout>
      </RightCol>
    </ContentRow>
  </Section>
);

export default ZarThird;