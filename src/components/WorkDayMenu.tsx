import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 180px;
  gap: 1.2rem;
  height: 100vh;
  position: relative;
  margin-left: 2.5rem;
`;

const MenuTitle = styled.h3`
  color: #2ee0ff;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  letter-spacing: 0.04em;
  background: none;
  box-shadow: none;
`;

const MenuItem = styled.a<{ active?: boolean }>`
  background: none;
  border: none;
  color: ${({ active }) => (active ? '#2ee0ff' : '#fff')};
  font-size: 1.05rem;
  font-weight: 500;
  text-align: left;
  padding: 0.5rem 0;
  cursor: pointer;
  border-radius: 0;
  width: 100%;
  position: relative;
  transition: color 0.18s;
  outline: none;
  text-decoration: none;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0.1em;
    width: ${({ active }) => (active ? '100%' : '0%')};
    height: 2px;
    background: #2ee0ff;
    transition: width 0.25s cubic-bezier(0.4,0,0.2,1);
  }

  &:hover, &:focus {
    color: #2ee0ff;
  }
  &:hover::after, &:focus::after {
    width: 100%;
  }
`;

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problems', label: 'Problems' },
  { id: 'user-insight', label: 'User Insight' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'final-ui', label: 'Final UI' },
  { id: 'takeaway', label: 'Takeaway' },
];

const SCROLL_OFFSET = 80; // px, adjust if you have a sticky header

const WorkDayMenu: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      let closestId = sections[0].id;
      let minDistance = Number.POSITIVE_INFINITY;
      sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - SCROLL_OFFSET); // adjust 80 if you have a sticky header
          if (distance < minDistance) {
            minDistance = distance;
            closestId = section.id;
          }
        }
      });
      setActiveSection(closestId);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MenuWrapper aria-label="WorkDay Section Menu">
      <MenuTitle>Sections</MenuTitle>
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          href={`#${section.id}`}
          active={activeSection === section.id}
        >
          {section.label}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default WorkDayMenu; 