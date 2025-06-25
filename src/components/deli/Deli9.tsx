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
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0;
`;

const ImageColumn = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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