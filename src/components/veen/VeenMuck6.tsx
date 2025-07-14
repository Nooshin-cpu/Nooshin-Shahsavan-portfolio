import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import typeVideo from "../../assets/veen/vv.mp4";

const MinimalSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`;

const Description = styled.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`;

const VideoWrapper = styled.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const VeenMuck6: React.FC = () => {
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [autoplayed]);

  return (
    <MinimalSection>
      <Title>Typography</Title>
      <Description>
      The typography system was carefully chosen to reflect warmth and professionalism, ensuring excellent readability across all applications.
      </Description>
      <VideoWrapper>
        <StyledVideo
          ref={videoRef}
          src={typeVideo}
          loop
          muted
          playsInline
          controls
          aria-label="Typography video"
        />
      </VideoWrapper>
    </MinimalSection>
  );
};

export default VeenMuck6;