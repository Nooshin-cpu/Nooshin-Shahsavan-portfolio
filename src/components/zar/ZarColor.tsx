import React from "react";
import styled from "styled-components";
import colorVideo from "../../assets/zar/zar-color.mp4";
import { EmailFooter } from '../../components/Footer';

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

const VideoWrapper = styled.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`;

const StyledVideo = styled.video`
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

const ZarColor: React.FC = () => (
  <MinimalSection id="zar-color">
    <Title>Color Palette</Title>
    <Description>
    I chose these colors based on several goals:
    The brand name Zar means “gold” in Persian, symbolizing both the value of the product and its preciousness. Purple represents the color of the saffron flower and is also associated with loyalty. Red reflects the color of the flower’s stamen.
    </Description>
    
    <VideoWrapper>
      <StyledVideo
        src={colorVideo}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="Color palette video"
      />
    </VideoWrapper>
    
    <InfoGrid>
      <InfoItem>
        <InfoLabel>Primary</InfoLabel>
        <InfoValue>Royal Purple</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Secondary</InfoLabel>
        <InfoValue>Metallic Gold</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Accent</InfoLabel>
        <InfoValue>Deep Black</InfoValue>
      </InfoItem>
    </InfoGrid>
    <EmailFooter />
  </MinimalSection>
);

export default ZarColor;