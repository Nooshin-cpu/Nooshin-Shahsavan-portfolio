import React from "react";
import styled from "styled-components";
import capIntroVideo from "../../assets/sbsimg/allin1.mp4";
import CircleSbs from "./CircleSbs";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #000;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MediaBox = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 600px;
    height: 600px;
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 70%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  background: transparent;
  z-index: 1;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const SbsIllustration: React.FC = () => (
  <Section>
    <MediaBox>
      <StyledVideo
        src={capIntroVideo}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="Cap intro video"
      />
      <CircleWrapper>
        <CircleSbs 
          text="S.B.S*BRAND*IDENTITY*DESIGN*"
          onHover="speedUp"
          spinDuration={20}
        />
      </CircleWrapper>
    </MediaBox>
  </Section>
);

export default SbsIllustration;