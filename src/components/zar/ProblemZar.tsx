import React from "react";
import styled from "styled-components";

const Highlight = styled.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`;

const challenges = [
  {
    title: "Logo",
    description: (
      <>
        Design a logo that reflects <Highlight>Persian luxury</Highlight> and <Highlight>modern sophistication</Highlight>, blending cultural heritage with contemporary appeal.
      </>
    ),
  },
  {
    title: "Color Palette",
    description: (
      <>
        Choose colors that express <Highlight>premium quality</Highlight> and <Highlight>cultural richness</Highlight> while feeling modern and visually striking.
      </>
    ),
  },
  {
    title: "Typography",
    description: (
      <>
        Use typography that balances <Highlight>luxury</Highlight> and <Highlight>approachability</Highlight>, expressing both refinement and human warmth.
      </>
    ),
  },
  {
    title: "Visual Tone",
    description: (
      <>
        Design packaging that feels <Highlight>elevated</Highlight> and <Highlight>culturally rooted</Highlight>, while being functional and experience-driven.
      </>
    ),
  },
];

const MinimalSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #ffffff;
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
  color: #e0e0e0;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1rem;
  }
`;

const ChallengesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const ChallengeCard = styled.div`
  min-width: 180px;
  max-width: 240px;
  background: var(--cardBackground);
  border-radius: 1.2rem;
  border: 2px solid rgb(163, 73, 198);
  box-shadow: none;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: rgb(163, 73, 198);
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
  font-size: 1.1rem;
  font-weight: 600;
  color: #a349c6;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const ChallengeDescription = styled.div`
  color: #e0e0e0;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
`;

const ProblemZar: React.FC = () => (
  <MinimalSection>
    <Title>Branding Challenges</Title>
    <Description>
      The main design challenges for the ZAR brand were:
    </Description>
    <ChallengesGrid>
      {challenges.map((challenge, idx) => (
        <ChallengeCard key={challenge.title}>
          <ChallengeTitle>{challenge.title}</ChallengeTitle>
          <ChallengeDescription>{challenge.description}</ChallengeDescription>
        </ChallengeCard>
      ))}
    </ChallengesGrid>
  </MinimalSection>
);

export default ProblemZar;