import React from "react";
import styled from "styled-components";

const SectionCard = styled.section`
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 8px 32px #0002, 0 2px 10px #0001;
  width: 60vw;
  max-width: 1100px;
  margin: 4vw auto 2vw auto;
  font-family: 'Montserrat', sans-serif;
  padding: 3.5rem 3vw 2.5rem 3vw;
  @media (max-width: 900px) {
    width: 95vw;
    border-radius: 16px;
    padding: 2rem 0.7rem 1.2rem 0.7rem;
    max-width: 100vw;
  }
`;

const SubtleLabel = styled.div`
  color: #bcbcc5;
  font-size: 1.04rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  color: #483efc;
  font-size: 2.3rem;
  font-weight: 900;
  margin: 0 0 1.1rem 0;
`;

const Description = styled.p`
  color: #222;
  font-size: 1.09rem;
  margin-bottom: 2.2rem;
  max-width: 950px;
  line-height: 1.6;
`;

const FlowLabel = styled.h2`
  color: #ff7c1d;
  font-size: 2rem;
  font-weight: 900;
  margin: 1.2rem 0 1.8rem 0;
`;

const FlowEmbedWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FigmaEmbed = styled.iframe`
  width: 1000px;
  height: 560px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: #fff;
  @media (max-width: 1100px) {
    width: 98vw;
    min-width: 320px;
    height: 52vw;
    min-height: 300px;
    max-width: 100vw;
  }
`;

const SolutionMakingSchedule: React.FC = () => (
  <SectionCard>
    <SubtleLabel>Solution1</SubtleLabel>
    <Title>Making a Schedule</Title>
    <Description>
      It’s super easy to view your schedule—just tap the “Schedule” button right on the home page. By default, it shows the current week with all the daily details. You can scroll down to see your whole month or even the entire year, all on the same page. And if you’re looking for a specific date, there’s a quick option to type it in and jump right to it.
    </Description>
    <FlowLabel>Flow 1</FlowLabel>
    <FlowEmbedWrapper>
      <FigmaEmbed
        src="https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=138-103&embed-host=share"
        allowFullScreen
      />
    </FlowEmbedWrapper>
  </SectionCard>
);

export default SolutionMakingSchedule;