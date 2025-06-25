import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/zar/zar-sticker.jpg";

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
  width: 50vw;
  height: 50vh;
  object-fit: contain;
  display: block;
`;

const Zarmock7: React.FC = () => (
  <MockSection>
    <FullImg src={mockImg} alt="SBS Card Mockup" />
  </MockSection>
);

export default Zarmock7;