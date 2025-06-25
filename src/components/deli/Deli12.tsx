import React from "react";
import styled from "styled-components";
import deliImage from "../../assets/deli/delistory2.png";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Deli12: React.FC = () => {
  return (
    <Section>
      <ImageContainer>
        <Image 
          src={deliImage} 
          alt="Deli Story 2"
        />
      </ImageContainer>
    </Section>
  );
};

export default Deli12; 