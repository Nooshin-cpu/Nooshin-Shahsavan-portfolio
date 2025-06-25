import React from "react";
import styled from "styled-components";
import mveen1 from "../../assets/veen/mveen1.png";
import card from "../../assets/veen/card.png";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const VeenMuck1: React.FC = () => (
  <Section>
    <GridContainer>
      <ImageContainer>
        <StyledImage src={mveen1} alt="Veen mockup 1" />
      </ImageContainer>
      <ImageContainer>
        <StyledImage src={card} alt="Veen card" />
      </ImageContainer>
    </GridContainer>
  </Section>
);

export default VeenMuck1; 