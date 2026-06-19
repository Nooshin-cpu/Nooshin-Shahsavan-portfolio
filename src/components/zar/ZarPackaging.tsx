import React from "react";
import styled from "styled-components";
import strategyImg from "../../assets/zar/box-1.jpg";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: auto;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: center;
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 2.2rem 0;
  text-align: center;
  @media (max-width: 900px) {
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    margin-bottom: 1.2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 0 2.2rem 0;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`;

const InfoItem = styled.div`
  min-width: 120px;
  text-align: center;
`;

const InfoLabel = styled.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const InfoValue = styled.div`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #222;
  font-weight: 400;
`;

const ZarPackaging: React.FC = () => (
  <MinimalSection>
    <Title>Packaging</Title>
    <Description>
      Design packaging that is luxurious, functional, and deeply rooted in Persian culture, while appealing to global consumers. I designed a sliding drawer box with an inner wrapping layer to both protect the saffron and enhance the unboxing experience. The graphics feature an abstract saffron flower illustration, blending organic lines with Eastern motifs to reflect ZAR's Persian origin.
    </Description>
    
    <ImageWrapper>
      <StyledImage src={strategyImg} alt="Zar Packaging Design" />
    </ImageWrapper>
    
    <InfoGrid>
      <InfoItem>
        <InfoLabel>Style</InfoLabel>
        <InfoValue>Luxurious & Cultural</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Material</InfoLabel>
        <InfoValue>Premium Cardboard</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Colors</InfoLabel>
        <InfoValue>Gold, Purple, Black</InfoValue>
      </InfoItem>
    </InfoGrid>
  </MinimalSection>
);

export default ZarPackaging;







