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
import MenuWork from '../../components/MenuWork';
import ZarStickyMenu from '../../components/ZarStickyMenu';
import TopScrollButton from '../../components/TopScrollButton';
import BottomScrollButton from '../../components/BottomScrollButton';
import '../../components/MenuWork.css';
import styled, { createGlobalStyle } from 'styled-components';
import { EmailFooter } from '../../components/Footer';

const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
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
    background: #fff;
    overflow-x: hidden !important;
    margin: 0;
    padding: 0;
  }
  html {
    overflow-x: hidden;
  }
`;

const MockupsTitle = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
    padding: 0 0.5rem;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
`;

const Zar: React.FC = () => (
  <PageBg>
    <SEO 
      title="Zar Project | Nooshin Shahsavan - Creative Design & Branding"
      description="Explore the Zar project - an innovative branding and digital design project by Nooshin Shahsavan combining contemporary aesthetics with cultural elements."
      keywords="Zar project, creative design, brand design, digital design, visual identity, Nooshin Shahsavan, design portfolio"
      image="/src/assets/zar/banner-zar.png"
    />
    <GlobalStyle />
    <ZarStickyMenu />
    <div id="zar-first">
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
      <ZarLogoP />
    </div>
    <div id="zar-color">
      <ZarColor/>
    </div>
    <div id="zar-typography">
      <ZarType/>
    </div>
    <div id="zar-packaging">
      <ZarPackaging/>
      <PackZarImage/>
    </div>
    <div id="zar-mockups">
    <MockupsTitle>
      <Title>Mockups</Title>
      
    </MockupsTitle>
    <ZarStory/>
    <ZarMock8/>
    <Zarmock2/>
    <Zarmock3/>
    <Zarmock1/>
    <ZarMock6/>
    </div>
    
  
   
    <ZarMock5/>
   
    
    
   
    <MenuWork />
    <EmailFooter />
  </PageBg>
);

export default Zar;