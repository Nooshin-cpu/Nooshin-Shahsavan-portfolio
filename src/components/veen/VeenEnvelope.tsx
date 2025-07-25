import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import envelopImg from '../../assets/veen/envelop.png';

const EnvelopeContainer = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  padding: 2rem 0;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 1.5rem auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    max-width: 100vw;
    min-height: 40vw;
    padding: 0;
    margin: 0;
  }
`;

const EnvelopeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 12px;
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

const VeenEnvelope: React.FC = () => (
  <EnvelopeContainer>
    <ImageContainer>
      <EnvelopeImage 
        src={envelopImg} 
        alt="Veen Envelope Design" 
      />
    </ImageContainer>
  </EnvelopeContainer>
);

export default VeenEnvelope; 