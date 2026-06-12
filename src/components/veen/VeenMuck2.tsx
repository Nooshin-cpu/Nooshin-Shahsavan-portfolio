import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import finalVideo from "../../assets/veen/final.mp4";

const Section = styled.section`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  padding: 2rem 0;
  
  @media (max-width: 1200px) {
    margin: 2rem auto;
    padding: 1.5rem 0;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    min-height: 60vw;
    padding: 1rem 0;
    margin: 1.5rem auto;
  }
  
  @media (max-width: 600px) {
    margin: 1.2rem auto;
    padding: 0.8rem 0;
    min-height: 50vw;
  }
  
  @media (max-width: 480px) {
    margin: 1rem auto;
    padding: 0.5rem 0;
    min-height: 45vw;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    max-width: 100vw;
    min-height: 40vw;
    padding: 0;
    margin: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    max-width: 98vw;
    min-height: 35vw;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    min-height: 30vw;
    border-radius: 4px;
  }
`;


const VeenMuck2: React.FC = () => (
  <Section>
    <VideoContainer>
      <LazyVideo
        src={finalVideo}
        autoPlay loop muted playsInline
        skeletonAspectRatio="16/9"
        aria-label="Final video"
      />
    </VideoContainer>
  </Section>
);

export default VeenMuck2; 