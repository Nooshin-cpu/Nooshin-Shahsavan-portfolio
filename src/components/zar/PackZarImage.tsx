import React from "react";
import styled from "styled-components";
import pzar1 from "../../assets/zar/pzar1.jpeg";
import pzar2 from "../../assets/zar/pzar2.png";
import pzar3 from "../../assets/zar/pzar3.png";
import pzar4 from "../../assets/zar/pzar4.jpg";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: auto;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
  @media (max-width: 900px) {
    padding: 80px clamp(1rem, 3vw, 2rem) 60px;
  }
  @media (max-width: 600px) {
    padding: 60px clamp(0.75rem, 2vw, 1.5rem) 40px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 700;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: left;
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 2.2rem 0;
  text-align: left;
  @media (max-width: 900px) {
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    margin-bottom: 1.2rem;
  }
`;

const GridContainer = styled.div`
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

const ImageCard = styled.div`
  background: none;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  border: 1px solid #e0e0e0;
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
  background: #f3f3f3;
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
  color: #444;
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
    <MinimalSection>
      <Title>Packaging Design Process</Title>
      <Description>
        The packaging design process involved researching traditional Iranian motifs, extracting key elements, and creating a modern saffron flower illustration that reflects ZAR's Persian heritage while appealing to contemporary consumers.
      </Description>
      
      <GridContainer>
        {images.map((img, idx) => (
          <ImageCard key={img.alt}>
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
    </MinimalSection>
  );
};

export default PackZarImage;