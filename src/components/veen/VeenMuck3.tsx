import React from "react";
import styled from "styled-components";
import socialImg from "../../assets/veen/socialveen1.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #fffdd0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (max-width: 900px) {
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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