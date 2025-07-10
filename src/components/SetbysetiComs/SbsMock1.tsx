import React from "react";
import styled from "styled-components";
import mockupImg from "../../assets/sbsimg/sbs-bag1.jpg";

const MockupSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 2.2rem;
  letter-spacing: -1px;
  text-align: center;
`;

const IndividualMockup = styled.img`
  width: 70vw;
  max-width: 70vw;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`;

const SbsMock1: React.FC = () => (
  <MockupSection>
    <SectionTitle>Mockups</SectionTitle>
    <IndividualMockup src={mockupImg} alt="SBS Tote Bag Mockup" />
  </MockupSection>
);

export default SbsMock1;