import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/zar/zarbrushor.jpg";

const MockSection = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  @media (max-width: 900px) {
    height: auto;
    min-height: unset;
    padding: 0;
  }
`;

const FullImg = styled.img`
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

const Zarmock6: React.FC = () => (
  <MockSection>
    <FullImg src={mockImg} alt="SBS Card Mockup" />
  </MockSection>
);

export default Zarmock6;