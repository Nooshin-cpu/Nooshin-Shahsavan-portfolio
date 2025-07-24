import React from 'react';
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';
import Photography from '../../components/Photography';
import Illustrations from '../../components/Illustrations';
import AR from '../../components/AR';

const FunProject = () => (
  <>
    <Photography />
    <Illustrations />
    <AR />
    <div style={{ backgroundColor: 'black' }}>
      <style>
        {`
          .menu-work-container {
            background: black !important;
          }
        `}
      </style>
      <MenuWork />
    </div>
  </>
);

export default FunProject;
