import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import workdayPhone from "../../assets/work/workday-phone.png";
import scheduleIcon from "../../assets/work/schedule.png";
import timeOutIcon from "../../assets/work/time-out.png";
import notificationIcon from "../../assets/work/notification.png";
import pro1Video from "../../assets/work/pro1.mp4";
import WorkdayProblem2 from "./WorkdayProblem2";
import WorkdayProblem3 from "./WorkdayProblem3";
import WorkdayPersona from "./WorkdayPersona";
import UserInsight from "./UserInsight";
import ChallengeGoals from "./ChallengeGoals";
import SolutionMakingSchedule from "./SolutionMakingSchedule";
import SolutionDayOffNotification from "./SolutionDayOffNotification";
import FinalLookMakingSchedule from "./FinalLookMakingSchedule";
import FinalLookDayOff from "./FinalLookDayOff";
import KeyTakeawaySection from "./KeyTakeawaySection";
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';


// Global style with dark mode support
const GlobalStyle = createGlobalStyle`
  @import url('<!-- public/index.html -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
');
  body {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 400;
    background: #191c24;
    transition: background 0.6s;
  }
`;

// Page background: white in light mode, dark in dark mode
const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #191c24;
  transition: background 0.2s;
  overflow-x: hidden;
`;

// Common Card container
const SectionCard = styled.section<{ $white?: boolean }>`
  background: ${({ $white }) => ($white ? "#fff" : "#252a36")};
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3), 0 2px 3px rgba(0, 0, 0, 0.2);
  width: 60vw;
  margin: 4vw auto 2vw auto;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    width: 80vw;
  }
  @media (max-width: 900px) {
    width: 95vw;
    margin: 2vw auto 1vw auto;
    border-radius: 8px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    margin: 1vw auto 0.5vw auto;
  }
`;

// --- PAGE 1: INTRO ---
const Page1Card = styled(SectionCard).attrs({ $white: true })`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3.5rem 3vw;
  gap: 4vw;
  min-height: 400px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    gap: 2rem;
    min-height: auto;
  }
  @media (max-width: 600px) {
    padding: 1.5rem 0.8rem;
    gap: 1.5rem;
  }
`;

// --- MISSING COMPONENT DEFINITION FIX ---
const PhoneMockup = styled.img`
  width: 340px;
  min-width: 220px;
  max-width: 38vw;
  height: auto;
  border-radius: 32px;
  box-shadow: 0 8px 40px #0002, 0 2px 6px #0001;
  background: #fff;
  flex-shrink: 0;
  @media (max-width: 900px) {
    width: 60vw;
    max-width: 300px;
    min-width: 200px;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 70vw;
    max-width: 250px;
    min-width: 180px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 280px;
  @media (max-width: 900px) {
    min-width: 0;
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #ff7c1d;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 0 1.6rem 0;
  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`;

const OverviewLabel = styled.h2`
  color: #212121;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  margin-top: 0;
  @media (max-width: 900px) {
    font-size: 1.6rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const OverviewContainer = styled.div`
  max-width: 520px;
  width: 100%;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const OverviewText = styled.p`
  color: #444;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 2.2rem;
  margin-top: 0;
  text-align: left;
  @media (max-width: 900px) {
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 1.8rem;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #e0e0e0;
  margin-bottom: 1.3rem;
  margin-top: 0;
  width: 100%;
`;

const RoleGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  width: 100%;
  max-width: 520px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.75rem;
    max-width: 100%;
  }
`;

const RoleItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const RoleLabel = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #333;
  letter-spacing: 0.5px;
  margin-bottom: 0.16rem;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const RoleValue = styled.span`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  white-space: pre-line;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

// --- PAGE 2: PROBLEM AT A GLANCE ---
const Page2Card = styled(SectionCard).attrs({ $white: true })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2vw 2.5rem 2vw;
  margin-top: 0;
  gap: 0;
  min-height: 400px;
  @media (max-width: 900px) {
    padding: 2rem 1rem 1.5rem 1rem;
    min-height: auto;
  }
  @media (max-width: 600px) {
    padding: 1.5rem 0.8rem 1rem 0.8rem;
  }
`;

const ProblemTitle = styled.h2`
  color: #483efc;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  margin-top: 0;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const ProblemSubTitle = styled.h3`
  color: #888;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2.2rem;
  margin-top: 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 1.8rem;
  }
`;

const ProblemDivider = styled.hr`
  border: none;
  border-top: 2px solid #483efc;
  width: 60%;
  margin: 0 auto 2rem auto;
  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 1.5rem;
  }
`;

const CardRow = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin-top: 2rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  @media (max-width: 600px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const ProblemCard = styled.div`
  background: #f7f7fa;
  border-radius: 18px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.05);
  padding: 2.2rem 1.3rem 1.5rem 1.3rem;
  width: 29%;
  min-width: 220px;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    width: 90%;
    max-width: 340px;
  }
  @media (max-width: 600px) {
    width: 95%;
    padding: 1.8rem 1rem 1.2rem 1rem;
    border-radius: 12px;
  }
`;

const CardIcon = styled.img`
  width: 54px;
  height: 54px;
  object-fit: contain;
  margin-bottom: 1.4rem;
  margin-top: 0.1rem;
  display: block;
  @media (max-width: 600px) {
    width: 48px;
    height: 48px;
    margin-bottom: 1.2rem;
  }
`;

const CardText = styled.div`
  color: #061133;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  margin-top: 0.2rem;
  line-height: 1.4;
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

// --- PAGE 3: PROBLEM 1 DETAIL ---
const Page3Card = styled(SectionCard)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  min-height: 400px;
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: auto;
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
    min-width: 0;
    flex: none;
  }
  @media (max-width: 600px) {
    padding: 2rem 1rem 1.5rem 1rem;
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
    flex: none;
  }
  @media (max-width: 600px) {
    padding: 0 0 1.5rem 0;
  }
`;

const ProblemIndex = styled.div`
  color: #888;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ProblemDetailTitle = styled.h2`
  color: #3e2ffc;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 1rem;
  }
`;

const ProblemText = styled.p`
  color: #222;
  font-size: 1.05rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
  max-width: 420px;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.98rem;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
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
  @media (max-width: 900px) {
    width: 200px;
    height: 420px;
  }
  @media (max-width: 600px) {
    width: 170px;
    height: 350px;
    border-radius: 12px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const MenuWrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 2rem;
  z-index: 100;
  padding: 1rem;
  display: flex;
  gap: 2rem;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled.a<{ isActive?: boolean }>`
  color: ${props => props.isActive ? '#483efc' : '#666'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #483efc;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
  @media (max-width: 900px) {
    margin-left: 0;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const menuItems = [
  { id: "overview", name: "Overview" },
  { id: "problems", name: "Problems" },
  { id: "user-insight", name: "User Insight" },
  { id: "challenge", name: "Challenge" },
  { id: "solutions", name: "Solutions" },
  { id: "final-ui", name: "Final UI" }
];

const Workday: React.FC = () => (
  <PageBg>
    <GlobalStyle />
    <PageContainer>
      <ContentWrapper>
        <div id="overview">
          <Page1Card>
            <PhoneMockup src={workdayPhone} alt="Workday App Mockup" />
            <Content>
              <Title>WORKDAY APP</Title>
              <OverviewLabel>Overview</OverviewLabel>
              <OverviewContainer>
                <OverviewText>
                  Workday is a self - service portal , and Workday mobile app , designed to make it easy for employees to access essential information about their work and manage various tasks . employees check the schedule for the upcoming week , view their recent paycheck , ensuring all hours worked are accounted for . If they need time off , they can quickly submit a request and track its status .
                </OverviewText>
                <Divider />
                <RoleGrid>
                  <RoleItem>
                    <RoleLabel>MY ROLE</RoleLabel>
                    <RoleValue>UX-UI designer</RoleValue>
                  </RoleItem>
                  <RoleItem>
                    <RoleLabel>DURATION</RoleLabel>
                    <RoleValue>4 weeks</RoleValue>
                  </RoleItem>
                  <RoleItem>
                    <RoleLabel>TOOLS</RoleLabel>
                    <RoleValue>
                      Figma{'\n'}FigJam{'\n'}Photoshop
                    </RoleValue>
                  </RoleItem>
                </RoleGrid>
              </OverviewContainer>
            </Content>
          </Page1Card>
        </div>

        <div id="problems">
          <Page2Card>
            <ProblemTitle>Problem at a Glance</ProblemTitle>
            <ProblemSubTitle>Key Issues Identified</ProblemSubTitle>
            <ProblemDivider />
            <CardRow>
              <ProblemCard>
                <CardIcon src={scheduleIcon} alt="Schedule Icon" />
                <ProblemText>
                  The schedule view is cluttered and hard to read, making it difficult for users to quickly understand their upcoming shifts.
                </ProblemText>
              </ProblemCard>
              <ProblemCard>
                <CardIcon src={timeOutIcon} alt="Time Off Icon" />
                <ProblemText>
                  Requesting time off is a multi-step process that requires navigating through multiple screens.
                </ProblemText>
              </ProblemCard>
              <ProblemCard>
                <CardIcon src={notificationIcon} alt="Notification Icon" />
                <ProblemText>
                  Users receive no feedback after submitting time off requests, leaving them uncertain about the status.
                </ProblemText>
              </ProblemCard>
            </CardRow>
          </Page2Card>
          <WorkdayProblem2 />
          <WorkdayProblem3 />
        </div>

        <div id="user-insight">
          <WorkdayPersona />
          <UserInsight />
        </div>

        <div id="challenge">
          <ChallengeGoals />
        </div>

        <div id="solutions">
          <SolutionMakingSchedule />
          <SolutionDayOffNotification />
        </div>

        <div id="final-ui">
          <FinalLookMakingSchedule />
          <FinalLookDayOff />
        </div>

        <KeyTakeawaySection />
      </ContentWrapper>
    </PageContainer>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <MenuWork />
    </div>
  </PageBg>
);

export default Workday;