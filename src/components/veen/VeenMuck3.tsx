import React from "react";
import styled from "styled-components";
import socialImg from "../../assets/veen/socialveen1.jpg";

const Section = styled.section`
  width: 70vw;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  padding: 2rem 0;
  @media (max-width: 900px) {
    width: 98vw;
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 1.5rem auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    min-height: 40vw;
    padding: 0;
    margin: 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 12px;
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

const VeenMuck3: React.FC = () => (
  <Section>
    <ImageContainer>
      <StyledImage 
        src={socialImg} 
        alt="Veen social media design" 
      />
    </ImageContainer>
  </Section>
);

export default VeenMuck3; 