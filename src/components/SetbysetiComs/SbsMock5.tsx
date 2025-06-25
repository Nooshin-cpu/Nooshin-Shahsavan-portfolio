import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/sbsimg/banner.png";

const MockSection5 = styled.section`
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
  width: 70%;
  height: 70%;
  object-fit: cover;
  display: block;
`;

const SbsMock5: React.FC = () => (
  <MockSection5>
    <FullImg src={mockImg} alt="SBS Bag Mockup 2" />
  </MockSection5>
);

export  default SbsMock5;