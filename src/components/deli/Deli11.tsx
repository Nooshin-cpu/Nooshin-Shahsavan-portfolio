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
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  width: 30%;
  height:100vh;
  object-fit: cover;
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