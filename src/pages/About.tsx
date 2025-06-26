import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrambledText from '../components/ScrambledText';
import ImageTrail from '../components/ImageTrail';
import FlipCard from '../components/FlipCard';
import DecryptedText from '../components/DecryptedText';
import { IonIcon } from '@ionic/react';
import { logoLinkedin, mail, document } from 'ionicons/icons';
import man8 from '../assets/about/man-8.jpg';
import CactusAnimation from '../components/CactusAnimation';
import Skill from '../components/Skill';
import WhyCactus from '../components/WhyCactus';

// Import images for ImageTrail
import man1 from '../assets/about/man-1.jpg';
import man2 from '../assets/about/man-2.jpg';
import man3 from '../assets/about/man-3.jpg';
import man4 from '../assets/about/man-4.jpeg';
import man5 from '../assets/about/man-5.jpg';
import man6 from '../assets/about/man-6.jpg';
import man7 from '../assets/about/man-7.jpg';

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 4rem 0;
`;
 
const ImageTrailSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.background};
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageTrailTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  text-align: center;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const CenteredOverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TextSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  padding: 2rem 0;
  align-items: start;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ImageColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  @media (max-width: 768px) {
    position: relative;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    width: 90%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 95%;
  }
`;

const AboutGrid = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 550px 500px;
  gap: 64px;
  position: relative;
  align-items: start;
  padding: 32px 0;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  font-family: Montserrat, sans-serif;
  line-height: 25.6px;
  opacity: 1;
  z-index: 1;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 1200px) {
    width: 90%;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 24px 0;
  }
`;

const AboutImageColumn = styled.div`
  position: sticky;
  top: 80px;
  width: 500px;
  height: 700px;
  overflow: hidden;
  opacity: 1;
  visibility: visible;
  grid-column: 2;
  grid-row: 1;

  @media (max-width: 1200px) {
    width: 100%;
    height: 600px;
    grid-column: 2;
    grid-row: 1;
    position: relative;
    top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
    grid-column: 1;
    grid-row: 2;
    position: relative;
    top: 0;
  }

  @media (max-width: 480px) {
    height: 300px;
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

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    height: 100%;
  }
`;

const AboutImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 1rem;
  gap: 2rem;
  opacity: 1;
  visibility: visible;
  color: #ffffff;
  grid-column: 1;
  grid-row: 1;

  @media (max-width: 1200px) {
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    padding: 0.5rem;
    align-items: flex-start;
  }
`;

const AboutTextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 550px;

  h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
    font-weight: 600;
    color: #ffffff;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    line-height: 1.6;
    color: #ffffff;
    opacity: 0.9;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 800px) {
    padding: 0.75rem 0;
    max-width: 100%;
  }

  @media (max-width: 400px) {
    padding: 0.5rem 0;
  }
`;

// Add new styled components for the contact section
const ContactSection = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  min-height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 90%;
    min-height: auto;
  }
`;

const ContactInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ContactHeading = styled.h2`
  font-size: 3.5rem;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);

  &:hover {
    color: #007bff;
    transform: translateY(-3px);
    background: rgba(0, 123, 255, 0.1);
  }
`;

const AnimationColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 500px;
  position: relative;
  z-index: 1;
  overflow: visible;
  padding: 2rem;
  background: transparent;

  @media (max-width: 768px) {
    min-height: 400px;
    padding: 1rem;
  }
`;

const AnimationWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Create scroll-based animations
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.2], [50, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const imageX = useTransform(scrollYProgress, [0.15, 0.25], [50, 0]);
  const imageRotate = useTransform(scrollYProgress, [0.15, 0.25], [5, 0]);

  const aboutText = "Hi! my name is Nooshin. I'm originally from Iran and have been living in Vancouver for nearly two years. With a background in Graphic Design and over a decade of teaching Adobe software and design in high schools, I also worked with a small import/export firm to build their social media presence. After moving to Canada, I enrolled in BCIT's New Media Design and Web Development program to learn how design systems work here. Along the way, I gained skills in UX/UI, marketing, and web development, and began freelancing to help clients elevate their brands. I'm proficient in Adobe Creative Suite and Figma, and I enjoy creating design solutions that are both functional and visually engaging. Outside of work, I love spending time with my family and exploring the city for creative inspiration.";

  const images = [man1, man2, man3, man4, man5, man6, man7];

  // Define content for flip cards
  const visualLanguageSkills = (
    <ul>
      <li><DecryptedText text="Photoshop" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="Illustrator" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="InDesign" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="Premier Pro" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="Dimension" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="Figma" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
    </ul>
  );

  const productivitySoftware = (
    <ul>
      <li><DecryptedText text="Microsoft Word" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="Excel" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="PowerPoint" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
    </ul>
  );

  const webSkills = (
    <ul>
      <li><DecryptedText text="HTML" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="CSS" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="ReactJS" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="WordPress" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
      <li><DecryptedText text="Webflow" sequential={true} speed={30} revealDirection="start" useOriginalCharsOnly={false}/></li>
    </ul>
  );

  return (
    <AboutContainer>
      <Section style={{ background: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
              <h2>About Me</h2>
              <ScrambledText
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                {aboutText}
              </ScrambledText>
            </AboutTextContent>
          </AboutTextColumn>
        </AboutGrid>
      </Section>
      
      <Skill />
      <WhyCactus />
      
      <Section>
        <ImageTrailSection>
          <ImageTrailTitle>My interests and I</ImageTrailTitle>
          <CenteredOverlayText>Move your mouse to discover me 🥰</CenteredOverlayText>
          <ImageTrail items={images} variant={1} />
        </ImageTrailSection>
      </Section>
    </AboutContainer>
  );
};

export default About; 