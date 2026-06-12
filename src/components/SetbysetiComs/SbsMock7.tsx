import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import mockVideo from "../../assets/sbsimg/print2.mp4";

const MockupSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 16px 0;
`;

const IndividualMockup = styled.div`
  width: 40vw;
  max-width: 40vw;
  max-height: 50vh;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  overflow: hidden;
`;

const SbsMock7: React.FC = () => (
  <MockupSection>
    <IndividualMockup>
      <LazyVideo
        src={mockVideo}
        loop muted playsInline controls
        skeletonAspectRatio="9/16"
        aria-label="SBS Print Video"
      />
    </IndividualMockup>
  </MockupSection>
);

export default SbsMock7;