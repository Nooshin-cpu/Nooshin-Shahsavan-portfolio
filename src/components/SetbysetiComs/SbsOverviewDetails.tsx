import React from "react";
import styled from "styled-components";

const DetailsSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 16px 0;
  @media (max-width: 900px) {
    padding: 16px 0 8px 0;
  }
  @media (max-width: 600px) {
    padding: 8px 0 4px 0;
  }
`;

const DetailsText = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`;

const AimLine = styled.div`
  font-size: 1.08rem;
  color: #e4572e;
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