import React from "react";
import styled from "styled-components";
import mockVideo from "../../assets/sbsimg/sbsillustration.mp4";
import bagImg from "../../assets/sbsimg/tag-2.png";

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
`;

const Col = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
`;

const FullImg = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  display: block;
  background: #000;
`;

const FullVideo = styled.video`
  width: 50%;
  height: 50%;
  object-fit: cover;
  display: block;
  background: #000;
`;

const SbsMock9: React.FC = () => (
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

export default SbsMock9;