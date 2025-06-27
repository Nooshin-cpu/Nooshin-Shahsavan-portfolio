import React from "react";
import styled from "styled-components";
import storyVideo from "../../assets/zar/story-zar-1.mp4";

const MockSection = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #460863;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  @media (max-width: 900px) {
    height: auto;
    min-height: unset;
    padding: 0;
  }
`;

const CenteredVideoWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    padding: 0;
  }
`;

const FullVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: #460863;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
    display: block;
  }
`;

const ZarStory: React.FC = () => (
  <MockSection>
    <CenteredVideoWrapper>
      <FullVideo
        src={storyVideo}
        autoPlay
        loop
        
        aria-label="Zar Story Video"
      />
    </CenteredVideoWrapper>
  </MockSection>
);

export default ZarStory;
