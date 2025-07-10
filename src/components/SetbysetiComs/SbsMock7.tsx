import React from "react";
import styled from "styled-components";
import mockVideo from "../../assets/sbsimg/print2.mp4";

const MockupSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 16px 0;
`;

const IndividualMockup = styled.video`
  width: 40vw;
  max-width: 40vw;
  max-height: 50vh;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
`;

const SbsMock7: React.FC = () => (
  <MockupSection>
    <IndividualMockup
        src={mockVideo}
        loop
        muted
        playsInline
      controls
        aria-label="SBS Print Video"
      />
  </MockupSection>
);

export default SbsMock7;