import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import SbsFirst from '../../components/SetbysetiComs/SbsFirst';
import ProblemSbs from '../../components/SetbysetiComs/ProblemSbs';
import SbsSecond from '../../components/SetbysetiComs/SbsSecond';
import SbsType from '../../components/SetbysetiComs/SbsType';
import SbsColor from '../../components/SetbysetiComs/SbsColor';
import SbsIllustration from '../../components/SetbysetiComs/SbsIllustration';
import SbsMock1 from '../../components/SetbysetiComs/SbsMock1';
import SbsMock2 from '../../components/SetbysetiComs/SbsMock2';
import SbsMock3 from '../../components/SetbysetiComs/SbsMock3';
import SbsMock4 from '../../components/SetbysetiComs/SbsMock4';
import SbsMock5 from '../../components/SetbysetiComs/SbsMock5';
import SbsMock6 from '../../components/SetbysetiComs/SbsMock6';
import SbsMock7 from '../../components/SetbysetiComs/SbsMock7';
import SbsMock71 from '../../components/SetbysetiComs/SbsMock71';
import SbsIll from '../../components/SetbysetiComs/SbsIll';
import SbsLogoP from '../../components/SetbysetiComs/SbsLogoP';
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';
import SbsMock8 from '../../components/SetbysetiComs/SbsMock8';
import SbsMock9 from '../../components/SetbysetiComs/SbsMock9';
import SbsMock10 from '../../components/SetbysetiComs/SbsMock10';
import SbsMock12 from '../../components/SetbysetiComs/SbsMock12';

// Responsive PageBg
const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  transition: background 0.2s;
  overflow-x: hidden;
  box-sizing: border-box;
  /* Optional: Add some horizontal padding on mobile */
  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    overflow-x: hidden !important; /* Stronger override */
    margin: 0;
    padding: 0;
  }

  /* Optional: Prevent horizontal scroll on html element */
  html {
    overflow-x: hidden;
  }
`;

const Sbs: React.FC = () => {
  return (
    <PageBg>
      <GlobalStyle />
      <SbsFirst />
      <ProblemSbs />
      <SbsSecond /> 
      <SbsLogoP /> 
      <SbsColor /> 
      <SbsType /> 
      <SbsIll/>
      <SbsIllustration />   
      <SbsMock1/> 
      <SbsMock2/>
      <SbsMock3/>
      <SbsMock4/>
      <SbsMock5/>
      <SbsMock6/>
      <SbsMock7/>
      <SbsMock71/>
      <SbsMock8/>
      <SbsMock9/>
      <SbsMock10/>
      <SbsMock12/>
      <MenuWork />
    </PageBg>
  );
};

export default Sbs;