import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import story from "../../assets/veen/story.mp4";
import { motion } from 'framer-motion';

const MinimalSection = styled.section`
  width: 100%;
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
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
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

const VeenFirst: React.FC = () => (
  <MinimalSection id="veen-overview">
    <Title>VEEN — Overview</Title>
    <Description>
    VEEN Studio is a newly established photography brand based in Vancouver, specializing in family and child photography. The goal of this project was to create a professional, heartfelt brand identity that reflects warmth, trust, creativity, and joy. 
    </Description>
    <VideoWrapper>
      <LazyVideo
        src={story}
        autoPlay loop muted playsInline
        skeletonAspectRatio="9/16"
        aria-label="Veen project video"
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
        <InfoValue>2 weeks</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Year</InfoLabel>
        <InfoValue>2024</InfoValue>
      </InfoItem>
    </InfoGrid>
  </MinimalSection>
);

export default VeenFirst;