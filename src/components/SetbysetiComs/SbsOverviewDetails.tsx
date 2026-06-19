import React from "react";
import styled from "styled-components";

const DetailsSection = styled.section`
  width: 100vw;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px clamp(0.75rem, 2vw, 1.5rem) 40px;
  @media (max-width: 900px) {
    padding: 16px 0 8px 0;
  }
  @media (max-width: 600px) {
    padding: 40px clamp(0.75rem, 2vw, 1.5rem) 30px;
  }
`;

const DetailsText = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 900px) {
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    margin-bottom: 1.2rem;
  }
`;

const AimLine = styled.div`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #fabfb7;
  font-weight: 400;
  margin-top: 1.2rem;
  text-align: center;
  letter-spacing: 0.01em;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`;

const SbsOverviewDetails: React.FC = () => (
  <DetailsSection>
    <DetailsText>
      My role involved designing the brand identity (logo, color palette, typeface), crafting a cohesive set of custom illustrations for print and Black Friday social media campaigns. The result is a bold, playful, and youthful brand identity that captures the vibrant energy of its audience.
    </DetailsText>
    <AimLine>
      Aim → Create a bold identity → Capture Gen Z spirit → Make fashion fun and affordable
    </AimLine>
  </DetailsSection>
);

export default SbsOverviewDetails; 