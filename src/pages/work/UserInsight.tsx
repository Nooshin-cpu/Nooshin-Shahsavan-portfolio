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

const Title = styled(motion.h1)`
  color: var(--text);
  font-size: 2.8rem;
  font-weight: 900;
  margin: 0 0 1.7rem 0;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--accent1), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Intro = styled(motion.p)`
  color: var(--text);
  font-size: 1.1rem;
  margin-bottom: 2.2rem;
  max-width: 950px;
  line-height: 1.7;
  opacity: 0.9;

  a {
    color: var(--accent1);
    font-weight: 700;
    text-decoration: underline;
  }

  strong, b {
    font-weight: 700;
    color: var(--accent2);
  }

  .em {
    font-weight: 700;
    color: var(--accent1);
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Divider = styled(motion.hr)`
  border: none;
  border-top: 2px solid var(--border);
  margin: 2.1rem 0 2.1rem 0;
  width: 100%;
  opacity: 0.6;
`;

const ResearchGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 2.2rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ResearchItem = styled.div`
  flex: 1;
  min-width: 160px;
`;

const ResearchLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent1);
  margin-bottom: 0.3rem;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

const ResearchList = styled.ul`
  padding-left: 1.1em;
  margin: 0.1em 0 0.7em 0;
  font-size: 1rem;
  color: var(--text);
  line-height: 1.5;
  opacity: 0.9;

  li {
    margin-bottom: 2px;
  }
`;

const FindingsTitle = styled(motion.h2)`
  color: var(--text);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1.1rem 0 1rem 0;
  letter-spacing: 0.02em;
  opacity: 0.8;
`;

const FindingsBar = styled.div`
  display: flex;
  gap: 0.7rem;
  margin: 0.5rem 0 0 0;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const FindingCard = styled(motion.div)<{bg: string}>`
  background: ${props => props.bg};
  color: white;
  border-radius: 12px;
  flex: 1;
  min-width: 150px;
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  min-height: 90px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    min-width: 0;
    padding: 0.9rem 0.8rem;
  }
`;

const Percent = styled.div`
  font-size: 1.7rem;
  font-weight: 900;
  margin-bottom: 0.15rem;
  line-height: 1;
`;

const Count = styled.span`
  font-size: 0.98rem;
  font-weight: 700;
  margin-left: 0.3rem;
`;

const FindingDesc = styled.div`
  margin-top: 0.2rem;
  font-size: 0.98rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.35;
`;

const UserInsight: React.FC = () => {
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
        title="User Insight & Research Findings | Workday UX Project"
        description="Discover the key insights from user research and usability testing that revealed critical pain points in the Workday app experience."
        keywords="user insight, UX research, usability testing, user feedback, Workday app, design research"
        image="/src/assets/work/user-insight.jpg"
      />
      <Container>
        <SectionCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Title variants={itemVariants}>User Insight</Title>
          <Intro variants={itemVariants}>
            To gain a better understanding of real user frustrations, I started with an <a href="#">open-ended Google Form survey</a>. From the responses, I intentionally selected five <strong>part-time workers</strong>, as their lifestyle closely matched the app's target audience. During the usability sessions, participants frequently expressed <span className="em">frustration</span> due to the long and <span className="em">confusing steps, lack of clear guidance, and unclear instructions</span>. These issues caused confusion and made the overall experience feel frustrating and mentally exhausting for them.
          </Intro>

          <Divider variants={itemVariants} />

          <ResearchGrid>
            <ResearchItem>
              <ResearchLabel>METHOD</ResearchLabel>
              <ResearchList>
                <li>In-person moderated usability testing</li>
                <li>Mostly observation with occasional guidance</li>
              </ResearchList>
            </ResearchItem>
            <ResearchItem>
              <ResearchLabel>PARTICIPANTS</ResearchLabel>
              <ResearchList>
                <li>5 part-time workers aligned with target audience</li>
              </ResearchList>
            </ResearchItem>
            <ResearchItem>
              <ResearchLabel>TASKS</ResearchLabel>
              <ResearchList>
                <li>Find the current week's schedule</li>
                <li>Locate the "Day Off" option</li>
                <li>Request and track a day off for two days in the upcoming week via mobile app</li>
              </ResearchList>
            </ResearchItem>
            <ResearchItem>
              <ResearchLabel>DATA COLLECTION</ResearchLabel>
              <ResearchList>
                <li>Varied per participant, depending on their pace and task complexity</li>
              </ResearchList>
            </ResearchItem>
          </ResearchGrid>

          <FindingsTitle variants={itemVariants}>What I found!</FindingsTitle>
          <FindingsBar>
            <FindingCard 
              bg="#ff7c1d"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Percent>60% <Count>3/5</Count></Percent>
              <FindingDesc>
                Viewing weekly schedule was tiring<br />
                3 users had to check days one by one<br />
                and write them down on paper
              </FindingDesc>
            </FindingCard>
            <FindingCard 
              bg="#ff9528"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Percent>80% <Count>4/5</Count></Percent>
              <FindingDesc>
                Hard to find "Day Off" option<br />
                Most users struggled to locate it
              </FindingDesc>
            </FindingCard>
            <FindingCard 
              bg="#ffb531"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Percent>50% <Count>2.5/5</Count></Percent>
              <FindingDesc>
                Unclear how to track time-off request<br />
                Users didn't know what happens after submitting
              </FindingDesc>
            </FindingCard>
          </FindingsBar>
        </SectionCard>
      </Container>
    </>
  );
};

export default UserInsight;