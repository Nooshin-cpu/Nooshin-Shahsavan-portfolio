import React from "react";
import styled from "styled-components";
import cardImg from "../../assets/deli/carrd.png";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
`;

const ImageContainer = styled.div`
  width: 70vw;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`;

const DeliCardImage: React.FC = () => {
  return (
    <Section>
      <ImageContainer>
        <Image 
          src={cardImg} 
          alt="Card Mockup"
        />
      </ImageContainer>
    </Section>
  );
};

export default DeliCardImage; 