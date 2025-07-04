import React from "react";
import styled from "styled-components";
import story from "../../assets/deli/deli1.mp4";
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
  width: 100vw;
  height: 100vh;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  padding: 2rem 0;
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
  white-space: pre-line;
  @media (max-width: 900px) {
    max-width: 100vw;
  }
`;

const VideoCol = styled.div`
  flex: 1 1 0;
  min-width: 220px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  @media (max-width: 900px) {
    max-width: 100vw;
    align-items: center;
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
  object-fit: cover;
  display: block;
  border-radius: 12px;
  box-sizing: border-box;
`;

const InfoText = styled.div`
  font-size: 0.8rem;
  color: #717070;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
  align-self: flex-start;
  margin-top: 1rem;
  box-sizing: border-box;
  @media (max-width: 900px) {
    text-align: left;
    align-self: flex-start;
    margin-top: 1rem;
    padding: 0 0.5rem;
  }
`;

const DeliFirst: React.FC = () => (
  <Wrapper>
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
              Delicato
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
              style={{ fontSize: '1rem', color: '#504f51', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Brand identity
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
            Delicato is a small interior design company from Italy that relies on classical architecture in its designs. The core value of this brand is to create spaces that blend the richness of historical elements with modern aesthetics.
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.7 }}
            style={{ color: '#717070', fontSize: '0.80rem', fontWeight: 400, marginTop: '1.6vw', marginRight: 0, textAlign: 'left', lineHeight: 1.28, alignSelf: 'flex-start' }}
          >
            Role: Brand Designer<br />
            Tools: (Adobe Illustrator, After Effects, Photoshop)<br />
            Timeline: 2 weeks<br />
            Year: 2024
          </motion.div>
        </VideoCol>
      </ContentRow>
    </Section>
  </Wrapper>
);

export default DeliFirst; 