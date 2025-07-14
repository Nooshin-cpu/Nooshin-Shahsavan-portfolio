import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import colorVideo from "../../assets/sbsimg/color-sbs.mp4";
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

const VideoWrapper = styled.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const SbsColor: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayed, setAutoplayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!autoplayed && videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          videoRef.current.play();
          setAutoplayed(true);
  }
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Try to play if already in view on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [autoplayed]);

  return (
    <MinimalSection>
      <Title>Color Palette</Title>
      <Description>
      
        The graphics are based on lines to show movement and flow, so I selected nude and soft colors that are not too bold. This allows the lines to stay visually dominant and visible. The palette also includes transparent tones, symbolizing party lights and ambiance, supporting the illustrations without distraction.
      </Description>
      <VideoWrapper>
        <StyledVideo
          ref={videoRef}
          src={colorVideo}
          loop
          muted
          playsInline
          controls
          aria-label="Color palette video"
        />
      </VideoWrapper>
    </MinimalSection>
  );
};

export default SbsColor;