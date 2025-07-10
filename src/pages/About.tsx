import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrambledText from '../components/ScrambledText';
import ImageTrail from '../components/ImageTrail';
import DecryptedText from '../components/DecryptedText';
import { IonIcon } from '@ionic/react';
import { logoLinkedin, mail, document } from 'ionicons/icons';
import man8 from '../assets/about/man-8.jpg';
import CactusAnimation from '../components/CactusAnimation';
import Skill from '../components/skill';
import WhyCactus from '../components/WhyCactus';
import StickyMenu from '../components/StickyMenu';
import { ClassicFooter } from '../components/Footer';

// Import images for ImageTrail
import man1 from '../assets/about/man-1.jpg';
import man2 from '../assets/about/man-2.jpg';
import man3 from '../assets/about/man-3.jpg';
import man4 from '../assets/about/man-4.jpeg';
import man5 from '../assets/about/man-5.jpg';
import man6 from '../assets/about/man-6.jpg';
import man7 from '../assets/about/man-7.jpg';

// Responsive global style to prevent scroll
const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden !important;
    margin: 0;
    padding: 0;
    background: #191c24;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #191c24;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #191c24;
  z-index: 1;
`;

const ImageTrailSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #191c24;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    height: 70vh;
    min-height: 400px;
    padding: 0 8px;
  }
`;

const ImageTrailTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

const CenteredOverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 1.5rem;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutGrid = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 550px 1fr;
  gap: 64px;
  position: relative;
  align-items: start;
  padding: 32px 0;
  box-sizing: border-box;
  color: #ffffff;
  font-family: Montserrat, sans-serif;
  line-height: 25.6px;
  opacity: 1;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 95%;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 16px 0;
  }
`;

const AboutImageColumn = styled.div`
  position: sticky;
  top: 80px;
  width: 100%;
  max-width: 500px;
  height: 700px;
  overflow: hidden;
  opacity: 1;
  visibility: visible;
  grid-column: 2;
  grid-row: 1;
  z-index: 3;

  @media (max-width: 1200px) {
    max-width: 100%;
    height: 600px;
    grid-column: 2;
    grid-row: 1;
    position: relative;
    top: 0;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 400px;
    grid-column: 1;
    grid-row: 2;
    position: relative;
    top: 0;
  }
  @media (max-width: 480px) {
    height: 220px;
  }
`;

const StickyImageWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 1;
  visibility: visible;
  z-index: 3;
`;

const AboutImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease, filter 0.6s ease;
  }
  &:hover img {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const AboutTextColumn = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  z-index: 3;

  @media (max-width: 900px) {
    grid-column: 1;
    grid-row: 1;
    padding: 1rem 0;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 0;
  }
`;

const AboutTextContent = styled(motion.div)`
  max-width: 600px;
  z-index: 4;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #ffffff;
    z-index: 5;

    @media (max-width: 768px) {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #ffffff;
    opacity: 0.9;
    z-index: 5;
  }
`;

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Create scroll-based animations
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.2], [50, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const imageX = useTransform(scrollYProgress, [0.15, 0.25], [50, 0]);
  const imageRotate = useTransform(scrollYProgress, [0.15, 0.25], [5, 0]);

  const aboutText = `Hi! I'm Nooshin.
I'm originally from Iran and have been living in Vancouver for nearly two years. I hold both a Bachelor's and Master's degree in Graphic Design from my home country, and I recently completed a diploma in New Media Design and Web Development at BCIT.

Throughout my career, I've taught graphic design software, worked as a graphic and brand designer—both as part of a creative team and as a freelancer.

My skills include graphic design, UX/UI, marketing, and web development. I'm passionate about crafting design solutions that are not only functional but also visually engaging.

In my free time, I enjoy caring for my plants, spending quality time with my family, and going for walks to unwind and find inspiration.`;

  const images = [man1, man2, man3, man5, man6, man7];

  return (
    <AboutContainer>
      <GlobalStyle />
      <StickyMenu />
      <Section style={{ background: '#191c24', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AboutGrid>
          <AboutImageColumn>
            <StickyImageWrapper>
              <AboutImage
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src={man8}
                  alt="About me image"
                />
              </AboutImage>
            </StickyImageWrapper>
          </AboutImageColumn>
          <AboutTextColumn>
            <AboutTextContent
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2>Who I am?</h2>
              {aboutText.split('\n\n').map((paragraph, idx) => (
                <ScrambledText
                  key={idx}
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  <p style={{ marginBottom: '0.7em' }}>{paragraph}</p>
                </ScrambledText>
              ))}
            </AboutTextContent>
          </AboutTextColumn>
        </AboutGrid>
      </Section>
      <Skill />
      <WhyCactus />
      <Section>
        <ImageTrailSection>
          <ImageTrailTitle>My interests and I</ImageTrailTitle>
          <CenteredOverlayText>Drag the mouse to see me 🥰</CenteredOverlayText>
          <ImageTrail items={images} variant={1} />
        </ImageTrailSection>
      </Section>
      <ClassicFooter />
    </AboutContainer>
  );
};

export default About;