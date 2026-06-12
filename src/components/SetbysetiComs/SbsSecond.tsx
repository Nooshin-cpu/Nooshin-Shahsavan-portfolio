import React from 'react';
import styled from 'styled-components';
import LazyVideo from '../LazyVideo';
import logo1 from '../../assets/sbsimg/s-logo1.png';
import logo2 from '../../assets/sbsimg/s-logo2.mp4';
import logo3 from '../../assets/sbsimg/s-logo3.png';
import { motion } from 'framer-motion';

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

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
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

const Category = styled.div`
    font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`;

const LogoMedia = styled.div`
  display: flex;
  flex-direction: column;
    align-items: center;
  gap: 2.5rem;
  margin: 2.2rem 0 1.2rem 0;
  @media (max-width: 900px) {
    gap: 1.2rem;
    margin: 1.2rem 0 0.8rem 0;
  }
  @media (max-width: 600px) {
    gap: 0.8rem;
    margin: 0.8rem 0 0.4rem 0;
  }
`;

const MainLogoVideo = styled.div`
  width: 320px;
  height: 320px;
  max-width: 90vw;
  max-height: 60vw;
  border-radius: 1.5rem;
  background: #f7f7f7;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  overflow: hidden;
  @media (max-width: 900px) { width: 220px; height: 220px; }
  @media (max-width: 600px) { width: 98vw; height: 180px; max-width: 98vw; max-height: 40vw; }
`;

const LogoRow = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`;

const LogoImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 1rem;
  background: #f7f7f7;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 98vw;
    max-height: 98vw;
  }
`;

const LogoCaption = styled.div`
  font-size: 0.95rem;
  color: #888;
  text-align: center;
  margin-top: 0.5em;
`;

const Highlight = styled.span`
  color: #e4572e;
  font-weight: 400;
`;

const SbsSecond: React.FC = () => (
  <MinimalSection>
    <Title>Logo Design</Title>
    <Description>
      <Category>I should</Category>
      Design a logo that reflects the values of <Highlight>freedom</Highlight>, <Highlight>movement</Highlight>, and <Highlight>carefreeness</Highlight>, and also functions as part of every clothing graphic.
      <Category>So</Category>
      To design a logo that reflects the brand's core values of <Highlight>freedom</Highlight>, <Highlight>movement</Highlight>, and <Highlight>carefreeness</Highlight>, I began with an image of a carefree person jumping  a moment that perfectly captures the brand's vibe. <Highlight>Inspired by this expressive pose</Highlight>, I first sketched the figure and then simplified it into flowing line work.
    </Description>
    <LogoMedia>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <MainLogoVideo>
          <LazyVideo
            src={logo2}
            autoPlay loop muted playsInline
            objectFit="contain"
            style={{ width: '100%', height: '100%' }}
            aria-label="S.B.S Main Logo Animation"
          />
        </MainLogoVideo>
        <LogoCaption>Main Logo (Animated)</LogoCaption>
      </div>
      <LogoRow>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <LogoImg src={logo1} alt="S.B.S Logo Static" />
          <LogoCaption>Static Logo</LogoCaption>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <LogoImg src={logo3} alt="S.B.S Logo Variation" />
          <LogoCaption>Logo Variation</LogoCaption>
        </div>
      </LogoRow>
    </LogoMedia>
  </MinimalSection>
);

export default SbsSecond;