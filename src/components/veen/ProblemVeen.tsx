import React from "react";
import styled from "styled-components";

const challenges = [
  {
    title: "Logo",
    description: (
      <>
        Create a logo that is personal, soft, and memorable  with a hidden meaning that connects to photography and family.
      </>
    ),
  },
  {
    title: "Color Palette",
    description: (
      <>
        Find colors that express warmth, trust, and joy, while keeping the tone modern and soft not too bold or cold.
      </>
    ),
  },
  {
    title: "Typography",
    description: (
      <>
        hoose fonts that feel friendly, clean, and professional readable for both digital and print use.
      </>
    ),
  },
  {
    title: "Social Media",
    description: (
      <>
        Design social visuals that align with the brand values and look cohesive, warm, and creative across platforms.
      </>
    ),
  },
];

const BG = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #9ed4d1 0%,rgb(221, 239, 235) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.div`
  width: 72vw;
  max-width: 1200px;
  background: rgba(255,255,255,0.45);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.13);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid rgba(255,255,255,0.22);
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
  background: rgba(255,255,255,0.85);
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(255, 140, 66, 0.08);
  border: 1.5px solid #9ed4d1;
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(255, 140, 66, 0.13);
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

function ProblemVeen() {
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

export default ProblemVeen;