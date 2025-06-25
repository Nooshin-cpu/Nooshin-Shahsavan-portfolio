import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import errorImg from "../../assets/work/error.png";

// Montserrat font global style
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    background: #fafafa;
  }
`;

const SectionCard = styled.section`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 32px #0002, 0 2px 7px #0001;
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

const ErrorImg = styled.img`
  width: 300px;
  max-width: 98%;
  height: auto;
  border-radius: 20px;
  object-fit: contain;
  @media (max-width: 600px) {
    width: 180px;
  }
`;

const WorkdayProblem3: React.FC = () => (
  <>
    <GlobalStyle />
    <SectionCard>
      <LeftContent>
        <ProblemIndex>Problem 3</ProblemIndex>
        <ProblemTitle>No Feedback After Submitting Time Off</ProblemTitle>
        <ProblemText>
          After submitting a request, users receive no confirmation or status update. They have to keep checking the page manually, which is frustrating and inefficient.
        </ProblemText>
      </LeftContent>
      <RightContent>
        <ErrorImg src={errorImg} alt="No feedback after submitting time off illustration" />
      </RightContent>
    </SectionCard>
  </>
);

export default WorkdayProblem3;