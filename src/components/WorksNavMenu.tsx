import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const projects = [
  { label: 'BCIT Energy Campaign', path: '/work/bcit' },
  { label: 'BCIT Marketing',       path: '/work/bcit-marketing' },
  { label: 'Delicato',             path: '/work/delicato' },
  { label: 'Veen Studio',          path: '/work/veen' },
  { label: 'S.B.S',               path: '/work/sbs' },
  { label: 'Zar',                  path: '/work/zar' },
  { label: 'AI Experience',        path: '/ai' },
];

const MenuContainer = styled.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.4rem 1rem;
  max-width: 200px;
  min-width: 160px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuTitle = styled.div`
  font-size: 1rem;
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.4rem;
`;

const MenuLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.45rem 0.5rem;
  margin: 0.1rem 0;
  font-size: 0.8rem;
  font-weight: ${p => p.$active ? '700' : '400'};
  color: ${p => p.$active ? '#0d0d0d' : '#aaa'};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.18s ease;
  border-radius: 4px;
  line-height: 1.3;

  &:hover {
    color: #0d0d0d;
    background: rgba(0, 0, 0, 0.04);
  }
`;

const Dot = styled.span<{ $active: boolean }>`
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #0d0d0d;
  flex-shrink: 0;
  opacity: ${p => p.$active ? 1 : 0};
  transition: opacity 0.18s;
`;

const WorksNavMenu: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <MenuContainer>
      <MenuTitle>Other Projects</MenuTitle>
      {projects.map(p => {
        const active = pathname === p.path;
        return (
          <MenuLink key={p.path} to={p.path} $active={active}>
            <Dot $active={active} />
            {p.label}
          </MenuLink>
        );
      })}
    </MenuContainer>
  );
};

export default WorksNavMenu;
