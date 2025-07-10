import React from "react";
import styled from "styled-components";
import mockupImg1 from "../../assets/sbsimg/sbs-box.jpg";
import mockupImg2 from "../../assets/sbsimg/sbs-tag.jpg";

const MockupSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
    flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
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
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
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