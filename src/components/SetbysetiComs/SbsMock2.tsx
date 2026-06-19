import React from "react";
import styled from "styled-components";
import mockupImg1 from "../../assets/sbsimg/sbs-tag.jpg";
import mockupImg2 from "../../assets/sbsimg/sbs-box.jpg";

const MockupSection = styled.section`
  width: 100vw;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
  
  @media (max-width: 1200px) {
    padding: 80px clamp(1rem, 3vw, 2rem) 60px;
  }
  
  @media (max-width: 900px) {
    padding: 80px clamp(1rem, 3vw, 2rem) 60px;
  }
  
  @media (max-width: 600px) {
    padding: 60px clamp(0.75rem, 2vw, 1.5rem) 40px;
  }
  
  @media (max-width: 480px) {
    padding: 40px clamp(0.75rem, 2vw, 1.5rem) 30px;
  }
`;

const TwoColumnGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    gap: 1.5rem;
  }
  
  @media (max-width: 900px) {
    gap: 1rem;
    width: 90vw;
    max-width: 90vw;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    width: 95vw;
    max-width: 95vw;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    gap: 0.6rem;
  }
`;

const PairedMockup = styled.img`
  width: calc(50% - 1rem);
  max-width: calc(50% - 1rem);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  object-fit: contain;
  
  @media (max-width: 1200px) {
    width: calc(50% - 0.75rem);
    max-width: calc(50% - 0.75rem);
    border-radius: 16px;
  }
  
  @media (max-width: 900px) {
    width: 44vw;
    max-width: 44vw;
    border-radius: 16px;
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

const SbsMock2: React.FC = () => (
  <MockupSection>
    <TwoColumnGrid>
      <PairedMockup src={mockupImg1} alt="SBS Tote Bag Mockup 2" />
      <PairedMockup src={mockupImg2} alt="SBS Box Mockup" />
    </TwoColumnGrid>
  </MockupSection>
);

export default SbsMock2;