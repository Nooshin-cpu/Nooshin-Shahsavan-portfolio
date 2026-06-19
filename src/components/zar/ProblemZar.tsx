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
  width: 100vw;
  min-height: auto;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: center;
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
  text-align: center;
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
  background: #fafaf8;
  border-radius: 16px;
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
  color: #444;
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