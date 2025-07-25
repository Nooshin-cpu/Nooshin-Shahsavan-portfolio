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
  
  /* Hide on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
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
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: ${props => props.isClicked ? '700' : props.isActive ? '600' : '400'};
  color: ${props => props.isClicked ? '#000000' : props.isActive ? '#000000' : '#888888'};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 4px;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const menuItems = [
  { id: 'overview', label: 'Overview', targetId: 'veen-first' },
  { id: 'second', label: 'Second', targetId: 'veen-second' },
  { id: 'challenges', label: 'Key Challenges', targetId: 'veen-problem' },
  { id: 'logo', label: 'Logo Design', targetId: 'veen-logo' },
  { id: 'color', label: 'Color Palette', targetId: 'veen-color' },
  { id: 'typography', label: 'Typography', targetId: 'veen-typography' },
  { id: 'brand-book', label: 'Brand Book', targetId: 'veen-brand-book' },
  { id: 'mockups', label: 'Mockups', targetId: 'veen-mockups' },
];

const VeenStickyMenu: React.FC = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Use Intersection Observer for better performance and accuracy
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const menuItem = menuItems.find(item => item.targetId === sectionId);
          if (menuItem) {
            setActiveSection(menuItem.id);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    menuItems.forEach(item => {
      const element = document.getElementById(item.targetId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (targetId: string, itemId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Set clicked item to make it bold
      setClickedItem(itemId);
    }
  };

  return (
    <MenuContainer>
      <MenuTitle>Menu</MenuTitle>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          isActive={activeSection === item.id}
          isClicked={clickedItem === item.id}
          onClick={() => scrollToSection(item.targetId, item.id)}
        >
          {item.label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default VeenStickyMenu; 