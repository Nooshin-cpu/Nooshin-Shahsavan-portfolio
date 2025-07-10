import React from "react";
import styled from 'styled-components';
import deliImage from "../../assets/deli/delin.jpg";

const Section = styled.section`
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
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

const Deli15: React.FC = () => {
  return (
    <Section>
      <ImageContainer>
        <Image src={deliImage} alt="Deli 14" />
      </ImageContainer>
    </Section>
  );
};

export default Deli15; 