import React from "react";
import styled from "styled-components";
import story from "../../assets/zar/zar-logoline.mp4";
import { motion } from 'framer-motion';

const FullWrapper = styled.div`
  width: 100vw;
  height:100vh;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

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
    height: auto;
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
    width: 98vw;
    padding: 0 0.5rem;
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

const SubLabel = styled.div`
  font-size: 1rem;
  color: #504f51;
  font-weight: 400;
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
`;

const OverviewText = styled.p`
  font-size: 1.06rem;
  color: #504f51;
  font-weight: 400;
  line-height: 1.54;
  margin: 0;
  max-width: 620px;
  @media (max-width: 900px) {
    max-width: 100vw;
  }
`;

const VideoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 220px;
  flex: 1 1 0;
  max-width: 480px;
  height: 100%;
  justify-content: flex-start;
  box-sizing: border-box;
  @media (max-width: 900px) {
    align-items: flex-start;
    width: 100vw;
    max-width: 100vw;
    height: auto;
    margin-bottom: 2vw;
    padding: 0 0.5rem;
  }
`;

const VideoFrame = styled.div`
  width: 100%;
  max-width: 420px;
  aspect-ratio: 16 / 9;
  background: #dddddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 97vw;
    max-width: 97vw;
    aspect-ratio: 16 / 9;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  box-shadow: none;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  box-sizing: border-box;
`;

const InfoText = styled.div`
  color: #717070;
  font-size: 0.80rem;
  font-weight: 400;
  margin-top: 1rem;
  text-align: left;
  line-height: 1.28;
  box-sizing: border-box;
  align-self: flex-start;
  @media (max-width: 900px) {
    margin-top: 1rem;
    text-align: left;
    font-size: 0.93rem;
    padding: 0 0.5rem;
    align-self: flex-start;
  }
`;

const ZarFirst: React.FC = () => (
  <FullWrapper>
    <Section>
      <ContentRow>
        {/* Left Labels */}
        <LeftCol>
          <TopLabels>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
              style={{ fontSize: '1.01rem', fontWeight: 600, color: '#888888', marginBottom: '0.35em', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Zar
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
              style={{ fontSize: '1rem', color: '#504f51', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Brand identity / Packaging
            </motion.div>
          </TopLabels>
          <MainTextBlock>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
              style={{ fontSize: '2.7rem', fontWeight: 400, color: '#111', margin: '0 0 2rem 0', lineHeight: 1.07, letterSpacing: '-1px', textTransform: 'uppercase' }}
            >
              Project Overview
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
              style={{ fontSize: '1.06rem', color: '#504f51', fontWeight: 400, lineHeight: 1.54, margin: 0, maxWidth: 620 }}
            >
            ZAR is a premium saffron brand that celebrates the richness of Persian culture through a modern lens. This project aimed to design a brand identity and packaging system that captures the luxury, delicacy, and heritage of saffron while appealing to a contemporary, global audience.

From logo and typography to packaging and illustration, every design decision was guided by a clear brand strategy: to make ZAR not just a spice brand, but a symbol of Persian elegance and cultural pride — merging authentic tradition with modern minimalism.


            </motion.p>
          </MainTextBlock>
        </LeftCol>

        {/* Video and Info */}
        <VideoCol>
          <VideoFrame>
            <StyledVideo
              src={story}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              aria-label="Veen project video"
            />
          </VideoFrame>
          <InfoText>
            Role: Brand Designer- Graphic Designer<br />
            Tools: (Adobe Illustrator, After Effects, Photoshop)<br />
            Timeline: 2 weeks<br />
            Year: 2024
          </InfoText>
        </VideoCol>
      </ContentRow>
    </Section>
  </FullWrapper>
);

export default ZarFirst;