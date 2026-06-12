import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import allin1Video from "../../assets/sbsimg/allin1.mp4";

const VideoSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 2.2rem;
  letter-spacing: -1px;
  text-align: center;
  
  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`;


const SbsVideo: React.FC = () => (
  <VideoSection>
    <VideoContainer>
      <LazyVideo
        src={allin1Video}
        autoPlay loop muted playsInline
        skeletonAspectRatio="16/9"
        aria-label="SBS All-in-One Video"
      />
    </VideoContainer>
  </VideoSection>
);

export default SbsVideo; 