import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ACCENT = '#6d28d9';

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
  color: ${p => (p.$isClicked || p.$isActive) ? ACCENT : '#aaa'};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  line-height: 1.3;

  &:hover {
    color: ${ACCENT};
    background: rgba(109, 40, 217, 0.05);
  }
`;

const ActiveDot = styled.span<{ $show: boolean }>`
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${ACCENT};
  margin-right: 8px;
  vertical-align: middle;
  opacity: ${p => p.$show ? 1 : 0};
  transition: opacity 0.2s;
`;

const ProgressBar = styled.div<{ $pct: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: ${p => p.$pct}%;
  background: linear-gradient(90deg, ${ACCENT} 0%, #a855f7 100%);
  z-index: 9999;
  transition: width 0.1s linear;
  border-radius: 0 2px 2px 0;
`;

const menuItems = [
  { id: 'hero',        label: 'Introduction',     targetId: 'ai-hero' },
  { id: 'mirrormei',  label: '01 MirrorMei',      targetId: 'ai-mirrormei' },
  { id: 'saveon1',    label: '02 Save-On Foods',   targetId: 'ai-saveon1' },
  { id: 'saveon2',    label: '03 Campaign II',     targetId: 'ai-saveon2' },
  { id: 'reflection', label: 'AI + Creativity',    targetId: 'ai-reflection' },
];

const AiStickyMenu: React.FC = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const pageBg = document.querySelector('[data-page-scroll]') as HTMLElement | null;
    const scroller = pageBg ?? window as unknown as HTMLElement;

    const handleScroll = () => {
      const el = pageBg ?? document.documentElement;
      const scrollTop = pageBg ? pageBg.scrollTop : window.scrollY;
      const total = el.scrollHeight - el.clientHeight;
      setScrollPct(total > 0 ? (scrollTop / total) * 100 : 0);
    };

    scroller.addEventListener('scroll', handleScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
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
      { root: pageBg, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
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
      pageBg.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setClickedItem(itemId);
  };

  return (
    <>
      <ProgressBar $pct={scrollPct} />
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
    </>
  );
};

export default AiStickyMenu;
