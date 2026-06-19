import React from "react";
import styled from "styled-components";
import strategyImg from "../../assets/veen/brand-strategy.png";

const MinimalSection = styled.section`
  #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 700;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: left;
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 2.2rem 0;
  text-align: left;
`;

const ImageWrapper = styled.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 0 2.2rem 0;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const AimRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  font-size: 1.13rem;
  font-weight: 600;
`;

const AimText = styled.span`
  color: #9ed4d1;
`;
const Arrow = styled.span`
  color: #bdbdbd;
`;
const Warm = styled.span`
  color: #f7b267;
`;
const JoyTrust = styled.span`
  color: #e07a5f;
`;
const Visuals = styled.span`
  color: #3d405b;
`;
const Online = styled.span`
  color: #81b29a;
`;

const VeenSecond: React.FC = () => (
  <MinimalSection>
    <Title>What I did ...</Title>
    <Description>
    I was responsible for designing a logo system, selecting a color palette, choosing typography, and creating social media content to establish a strong and cohesive brand presence.
    </Description>
    <ImageWrapper>
      <StyledImg src={strategyImg} alt="Brand Strategy Visual" />
    </ImageWrapper>
    <AimRow>
      <AimText>Aim</AimText>
      <Arrow>➝</Arrow>
      <AimText>Create warm brand identity</AimText>
      <Arrow>➝</Arrow>
      <AimText>Reflect Family + joy and trust</AimText>
      <Arrow>➝</Arrow>
      <AimText>Design visuals</AimText>
      <Arrow>➝</Arrow>
      <AimText>Build strong online presence</AimText>
    </AimRow>
  </MinimalSection>
);

export default VeenSecond;






