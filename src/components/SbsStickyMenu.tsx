import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.5rem 1rem;
  max-width: 200px;
  min-width: 160px;
`;

const MenuTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
`;

const MenuItem = styled.button<{ isActive: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.5rem 0.75rem;
  margin: 0.2rem 0;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: ${props => props.isActive ? '600' : '400'};
  color: ${props => props.isActive ? '#e4572e' : '#666'};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background: rgba(228, 87, 46, 0.05);
    color: #e4572e;
  }

  ${props => props.isActive && `
    background: rgba(228, 87, 46, 0.1);
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 60%;
      background: #e4572e;
      border-radius: 0 2px 2px 0;
    }
  `}
`;

const menuItems = [
  { id: 'overview', label: 'Overview', targetId: 'sbs-overview' },
  { id: 'challenges', label: 'Key Challenges', targetId: 'sbs-challenges' },
  { id: 'logo', label: 'Logo Design', targetId: 'sbs-logo' },
  { id: 'logo-process', label: 'Logo Process', targetId: 'sbs-logo-process' },
  { id: 'color', label: 'Color Palette', targetId: 'sbs-color' },
  { id: 'typography', label: 'Typography', targetId: 'sbs-typography' },
  { id: 'illustration', label: 'Illustration', targetId: 'sbs-illustration' },
  { id: 'brand-identity', label: 'Brand Identity', targetId: 'sbs-brand-identity' },
  { id: 'video', label: 'Video', targetId: 'sbs-video' },
  { id: 'mockups', label: 'Mockups', targetId: 'sbs-mockups' },
  { id: 'social-media', label: 'Social Media', targetId: 'sbs-social-media' },
  { id: 'additional-mockups', label: 'Additional Mockups', targetId: 'sbs-additional-mockups' },
];

const SbsStickyMenu: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which section is currently in view
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(menuItems[i].targetId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(menuItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <MenuContainer>
      <MenuTitle>Menu</MenuTitle>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          isActive={activeSection === item.id}
          onClick={() => scrollToSection(item.targetId)}
        >
          {item.label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default SbsStickyMenu; 