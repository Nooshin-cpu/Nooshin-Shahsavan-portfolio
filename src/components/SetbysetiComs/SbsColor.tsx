import React from "react";
import styled from "styled-components";
import colorVideo from "../../assets/sbsimg/color-sbs.mp4";
import { motion } from 'framer-motion';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentRow = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: 6vw;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2vw;
  }
`;

const VideoBlock = styled.div`
  flex: none;
  width: 66vw;
  height: 50vw;
  max-width: 1080px;
  max-height: 720px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  margin-right: 1vw;
  @media (max-width: 1100px) {
    width: 96vw;
    height: 60vw;
    margin-right: 0;
    max-width: 96vw;
    max-height: 60vw;
    align-items: center;
  }
`;

const StyledVideo = styled.video`
  width: 70%;
  height: 70%;
  object-fit: fill;
  background: transparent;
  border: none;
  box-shadow: none;
  display: block;
  margin-bottom: 0;
`;

const RightTextBlock = styled.div`
  flex: none;
  width: 20vw;
  min-width: 270px;
  max-width: 380px;
  height: 44vw;
  max-height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #fff;
  @media (max-width: 1100px) {
    width: 90vw;
    max-width: 96vw;
    height: auto;
    margin-top: 2vw;
    justify-content: flex-start;
  }
`;

const TopLabel = styled.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.25em;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 400;
  color: #fff;
  margin: 0 0 1.8rem 0;
  line-height: 1.07;
  letter-spacing: -1px;
`;

const BodyText = styled.div`
  font-size: 1rem;
  color: #ccc;
  font-weight: 400;
  line-height: 1.5;
  max-width: 370px;
`;

const SbsColor: React.FC = () => (
  <Section>
    <ContentRow>
      <VideoBlock>
        <StyledVideo
          src={colorVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          aria-label="Color palette video"
        />
      </VideoBlock>
      <RightTextBlock>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.7 }}
          style={{ fontSize: '1.01rem', fontWeight: 600, color: '#888', marginBottom: '0.25em' }}
        >
          COLOR
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.7 }}
          style={{ fontSize: '2.3rem', fontWeight: 400, color: '#fff', margin: '0 0 1.8rem 0', lineHeight: 1.07, letterSpacing: '-1px' }}
        >
          PALETTE
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.7 }}
          style={{ fontSize: '1rem', color: '#ccc', fontWeight: 400, lineHeight: 1.5, maxWidth: 370 }}
        >
          <span style={{ display: 'block', fontSize: '1rem', color: '#504f51', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35em' }}>Challenge</span>
          Choose colors that don't compete with the linework but instead enhance it — and that also match the feeling of lightness and freedom.

          <span style={{ display: 'block', fontSize: '1rem', color: '#504f51', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '1.2em 0 0.35em 0' }}>Solution</span>
          Since my graphics are based on lines (to show movement and flow), I selected nude and soft colors that are not too bold. This choice allows the lines to stay visually dominant and makes them more visible in key areas.

          The color palette also includes transparent tones, which symbolize party lights and add a sense of ambiance. These colors support the illustrations without distracting from them — helping the lines stay expressive while keeping the overall look light and modern.
        </motion.div>
      </RightTextBlock>
    </ContentRow>
  </Section>
);

export default SbsColor;