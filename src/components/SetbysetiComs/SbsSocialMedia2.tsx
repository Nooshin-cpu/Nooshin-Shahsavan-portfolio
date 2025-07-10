import React from "react";
import styled from "styled-components";
import story1 from "../../assets/sbsimg/story-1.mp4";

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

const SbsSocialMedia2: React.FC = () => (
  <MockupSection>
    <IndividualMockup
      src={story1}
      loop
      muted
      playsInline
      controls
      aria-label="SBS Social Media Story 1"
    />
  </MockupSection>
);

export default SbsSocialMedia2; 