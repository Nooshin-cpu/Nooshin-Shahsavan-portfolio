import React from "react";
import styled from "styled-components";
import webVideo from "../../assets/sbsimg/web.mp4";

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
    margin: 0;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    min-height: 0;
  }
`;

const StyledVideo = styled.video`
  width: 70%;
  height: 70%;
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

const SbsMock8: React.FC = () => (
  <Section>
    <VideoContainer>
      <StyledVideo
        src={webVideo}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="SBS Web Video"
      />
    </VideoContainer>
  </Section>
);

export default SbsMock8;