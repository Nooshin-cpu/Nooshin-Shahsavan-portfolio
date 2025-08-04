import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

const Container = styled.section`
  width: 100%;
  padding: 4rem 0;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 0;
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
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
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
    padding: 3rem 3rem;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
    border-radius: 12px;
  }
`;

const Title = styled(motion.h1)`
  color: var(--text);
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0 0 2.2rem 0;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--accent1), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
`;

const ChallengeText = styled(motion.p)`
  color: var(--text);
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
  max-width: 900px;
  line-height: 1.7;
  font-weight: 500;
  opacity: 0.9;

  b {
    color: var(--accent1);
    font-weight: 700;
  }

  .highlight {
    color: var(--accent2);
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const Divider = styled(motion.hr)`
  border: none;
  border-top: 2px solid var(--border);
  margin: 3.3rem 0 2.7rem 0;
  width: 100%;
  opacity: 0.6;

  @media (max-width: 768px) {
    margin: 2.5rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 2rem 0 1.5rem 0;
  }
`;

const GoalsTitle = styled(motion.h2)`
  color: var(--text);
  font-size: 2.8rem;
  font-weight: 900;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--accent1), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
`;

const GoalsList = styled(motion.ol)`
  padding-left: 1.5em;
  font-size: 1.2rem;
  color: var(--text);
  font-weight: 500;
  line-height: 1.8;
  opacity: 0.9;

  li {
    margin-bottom: 1em;
    position: relative;
    
    &::marker {
      color: var(--accent1);
      font-weight: 700;
    }

    b, .goal-num {
      color: var(--accent2);
      font-weight: 700;
      margin-right: 0.3em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7;
    padding-left: 1.3em;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    padding-left: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    padding-left: 1.1em;
  }
`;

const GoalCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--accent1);
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const GoalNumber = styled.span`
  color: var(--accent1);
  font-weight: 700;
  font-size: 1.1rem;
  margin-right: 0.5rem;
`;

const GoalText = styled.span`
  color: var(--text);
  opacity: 0.9;
`;

const ChallengeGoals: React.FC = () => {
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

  const goals = [
    "Make the weekly schedule easily viewable at a glance on a single screen.",
    "Simplify the time-off request process with fewer, clearer steps.",
    "Provide clear, immediate feedback after submitting a time-off request."
  ];

  return (
    <>
      <SEO 
        title="Challenge & Goals | UX Design Process"
        description="Explore the design challenges and UX goals for creating intuitive user experiences that prioritize simplicity and efficiency."
        keywords="UX challenges, design goals, user experience, design process, UX objectives"
        image="/src/assets/work/challenge-goals.jpg"
      />
      <Container>
        <SectionCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Title variants={itemVariants}>Challenge</Title>
          
          <ChallengeText variants={itemVariants}>
            <b>How might I</b> make it easier for users to access their full weekly schedule at a glance, all on one screen?<br/>
            And how can I simplify the time-off request process so it's clear, fast, and takes only a few clicks?
          </ChallengeText>
          
          <Divider variants={itemVariants} />
          
          <GoalsTitle variants={itemVariants}>UX Goals</GoalsTitle>
          
          <GoalsList variants={itemVariants}>
            {goals.map((goal, index) => (
              <GoalCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <GoalNumber>{index + 1}.</GoalNumber>
                <GoalText>{goal}</GoalText>
              </GoalCard>
            ))}
          </GoalsList>
        </SectionCard>
      </Container>
    </>
  );
};

export default ChallengeGoals;