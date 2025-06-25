import React from "react";
import styled from "styled-components";

// Reuse the SectionCard style for consistency
const SectionCard = styled.section`
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 8px 32px #0002, 0 2px 10px #0001;
  width: 60vw;
  margin: 4vw auto 2vw auto;
  font-family: 'Montserrat', sans-serif;
  padding: 3.5rem 3vw;
  @media (max-width: 900px) {
    width: 95vw;
    border-radius: 16px;
    min-height: auto;
    padding: 2rem 0.7rem;
  }
`;

const Title = styled.h1`
  color: #483efc;
  font-size: 2.3rem;
  font-weight: 900;
  margin: 0 0 2.2rem 0;
`;

const ChallengeText = styled.p`
  color: #191c3a;
  font-size: 1.18rem;
  margin-bottom: 0.4rem;
  max-width: 900px;
  line-height: 1.5;
  font-weight: 500;
  b {
    color: #1a1abb;
    font-weight: 700;
  }
  .highlight {
    color: #2a12d3;
    font-weight: 700;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1.5px solid #bcbcc5;
  margin: 3.3rem 0 2.7rem 0;
  width: 100%;
`;

const GoalsTitle = styled.h1`
  color: #483efc;
  font-size: 2.1rem;
  font-weight: 900;
  margin: 0 0 1.5rem 0;
`;

const GoalsList = styled.ol`
  padding-left: 1.2em;
  font-size: 1.14rem;
  color: #191c3a;
  font-weight: 500;
  line-height: 1.7;
  li {
    margin-bottom: 0.7em;
    b, .goal-num {
      color: #2a12d3;
      font-weight: 700;
      margin-right: 0.3em;
    }
  }
`;

const ChallengeGoals: React.FC = () => (
  <SectionCard>
    <Title>Challenge</Title>
    <ChallengeText>
      <b>How might I</b> make it easier for users to access their full weekly schedule at a glance, all on one screen?<br/>
      And how can I simplify the time-off request process so it’s clear, fast, and takes only a few clicks?
    </ChallengeText>
    <Divider />
    <GoalsTitle>UX Goals</GoalsTitle>
    <GoalsList>
      <li><span className="goal-num">1.</span>Make the weekly schedule easily viewable at a glance on a single screen.</li>
      <li><span className="goal-num">2.</span>Simplify the time-off request process with fewer, clearer steps.</li>
      <li><span className="goal-num">3.</span>Provide clear, immediate feedback after submitting a time-off request.</li>
    </GoalsList>
  </SectionCard>
);

export default ChallengeGoals;