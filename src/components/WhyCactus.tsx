import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CactusAnimation from './CactusAnimation';

const WhyCactusContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: #191c24;
  color: #ffffff;
  position: relative;
  z-index: 1;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 500px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 400;
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AnimationColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 2rem;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 250%;
  height: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  margin: 0 auto;
  transform: scale(2.5);
  transform-origin: center center;
  z-index: 4;
`;

const WhyCactus: React.FC = () => {
  return (
    <WhyCactusContainer>
      <GridContainer>
        <TextColumn
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Title>Why a Cactus? 🌵</Title>
          <Text>
            You might be wondering why my logo is a cactus!
          </Text>
          <Text>
            Well, I'm not a cactus 😄 — but I chose the shape of a cactus for my logo because I truly see parts of myself in it.
          </Text>
          <Text>
            I'm someone who keeps going and stays strong no matter the circumstances. I'm patient and resilient.
          </Text>
          <Text>
            I always try to adapt to my surroundings and stay "green" — full of life and growth.
          </Text>
          <Text>
            That's exactly why I chose the cactus as my personal symbol 🌵✨
          </Text>
        </TextColumn>

        <AnimationColumn
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Container>
            <CactusAnimation />
          </Container>
        </AnimationColumn>
      </GridContainer>
    </WhyCactusContainer>
  );
};

export default WhyCactus;
