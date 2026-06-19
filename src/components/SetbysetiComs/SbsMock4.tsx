import React from "react";
import styled from "styled-components";
import mockupImg1 from "../../assets/sbsimg/sbs-box.jpg";
import mockupImg2 from "../../assets/sbsimg/sbs-tag.jpg";

const MockupSection = styled.section`
  width: 100vw;
  background: #fafaf8;
  display: flex;
    flex-direction: column;
  align-items: center;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
`;

const TwoColumnGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  max-width: 70vw;
`;

const PairedMockup = styled.img`
  width: calc(35vw - 1rem);
  max-width: calc(35vw - 1rem);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
`;

const SbsMock4: React.FC = () => (
  <MockupSection>
    <TwoColumnGrid>
      <PairedMockup src={mockupImg1} alt="SBS Box Mockup" />
      <PairedMockup src={mockupImg2} alt="SBS Tag Mockup" />
    </TwoColumnGrid>
  </MockupSection>
);

export default SbsMock4;