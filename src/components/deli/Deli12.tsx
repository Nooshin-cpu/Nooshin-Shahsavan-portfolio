import React from "react";
import styled from "styled-components";
import deliImage from "../../assets/deli/delistory2.png";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
`;

const ImageContainer = styled.div`
  width: 70vw;
  max-width: 1100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
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