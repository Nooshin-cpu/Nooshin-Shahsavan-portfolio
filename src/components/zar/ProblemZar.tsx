import React from "react";
import styled from "styled-components";

const challenges = [
  {
    title: "Logo",
    description: (
      <>
        Design a logo that reflects luxury and Persian heritage, blending modern forms with classical elegance.
      </>
    ),
  },
  {
    title: "Color Palette",
    description: (
      <>
        Choose colors that express premium quality and cultural richness while feeling modern and visually striking.
      </>
    ),
  },
  {
    title: "Typography",
    description: (
      <>
       Use typography that balances luxury and approachability, expressing both refinement and human warmth.
      </>
    ),
  },
  {
    title: "Visual Tone",
    description: (
      <>
        Design packaging that feels elevated and culturally rooted, while being functional and experience-driven.
      </>
    ),
  },
];

const BG = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #6c3483;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.div`
  width: 72vw;
  max-width: 1200px;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(108, 52, 131, 0.13);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid #6c3483;
  padding: 3.5rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 700px) {
    padding: 1.2rem 0.5rem 1.5rem 0.5rem;
    width: 98vw;
  }
`;

const SbsLabel = styled.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888888;
  margin-bottom: 0.35em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 2.7rem;
  color: #111;
  margin: 0 0 2rem 0;
  line-height: 1.07;
  letter-spacing: -1px;
  text-transform: uppercase;
  width: 100%;
  text-align: left;
  @media (max-width: 700px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
`;

const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.2rem;
  width: 100%;
  @media (max-width: 700px) {
    gap: 1rem;
    grid-template-columns: 1fr;
  }
`;

const ChallengeCard = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(108, 52, 131, 0.08);
  border: 1.5px solid #6c3483;
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(108, 52, 131, 0.18);
  }
  @media (max-width: 700px) {
    padding: 1.1rem 0.7rem 1rem 0.7rem;
  }
`;

const ChallengeDesc = styled.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #444;
  line-height: 1.6;
  letter-spacing: -0.1px;
  text-align: left;
`;

function ProblemZar() {
  return (
    <BG>
      <Glass>
        <SbsLabel>Key</SbsLabel>
        <Title>Challenges</Title>
        <ChallengesGrid>
          {challenges.map((challenge, i) => (
            <ChallengeCard key={challenge.title}>
              <SbsLabel>{challenge.title}</SbsLabel>
              <ChallengeDesc>{challenge.description}</ChallengeDesc>
            </ChallengeCard>
          ))}
        </ChallengesGrid>
      </Glass>
    </BG>
  );
}

export default ProblemZar; 