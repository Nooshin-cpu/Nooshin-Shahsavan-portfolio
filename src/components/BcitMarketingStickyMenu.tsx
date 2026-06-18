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

const MenuItem = styled.button<{ $isActive: boolean; $isClicked: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.5rem 0.5rem;
  margin: 0.15rem 0;
  font-size: 0.82rem;
  font-weight: ${p => p.$isClicked ? '700' : p.$isActive ? '600' : '400'};
  color: ${p => (p.$isClicked || p.$isActive) ? '#1b3a6e' : '#aaa'};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  line-height: 1.3;

  &:hover {
    color: #1b3a6e;
    background: rgba(27, 58, 110, 0.05);
  }
`;

const ActiveDot = styled.span<{ $show: boolean }>`
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #1b3a6e;
  margin-right: 8px;
  vertical-align: middle;
  opacity: ${p => p.$show ? 1 : 0};
  transition: opacity 0.2s;
`;

const menuItems = [
  { id: 'intro',       label: 'Introduction',        targetId: 'bcitm-intro' },
  { id: 'card',        label: '01 Holiday Card',      targetId: 'bcitm-card' },
  { id: 'coupons',     label: '02 Day-Off Coupons',   targetId: 'bcitm-coupons' },
  { id: 'institutional', label: '03 Institutional',   targetId: 'bcitm-institutional' },
  { id: 'banner',      label: '04 Email Banner',      targetId: 'bcitm-banner' },
  { id: 'linkedin',    label: '05 LinkedIn',          targetId: 'bcitm-linkedin' },
  { id: 'reflection',  label: 'Reflection',           targetId: 'bcitm-reflection' },
];

const BcitMarketingStickyMenu: React.FC = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('intro');

  React.useEffect(() => {
    const pageBg = document.querySelector('[data-page-scroll]') as HTMLElement | null;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const item = menuItems.find(m => m.targetId === entry.target.id);
            if (item) setActiveSection(item.id);
          }
        });
      },
      {
        root: pageBg,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    menuItems.forEach(item => {
      const el = document.getElementById(item.targetId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (targetId: string, itemId: string) => {
    const pageBg = document.querySelector('[data-page-scroll]') as HTMLElement | null;
    const el = document.getElementById(targetId);
    if (el && pageBg) {
      const top = el.offsetTop - 80;
      pageBg.scrollTo({ top, behavior: 'smooth' });
      setClickedItem(itemId);
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setClickedItem(itemId);
    }
  };

  return (
    <MenuContainer>
      <MenuTitle>Contents</MenuTitle>
      {menuItems.map(item => {
        const isActive = activeSection === item.id;
        const isClicked = clickedItem === item.id;
        return (
          <MenuItem
            key={item.id}
            $isActive={isActive}
            $isClicked={isClicked}
            onClick={() => scrollToSection(item.targetId, item.id)}
          >
            <ActiveDot $show={isActive || isClicked} />
            {item.label}
          </MenuItem>
        );
      })}
    </MenuContainer>
  );
};

export default BcitMarketingStickyMenu;
