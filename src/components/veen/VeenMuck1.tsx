import React from "react";
import styled from "styled-components";
import mveen1 from "../../assets/veen/mveen1.png";
import card from "../../assets/veen/card.png";

const Section = styled.section`
  width: 70vw;
  height: auto;
  background: #fafaf8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  @media (max-width: 900px) {
    width: 98vw;
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 1.5rem auto;
  }
`;

const GridContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0;
  @media (max-width: 900px) {
    height: auto;
    min-height: 40vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0;
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  @media (max-width: 900px) {
    height: auto;
    min-height: 40vw;
    padding: 0;
    margin: 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
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