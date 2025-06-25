import React from "react";
import styled from "styled-components";
import veen3Img from "../../assets/veen/veen3.jpg";

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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  display: block;
  @media (max-width: 900px) {
    width: 90%;
    height: 70%;
  }
`;

const VeenMuck7: React.FC = () => (
  <Section>
    <ImageContainer>
      <StyledImage 
        src={veen3Img} 
        alt="Veen design showcase" 
      />
    </ImageContainer>
  </Section>
);

export default VeenMuck7; 