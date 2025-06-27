import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/sbsimg/card-sbs.png";

const MockSection = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 900px) {
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 0;
  }
`;

const FullImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
  }
`;

const SbsMock1: React.FC = () => (
  <MockSection>
    <FullImg src={mockImg} alt="SBS Card Mockup" />
  </MockSection>
);

export default SbsMock1;