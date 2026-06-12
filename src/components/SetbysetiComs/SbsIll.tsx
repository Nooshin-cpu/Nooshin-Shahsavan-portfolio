import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import capIntroVideo from "../../assets/sbsimg/cap-intro2.mp4";

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

const Title = styled.h2`
  font-size: 2.1rem;
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

const VideoWrapper = styled.div`
  width: 420px;
  height: 420px;
  max-width: 90vw;
  max-height: 60vw;
  margin: 2.2rem 0 1.2rem 0;
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const SbsIll: React.FC = () => (
  <MinimalSection>
    <Title>Illustration</Title>
    <Description>
      The illustration style uses curved lines and neutral, emotionless characters to reflect Gen Z’s mood and the brand’s sense of movement and freedom. The logo’s form is echoed in every graphic, creating a cohesive and culturally relevant visual identity.
    </Description>
    <VideoWrapper>
      <LazyVideo
        src={capIntroVideo}
        loop muted playsInline controls
        objectFit="contain"
        style={{ width: '100%', height: '100%' }}
        aria-label="Cap intro video"
      />
    </VideoWrapper>
  </MinimalSection>
);

export default SbsIll;