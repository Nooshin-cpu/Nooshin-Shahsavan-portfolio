import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import pro2Video from "../../assets/work/pro-2.mp4";

// Montserrat font global style
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 400;
    background: #fafafa;
  }
`;

const SectionCard = styled.section`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 32px #0002, 0 2px 10px #0001;
  width: 60vw;
  aspect-ratio: 1.406 / 1;
  margin: 4vw auto 2vw auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 900px) {
    width: 95vw;
    aspect-ratio: unset;
    flex-direction: column;
    border-radius: 10px;
    min-height: 520px;
    padding: 0;
  }
`;

const LeftContent = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4vw 0 4vw 4vw;
  min-width: 340px;
  @media (max-width: 900px) {
    padding: 2.5rem 1.2rem 2rem 1.2rem;
    align-items: center;
    width: 100%;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 280px;
  padding: 0 3vw 0 0;
  @media (max-width: 900px) {
    padding: 0 0 2rem 0;
    width: 100%;
    min-width: 0;
    justify-content: center;
  }
`;

const ProblemIndex = styled.div`
  color: #888;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: 'Montserrat', sans-serif;
`;

const ProblemTitle = styled.h2`
  color: #3e2ffc;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  @media (max-width: 700px) {
    text-align: center;
    width: 100%;
    font-size: 22px;
  }
`;

const ProblemText = styled.p`
  color: #222;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
  max-width: 420px;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.98rem;
  }
`;

const VideoPlaceholder = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px #0001;
  width: 260px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1.5px solid #eee;
  @media (max-width: 600px) {
    width: 170px;
    height: 350px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
`;

const WorkdayProblem2: React.FC = () => (
  <>
    <GlobalStyle />
    <SectionCard>
      <LeftContent>
        <ProblemIndex>Problem 2</ProblemIndex>
        <ProblemTitle>Finding the Time Off Option</ProblemTitle>
        <ProblemText>
          Requesting time off is difficult because the option is buried inside the “My Schedule” web page with no clear label or icon. On mobile, the text is tiny and unreadable without zooming, which breaks the layout and makes navigation harder. The “Time Off” button is barely visible, hidden in the top-right corner.
        </ProblemText>
      </LeftContent>
      <RightContent>
        <VideoPlaceholder>
          <StyledVideo
            src={pro2Video}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            aria-label="Finding the Time Off Option demo"
          />
        </VideoPlaceholder>
      </RightContent>
    </SectionCard>
  </>
);

export default WorkdayProblem2;