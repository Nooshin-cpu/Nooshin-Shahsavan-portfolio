import React from "react";
import styled from 'styled-components';
import deliImage from "../../assets/deli/deli13.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Deli14: React.FC = () => {
  return (
    <Section>
      <ImageContainer>
        <Image src={deliImage} alt="Deli 13" />
      </ImageContainer>
    </Section>
  );
};

export default Deli14; 