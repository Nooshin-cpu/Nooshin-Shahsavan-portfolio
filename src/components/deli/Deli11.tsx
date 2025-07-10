import React from "react";
import styled from "styled-components";
import deliVideo from "../../assets/deli/delistory.mp4";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
  
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
`;

const VideoContainer = styled.div`
  width: 70vw;
  max-width: 1100px;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`;

const Video = styled.video`
  width: 40%;
  height: auto;
  display: block;
  background: transparent;
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
          controls={true}
        />
      </VideoContainer>
    </Section>
  );
};

export default Deli11; 