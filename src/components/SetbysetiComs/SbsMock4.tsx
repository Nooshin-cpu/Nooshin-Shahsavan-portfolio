import React from "react";
import styled from "styled-components";
import mockVideo from "../../assets/sbsimg/story-1.mp4";
import bagImg from "../../assets/sbsimg/Sbs-bag2.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  overflow: hidden;
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 0;
  }
`;

const Col = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
  @media (max-width: 900px) {
    height: auto;
    min-height: 30vw;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

const FullImg = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  display: block;
  background: #000;
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
  }
`;

const FullVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000;
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
  }
`;

const SbsMock4: React.FC = () => (
  <Section>
    <Col>
      <FullImg src={bagImg} alt="SBS Bag Mockup" />
    </Col>
    <Col>
      <FullVideo
        src={mockVideo}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="SBS Story Video"
      />
    </Col>
  </Section>
);

export { SbsMock4 as default };