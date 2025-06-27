import React from "react";
import styled from "styled-components";
import finalVideo from "../../assets/veen/final.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 0;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    min-height: 40vw;
    padding: 0;
    margin: 0;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
  }
`;

const VeenMuck2: React.FC = () => (
  <Section>
    <VideoContainer>
      <StyledVideo
        src={finalVideo}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="Final video"
      />
    </VideoContainer>
  </Section>
);

export default VeenMuck2; 