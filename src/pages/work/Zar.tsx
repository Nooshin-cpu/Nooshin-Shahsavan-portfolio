import React from "react";
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
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';
import styled, { createGlobalStyle } from 'styled-components';

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

const Zar: React.FC = () => (
  <PageBg>
    <GlobalStyle />
    <ZarFirst />
    <ZarSecond/>
    <ProblemZar />
    <ZarThird/>
    <ZarLogoP />
    <ZarColor/>
    <ZarType/>
    <ZarPackaging/>
    <Zarmock1/>
    <Zarmock2/>
    <Zarmock3/>
    <Zarmock4/>
    <ZarMock5/>
    <ZarStory/>
    <ZarMock6/>
    <ZarMock7/>
    <ZarMock8/>
    <MenuWork />
  </PageBg>
);

export default Zar;