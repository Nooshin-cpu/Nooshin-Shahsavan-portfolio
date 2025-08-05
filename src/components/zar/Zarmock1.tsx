import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import SEO from "../SEO";
import mockImg from "../../assets/zar/zarbscard.jpg";

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;

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

const ImageWrapper = styled(motion.div)`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: var(--background);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);

  @media (max-width: 900px) {
    width: 90%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    width: 98vw;
    border-radius: 10px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
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

const Zarmock1: React.FC = () => (
  <Container>
    <SEO 
      title="Zar Mockup 1 | Nooshin Shahsavan"
      description="Zar brand mockup - business card design"
      keywords="Zar mockup, business card, brand identity, Nooshin Shahsavan"
    />
    <SectionCard
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <ImageWrapper variants={itemVariants}>
        <StyledImage src={mockImg} alt="Zar Mockup 1" />
      </ImageWrapper>
    </SectionCard>
  </Container>
);

export default Zarmock1;