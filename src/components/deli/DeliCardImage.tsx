import React from "react";
import styled from "styled-components";
import cardImg from "../../assets/deli/carrd.png";

const Section = styled.section`
  #fafaf8;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
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
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
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