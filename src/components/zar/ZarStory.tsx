import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import storyVideo from "../../assets/zar/story-zar-1.mp4";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 60vh;
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

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #460863;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  border: none;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 12px;
  }
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    border-radius: 8px;
    aspect-ratio: 1/1;
  }
  @media (max-width: 480px) {
    width: 98vw;
    border-radius: 6px;
  }
`;


const ZarStory: React.FC = () => (
  <MinimalSection>
    <VideoWrapper>
      <LazyVideo
        src={storyVideo}
        autoPlay loop muted playsInline controls
        style={{ width: '30%' }}
        skeletonAspectRatio="9/16"
        aria-label="Zar Story Video"
      />
    </VideoWrapper>
  </MinimalSection>
);

export default ZarStory;
