import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import LazyVideo from '../../components/LazyVideo';
import pro2Video from "../../assets/work/pro-2.mp4";

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`;

const SectionCard = styled(motion.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: 'Inter', sans-serif;
  position: relative;
  min-height: 400px;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 900px) {
    width: 95%;
    flex-direction: column;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`;

const LeftContent = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 0 4rem 4rem;
  min-width: 340px;

  @media (max-width: 1024px) {
    padding: 3rem 0 3rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 2.5rem 1.5rem 2rem 1.5rem;
    align-items: center;
    width: 100%;
    min-width: 0;
    flex: none;
  }

  @media (max-width: 480px) {
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
  padding: 0 3rem 0 0;

  @media (max-width: 1024px) {
    padding: 0 2rem 0 0;
  }

  @media (max-width: 900px) {
    padding: 0 0 2rem 0;
    width: 100%;
    min-width: 0;
    justify-content: center;
    flex: none;
  }

  @media (max-width: 480px) {
    padding: 0 0 1.5rem 0;
  }
`;

const ProblemIndex = styled(motion.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const ProblemTitle = styled(motion.h2)`
  color: #181818;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.65rem 0;
  font-family: 'Inter', sans-serif;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const ProblemText = styled(motion.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  max-width: 420px;
  text-align: left;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.95rem;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const VideoPlaceholder = styled(motion.div)`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  width: 260px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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


const WorkdayProblem2: React.FC = () => {
  return (
    <Container>
      <SEO 
        title="Workday Problem 2 - Time Off Request Process | Nooshin Shahsavan"
        description="Explore the second problem identified in the Workday UX/UI project - complex time off request process."
        keywords="Workday problem, time off request, UX issues, mobile app design, Nooshin Shahsavan"
        image="/src/assets/work/workday-phone.png"
      />
      <SectionCard
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <LeftContent>
          <ProblemIndex
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Problem 02
          </ProblemIndex>
          <ProblemTitle
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Complex Time Off Request Process
          </ProblemTitle>
          <ProblemText
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Requesting time off requires navigating through multiple screens and forms. The process is not intuitive and lacks clear guidance, making it frustrating for users who need to quickly submit requests. The multi-step workflow creates unnecessary friction.
          </ProblemText>
        </LeftContent>
        <RightContent>
          <VideoPlaceholder
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <LazyVideo
              src={pro2Video}
              controls
              controlsList="nodownload"
              objectFit="cover"
              style={{ width: '100%', height: '100%' }}
              aria-label="Problem 2 video"
            />
          </VideoPlaceholder>
        </RightContent>
      </SectionCard>
    </Container>
  );
};

export default WorkdayProblem2;