import React from "react";
import styled from "styled-components";
import mockupImg1 from "../../assets/sbsimg/sbs-tag.jpg";
import mockupImg2 from "../../assets/sbsimg/sbs-box.jpg";

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

const TwoColumnGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  max-width: 70vw;
  @media (max-width: 900px) {
    gap: 1rem;
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    width: 98vw;
    max-width: 98vw;
    align-items: center;
  }
`;

const PairedMockup = styled.img`
  width: calc(35vw - 1rem);
  max-width: calc(35vw - 1rem);
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  @media (max-width: 900px) {
    width: 44vw;
    max-width: 44vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`;

const SbsMock2: React.FC = () => (
  <MockupSection>
    <TwoColumnGrid>
      <PairedMockup src={mockupImg1} alt="SBS Tote Bag Mockup 2" />
      <PairedMockup src={mockupImg2} alt="SBS Box Mockup" />
    </TwoColumnGrid>
  </MockupSection>
);

export default SbsMock2;