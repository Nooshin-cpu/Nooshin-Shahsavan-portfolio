import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/zar/zarbrushor.jpg";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 12px;
  }
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    border-radius: 8px;
  }
  @media (max-width: 480px) {
    width: 98vw;
    border-radius: 6px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`;

const Zarmock6: React.FC = () => (
  <MinimalSection>
    <ImageWrapper>
      <StyledImage src={mockImg} alt="Zar Mockup 6" />
    </ImageWrapper>
  </MinimalSection>
);

export default Zarmock6;