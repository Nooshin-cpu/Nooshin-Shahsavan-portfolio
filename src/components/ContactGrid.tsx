import React from 'react';
import styled from 'styled-components';
import Cactus from './Cactus';
import { IonIcon } from '@ionic/react';
import { mailOutline, logoLinkedin } from 'ionicons/icons';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  min-height: 80vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding: 2rem 0;
  }
`;

const CactusColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  color: #333;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: #333;
  font-size: 2.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);

  &:hover {
    color: #007bff;
    transform: translateY(-3px);
    background: rgba(0, 123, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactGrid: React.FC = () => {
  const email = 'nooshin-shahsavan.ca@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/nooshin-shahsavan-237b68243/';

  return (
    <GridContainer>
      <CactusColumn>
        <Cactus />
      </CactusColumn>
      <ContactColumn>
        <Heading>Say Hi!</Heading>
        <IconContainer>
          <IconLink 
            href={`mailto:${email}`} 
            title="Send me an email"
            aria-label="Email me"
          >
            <IonIcon icon={mailOutline} />
          </IconLink>
          <IconLink 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Visit my LinkedIn"
            aria-label="My LinkedIn profile"
          >
            <IonIcon icon={logoLinkedin} />
          </IconLink>
        </IconContainer>
      </ContactColumn>
    </GridContainer>
  );
};

export default ContactGrid; 