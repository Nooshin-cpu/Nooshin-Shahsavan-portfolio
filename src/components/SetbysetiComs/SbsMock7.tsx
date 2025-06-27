import React from "react";
import styled from "styled-components";
import mockVideo from "../../assets/sbsimg/print2.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 900px) {
    height: auto;
    min-height: 60vw;
    padding: 0;
  }
`;

const VideoContainer = styled.div`
  width: 31vw;
  height: 100vh;
  background: #dadada;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 90vw;
    height: 60vw;
    min-height: 200px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: transparent;
  display: block;
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    margin: 0 auto;
    padding: 0;
  }
`;

const SbsMock7: React.FC = () => (
  <Section>
    <VideoContainer>
      <StyledVideo
        src={mockVideo}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="SBS Print Video"
      />
    </VideoContainer>
  </Section>
);

export default SbsMock7;