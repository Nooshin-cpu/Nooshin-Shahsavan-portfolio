import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import centeredImg from "../../assets/deli/deli7.mp4";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`;

const ImageContainer = styled.div`
  width: 70vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 98vw;
    height: auto;
  }
`;

const DeliSeven: React.FC = () => (
  <Section>
    <ImageContainer>
      <LazyVideo
        src={centeredImg}
        autoPlay loop muted playsInline
        objectFit="cover"
        style={{ width: '100%', height: '100%' }}
        aria-label="Delicato showcase"
      />
    </ImageContainer>
  </Section>
);

export default DeliSeven; 