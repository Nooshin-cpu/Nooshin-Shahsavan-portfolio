import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import DeliFirst from "../../components/deli/DeliFirst";
import DeliSecond from "../../components/deli/DeliSecond";
import DeliThird from "../../components/deli/DeliThird";
import DeliForth from "../../components/deli/DeliForth";
import DeliGrid from '../../components/deli/DeliGrid';
import DeliColor from '../../components/deli/DeliColor';
import DeliType from '../../components/deli/DeliType';
import Deli8 from '../../components/deli/Deli8';
import Deli9 from '../../components/deli/Deli9';
import Deli10 from '../../components/deli/Deli10';
import Deli11 from '../../components/deli/Deli11';
import Deli12 from '../../components/deli/Deli12';
import Deli13 from '../../components/deli/Deli13';
import Deli11Image from '../../components/deli/Deli11Image';
import Deli13Image from '../../components/deli/Deli13Image';
import DeliCardImage from '../../components/deli/DeliCardImage';

import DeliLogoP from '../../components/deli/DeliLogoP';
import ProblemDeli from '../../components/deli/ProblemDeli';
import StoryOne from '../../components/deli/StoryOne';

import Deli14 from '../../components/deli/Deli14';
import Deli15 from '../../components/deli/Deli15';


import MenuWork from '../../components/MenuWork';
import DelicatoStickyMenu from '../../components/DelicatoStickyMenu';
import '../../components/MenuWork.css';
import { EmailFooter } from '../../components/Footer';
import TopScrollButton from '../../components/TopScrollButton';
import BottomScrollButton from '../../components/BottomScrollButton';

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
    overflow-x: hidden;
  }
`;

const SectionTitle = styled.h2`
  width: 100vw;
  text-align: center;
  color: #111;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 4rem 0 2rem 0;
  letter-spacing: 0.04em;
`;

const Delicato: React.FC = () => {
  return (
    <PageBg>
      <DelicatoStickyMenu />
      <div id="deli-first">
        <DeliFirst />
      </div>
      <div id="deli-second">
        <DeliSecond />
      </div>
      
      <div id="deli-problem">
        <ProblemDeli/>
      </div>
      <div id="deli-logo">
        <DeliForth />
        <DeliLogoP/>
      </div>
      
      <div id="deli-typography">
        <DeliGrid />
        <DeliColor />
        <DeliType />
      </div>
      <div id="deli-mockups">
      <SectionTitle>Mockups</SectionTitle>
      <Deli8 />
      <Deli15 />
      <DeliCardImage />
      <Deli10 />
      <Deli11Image />
      <Deli13Image />
      <StoryOne/>
      <Deli11 />
      <Deli12 />
      <Deli13 />
      </div>
      
    
      
      
      
      <MenuWork />
      <EmailFooter />
    </PageBg>
  );
};

export default Delicato;
