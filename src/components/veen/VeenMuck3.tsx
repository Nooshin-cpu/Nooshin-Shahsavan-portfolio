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
    width: 90%;
    height: 70%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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