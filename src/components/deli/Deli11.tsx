import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import deliVideo from "../../assets/deli/delistory.mp4";

const Section = styled.section`
  width: 100vw;
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

const VideoContainer = styled.div`
  width: 70vw;
  max-width: 1100px;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`;


const Deli11: React.FC = () => {
  return (
    <Section>
      <VideoContainer>
        <LazyVideo
          src={deliVideo}
          autoPlay loop muted playsInline controls
          style={{ width: '40%' }}
          skeletonAspectRatio="9/16"
        />
      </VideoContainer>
    </Section>
  );
};

export default Deli11; 