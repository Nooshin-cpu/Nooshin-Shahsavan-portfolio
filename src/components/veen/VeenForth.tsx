import React from "react";
import styled from "styled-components";
import logo1 from "../../assets/veen/veenlogo1.jpg";
import logo2 from "../../assets/veen/veenlogo-2.jpg";
import logo3 from "../../assets/veen/veenlogo-3.jpg";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ImgBox = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  background: #dadada;
  border-radius: 0;
  display: block;
  @media (max-width: 900px) {
    width: 70vw;
    height: 70vw;
    max-width: 320px;
    max-height: 320px;
    min-width: 120px;
    min-height: 120px;
  }
`;

const VeenForth: React.FC = () => (
  <Section>
    <Row>
      <ImgBox src={logo1} alt="Veen Logo 1" />
      <ImgBox src={logo2} alt="Veen Logo 2" />
      <ImgBox src={logo3} alt="Veen Logo 3" />
    </Row>
  </Section>
);

export default VeenForth;