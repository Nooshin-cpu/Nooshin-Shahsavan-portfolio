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
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`;

const IndividualMockup = styled.video`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
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
      preload="metadata"
    />
  </MockupSection>
);

export default SbsSocialMedia2; 