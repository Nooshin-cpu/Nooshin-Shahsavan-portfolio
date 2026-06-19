import React from "react";
import styled from "styled-components";
import strategyImg from "../../assets/zar/moodboard-zar.png";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: auto;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
  @media (max-width: 900px) {
    padding: 80px clamp(1rem, 3vw, 2rem) 60px;
  }
  @media (max-width: 600px) {
    padding: 60px clamp(0.75rem, 2vw, 1.5rem) 40px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 700;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: center;
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 2.2rem 0;
  text-align: center;
  @media (max-width: 900px) {
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    margin-bottom: 1.2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 0 2.2rem 0;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
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






