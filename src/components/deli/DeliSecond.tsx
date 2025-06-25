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
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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