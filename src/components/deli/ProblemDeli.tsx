import React from "react";
import styled from "styled-components";

const Highlight = styled.span`
  color: #b48a3b;
  font-weight: 400;
`;

const challenges = [
  {
    title: "Logo",
    description: (
      <>
        Design a logo that blends <Highlight>classical Roman</Highlight> inspiration with a <Highlight>modern minimalist</Highlight> identity.
      </>
    ),
  },
  {
    title: "Color Palette",
    description: (
      <>
        Choose colors that reflect <Highlight>historical elegance</Highlight>, while also feeling warm, safe, and approachable for <Highlight>modern</Highlight> families.
      </>
    ),
  },
  {
    title: "Typography",
    description: (
      <>
        Use typography that combines a sense of <Highlight>classical luxury</Highlight> with <Highlight>modern readability</Highlight> for both print and digital platforms.
      </>
    ),
  },
  {
    title: "Visual Tone",
    description: (
      <>
        Design social visuals that align with the brand values and look cohesive, warm, and creative across platforms.
      </>
    ),
  },
];

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
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

const ChallengesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`;

const ChallengeCard = styled.div`
  min-width: 180px;
  max-width: 240px;
  background: #fff;
  border-radius: 1.2rem;
  border: 2px solid #b48a3b;
  box-shadow: none;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: #b48a3b;
  }
  @media (max-width: 900px) {
    min-width: 140px;
    max-width: 180px;
    padding: 1rem 0.8rem;
  }
  @media (max-width: 600px) {
    min-width: 90vw;
    max-width: 98vw;
    padding: 0.8rem 0.4rem;
  }
`;

const ChallengeTitle = styled.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`;

const ChallengeDesc = styled.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;

function ProblemDeli() {
  return (
    <MinimalSection id="deli-challenges">
      <Title>Key Challenges</Title>
      <Description>
        The project required solving four main creative challenges to build a cohesive, expressive brand identity for Delicato.
      </Description>
      <ChallengesGrid>
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.title}>
            <ChallengeTitle>{challenge.title}</ChallengeTitle>
            <ChallengeDesc>{challenge.description}</ChallengeDesc>
          </ChallengeCard>
        ))}
      </ChallengesGrid>
    </MinimalSection>
  );
}

export default ProblemDeli;