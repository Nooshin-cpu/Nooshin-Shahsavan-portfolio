import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import SEO from "../SEO";

import img1 from '../../assets/zar/logo1.jpeg';
import img2 from '../../assets/zar/logo2.jpg';
import img3 from '../../assets/zar/logo3.jpg';
import img4 from '../../assets/zar/logo4.png';
import img5 from '../../assets/zar/logo5.png';

const images = [img1, img2, img3, img4, img5];

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

const Title = styled(motion.h2)`
  font-size: 2.1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const ImagesRow = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    gap: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    margin-bottom: 1rem;
  }
`;

const ImgCard = styled(motion.div)`
  width: 260px;
  height: 260px;
  background: var(--background);
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid rgb(163, 73, 198);
  flex: 0 0 auto;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;

  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: rgb(163, 73, 198);
  }

  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 320px;
    max-height: 320px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: transparent;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const ZarLogoP: React.FC = () => (
  <Container>
    <SEO 
      title="Zar Logo Process | Nooshin Shahsavan"
      description="Zar logo design process - evolution from concept to final brand identity"
      keywords="Zar logo process, brand identity, logo design, Nooshin Shahsavan"
    />
    <SectionCard
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Title variants={itemVariants}>Logo Process</Title>
      <ImagesRow variants={itemVariants}>
        {images.map((src, idx) => (
          <ImgCard key={idx} variants={itemVariants}>
            <Img src={src} alt={`Zar logo process ${idx + 1}`} />
          </ImgCard>
        ))}
      </ImagesRow>
    </SectionCard>
  </Container>
);

export default ZarLogoP;