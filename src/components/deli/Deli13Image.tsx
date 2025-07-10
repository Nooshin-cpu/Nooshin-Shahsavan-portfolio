import React from "react";
import styled from "styled-components";
import deli13Img from "../../assets/deli/deli13.jpg";

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

const Deli13Image: React.FC = () => {
  return (
    <Section>
      <ImageContainer>
        <Image 
          src={deli13Img} 
          alt="Deli 13"
        />
      </ImageContainer>
    </Section>
  );
};

export default Deli13Image; 