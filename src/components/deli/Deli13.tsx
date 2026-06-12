import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import deliVideo from "../../assets/deli/deliweb.mp4";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;

const VideoContainer = styled.div`
  width: 70vw;
  max-width: 1100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`;


const Deli13: React.FC = () => {
  return (
    <Section>
      <VideoContainer>
        <LazyVideo
          src={deliVideo}
          autoPlay loop muted playsInline
          skeletonAspectRatio="16/9"
          aria-label="Delicato web showcase"
        />
      </VideoContainer>
    </Section>
  );
};

export default Deli13; 