import React from "react";
import styled from "styled-components";
import allin1Video from "../../assets/sbsimg/allin1.mp4";

const VideoSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 2.2rem;
  letter-spacing: -1px;
  text-align: center;
`;

const VideoContainer = styled.div`
  width: 70vw;
  max-width: 70vw;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const SbsVideo: React.FC = () => (
  <VideoSection>
    <VideoContainer>
      <Video
        src={allin1Video}
        autoPlay
        loop
        muted
        playsInline
      />
    </VideoContainer>
  </VideoSection>
);

export default SbsVideo; 