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
`;

const VideoContainer = styled.div`
  width: 100vw;
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
  width: 70%;
  height: 70%;
  object-fit: cover;
  background: transparent;
  display: block;
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