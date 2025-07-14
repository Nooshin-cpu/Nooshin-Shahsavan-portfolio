import React from "react";
import styled from "styled-components";
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

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`;

const FullWrapper = styled.div`
  width: 100%;
  height: 100vh;
  // ... existing styles ...
`;

const StoryOne: React.FC = () => (
  <Section>
    <VideoContainer>
      <StyledVideo
        src={video}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="Delicato video"
      />
    </VideoContainer>
  </Section>
);

export default StoryOne; 