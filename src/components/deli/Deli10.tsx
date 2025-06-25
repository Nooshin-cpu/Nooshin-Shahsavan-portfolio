import React from "react";
import styled from "styled-components";
import deliImage from "../../assets/deli/deli12.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Deli10: React.FC = () => {
  return (
    <Section>
      <Image 
        src={deliImage} 
        alt="Deli 12"
      />
    </Section>
  );
};

export default Deli10; 