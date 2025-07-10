import React from "react";
import styled from "styled-components";

const Highlight = styled.span`
  color: #e4572e;
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
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`;

const ChallengesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
`;

const ChallengeCard = styled.div`
  min-width: 180px;
  max-width: 240px;
  background: #fff;
  border-radius: 1.2rem;
  border: 2px solid #e4572e;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
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