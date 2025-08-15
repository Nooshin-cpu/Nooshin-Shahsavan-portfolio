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

  @media (max-width: 900px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`;

const SubtleLabel = styled(motion.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
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

const Description = styled(motion.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  margin-top: 0;
  text-align: left;
  opacity: 0.9;

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

const FlowLabel = styled(motion.h2)`
  color: #3e2ffc;
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
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

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

const SolutionDayOffNotification: React.FC = () => {
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
        title="Solution 2: Taking a Day Off & Getting Notified | Workday UX Project"
        description="Explore the second solution for the Workday app - a streamlined time-off request process with instant notifications and clear feedback."
        keywords="time off solution, notifications, UX design, mobile app, user experience, Workday app, design solution"
        image="/src/assets/work/solution2-timeoff.jpg"
      />
      <Container>
        <SectionCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SubtleLabel variants={itemVariants}>Solution 2</SubtleLabel>
          <Title variants={itemVariants}>Taking a Day Off & Getting Notified</Title>
          <Description variants={itemVariants}>
            Since taking time off and receiving updates are closely connected, they're combined into one simple flow. Users just tap the "Time Off" button on the home page, select their start and end dates, and quickly double-check everything on the calendar. After hitting submit, they'll instantly get a confirmation message. Once the manager reviews the request, users receive a notification with the result—either approved or declined—so they're always kept in the loop.
          </Description>
          <FlowLabel variants={itemVariants}>Flow 2</FlowLabel>
          <FlowEmbedWrapper>
            <FigmaEmbed
              src="https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=165-670&embed-host=share"
              allowFullScreen
            />
          </FlowEmbedWrapper>
        </SectionCard>
      </Container>
    </>
  );
};

export default SolutionDayOffNotification;