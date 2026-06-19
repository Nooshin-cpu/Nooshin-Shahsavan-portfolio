import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import VeenFirst from '../../components/veen/VeenFirst';
import VeenSecond from '../../components/veen/VeenSecond';
import VeenThird from '../../components/veen/VeenThird';
import VeenForth from '../../components/veen/VeenForth';
import VeenMuck1 from '../../components/veen/VeenMuck1';
import VeenMuck2 from '../../components/veen/VeenMuck2';
import VeenMuck3 from '../../components/veen/VeenMuck3';
import VeenMuck4 from '../../components/veen/VeenMuck4';
import VeenMuck5 from '../../components/veen/VeenMuck5';
import VeenMuck6 from '../../components/veen/VeenMuck6';
import VeenMuck7 from '../../components/veen/VeenMuck7';
import VeenMuck8 from '../../components/veen/VeenMuck8';
import VeenEnvelope from '../../components/veen/VeenEnvelope';
import VeenLogoP from '../../components/veen/VeenLogoP';
import FlipBook from '../../components/FlipBook';

import ProblemVeen from '../../components/veen/ProblemVeen';
import WorksNavMenu from '../../components/WorksNavMenu';
import { EmailFooter } from '../../components/Footer';
import VeenScrollButton from '../../components/VeenScrollButton';
import BottomScrollButton from '../../components/BottomScrollButton';

const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  text-align: center;
  @media (max-width: 600px) {
    padding-top: 60px;
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }
  html {
    overflow-x: hidden;
  }
  p, h1, h2, h3, h4, h5, h6, li {
    text-align: center !important;
  }
`;

const Veen: React.FC = () => {
  return (
    <>
      <PageBg>
        <GlobalStyle />
        <SEO 
          title="Veen Project | Nooshin Shahsavan - Brand Identity & Design"
          description="Explore the Veen project - a sophisticated branding project by Nooshin Shahsavan creating an elegant and timeless visual identity with premium aesthetics."
          keywords="Veen project, brand identity, logo design, visual design, branding, Nooshin Shahsavan, design portfolio"
          image="/src/assets/veen/brand-strategy.png"
        />
        <WorksNavMenu />
        <div id="veen-first">
          <VeenFirst />
        </div>
        <div id="veen-second">
          <VeenSecond />
        </div>
        <div id="veen-problem">
          <ProblemVeen />
        </div>
        <div id="veen-logo">
          <VeenThird />
          <VeenLogoP />
        </div>
        <div id="veen-color">
          <VeenForth />
        </div>
      
        <div id="veen-typography">
          <VeenMuck5 />
        </div>
        <div id="veen-brand-book">
          <VeenMuck6 />
          <FlipBook />
        </div>
        <div id="veen-mockups">
          <h2 style={{
            width: '70vw',
            margin: '2.5rem auto 1.5rem auto',
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: '#222',
            background: 'transparent',
            border: 'none',
          }}>Mockups</h2>
          
          <VeenMuck2 />
          <VeenMuck3 />
          <VeenMuck8 />
          <VeenEnvelope />
        </div>
        <EmailFooter />
      </PageBg>
      <VeenScrollButton />
    </>
  );
};

export default Veen;