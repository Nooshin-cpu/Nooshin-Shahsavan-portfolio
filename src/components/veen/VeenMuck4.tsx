import React from 'react';
import styled from 'styled-components';
import mveen2 from '../../assets/veen/mveen2.jpg';
import mveen5 from '../../assets/veen/mveen5.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  background: #fffdd0;
  @media (max-width: 900px) {
    height: auto;
    min-height: 60vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0;
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
  @media (max-width: 900px) {
    padding: 0;
    height: auto;
    min-height: 40vw;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  object-position: center;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
  }
`;

const VeenMuck4: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={mveen2} alt="Veen Muck 2" />
      </ImageContainer>
      <ImageContainer>
        <Image src={mveen5} alt="Veen Muck 5" />
      </ImageContainer>
    </Container>
  );
};

export default VeenMuck4; 