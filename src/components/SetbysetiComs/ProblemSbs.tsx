import React from "react";
import styled from "styled-components";

const Highlight = styled.span`
  color: #fabfb7;
  font-weight: 400;
`;

const challenges = [
  {
    title: "Logo",
    description: (
      <>
        Design a flexible logo that reflects <Highlight>freedom</Highlight>, <Highlight>dance</Highlight>, and <Highlight>carefreeness</Highlight>, and can be used in every graphic.
      </>
    ),
  },
  {
    title: "Color Palette",
    description: (
      <>
        Choose <Highlight>soft</Highlight>, <Highlight>transparent</Highlight> colors to support line-based graphics and reflect party lights.
      </>
    ),
  },
  {
    title: "Typography",
    description: "Find a typeface that matches the logo's form and works well on digital and print.",
  },
  {
    title: "Illustration",
    description: (
      <>
        Create graphics that show <Highlight>movement</Highlight> and <Highlight>Gen Z mood</Highlight>, blending with the logo's curves.
      </>
    ),
  },
];

const MinimalSection = styled.section`
  width: 100vw;
  min-height: auto;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
  @media (max-width: 900px) {
    padding: 80px clamp(1rem, 3vw, 2rem) 60px;
  }
  @media (max-width: 600px) {
    padding: 60px clamp(0.75rem, 2vw, 1.5rem) 40px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: left;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 2.2rem 0;
  text-align: left;
  @media (max-width: 900px) {
    max-width: 90vw;
  }
  @media (max-width: 600px) {
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
  background: #fafaf8;
  border-radius: 16px;
  border: 2px solid #fabfb7;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
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

const ChallengeTitle = styled.div`  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: left;
`;

const ChallengeDesc = styled.div`
  font-weight: 400;
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #222;
  line-height: 1.82;
  letter-spacing: -0.1px;
  text-align: left;
`;

function ProblemSbs() {
  return (
    <MinimalSection>
      <Title>Key Challenges</Title>
      <Description>
        The project required solving four main creative challenges to build a cohesive, expressive brand identity.
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

export default ProblemSbs;
