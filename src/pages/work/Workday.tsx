import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import workdayPhone from "../../assets/work/workday-phone.png";
import scheduleIcon from "../../assets/work/schedule.png";
import timeOutIcon from "../../assets/work/time-out.png";
import notificationIcon from "../../assets/work/notification.png";
import pro1Video from "../../assets/work/pro1.mp4";

import WorkdayProblem1 from "./WorkdayProblem1";
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
import WorkdayStickyMenu from '../../components/WorkdayStickyMenu';
import { EmailFooter } from '../../components/Footer';
import TopScrollButton from '../../components/TopScrollButton';

// Global style with dark mode support
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 400;
    background: var(--background);
    transition: background 0.6s;
  }
`;

// Page background: white in light mode, dark in dark mode
const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: var(--background);
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
`;

// Common Card container - Updated to match new design pattern
const SectionCard = styled(motion.section)<{ $white?: boolean }>`
  background: var(--cardBackground);
  border-radius: 28px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(0, 0, 0, 0.08);
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto 2rem auto;
  font-family: 'Inter', sans-serif;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    border-radius: 28px 28px 0 0;
  }

  @media (max-width: 1024px) {
    width: 95%;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 95%;
    border-radius: 16px;
    margin: 2rem auto 1rem auto;
  }

  @media (max-width: 480px) {
    width: 98%;
    border-radius: 12px;
  }
`;

// --- PAGE 1: INTRO ---
const Page1Card = styled(SectionCard)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 5rem;
  gap: 4rem;
  min-height: 400px;

  @media (max-width: 1024px) {
    padding: 3rem 3rem;
    gap: 3rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
    gap: 2rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }
`;

const PhoneMockup = styled.img`
  width: 340px;
  min-width: 220px;
  max-width: 38vw;
  height: auto;
  border-radius: 32px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
  background: var(--cardBackground);
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
  color: var(--accent1);
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
  color: var(--text);
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
  color: var(--text);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 2.2rem;
  margin-top: 0;
  text-align: left;
  opacity: 0.9;

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
  border-top: 2px solid var(--border);
  margin-bottom: 1.3rem;
  margin-top: 0;
  width: 100%;
  opacity: 0.6;
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
  color: var(--accent1);
  letter-spacing: 0.5px;
  margin-bottom: 0.16rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const RoleValue = styled.span`
  color: var(--text);
  font-size: 14px;
  font-weight: 400;
  white-space: pre-line;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

// --- PAGE 2: PROBLEM AT A GLANCE ---
const Page2Card = styled(SectionCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 5rem;
  margin-top: 0;
  gap: 0;
  min-height: 400px;

  @media (max-width: 1024px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 2rem 1.5rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const ProblemTitle = styled.h2`
  color: var(--text);
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
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2.2rem;
  margin-top: 0;
  text-align: center;
  opacity: 0.7;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 1.8rem;
  }
`;

const ProblemDivider = styled.hr`
  border: none;
  border-top: 2px solid var(--accent1);
  width: 60%;
  margin: 0 auto 2rem auto;
  opacity: 0.6;

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
  background: var(--cardBackground);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2.2rem 1.3rem 1.5rem 1.3rem;
  width: 29%;
  min-width: 220px;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-sizing: border-box;
  color: var(--text);
  min-height: 90px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: var(--accent1);
  }
  
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
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  margin-top: 0.2rem;
  line-height: 1.4;
  opacity: 0.9;

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
  font-family: 'Inter', sans-serif;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ProblemDetailTitle = styled.h2`
  color: #3e2ffc;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
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
  min-height: 100vh;
  position: relative;
`;

const StickyMenuWrapper = styled.div`
  position: sticky;
  top: 0;
  align-self: flex-start;
  z-index: 101;

  @media (max-width: 900px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 2rem;

  @media (max-width: 900px) {
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
  <>
    <PageBg>
      <SEO 
        title="Workday UX/UI Project | Nooshin Shahsavan - Mobile App Design"
        description="Explore the Workday UX/UI project - a comprehensive mobile app design by Nooshin Shahsavan focusing on employee scheduling, time-off management, and workplace communication."
        keywords="Workday project, UX/UI design, mobile app design, user experience, interface design, Nooshin Shahsavan, design portfolio"
        image="/src/assets/work/workday-phone.png"
      />
      <GlobalStyle />
      <PageContainer>
        <StickyMenuWrapper>
          <WorkdayStickyMenu />
        </StickyMenuWrapper>
        <ContentWrapper id="content-wrapper">
          <div id="overview">
            <Page1Card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
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
            <Page2Card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <ProblemTitle>Problem at a Glance</ProblemTitle>
              <ProblemSubTitle>Key Issues Identified</ProblemSubTitle>
              <ProblemDivider />
              <CardRow>
                <ProblemCard>
                  <CardIcon src={scheduleIcon} alt="Schedule Icon" />
                  <CardText>
                    The schedule view is cluttered and hard to read, making it difficult for users to quickly understand their upcoming shifts.
                  </CardText>
                </ProblemCard>
                <ProblemCard>
                  <CardIcon src={timeOutIcon} alt="Time Off Icon" />
                  <CardText>
                    Requesting time off is a multi-step process that requires navigating through multiple screens.
                  </CardText>
                </ProblemCard>
                <ProblemCard>
                  <CardIcon src={notificationIcon} alt="Notification Icon" />
                  <CardText>
                    Users receive no feedback after submitting time off requests, leaving them uncertain about the status.
                  </CardText>
                </ProblemCard>
              </CardRow>
            </Page2Card>
            <WorkdayProblem1 />
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

          <div id="takeaway">
            <KeyTakeawaySection />
          </div>
        </ContentWrapper>
      </PageContainer>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', background: 'var(--background)' }}>
        <style>
          {`
            .menu-work-container {
              background: var(--background) !important;
            }
            .menu-work-title {
              color: var(--text) !important;
            }
          `}
        </style>
        <MenuWork />
      </div>
      <EmailFooter />
    </PageBg>
    <TopScrollButton />
  </>
);

export default Workday;