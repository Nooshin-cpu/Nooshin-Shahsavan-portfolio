import React, { useState } from 'react';
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
  
  /* Hide on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const MenuItem = styled.button<{ isActive: boolean; isClicked: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.75rem 0;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: ${props => props.isClicked ? '700' : props.isActive ? '600' : '400'};
  color: ${props => props.isClicked ? '#000' : props.isActive ? '#000' : '#666'};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: #000;
  }
`;

const menuItems = [
  { id: 'overview', label: 'Overview', targetId: 'overview' },
  { id: 'problems', label: 'Problems', targetId: 'problems' },
  { id: 'user-insight', label: 'User Insight', targetId: 'user-insight' },
  { id: 'challenge', label: 'Challenge', targetId: 'challenge' },
  { id: 'solutions', label: 'Solutions', targetId: 'solutions' },
  { id: 'final-ui', label: 'Final UI', targetId: 'final-ui' },
  { id: 'takeaway', label: 'Takeaway', targetId: 'takeaway' },
];

const WorkdayStickyMenu: React.FC = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const scrollToSection = (targetId: string, itemId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      setClickedItem(itemId);
    }
  };

  return (
    <MenuContainer>
      <MenuTitle>Menu</MenuTitle>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          isActive={false}
          isClicked={clickedItem === item.id}
          onClick={() => scrollToSection(item.targetId, item.id)}
        >
          {item.label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default WorkdayStickyMenu; 