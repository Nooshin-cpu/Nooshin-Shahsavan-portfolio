import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// @ts-ignore
import logoWeb from '../assets/home/logoweb.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 1rem 0;
  box-shadow: none;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.7rem;
  font-weight: 700;
  color: #181818;
  text-decoration: none;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  display: block;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-weight: 500;
  color: #181818;
  text-decoration: none;
  font-size: 1.18rem;
  letter-spacing: 0.01em;
  transition: color 0.2s;
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #e4572e;
    transition: width 0.3s ease;
  }
  &:hover {
    color: #e4572e;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.span`
  width: 28px;
  height: 3px;
  background: #000;
  margin: 3px 0;
  border-radius: 2px;
  transition: 0.4s;
`;

const MobileMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(25, 28, 36, 0.85);
  backdrop-filter: blur(18px) saturate(1.5);
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 2.5rem;
  z-index: 1200;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ open }) => open ? 1 : 0};
  pointer-events: ${({ open }) => open ? 'auto' : 'none'};
  transition: transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1);
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  font-size: 2.1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 1.2rem;
  letter-spacing: 0.04em;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.6s forwards;
  animation-delay: var(--delay, 0s);
  transition: transform 0.2s, color 0.2s;
  &:hover {
    color: #2ee0ff;
    transform: scale(1.08) translateY(-2px);
  }
  &:last-child { margin-bottom: 0; }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  background: rgba(46,224,255,0.15);
  border: none;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1300;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px #2ee0ff40;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: rgba(46,224,255,0.35);
    transform: scale(1.08) rotate(8deg);
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const Backdrop = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.35);
  z-index: 1199;
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <LogoImg src={logoWeb} alt="Logo" />
        </Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </NavLinks>
        <Hamburger aria-label="Open menu" onClick={handleMenuToggle}>
          <Bar style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
          <Bar style={{ opacity: menuOpen ? 0 : 1 }} />
          <Bar style={{ transform: menuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }} />
        </Hamburger>
        <Backdrop open={menuOpen} onClick={handleClose} />
        <MobileMenu open={menuOpen}>
          <CloseButton aria-label="Close menu" onClick={handleClose}>&times;</CloseButton>
          <MobileNavLink to="/" onClick={handleClose} style={{ '--delay': '0.1s' } as React.CSSProperties}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={handleClose} style={{ '--delay': '0.25s' } as React.CSSProperties}>About</MobileNavLink>
          <MobileNavLink to="/work" onClick={handleClose} style={{ '--delay': '0.4s' } as React.CSSProperties}>Work</MobileNavLink>
          <MobileNavLink to="/resume" onClick={handleClose} style={{ '--delay': '0.55s' } as React.CSSProperties}>Resume</MobileNavLink>
        </MobileMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 