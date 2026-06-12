import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import webVideo from "../../assets/sbsimg/web.mp4";

const MockupSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
`;

const IndividualMockup = styled.div`
  width: 70vw;
  max-width: 70vw;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  overflow: hidden;
`;

const SbsMock8: React.FC = () => (
  <MockupSection>
    <IndividualMockup>
      <LazyVideo
        src={webVideo}
        loop muted playsInline controls
        skeletonAspectRatio="16/9"
        aria-label="SBS Web Video"
      />
    </IndividualMockup>
  </MockupSection>
);

export default SbsMock8;