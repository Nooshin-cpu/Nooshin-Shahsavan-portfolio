import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/zar/zar-sticker.jpg";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 60vh;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
  @media (max-width: 900px) {
    padding: 80px clamp(1rem, 3vw, 2rem) 60px;
  }
  @media (max-width: 600px) {
    padding: 60px clamp(0.75rem, 2vw, 1.5rem) 40px;
  }
`;

const ImageWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const Zarmock7: React.FC = () => (
  <MinimalSection>
    <ImageWrapper>
      <StyledImage src={mockImg} alt="Zar Mockup 7" />
    </ImageWrapper>
  </MinimalSection>
);

export default Zarmock7;