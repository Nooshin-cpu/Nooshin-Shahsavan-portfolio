import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/sbsimg/sbs-box.jpg";
import bagImg from "../../assets/sbsimg/sbs-bag1.jpg";

const MockSection2 = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    min-height: 60vw;
    padding: 0;
    margin: 0;
  }
`;

const LeftImgContainer = styled.div`
  margin-left: 200px;
  width: 60vw;
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 900px) {
    margin-left: 0;
    width: 100vw;
    height: auto;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
  }
`;

const RightImgContainer = styled.div`
  width: 30vw;
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    margin-left: 0;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
  }
`;

const FullImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    margin: 0 auto;
    padding: 0;
  }
`;

const SbsMock2: React.FC = () => (
  <MockSection2>
    <LeftImgContainer>
      <FullImg src={mockImg} alt="SBS Box Mockup" />
    </LeftImgContainer>
    <RightImgContainer>
      <FullImg src={bagImg} alt="SBS Bag Mockup" />
    </RightImgContainer>
  </MockSection2>
);

export default SbsMock2;