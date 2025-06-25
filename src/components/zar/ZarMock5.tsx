import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/zar/webzar.png";

const MockSection = styled.section`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FullImg = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
  display: block;
`;

const ZarMock5: React.FC = () => (
  <MockSection>
    <FullImg src={mockImg} alt="ZAR Mockup 4" />
  </MockSection>
);

export default ZarMock5;
