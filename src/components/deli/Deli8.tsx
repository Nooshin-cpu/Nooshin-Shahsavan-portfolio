import React from "react";
import styled from "styled-components";
import deliImage from "../../assets/deli/deli9.jpg";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 70vw;
  max-width: 1100px;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`;

const Deli8: React.FC = () => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <Section>
      <Title>Mockups</Title>
      {imgError ? (
        <div style={{ color: 'white', fontSize: 24 }}>Image failed to load</div>
      ) : (
        <Image 
          src={deliImage} 
          alt="Deli 8"
          onError={() => setImgError(true)}
        />
      )}
    </Section>
  );
};

export default Deli8; 