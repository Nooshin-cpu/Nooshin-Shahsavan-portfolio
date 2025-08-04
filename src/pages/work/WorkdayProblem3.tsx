import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import errorImg from "../../assets/work/error.png";

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: var(--background);
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
  background: var(--cardBackground);
  border-radius: 28px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(0, 0, 0, 0.08);
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: 'Inter', sans-serif;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  min-height: 400px;

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

  @media (max-width: 900px) {
    width: 95%;
    flex-direction: column;
    border-radius: 16px;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
    border-radius: 12px;
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
  color: var(--accent1);
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
  color: var(--text);
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  font-family: 'Inter', sans-serif;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const ProblemText = styled(motion.p)`
  color: var(--text);
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.7;
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
    font-size: 0.98rem;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const ErrorImg = styled.img`
  width: 300px;
  max-width: 98%;
  height: auto;
  border-radius: 20px;
  object-fit: contain;
  border: 1px solid var(--border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    width: 250px;
  }

  @media (max-width: 600px) {
    width: 180px;
    border-radius: 15px;
  }
`;

const WorkdayProblem3: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Problem 3: No Feedback After Submitting Time Off | Workday UX Project"
        description="Explore the third problem identified in the Workday app - lack of feedback after submitting time off requests, leaving users uncertain about status."
        keywords="time off feedback, UX problem, mobile app design, user experience, Workday app"
        image="/src/assets/work/problem3-feedback.jpg"
      />
      <Container>
        <SectionCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <LeftContent>
            <ProblemIndex variants={itemVariants}>Problem 3</ProblemIndex>
            <ProblemTitle variants={itemVariants}>No Feedback After Submitting Time Off</ProblemTitle>
            <ProblemText variants={itemVariants}>
              After submitting a request, users receive no confirmation or status update. They have to keep checking the page manually, which is frustrating and inefficient.
            </ProblemText>
          </LeftContent>
          <RightContent>
            <ErrorImg src={errorImg} alt="No feedback after submitting time off illustration" />
          </RightContent>
        </SectionCard>
      </Container>
    </>
  );
};

export default WorkdayProblem3;