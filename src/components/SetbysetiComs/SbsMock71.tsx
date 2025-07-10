import React from "react";
import styled from "styled-components";
import mockVideo from "../../assets/sbsimg/story5.mp4";

const MockupSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
`;

const IndividualMockup = styled.video`
  width: 70vw;
  max-width: 70vw;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
`;

const SbsMock71: React.FC = () => (
  <MockupSection>
    <IndividualMockup
      src={mockVideo}
      loop
      muted
      playsInline
      controls
      aria-label="SBS Story Video"
    />
  </MockupSection>
);

export default SbsMock71;