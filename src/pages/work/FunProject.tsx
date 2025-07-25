import React from 'react';
import SEO from '../../components/SEO';
import MenuWork from '../../components/MenuWork';
import '../../components/MenuWork.css';
import Photography from '../../components/Photography';
import Illustrations from '../../components/Illustrations';
import AR from '../../components/AR';
import Animation2D from '../../components/Animation2D';
import StickyMenu from '../../components/StickyMenu';

const FunProject = () => (
  <>
    <SEO 
      title="School Projects | Nooshin Shahsavan - Creative Portfolio"
      description="Explore Nooshin Shahsavan's school projects featuring photography, illustrations, AR/VR experiences, and 2D animations showcasing creative skills and innovative design thinking."
      keywords="school projects, photography, illustrations, AR/VR, 2D animation, creative portfolio, Nooshin Shahsavan, design projects"
      image="/src/assets/fun/funhome.jpg"
    />
    <StickyMenu />
    <Photography />
    <Illustrations />
    <AR />
    <Animation2D />
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
