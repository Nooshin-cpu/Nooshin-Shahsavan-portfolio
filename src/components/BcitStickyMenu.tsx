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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.2rem;
`;

const MenuItem = styled.button<{ isActive: boolean; isClicked: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.5rem 0.5rem;
  margin: 0.15rem 0;
  font-size: 0.82rem;
  font-weight: ${props => props.isClicked ? '700' : props.isActive ? '600' : '400'};
  color: ${props => (props.isClicked || props.isActive) ? '#000' : '#aaa'};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  line-height: 1.3;

  &:hover {
    color: #000;
    background: rgba(0, 0, 0, 0.04);
  }
`;

const menuItems = [
  { id: 'overview',    label: 'Overview',          targetId: 'bcit-overview' },
  { id: 'challenge',   label: 'Challenge',          targetId: 'bcit-challenge' },
  { id: 'moodboard',   label: 'Visual Direction',   targetId: 'bcit-moodboard' },
  { id: 'wordmark',    label: 'Wordmark',           targetId: 'bcit-wordmark' },
  { id: 'banners',     label: 'Banners',            targetId: 'bcit-banners' },
  { id: 'stickers',    label: 'Stickers',           targetId: 'bcit-stickers' },
  { id: 'poster',      label: 'Poster',             targetId: 'bcit-poster' },
  { id: 'motion',      label: 'Motion Graphics',    targetId: 'bcit-motion' },
  { id: 'reflection',  label: 'Reflection',         targetId: 'bcit-reflection' },
];

const BcitStickyMenu: React.FC = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('overview');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const menuItem = menuItems.find(item => item.targetId === entry.target.id);
            if (menuItem) setActiveSection(menuItem.id);
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    menuItems.forEach(item => {
      const el = document.getElementById(item.targetId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (targetId: string, itemId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setClickedItem(itemId);
    }
  };

  return (
    <MenuContainer>
      <MenuTitle>Contents</MenuTitle>
      {menuItems.map(item => (
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

export default BcitStickyMenu;
