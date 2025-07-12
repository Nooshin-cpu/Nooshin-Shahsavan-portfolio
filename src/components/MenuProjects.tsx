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
  background: #000000;
  color: #fff;
  border: 2px solid #fff;
  border-color: ${({ $selected }) => ($selected ? 'rgb(215, 121, 43)' : '#fff')};
  border-radius: 12px;
  min-width: 120px;
  padding: 18px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: all 0.2s cubic-bezier(.4,2,.6,1);
  outline: none;
  position: relative;
  z-index: 1;
  
  &:hover, &:focus {
    background: #222222;
    border-color: rgb(204, 204, 205);
    transform: scale(1.08);
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.5);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    min-width: 200px;
    padding: 16px 24px;
    font-size: 1rem;
    width: 100%;
    max-width: 280px;
  }
  
  @media (max-width: 480px) {
    min-width: 180px;
    padding: 14px 20px;
    font-size: 0.95rem;
    max-width: 240px;
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
        Fun proj
      </ProjectButton>
    </MenuProjectsWrapper>
  </div>
);
};

export default MenuProjects;