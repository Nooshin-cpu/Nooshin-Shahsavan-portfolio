import React from 'react';
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';
import Photography from '../../components/Photography';
import Illustrations from '../../components/Illustrations';
import AR from '../../components/AR';
import StickyMenu from '../../components/StickyMenu';

const FunProject = () => (
  <>
    <StickyMenu />
    <Photography />
    <Illustrations />
    <AR />
    <div style={{ backgroundColor: '#191c24' }}>
      <style>
        {`
          .menu-work-container {
            background: #191c24 !important;
          }
          
          /* Override for mobile devices */
          @media (max-width: 900px) {
            .menu-work-container {
              background: #191c24 !important;
            }
          }
          
          /* Override StickyMenu background for FunProject page */
          [data-sticky-menu] {
            background: #191c24 !important;
          }
          
          /* Target the StickyMenu wrapper */
          div[style*="position: fixed"][style*="left: 24px"] {
            background: #191c24 !important;
          }
        `}
      </style>
      <MenuWork titleColor="#ffffff" />
    </div>
  </>
);

export default FunProject;
