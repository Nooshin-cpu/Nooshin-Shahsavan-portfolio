import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/zar/zarbag.jpg";

const MockSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FullImg = styled.img`
  width: 70vw;
  height: 70vh;
  object-fit: contain;
  display: block;
`;

const Zarmock4: React.FC = () => (
  <MockSection>
    <FullImg src={mockImg} alt="ZAR Mockup 4" />
  </MockSection>
);

export default Zarmock4;
