import React from "react";
import styled from "styled-components";
import strategyImg from "../../assets/zar/box-1.jpg";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
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
  font-size: 1.08rem;
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







