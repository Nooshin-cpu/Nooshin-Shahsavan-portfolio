import React from "react";
import styled from "styled-components";
import typeVideo from "../../assets/zar/zar-type.mp4";
import { motion } from 'framer-motion';
import SEO from "../SEO";

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`;

const SectionCard = styled(motion.section)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: var(--cardBackground);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
    margin: 0 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.08rem;
  color: var(--text);
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1rem;
  }
`;

const VideoWrapper = styled(motion.div)`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: var(--background);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);

  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 600px) {
    width: 98vw;
    margin-bottom: 1.2rem;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const InfoGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;

  @media (max-width: 900px) {
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const InfoItem = styled(motion.div)`
  min-width: 120px;
  text-align: center;
`;

const InfoLabel = styled.div`
  font-size: 0.92rem;
  color: var(--accent1);
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const InfoValue = styled.div`
  font-size: 1.08rem;
  color: var(--text);
  font-weight: 400;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ZarType: React.FC = () => (
  <Container>
    <SEO 
      title="Zar Typography | Nooshin Shahsavan"
      description="Zar typography - Amandine and Housechks typefaces for elegant and warm brand identity"
      keywords="Zar typography, Amandine, Housechks, typefaces, brand identity, Nooshin Shahsavan"
    />
    <SectionCard
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Title variants={itemVariants}>Typography</Title>
      <Description variants={itemVariants}>
        Primary Typeface: Amandine Elegant and finely curved, perfect for headlines and packaging. Secondary Typeface: Housechks A handwritten script that brings warmth and human feeling to the brand.
      </Description>
      
      <VideoWrapper variants={itemVariants}>
        <StyledVideo
          src={typeVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={true}
          aria-label="Typography video"
        />
      </VideoWrapper>
      
      <InfoGrid variants={itemVariants}>
        <InfoItem variants={itemVariants}>
          <InfoLabel>Primary</InfoLabel>
          <InfoValue>Amandine</InfoValue>
        </InfoItem>
        <InfoItem variants={itemVariants}>
          <InfoLabel>Secondary</InfoLabel>
          <InfoValue>Housechks</InfoValue>
        </InfoItem>
        <InfoItem variants={itemVariants}>
          <InfoLabel>Style</InfoLabel>
          <InfoValue>Elegant & Warm</InfoValue>
        </InfoItem>
      </InfoGrid>
    </SectionCard>
  </Container>
);

export default ZarType;