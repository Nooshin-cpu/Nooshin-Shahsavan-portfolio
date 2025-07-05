import React, { useState } from "react";
import styled from "styled-components";
import pzar1 from "../../assets/zar/pzar1.jpeg";
import pzar2 from "../../assets/zar/pzar2.png";
import pzar3 from "../../assets/zar/pzar3.png";
import pzar4 from "../../assets/zar/pzar4.jpg";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #2d1b69 0%, #4c1081 50%, #6a0dad 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ImageCard = styled.div<{ isHovered: boolean }>`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05));
    opacity: ${props => props.isHovered ? 1 : 0};
    transition: opacity 0.3s ease;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: #000;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ImageCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ImageDescription = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.5;
  display: none;
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(76, 16, 129, 0.1);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
`;

const PackZarImage: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      title: "Designing a saffron flower based on the flower inspired by the motif",
      
    },
    { 
      src: pzar4, 
      alt: "Pack Zar 4", 
      title: "Applying the design to the package",
      
    },
  ];

  return (
    <Container>
      <ContentWrapper>
        <Title>Packaging Design</Title>
      
        
        <GridContainer>
          {images.map((img, idx) => (
            <ImageCard
              key={img.alt}
              isHovered={hoveredIndex === idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
                             <ImageWrapper>
                 <StyledImage src={img.src} alt={img.alt} />
                 <Badge>ZAR</Badge>
               </ImageWrapper>
               <ImageTitle>{img.title}</ImageTitle>
            </ImageCard>
          ))}
        </GridContainer>
      </ContentWrapper>
    </Container>
  );
};

export default PackZarImage;