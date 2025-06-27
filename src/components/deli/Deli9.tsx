import React from "react";
import styled from "styled-components";
import deliImage1 from "../../assets/deli/deli10.jpg";
import deliImage2 from "../../assets/deli/deli11.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid green; /* Debug border */
  @media (max-width: 900px) {
    height: auto;
    min-height: 40vw;
    padding: 0;
    margin: 0;
  }
`;

const GridContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0;
  @media (max-width: 900px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0;
    padding: 0;
  }
`;

const ImageColumn = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    min-height: 40vw;
    margin: 0;
    padding: 0;
  }
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 90vh;
    object-fit: cover;
    margin: 0;
    padding: 0;
    display: block;
  }
`;

const Deli9: React.FC = () => {
  return (
    <Section>
      <GridContainer>
        <ImageColumn>
          <Image 
            src={deliImage1} 
            alt="Deli 10"
          />
        </ImageColumn>
        <ImageColumn>
          <Image 
            src={deliImage2} 
            alt="Deli 11"
          />
        </ImageColumn>
      </GridContainer>
    </Section>
  );
};

export default Deli9; 