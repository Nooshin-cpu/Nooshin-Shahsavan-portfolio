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
  color: #181818;
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
  color: ${props => props.isClicked ? '#3e2ffc' : props.isActive ? '#3e2ffc' : '#444'};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 4px;

  &:hover {
    color: #3e2ffc;
    background: rgba(62, 47, 252, 0.05);
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
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Function to check which section is currently in view
  const checkActiveSection = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.3; // 30% of viewport height

    let currentSection = 'overview';
    
    for (let i = 0; i < menuItems.length; i++) {
      const element = document.getElementById(menuItems[i].targetId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Check if the element is in the viewport
        if (elementTop <= threshold && elementBottom >= threshold) {
          currentSection = menuItems[i].id;
          break;
        }
      }
    }
    
    setActiveSection(currentSection);
  };

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

export default WorkdayStickyMenu; 