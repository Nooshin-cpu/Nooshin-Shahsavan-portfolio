import React from "react";
import styled from "styled-components";
import mockImg from "../../assets/sbsimg/sbs-tag.jpg";

const MockupSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
`;

const IndividualMockup = styled.img`
  width: 70vw;
  max-width: 70vw;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  display: block;
`;

const SbsMock10: React.FC = () => (
  <MockupSection>
    <IndividualMockup src={mockImg} alt="SBS Card Mockup" />
  </MockupSection>
);

export default SbsMock10;