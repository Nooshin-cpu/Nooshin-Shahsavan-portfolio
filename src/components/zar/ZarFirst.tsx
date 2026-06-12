import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import story from "../../assets/zar/zar-logoline.mp4";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`;

const VideoWrapper = styled.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
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
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`;

const ZarFirst: React.FC = () => (
  <MinimalSection>
    <Title>Zar — Overview</Title>
    <Description>
      I was responsible for designing the brand identity and packaging system for ZAR, a premium saffron brand. The project focused on merging Persian cultural elements with a modern, minimalist aesthetic. My work included developing the logo, typography, color palette, and packaging design to reflect the brand's aim of positioning saffron as a luxury product rooted in heritage.
    </Description>
    
    <VideoWrapper>
      <LazyVideo
        src={story}
        autoPlay loop muted playsInline
        skeletonAspectRatio="9/16"
        aria-label="Zar project video"
      />
    </VideoWrapper>
    
    <InfoGrid>
      <InfoItem>
        <InfoLabel>Role</InfoLabel>
        <InfoValue>Brand Designer</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Tools</InfoLabel>
        <InfoValue>Illustrator, After Effects, Photoshop</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Timeline</InfoLabel>
        <InfoValue>4 weeks</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Year</InfoLabel>
        <InfoValue>2023</InfoValue>
      </InfoItem>
    </InfoGrid>
  </MinimalSection>
);

export default ZarFirst;