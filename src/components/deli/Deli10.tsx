import React from "react";
import styled from "styled-components";
import deliImage from "../../assets/deli/deli12.jpg";

const Section = styled.section`
  width: 100vw;
  background: #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    padding: 0;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    padding: 0;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
  box-sizing: border-box;
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

const Deli10: React.FC = () => {
  return (
    <Section>
      <ImageContainer>
        <Image 
          src={deliImage} 
          alt="Deli 12"
        />
      </ImageContainer>
    </Section>
  );
};

export default Deli10; 