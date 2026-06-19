import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/sbsimg/sbs-tag.jpg";

const MockupSection = styled.section`
  width: 100vw;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
`;

const IndividualMockup = styled.img`
  width: 70vw;
  max-width: 70vw;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  object-fit: contain;
  display: block;
`;

const SbsMock10: React.FC = () => (
  <MockupSection>
    <IndividualMockup src={mockImg} alt="SBS Card Mockup" />
  </MockupSection>
);

export default SbsMock10;