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
`;

const LeftImgContainer = styled.div`
  margin-left: 200px;
  width: 60vw;
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightImgContainer = styled.div`
  width: 30vw;
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px; /* 10px margin between images */
`;

const FullImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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