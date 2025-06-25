import React from 'react';
import styled from 'styled-components';
import mveen2 from '../../assets/veen/mveen2.jpg';
import mveen5 from '../../assets/veen/mveen5.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  background: #fffdd0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  object-position: center;
  @media (max-width: 900px) {
    width: 90%;
    height: 90%;
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