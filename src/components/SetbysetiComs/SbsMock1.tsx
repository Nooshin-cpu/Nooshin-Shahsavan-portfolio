import React from "react";
import styled from "styled-components";
import mockupImg from "../../assets/sbsimg/sbs-bag1.jpg";

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

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: #181818;
  margin-bottom: 2.2rem;
  letter-spacing: -0.03em;
  text-align: center;
  
  @media (max-width: 900px) {
    margin-bottom: 1.8rem;
  }
  
  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
  }
`;

const IndividualMockup = styled.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  object-fit: contain;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 16px;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
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

const SbsMock1: React.FC = () => (
  <MockupSection>
    <SectionTitle>Mockups</SectionTitle>
    <IndividualMockup src={mockupImg} alt="SBS Tote Bag Mockup" />
  </MockupSection>
);

export default SbsMock1;