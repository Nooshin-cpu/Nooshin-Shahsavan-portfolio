import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ScrambledText from './ScrambledText';

const HeroContainer = styled.section`
  min-height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #191c24;
  position: relative;
  overflow: hidden;
`;

const ParticlesBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const TiltCard = styled(Tilt)`
  background: rgba(30, 40, 60, 0.85);
  border-radius: 32px;
  box-shadow: 0 8px 48px 0 rgba(0,0,0,0.25);
  padding: 3rem 2.5rem;
  max-width: 480px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  backdrop-filter: blur(4px);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 0.04em;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #b2e6f7;
  margin-bottom: 2rem;
  text-align: center;
`;

const CTAButton = styled(motion.a)`
  padding: 1rem 2.5rem;
  background: #00d8ff;
  color: #191c24;
  border-radius: 32px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(0,216,255,0.15);
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: #191c24;
    color: #00d8ff;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 2rem;
  opacity: 0.7;
  animation: bounce 1.5s infinite;
  z-index: 2;
  @keyframes bounce {
    0%, 100% { transform: translate(-50%, 0); }
    50% { transform: translate(-50%, 16px); }
  }
`;

const Hero: React.FC = () => {
  // Particle options (simple, modern, light)
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  const particlesOptions = {
    background: { color: { value: '#191c24' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#00d8ff' },
      links: { enable: true, color: '#00d8ff', distance: 120, opacity: 0.3, width: 1 },
      collisions: { enable: false },
      move: { enable: true, speed: 1.2, direction: 'none', random: false, straight: false, outModes: { default: 'out' } },
      number: { value: 40, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 2, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <HeroContainer>
      <ParticlesBg>
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </ParticlesBg>
      <TiltCard glareEnable={true} glareMaxOpacity={0.15} scale={1.04} tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <HeroTitle
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ScrambledText>Your Name</ScrambledText>
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Creative Developer & Designer
        </HeroSubtitle>
        <CTAButton
          href="#work"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          See My Work
        </CTAButton>
      </TiltCard>
      <ScrollIndicator>↓</ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero; 