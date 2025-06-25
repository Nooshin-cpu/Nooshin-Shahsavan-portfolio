import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/zar/box-2.jpg";

const MockSection = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FullImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
`;

const Zarmock3: React.FC = () => (
  <MockSection>
    <FullImg src={mockImg} alt="ZAR Mockup 3" />
  </MockSection>
);

export default Zarmock3;
