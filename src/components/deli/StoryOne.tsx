import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import video from "../../assets/deli/story-1-deli.mp4";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;

const VideoContainer = styled.div`
  width: 70vw;
  max-width: 1100px;
  aspect-ratio: 16/9;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`;


const FullWrapper = styled.div`
  width: 100%;
  height: 100vh;
  // ... existing styles ...
`;

const StoryOne: React.FC = () => (
  <Section>
    <VideoContainer>
      <LazyVideo
        src={video}
        autoPlay loop muted playsInline
        objectFit="cover"
        style={{ width: '100%', height: '100%' }}
        aria-label="Delicato story video"
      />
    </VideoContainer>
  </Section>
);

export default StoryOne; 