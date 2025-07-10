import React from "react";
import styled from "styled-components";
import deliImage1 from "../../assets/deli/deli11.jpg";
import deliImage2 from "../../assets/deli/deli11.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid green; /* Debug border */
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    height: auto;
    min-height: 40vw;
    padding: 0;
    margin: 1.5rem 0;
  }
`;

const GridContainer = styled.div`
  width: 70vw;
  max-width: 1100px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0;
  margin: 0 auto;
`;

const ImageColumn = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
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