import React from "react";
import SEO from "../../components/SEO";
import ZarFirst from "../../components/zar/ZarFirst";
import ZarSecond from "../../components/zar/ZarSecond";
import ZarThird from "../../components/zar/ZarThird";
import ZarColor from "../../components/zar/ZarColor";
import ZarType from "../../components/zar/ZarType";
import ZarPackaging from "../../components/zar/ZarPackaging";
import Zarmock1 from "../../components/zar/Zarmock1";
import Zarmock2 from "../../components/zar/Zarmock2";
import Zarmock3 from "../../components/zar/Zarmock3";
import Zarmock4 from "../../components/zar/Zarmock4";
import ZarMock5 from "../../components/zar/ZarMock5";
import ZarStory from "../../components/zar/ZarStory";
import ZarMock6 from "../../components/zar/Zarmock6";
import ZarMock7 from "../../components/zar/Zarmock7";
import ZarMock8 from "../../components/zar/Zarmock8";
import ZarLogoP from "../../components/zar/ZarLogoP";
import ProblemZar from "../../components/zar/ProblemZar";
import PackZarImage from "../../components/zar/PackZarImage";
import WorksNavMenu from '../../components/WorksNavMenu';
import TopScrollButton from '../../components/TopScrollButton';
import BottomScrollButton from '../../components/BottomScrollButton';
import styled, { createGlobalStyle } from 'styled-components';
import { EmailFooter } from '../../components/Footer';

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
  @media (max-width: 600px) {
    padding-top: 60px;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  /* Optional: Prevent horizontal scroll on html element */
  html {
    overflow-x: hidden;
  }
`;

const SectionTitle = styled.h2`
  width: 100vw;
  text-align: center;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: #181818;
  margin: 2.5rem 0 1.5rem 0;
  letter-spacing: -1px;
`;

const Zar: React.FC = () => (
  <>
    <PageBg>
      <SEO 
        title="Zar Project | Nooshin Shahsavan - Creative Design & Branding"
        description="Explore the Zar project - an innovative branding and digital design project by Nooshin Shahsavan combining contemporary aesthetics with cultural elements."
        keywords="Zar project, creative design, brand design, digital design, visual identity, Nooshin Shahsavan, design portfolio"
        image="/src/assets/zar/banner-zar.png"
      />
      <GlobalStyle />
      <WorksNavMenu />
      
      <div id="zar-overview">
        <ZarFirst />
      </div>
      
      <div id="zar-second">
        <ZarSecond/>
      </div>
      
      <div id="zar-problem">
        <ProblemZar />
      </div>
      
      <div id="zar-logo">
        <ZarThird/>
      </div>
      
      <div id="zar-logo-process">
        <ZarLogoP />
      </div>
      
      <div id="zar-color">
        <ZarColor/>
      </div>
      
      <div id="zar-typography">
        <ZarType/>
      </div>
      
      <div id="zar-packaging">
        <SectionTitle>Packaging</SectionTitle>
        <ZarPackaging/>
        <PackZarImage/>
      </div>
      
      <div id="zar-mockups">
        <SectionTitle>Mockups</SectionTitle>
        <ZarStory/>
        <ZarMock8/>
        <Zarmock2/>
        <Zarmock3/>
        <Zarmock1/>
        <ZarMock6/>
        <ZarMock5/>
      </div>
      <EmailFooter />
    </PageBg>
    <TopScrollButton />
  </>
);

export default Zar;