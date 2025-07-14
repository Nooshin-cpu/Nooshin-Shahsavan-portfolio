import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/zar/zarbag.jpg";

const MinimalSection = styled.section`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
  
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;

const ImageWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 12px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    border-radius: 10px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const Zarmock4: React.FC = () => (
  <MinimalSection>
    <ImageWrapper>
      <StyledImage src={mockImg} alt="Zar Mockup 4" />
    </ImageWrapper>
  </MinimalSection>
);

export default Zarmock4;
