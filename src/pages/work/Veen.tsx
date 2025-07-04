import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
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
import VeenLogoP from '../../components/veen/VeenLogoP';
import FlipBook from '../../components/FlipBook';

import ProblemVeen from '../../components/veen/ProblemVeen';
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';

const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #9ed4d1;
  transition: background 0.2s;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #9ed4d1;
    overflow-x: hidden !important;
    margin: 0;
    padding: 0;
  }
  html {
    overflow-x: hidden;
  }
`;

const Veen: React.FC = () => {
  return (
    <PageBg>
      <GlobalStyle />
      <VeenFirst />
      <VeenSecond />
      <ProblemVeen />
      <VeenThird />
      <VeenLogoP />
      <VeenForth />
      <VeenMuck5 />
      <VeenMuck6 />
      <FlipBook />
      <VeenMuck1 />
      <VeenMuck2 />
      <VeenMuck3 />
      <VeenMuck4 />
      <VeenMuck7 />
      <MenuWork />
    </PageBg>
  );
};

export default Veen;