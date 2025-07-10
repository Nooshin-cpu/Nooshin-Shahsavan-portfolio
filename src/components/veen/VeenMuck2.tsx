import React from "react";
import styled from "styled-components";
import finalVideo from "../../assets/veen/final.mp4";

const Section = styled.section`
  width: 70vw;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  @media (max-width: 900px) {
    width: 98vw;
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 1.5rem auto;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    min-height: 40vw;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
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