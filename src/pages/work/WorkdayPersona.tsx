import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import personaImg from "../../assets/work/persona.jpeg";
import journeyMap from "../../assets/work/user-journey map.png";
import userPersona from "../../assets/work/persona-workday.png";
import empathyMap from "../../assets/work/empathy-map.png";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background: #fafafa;
    font-size: 20px;
    font-weight: 400;
  }
`;

const SectionCard = styled.section`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 32px #0002, 0 2px 10px #0001;
  width: 60vw;
  margin: 4vw auto 2vw auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  min-height: 400px;
  @media (max-width: 1200px) {
    width: 80vw;
  }
  @media (max-width: 900px) {
    width: 95vw;
    border-radius: 8px;
    min-height: auto;
    margin: 2vw auto 1vw auto;
  }
  @media (max-width: 600px) {
    width: 98vw;
    margin: 1vw auto 0.5vw auto;
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
  background: #fff;
  box-shadow: 0 8px 32px #0002, 0 2px 10px #0001;
  flex-shrink: 0;
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

const AgeText = styled.div`
  color: #888;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`;

const ScenarioTitle = styled.h2`
  color: #3e2ffc;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  @media (max-width: 900px) {
    font-size: 20px;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 1.2rem;
  }
`;

const ScenarioDescription = styled.p`
  color: #222;
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
  max-width: 500px;
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

const ThoughtBox = styled.div`
  margin-top: 1.4rem;
  background: #fafaff;
  color: #555;
  font-size: 0.8rem;
  padding: 1rem 1.4rem;
  border-radius: 12px;
  box-shadow: 0 4px 14px #0001;
  max-width: 510px;
  font-style: italic;
  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 0.75rem;
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
  background: #fafaff;
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

const PersonaButton = styled.button<{ active?: boolean }>`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  padding: 1.2rem 2.7rem;
  background: ${({ active }) => (active ? "#3e2ffc" : "#fafaff")};
  color: ${({ active }) => (active ? "#fff" : "#3e2ffc")};
  border: none;
  border-radius: 18px;
  box-shadow: 0 4px 14px #0001;
  cursor: pointer;
  transition: background 0.16s, color 0.16s, box-shadow 0.16s;
  outline: none;
  @media (max-width: 900px) {
    width: 80%;
    max-width: 300px;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 1rem 2rem;
    width: 90%;
  }
  &:hover, &:focus {
    background: #3e2ffc;
    color: #fff;
    box-shadow: 0 8px 24px #3e2ffc33;
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
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 16px 60px #0003, 0 2px 12px #0001;
  max-width: 92vw;
  max-height: 90vh;
  padding: 2vw 2vw 1vw 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  box-shadow: 0 8px 30px #0002;
  margin-bottom: 12px;
  background: #fff;
  @media (max-width: 600px) {
    border-radius: 12px;
    margin-bottom: 8px;
  }
`;

const CloseButton = styled.button`
  background: #3e2ffc;
  color: #fff;
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
  box-shadow: 0 2px 12px #0002;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    font-size: 1.5rem;
  }
  &:hover {
    background: #190fd3;
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

  return (
    <>
      <GlobalStyle />
      <SectionCard>
        <ContentRow>
          <PersonaImg src={personaImg} alt="User Persona" />
          <ScenarioBox>
            <AgeText>Sara 18 years old</AgeText>
            <ScenarioTitle>User Scenario</ScenarioTitle>
            <ScenarioDescription>
              Sara, a first-year psychology student and part-time cashier, struggles to check her weekly schedule in the Workday app. She needs to see all her shifts at once to plan her schoolwork but can only view one day at a time. Requesting time off is also frustrating — the tiny fonts make it hard to use, and she has to constantly check the app for approval updates. She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"
            </ScenarioDescription>
            <ThoughtBox>
              She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"
            </ThoughtBox>
          </ScenarioBox>
        </ContentRow>
        <ButtonRow>
          <PersonaButton onClick={() => setModal("journey")}>Journey Map</PersonaButton>
          <PersonaButton onClick={() => setModal("persona")}>User Persona</PersonaButton>
          <PersonaButton onClick={() => setModal("empathy")}>Empathy Map</PersonaButton>
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
    </>
  );
};

export default WorkdayPersona;