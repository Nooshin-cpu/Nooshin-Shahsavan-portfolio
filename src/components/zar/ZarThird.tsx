import React from 'react';
import styled from 'styled-components';
import logo1 from '../../assets/zar/logo-zar-1.png';
import logo2 from '../../assets/zar/zar-logo.mp4';
import logo3 from '../../assets/zar/logo-zar-2.png';
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

const Highlight = styled.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`;

const MediaWrapper = styled(motion.div)`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;

  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 600px) {
    width: 98vw;
    gap: 0.5rem;
  }
`;

const ImageRow = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
`;

const StyledImage = styled.img`
  width: 50%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 100%;
  }
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

const ZarThird: React.FC = () => (
  <Container>
    <SEO 
      title="Zar Logo Design | Nooshin Shahsavan"
      description="Zar logo design process - saffron flower symbol and elegant typography"
      keywords="Zar logo, saffron flower, brand identity, typography, Nooshin Shahsavan"
    />
    <SectionCard
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Title variants={itemVariants}>Logo Design</Title>
      <Description variants={itemVariants}>
        For the pictorial logo, my goal was to <Highlight>represent a symbol of the saffron flower</Highlight>. Therefore, based on the images provided below, you can see the steps of analyzing a real saffron flower, simplifying its form, and finally creating the resulting logo design.
      </Description>
      
      <MediaWrapper variants={itemVariants}>
        <StyledVideo
          src={logo2}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          aria-label="ZAR logo animation"
        />
        <ImageRow>
          <StyledImage 
            src={logo1} 
            alt="ZAR logo design" 
          />
          <StyledImage 
            src={logo3} 
            alt="ZAR logo variations" 
          />
        </ImageRow>
      </MediaWrapper>
      <Description variants={itemVariants}>
        In the wordmark logo, I tried to design something that reflects the <Highlight>delicacy</Highlight> and <Highlight>fragility of saffron</Highlight>. That's why I chose a fine and elegant typeface.
      </Description>
    </SectionCard>
  </Container>
);

export default ZarThird;