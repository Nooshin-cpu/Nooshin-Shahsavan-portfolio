import React from "react";
import styled from "styled-components";

// Reuse the SectionCard style from Workday.tsx for visual consistency
const SectionCard = styled.section`
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 8px 32px #0002, 0 2px 10px #0001;
  width: 60vw;
  aspect-ratio: auto;
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
  margin: 0 0 1.7rem 0;
`;

const Intro = styled.p`
  color: #222;
  font-size: 1.07rem;
  margin-bottom: 2.2rem;
  max-width: 950px;
  line-height: 1.6;
  a {
    color: #483efc;
    font-weight: 700;
    text-decoration: underline;
  }
  strong, b {
    font-weight: 700;
    color: #291cc0;
  }
  .em {
    font-weight: 700;
    color: #483efc;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #a2a2b8;
  margin: 2.1rem 0 2.1rem 0;
  width: 100%;
`;

const ResearchGrid = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: space-between;
  margin-bottom: 2.2rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.1rem;
  }
`;

const ResearchItem = styled.div`
  flex: 1;
  min-width: 160px;
`;

const ResearchLabel = styled.div`
  font-size: 1.09rem;
  font-weight: 700;
  color: #1b1b29;
  margin-bottom: 0.3rem;
  letter-spacing: 0.01em;
`;

const ResearchList = styled.ul`
  padding-left: 1.1em;
  margin: 0.1em 0 0.7em 0;
  font-size: 1rem;
  color: #272727;
  line-height: 1.5;
  li {
    margin-bottom: 2px;
  }
`;

const FindingsTitle = styled.h2`
  color: #bdbdbd;
  font-size: 1.09rem;
  font-weight: 700;
  margin: 1.1rem 0 1rem 0;
  letter-spacing: 0.02em;
`;

const FindingsBar = styled.div`
  display: flex;
  gap: 0.7rem;
  margin: 0.5rem 0 0 0;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const FindingCard = styled.div<{bg: string}>`
  background: ${props => props.bg};
  color: white;
  border-radius: 12px;
  flex: 1;
  min-width: 150px;
  padding: 1.1rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  min-height: 90px;
  @media (max-width: 600px) {
    min-width: 0;
    padding: 0.9rem 0.8rem;
  }
`;

const Percent = styled.div`
  font-size: 1.7rem;
  font-weight: 900;
  margin-bottom: 0.15rem;
  line-height: 1;
`;

const Count = styled.span`
  font-size: 0.98rem;
  font-weight: 700;
  margin-left: 0.3rem;
`;

const FindingDesc = styled.div`
  margin-top: 0.2rem;
  font-size: 0.98rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.35;
`;

const UserInsight: React.FC = () => (
  <SectionCard>
    <Title>User Insight</Title>
    <Intro>
      To gain a better understanding of real user frustrations, I started with an <a href="#">open-ended Google Form survey</a>. From the responses, I intentionally selected five <strong>part-time workers</strong>, as their lifestyle closely matched the app’s target audience. During the usability sessions, participants frequently expressed <span className="em">frustration</span> due to the long and <span className="em">confusing steps, lack of clear guidance, and unclear instructions</span>. These issues caused confusion and made the overall experience feel frustrating and mentally exhausting for them.
    </Intro>

    <Divider />

    <ResearchGrid>
      <ResearchItem>
        <ResearchLabel>METHOD</ResearchLabel>
        <ResearchList>
          <li>In-person moderated usability testing</li>
          <li>Mostly observation with occasional guidance</li>
        </ResearchList>
      </ResearchItem>
      <ResearchItem>
        <ResearchLabel>PARTICIPANTS</ResearchLabel>
        <ResearchList>
          <li>5 part-time workers aligned with target audience</li>
        </ResearchList>
      </ResearchItem>
      <ResearchItem>
        <ResearchLabel>TASKS</ResearchLabel>
        <ResearchList>
          <li>Find the current week’s schedule</li>
          <li>Locate the “Day Off” option</li>
          <li>Request and track a day off for two days in the upcoming week via mobile app</li>
        </ResearchList>
      </ResearchItem>
      <ResearchItem>
        <ResearchLabel>DATA COLLECTION</ResearchLabel>
        <ResearchList>
          <li>Varied per participant, depending on their pace and task complexity</li>
        </ResearchList>
      </ResearchItem>
    </ResearchGrid>

    <FindingsTitle>What I found!</FindingsTitle>
    <FindingsBar>
      <FindingCard bg="#ff7c1d">
        <Percent>60% <Count>3/5</Count></Percent>
        <FindingDesc>
          Viewing weekly schedule was tiring<br />
          3 users had to check days one by one<br />
          and write them down on paper
        </FindingDesc>
      </FindingCard>
      <FindingCard bg="#ff9528">
        <Percent>80% <Count>4/5</Count></Percent>
        <FindingDesc>
          Hard to find “Day Off” option<br />
          Most users struggled to locate it
        </FindingDesc>
      </FindingCard>
      <FindingCard bg="#ffb531">
        <Percent>50% <Count>2.5/5</Count></Percent>
        <FindingDesc>
          Unclear how to track time-off request<br />
          Users didn’t know what happens after submitting
        </FindingDesc>
      </FindingCard>
    </FindingsBar>
  </SectionCard>
);

export default UserInsight;