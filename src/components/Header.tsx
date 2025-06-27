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
  background: rgba(25, 28, 36, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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
  font-size: 1.5rem;
  font-weight: 700;
  color: #4CAF50;
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
  color: #ffffff;
  text-decoration: none;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #4CAF50;
    transition: width 0.3s ease;
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
  background: #fff;
  margin: 3px 0;
  border-radius: 2px;
  transition: 0.4s;
`;

const MobileMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 220px;
  background: rgba(25, 28, 36, 0.98);
  box-shadow: -2px 0 16px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 24px 24px 24px;
  gap: 2rem;
  z-index: 1200;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 1.2rem;
  &:last-child { margin-bottom: 0; }
  &:hover { color: #4CAF50; }
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

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1300;
  @media (min-width: 769px) {
    display: none;
  }
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
          <MobileNavLink to="/" onClick={handleClose}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={handleClose}>About</MobileNavLink>
          <MobileNavLink to="/work" onClick={handleClose}>Work</MobileNavLink>
          <MobileNavLink to="/resume" onClick={handleClose}>Resume</MobileNavLink>
        </MobileMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 