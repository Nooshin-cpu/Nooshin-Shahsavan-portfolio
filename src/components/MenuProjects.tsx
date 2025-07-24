import React, { useState } from 'react';
import styled from 'styled-components';

const MenuProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 32px 0;
  gap: 18px;
  
  /* Responsive styles */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin: 30px 0 24px 0;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
    margin: 20px 0 16px 0;
  }
`;

const ProjectButton = styled.button<{ $selected: boolean }>`
  background: ${({ $selected }) => $selected ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ $selected }) => $selected ? '#000000' : '#ffffff'};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  min-width: 140px;
  padding: 16px 28px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({ $selected }) => $selected 
    ? '0 8px 32px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
    : '0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)'
  };
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  position: relative;
  z-index: 1;
  letter-spacing: 0.02em;
  
  &:hover, &:focus {
    background: ${({ $selected }) => $selected ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.2)'};
    color: ${({ $selected }) => $selected ? '#000000' : '#ffffff'};
    transform: translateY(-2px);
    box-shadow: ${({ $selected }) => $selected 
      ? '0 12px 40px rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.3)' 
      : '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2)'
    };
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    min-width: 160px;
    padding: 14px 24px;
    font-size: 0.95rem;
    width: 100%;
    max-width: 260px;
  }
  
  @media (max-width: 480px) {
    min-width: 140px;
    padding: 12px 20px;
    font-size: 0.9rem;
    max-width: 220px;
  }
`;

const MenuProjectsTitle = styled.h2`
  font-size: 2.8rem;
  color: #ffffff;
  margin-top: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: 'Montserrat', 'Arial', sans-serif;
  
  @media (max-width: 900px) {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-top: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export type MenuProjectsProps = {
  onSelect: (component: 'branding' | 'uxui' | 'funproj') => void;
  selected: 'branding' | 'uxui' | 'funproj';
};

const MenuProjects: React.FC<MenuProjectsProps> = ({ onSelect, selected }) => {
  const main = document.querySelector('main');
  if (main) {
    main.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
  <div>
    <MenuProjectsTitle>Recent Works</MenuProjectsTitle>
    <MenuProjectsWrapper>
      <ProjectButton $selected={selected === 'branding'} onClick={() => onSelect('branding')}>
        Branding
      </ProjectButton>
      <ProjectButton $selected={selected === 'uxui'} onClick={() => onSelect('uxui')}>
        UX-UI
      </ProjectButton>
      <ProjectButton $selected={selected === 'funproj'} onClick={() => onSelect('funproj')}>
        School Proj
      </ProjectButton>
    </MenuProjectsWrapper>
  </div>
);
};

export default MenuProjects;