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
  border-radius: 1.2rem;
  display: block;
  transition: transform 0.18s, box-shadow 0.18s;
  box-shadow: 0 2px 16px rgba(80, 79, 81, 0.08);
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
  }
  @media (max-width: 900px) {
    width: 70vw;
    height: 70vw;
    max-width: 320px;
    max-height: 320px;
    min-width: 120px;
    min-height: 120px;
    border-radius: 0.7rem;
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