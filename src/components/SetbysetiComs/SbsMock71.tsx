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
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
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
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
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