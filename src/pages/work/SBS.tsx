import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import SbsFirst from '../../components/SetbysetiComs/SbsFirst';
import SbsOverviewDetails from '../../components/SetbysetiComs/SbsOverviewDetails';
import ProblemSbs from '../../components/SetbysetiComs/ProblemSbs';
import SbsSecond from '../../components/SetbysetiComs/SbsSecond';
import SbsType from '../../components/SetbysetiComs/SbsType';
import SbsColor from '../../components/SetbysetiComs/SbsColor';
import SbsIllustration from '../../components/SetbysetiComs/SbsIllustration';
import SbsMock1 from '../../components/SetbysetiComs/SbsMock1';
import SbsMock2 from '../../components/SetbysetiComs/SbsMock2';
import SbsVideo from '../../components/SetbysetiComs/SbsVideo';


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
import SbsSocialMedia1 from '../../components/SetbysetiComs/SbsSocialMedia1';
import SbsSocialMedia2 from '../../components/SetbysetiComs/SbsSocialMedia2';
import CircleSbs from '../../components/SetbysetiComs/CircleSbs';
import { EmailFooter } from '../../components/Footer';
import SbsStickyMenu from '../../components/SbsStickyMenu';
import TopScrollButton from '../../components/TopScrollButton';
import BottomScrollButton from '../../components/BottomScrollButton';

// Responsive PageBg
const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  transition: background 0.2s;
  overflow-x: hidden;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-top: 60px;
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

const SectionTitle = styled.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
  color: #181818;
  margin: 2.5rem 0 1.5rem 0;
  letter-spacing: -1px;
`;

const Sbs: React.FC = () => {
  return (
    <PageBg>
       <GlobalStyle />
      <SbsStickyMenu />
      
      <div id="sbs-overview">
        <SbsFirst />
        <SbsMock12/>
        <SbsOverviewDetails />
      </div>
      
      <div id="sbs-challenges">
        <ProblemSbs />
      </div>
      
      <div id="sbs-logo">
        <SbsSecond /> 
      </div>
      
      <div id="sbs-logo-process">
        <SbsLogoP /> 
      </div>
      
      <div id="sbs-color">
        <SbsColor /> 
      </div>
      
      <div id="sbs-typography">
        <SbsType /> 
      </div>
      
      <div id="sbs-illustration">
        <SbsIll/>
        <SbsIllustration />   
      </div>
      
      <div id="sbs-brand-identity">
        <CircleSbs text="Set by Setti Brand Identity" spinDuration={18} />
      </div>
      
      <div id="sbs-video">
        <SbsVideo/>
      </div>
      
      <div id="sbs-mockups">
        <SbsMock1/> 
        <SbsMock2/>
      </div>
      
      <div id="sbs-social-media">
        <SectionTitle>Social Media/Black Friday</SectionTitle>
        <SbsSocialMedia1 />
        <SbsSocialMedia2 />
      </div>
    
      <div id="sbs-additional-mockups">
        <SbsMock6/>
        <SbsMock71/>
      </div>
      
      <MenuWork />
      <EmailFooter />
    </PageBg>
  );
};

export default Sbs;