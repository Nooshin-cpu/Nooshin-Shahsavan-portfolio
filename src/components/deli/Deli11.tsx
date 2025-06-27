import React from "react";
import styled from "styled-components";
import deliVideo from "../../assets/deli/delistory.mp4";

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
  width: 100%;
  height: 100vh;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    min-height: 40vw;
    aspect-ratio: auto;
    padding: 0;
    margin: 0;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 40vh;
    object-fit: cover;
    margin: 0 auto;
    padding: 0;
    display: block;
  }
`;

const Deli11: React.FC = () => {
  return (
    <Section>
      <VideoContainer>
        <Video
          src={deliVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      </VideoContainer>
    </Section>
  );
};

export default Deli11; 