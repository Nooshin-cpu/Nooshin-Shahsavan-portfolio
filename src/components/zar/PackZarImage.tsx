import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import SEO from "../SEO";
import pzar1 from "../../assets/zar/pzar1.jpeg";
import pzar2 from "../../assets/zar/pzar2.png";
import pzar3 from "../../assets/zar/pzar3.png";
import pzar4 from "../../assets/zar/pzar4.jpg";

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

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const ImageCard = styled(motion.div)`
  background: none;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 900px) {
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    border-radius: 10px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--background);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ImageCard}:hover & {
    transform: scale(1.02);
  }
`;

const ImageContent = styled.div`
  padding: 1.5rem;
  background: none;
`;

const ImageTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(76, 16, 129, 0.9);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
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

const PackZarImage: React.FC = () => {
  const images = [
    { 
      src: pzar1, 
      alt: "Pack Zar 1", 
      title: "Selecting a traditional Iranian motif",
    },
    { 
      src: pzar2, 
      alt: "Pack Zar 2", 
      title: "Getting inspiration from a detail of it",
    },
    { 
      src: pzar3, 
      alt: "Pack Zar 3", 
      title: "Designed a saffron flower inspired by traditional motifs, using purple and gold to reflect its value and cultural roots.",
    },
    { 
      src: pzar4, 
      alt: "Pack Zar 4", 
      title: "Applying the design to the package",
    },
  ];

  return (
    <Container>
      <SEO 
        title="Zar Packaging Design Process | Nooshin Shahsavan"
        description="Zar packaging design process - traditional Iranian motifs to modern saffron flower illustration"
        keywords="Zar packaging process, Iranian motifs, saffron flower, cultural design, Nooshin Shahsavan"
      />
      <SectionCard
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Title variants={itemVariants}>Packaging Design Process</Title>
        <Description variants={itemVariants}>
          The packaging design process involved researching traditional Iranian motifs, extracting key elements, and creating a modern saffron flower illustration that reflects ZAR's Persian heritage while appealing to contemporary consumers.
        </Description>
        
        <GridContainer variants={itemVariants}>
          {images.map((img, idx) => (
            <ImageCard key={img.alt} variants={itemVariants}>
              <ImageWrapper>
                <StyledImage src={img.src} alt={img.alt} />
                <Badge>ZAR</Badge>
              </ImageWrapper>
              <ImageContent>
                <ImageTitle>{img.title}</ImageTitle>
              </ImageContent>
            </ImageCard>
          ))}
        </GridContainer>
      </SectionCard>
    </Container>
  );
};

export default PackZarImage;