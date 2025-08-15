import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

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
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`;

const Title = styled(motion.h1)`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`;

const ChallengeText = styled(motion.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  margin-top: 0;
  text-align: left;
  opacity: 0.9;

  b {
    color: #3e2ffc;
    font-weight: 700;
  }

  .highlight {
    color: #2196f3;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

const Divider = styled(motion.hr)`
  border: none;
  border-top: 2px solid #e0e0e0;
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
  color: #181818;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  margin-top: 0;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const GoalsList = styled(motion.ol)`
  padding-left: 1.1em;
  margin: 0.1em 0 0.7em 0;
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  opacity: 0.9;

  li {
    margin-bottom: 2px;
    position: relative;
    
    &::marker {
      color: #3e2ffc;
      font-weight: 700;
    }

    b, .goal-num {
      color: #2196f3;
      font-weight: 700;
      margin-right: 0.3em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const GoalCard = styled(motion.div)`
  background: rgba(248, 248, 248, 0.8);
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-color: #3e2ffc;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const GoalNumber = styled.span`
  color: #3e2ffc;
  font-weight: 700;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const GoalText = styled.span`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 13px;
  }
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