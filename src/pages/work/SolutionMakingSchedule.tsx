import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

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
    border-radius: 20px;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    border-radius: 16px;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    border-radius: 12px;
    padding: 1.5rem 1rem;
  }
`;

const SubtleLabel = styled(motion.div)`
  color: var(--accent1);
  font-size: 1.04rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Title = styled(motion.h1)`
  color: var(--text);
  font-size: 2.8rem;
  font-weight: 900;
  margin: 0 0 1.1rem 0;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--accent1), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 900px) {
    font-size: 2.2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

const Description = styled(motion.p)`
  color: var(--text);
  font-size: 1.1rem;
  margin-bottom: 2.2rem;
  max-width: 950px;
  line-height: 1.7;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.8rem;
  }
`;

const FlowLabel = styled(motion.h2)`
  color: var(--accent1);
  font-size: 2.2rem;
  font-weight: 900;
  margin: 1.2rem 0 1.8rem 0;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin: 1rem 0 1.5rem 0;
  }
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

  @media (max-width: 600px) {
    overflow-x: hidden;
  }
`;

const FigmaEmbed = styled.iframe`
  width: 1000px;
  height: 560px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--cardBackground);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 1100px) {
    width: 98vw;
    min-width: 320px;
    height: 52vw;
    min-height: 300px;
    max-width: 100vw;
  }

  @media (max-width: 600px) {
    width: 95vw;
    height: 50vw;
    min-height: 250px;
    border-radius: 8px;
  }
`;

const SolutionMakingSchedule: React.FC = () => {
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
        title="Solution 1: Making a Schedule | Workday UX Project"
        description="Explore the first solution for the Workday app - an improved schedule viewing experience that allows users to see their entire week at a glance."
        keywords="schedule solution, UX design, mobile app, user experience, Workday app, design solution"
        image="/src/assets/work/solution1-schedule.jpg"
      />
      <Container>
        <SectionCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SubtleLabel variants={itemVariants}>Solution1</SubtleLabel>
          <Title variants={itemVariants}>Making a Schedule</Title>
          <Description variants={itemVariants}>
            It's super easy to view your schedule—just tap the "Schedule" button right on the home page. By default, it shows the current week with all the daily details. You can scroll down to see your whole month or even the entire year, all on the same page. And if you're looking for a specific date, there's a quick option to type it in and jump right to it.
          </Description>
          <FlowLabel variants={itemVariants}>Flow 1</FlowLabel>
          <FlowEmbedWrapper>
            <FigmaEmbed
              src="https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=138-103&embed-host=share"
              allowFullScreen
            />
          </FlowEmbedWrapper>
        </SectionCard>
      </Container>
    </>
  );
};

export default SolutionMakingSchedule;