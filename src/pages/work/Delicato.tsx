import React from "react";
import styled from 'styled-components';
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
import Deli14 from '../../components/deli/Deli14';
import Deli15 from '../../components/deli/Deli15';

const Delicato: React.FC = () => {
  return (
    <>
      <DeliFirst />
      <DeliSecond />
      <DeliThird />
      <DeliForth />
      <DeliGrid />
      <DeliColor />
      <DeliType />
      <Deli8 />
      <Deli9 />
      <Deli10 />
      <Deli11 />
      <Deli12 />
      <Deli13 />
      <Deli14 />
      <Deli15 />
    </>
  );
};

export default Delicato;
