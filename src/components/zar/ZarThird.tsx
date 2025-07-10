import React from 'react';
import styled from 'styled-components';
import logo1 from '../../assets/zar/logo-zar-1.png';
import logo2 from '../../assets/zar/zar-logo.mp4';
import logo3 from '../../assets/zar/logo-zar-2.png';
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
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`;

const Highlight = styled.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`;

const MediaWrapper = styled.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;

const ImageRow = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
`;

const StyledImage = styled.img`
  width: 50%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
`;

const ZarThird: React.FC = () => (
  <MinimalSection>
    <Title>Logo Design</Title>
    <Description>
    For the pictorial logo, my goal was to <Highlight>represent a symbol of the saffron flower</Highlight>. Therefore, based on the images provided below, you can see the steps of analyzing a real saffron flower, simplifying its form, and finally creating the resulting logo design.
    </Description>
    
    <MediaWrapper>
      <StyledVideo
        src={logo2}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="ZAR logo animation"
      />
      <ImageRow>
        <StyledImage 
          src={logo1} 
          alt="ZAR logo design" 
        />
        <StyledImage 
          src={logo3} 
          alt="ZAR logo variations" 
        />
      </ImageRow>
    </MediaWrapper>
    <Description>
      In the wordmark logo, I tried to design something that reflects the <Highlight>delicacy</Highlight> and <Highlight>fragility of saffron</Highlight>. That’s why I chose a fine and elegant typeface.
    </Description>
  </MinimalSection>
);

export default ZarThird;