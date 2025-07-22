import React from "react";
import styled from "styled-components";
import storyVideo from "../../assets/zar/story-zar-1.mp4";

const MinimalSection = styled.section`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
  
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;

const VideoWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #460863;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 12px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    border-radius: 10px;
    aspect-ratio: 1/1;
  }
`;

const StyledVideo = styled.video`
  width: 30%;
  height: auto;
  display: block;
  background: transparent;
`;

const ZarStory: React.FC = () => (
  <MinimalSection>
    <VideoWrapper>
      <StyledVideo
        src={storyVideo}
        autoPlay
        loop
        muted
        playsInline
        controls={true}
        aria-label="Zar Story Video"
      />
    </VideoWrapper>
  </MinimalSection>
);

export default ZarStory;
