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

const MediaBox = styled.div<{ $size: string }>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    position: relative;
    width: 100vw;
    height: 70vw;
    min-width: 320px;
    min-height: 400px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: transparent;
  z-index: 1;
`;

const CircleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const AbsoluteWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
  }
`;

const SbsIllustration: React.FC = () => (
  <Section>
    <AbsoluteWrapper>
      <MediaBox $size="45vw">
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
    </AbsoluteWrapper>
  </Section>
);

export default SbsIllustration;