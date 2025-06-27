import React from "react";
import styled from "styled-components";
import deliVideo from "../../assets/deli/deliweb.mp4";

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
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    min-height: 40vw;
    padding: 0;
    margin: 0;
  }
`;

const Video = styled.video`
  width: 70%;
  height: 70%;
  object-fit: cover;
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

const Deli13: React.FC = () => {
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

export default Deli13; 