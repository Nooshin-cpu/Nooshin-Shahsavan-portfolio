import React from "react";
import styled from "styled-components";
import deliImage from "../../assets/deli/deli9.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
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

const Deli8: React.FC = () => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <Section>
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