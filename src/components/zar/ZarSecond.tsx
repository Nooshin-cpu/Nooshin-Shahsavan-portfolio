import React from "react";
import styled from "styled-components";
import strategyImg from "../../assets/zar/moodboard-zar.png";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 100vh;
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

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 250px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const AccentLine = styled.div`
  color: rgb(177, 67, 220);
  font-size: 1.02rem;
  margin: 2.2rem auto 0 auto;
  text-align: center;
  letter-spacing: 0.01em;
  width: auto;
  white-space: nowrap;
  overflow-x: auto;
  @media (max-width: 900px) {
    font-size: 0.98rem;
  }
  @media (max-width: 600px) {
    font-size: 0.92rem;
  }
`;

const ZarSecond: React.FC = () => (
  <MinimalSection>
    <Title>About Zar</Title>
    <Description>
      ZAR is a premium saffron brand rooted in Persian culture. The name means "gold" in Persian, reflecting the value and heritage of saffron. The brand combines traditional elements with modern design to present saffron as a high-end, culturally rich product for a global audience.
    </Description>
    
    <ImageWrapper>
      <StyledImage 
        src={strategyImg} 
        alt="Brand Strategy Visual" 
      />
    </ImageWrapper>
    <AccentLine>
      Aim → Persian Heritage → Cultural Authenticity → Modern Design → Unforgettable Experience
    </AccentLine>
  </MinimalSection>
);

export default ZarSecond;






