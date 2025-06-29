import React from "react";
import styled from "styled-components";
import video from "../../assets/deli/deli2.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 900px) {
    height: auto;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 480px) {
    height: auto;
    padding: 0;
    margin: 0;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: auto;
    padding: 0;
    margin: 0;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 90vh;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 80vh;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }
`;

const FullWrapper = styled.div`
  width: 100%;
  height: 100vh;
  // ... existing styles ...
`;

const DeliSecond: React.FC = () => (
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

export default DeliSecond; 