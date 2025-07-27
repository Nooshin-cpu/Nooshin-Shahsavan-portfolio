import React from "react";
import styled from "styled-components";
import sbsillustration from "../../assets/sbsimg/sbsillustration.mp4";
import capIntro2 from "../../assets/sbsimg/cap-intro2.mp4";
import print2 from "../../assets/sbsimg/print2.mp4";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`;

const VideoRow = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 600px) {
    gap: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const VideoCol = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
`;

const StyledVideo = styled.video`
  width: 35vw;
  max-width: 500px;
  height: 400px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
  @media (max-width: 900px) {
    width: 70vw;
    max-width: 90vw;
    height: 300px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    height: 180px;
  }
`;

const SingleVideoRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
`;

const SbsIllustration: React.FC = () => (
  <Section>
    <VideoRow>
      <VideoCol>
        <StyledVideo
          src={capIntro2}
          loop
          muted
          playsInline
          controls
          aria-label="SBS Cap Intro2 Video"
        />
      </VideoCol>
      <VideoCol>
        <StyledVideo
          src={print2}
          loop
          muted
          playsInline
          controls
          aria-label="SBS Print2 Video"
        />
      </VideoCol>
    </VideoRow>
  </Section>
);

export default SbsIllustration;