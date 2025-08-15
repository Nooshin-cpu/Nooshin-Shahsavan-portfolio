import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import personaImg from "../../assets/work/persona.jpeg";
import journeyMap from "../../assets/work/user-journey map.png";
import userPersona from "../../assets/work/persona-workday.png";
import empathyMap from "../../assets/work/empathy-map.png";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 5rem;
  font-family: 'Inter', sans-serif;
  position: relative;
  min-height: 400px;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    min-height: auto;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 1080px;
  min-height: 380px;
  margin-top: 1.5vw;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    min-height: 0;
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    margin-top: 0.5rem;
  }
`;

const PersonaImg = styled.img`
  width: 340px;
  height: 370px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 2vw;
  margin-left: 20px;
  background: var(--cardBackground);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  border: 1px solid var(--border);

  @media (max-width: 900px) {
    width: 80vw;
    max-width: 400px;
    height: auto;
    aspect-ratio: 340/370;
    margin-bottom: 2vw;
    margin-right: 0;
    margin-left: 0;
  }

  @media (max-width: 600px) {
    width: 90vw;
    max-width: 350px;
  }
`;

const ScenarioBox = styled.div`
  flex: 1;
  min-width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 900px) {
    min-width: 0;
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    padding: 0 0.8rem;
  }
`;

const AgeText = styled(motion.div)`
  color: var(--accent1);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`;

const ScenarioTitle = styled(motion.h2)`
  color: #181818;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
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
    margin-bottom: 1.2rem;
  }
`;

const ScenarioDescription = styled(motion.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 0 2.5rem 0;
  line-height: 1.7;
  max-width: 500px;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
    text-align: center;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const ThoughtBox = styled(motion.div)`
  margin-top: 1.4rem;
  background: rgba(248, 248, 248, 0.8);
  color: #444;
  font-size: 0.9rem;
  padding: 1rem 1.4rem;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  max-width: 510px;
  font-style: italic;
  border: 1px solid #f0f0f0;
  opacity: 0.8;

  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.8rem 1rem;
    margin-top: 1rem;
  }
`;

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.5vw;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  background: transparent;
  box-shadow: none;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    gap: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const PersonaButton = styled(motion.button)<{ active?: boolean }>`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  background: #3e2ffc;
  color: #ffffff;
  border: 2px solid #3e2ffc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(62, 47, 252, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  min-height: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:nth-child(2) {
    background: #2196f3;
    border-color: #2196f3;
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);
  }
  
  &:nth-child(3) {
    background: #3e2ffc;
    border-color: #3e2ffc;
    box-shadow: 0 2px 8px rgba(62, 47, 252, 0.2);
  }
  
  &:hover, &:focus {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(62, 47, 252, 0.3);
    background: #3e2ffc;
    border-color: #3e2ffc;
  }
  
  &:nth-child(2):hover, &:nth-child(2):focus {
    background: #2196f3;
    border-color: #2196f3;
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
  }
  
  &:nth-child(3):hover, &:nth-child(3):focus {
    background: #3e2ffc;
    border-color: #3e2ffc;
    box-shadow: 0 4px 12px rgba(62, 47, 252, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(62, 47, 252, 0.2);
  }
  
  @media (max-width: 900px) {
    width: auto;
    max-width: none;
    margin: 0 0.5rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.7rem 1.2rem;
    margin: 0 0.3rem;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  background: rgba(40, 40, 60, 0.53);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.18s;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  position: fixed;
  z-index: 12;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 22px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(0, 0, 0, 0.08);
  max-width: 92vw;
  max-height: 90vh;
  padding: 2vw 2vw 1vw 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid var(--border);

  @media (max-width: 800px) {
    padding: 1vw 3vw 2vw 3vw;
    border-radius: 16px;
  }

  @media (max-width: 600px) {
    padding: 1vw 2vw 1.5vw 2vw;
    border-radius: 12px;
  }
`;

const ModalImage = styled.img`
  max-width: 80vw;
  max-height: 70vh;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 12px;
  background: var(--cardBackground);
  border: 1px solid var(--border);

  @media (max-width: 600px) {
    border-radius: 12px;
    margin-bottom: 8px;
  }
`;

const CloseButton = styled.button`
  background: var(--accent1);
  color: var(--text);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1vw;
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    font-size: 1.5rem;
  }

  &:hover {
    background: var(--accent2);
  }
`;

type ModalType = null | "journey" | "persona" | "empathy";

const modalImages: Record<Exclude<ModalType, null>, string> = {
  journey: journeyMap,
  persona: userPersona,
  empathy: empathyMap,
};

const WorkdayPersona: React.FC = () => {
  const [modal, setModal] = useState<ModalType>(null);

  React.useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; }
  }, [modal]);

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
        title="User Persona & Research | Workday UX Project"
        description="Meet Sara, our user persona for the Workday app redesign. Explore her journey, pain points, and the research insights that guided our design decisions."
        keywords="user persona, UX research, user journey, empathy map, Workday app, user experience"
        image="/src/assets/work/persona.jpg"
      />
      <Container>
        <SectionCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContentRow>
            <PersonaImg src={personaImg} alt="User Persona" />
            <ScenarioBox>
              <AgeText variants={itemVariants}>Sara 18 years old</AgeText>
              <ScenarioTitle variants={itemVariants}>User Scenario</ScenarioTitle>
              <ScenarioDescription variants={itemVariants}>
                Sara, a first-year psychology student and part-time cashier, struggles to check her weekly schedule in the Workday app. She needs to see all her shifts at once to plan her schoolwork but can only view one day at a time. Requesting time off is also frustrating — the tiny fonts make it hard to use, and she has to constantly check the app for approval updates. She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"
              </ScenarioDescription>
              <ThoughtBox variants={itemVariants}>
                She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"
              </ThoughtBox>
            </ScenarioBox>
          </ContentRow>
          <ButtonRow>
            <PersonaButton 
              onClick={() => setModal("journey")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Journey Map
            </PersonaButton>
            <PersonaButton 
              onClick={() => setModal("persona")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              User Persona
            </PersonaButton>
            <PersonaButton 
              onClick={() => setModal("empathy")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Empathy Map
            </PersonaButton>
          </ButtonRow>
        </SectionCard>

        {modal && (
          <>
            <ModalBackdrop onClick={() => setModal(null)} />
            <ModalContent>
              <CloseButton title="Close" onClick={() => setModal(null)}>×</CloseButton>
              <ModalImage src={modalImages[modal]} alt={`${modal} image`} />
              <CloseButton title="Close" onClick={() => setModal(null)}>×</CloseButton>
            </ModalContent>
          </>
        )}
      </Container>
    </>
  );
};

export default WorkdayPersona;