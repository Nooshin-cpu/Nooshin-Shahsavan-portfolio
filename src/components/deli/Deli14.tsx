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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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