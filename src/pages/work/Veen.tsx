import React from 'react';
import styled from 'styled-components';
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


const Veen: React.FC = () => {
  return (
    <div>
      <VeenFirst />
      <VeenSecond />
      <ProblemVeen/>
      <VeenThird />
      <VeenLogoP />
      <VeenForth/>
    
      <VeenMuck5/>
      <VeenMuck6/>
      <FlipBook />
      
      <VeenMuck1/>
      <VeenMuck2/>
      <VeenMuck3/>
      <VeenMuck4/>
      <VeenMuck7/>

      <MenuWork />
    </div>
  );
};

export default Veen; 