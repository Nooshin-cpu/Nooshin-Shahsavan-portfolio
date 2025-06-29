import React, { useEffect } from 'react';
import styled from 'styled-components';
import './Cactus.css';

const CactusContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledSVG = styled.svg`
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin-bottom: 53px;
  visibility: hidden;
`;

const Cactus: React.FC = () => {
  useEffect(() => {
    // Load the animation when component mounts
    const loadAnimation = async () => {
      try {
        const spirit = (window as any).spirit;
        if (spirit) {
          await spirit.loadAnimation({
            loop: true,
            path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/cactus.json'
          });
          // Show the SVG after animation is loaded
          const svg = document.querySelector('svg');
          if (svg) {
            svg.style.visibility = 'visible';
          }
        }
      } catch (error) {
        console.error('Error loading cactus animation:', error);
      }
    };

    loadAnimation();
  }, []);

  return (
    <CactusContainer>
      <StyledSVG width="833px" height="637px" viewBox="0 0 833 637">
        <g data-spirit-id="right-cactus">
          <g data-spirit-id="right-body">
            <path fill="#29EA90" d="M565.5,459.5c0,0,13-112,13-136s-27-37-44-37s-44,13-44,37s13,136,13,136H565.5z" />
            <path fill="#22B562" d="M546,288c0,0,14,14,19,29s-11,142-11,142h11c0,0,19-126.3,12-145S546,288,546,288z" />
            <path fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" d="M565.5,459.5c0,0,13-112,13-136s-27-37-44-37s-44,13-44,37s13,136,13,136H565.5z" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="535" y1="285" x2="535" y2="276" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="572" y1="303" x2="579" y2="297" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="579" y1="331" x2="589" y2="331" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="569.3" y1="407" x2="576.9" y2="407" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="497" y1="303" x2="490" y2="297" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="490" y1="331" x2="480" y2="331" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="499.7" y1="407" x2="492.1" y2="407" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="573.5" y1="369" x2="582.1" y2="369" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="495.5" y1="369" x2="486.9" y2="369" />
            <g data-spirit-id="right-eyes">
              <circle cx="516" cy="348" r="4" />
              <circle cx="556" cy="348" r="4" />
            </g>
          </g>
          <g data-spirit-id="right-pot">
            <polygon fill="#FFDF54" points="555,497 546,534 567,534 577,497" />
            <polygon fill="#FFDF54" points="574,505 496,505 494,497 575.5,497" />
            <polygon fill="#E2AF13" points="554.5,500.1 553.1,505 574,505 576,497" />
            <path fill="#FFFFFF" d="M582.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32C586,495.3,584.3,497,582.3,497z" />
            <path fill="#FFDF54" d="M582.3,497h-27.8v-39.5h27.8c2.1,0,3.7,1.7,3.7,3.7v32C586,495.3,584.3,497,582.3,497z" />
            <path fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" d="M582.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32C586,495.3,584.3,497,582.3,497z" />
          </g>
        </g>
        <g data-spirit-id="left-cactus">
          <g data-spirit-id="left-body">
            <path fill="#29EA90" d="M305.5,459.5c0,0,13-42,13-66s-27-37-44-37s-44,13-44,37s13,66,13,66H305.5z" />
            <path fill="#22B562" d="M286,360c0,0,15,10,20,25s-12,74-12,74h11c0,0,19-57.7,12-76.3C310,364,286,360,286,360z" />
            <path fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" d="M305.5,459.5c0,0,13-42,13-66s-27-37-44-37s-44,13-44,37s13,66,13,66H305.5z" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="275" y1="356" x2="275" y2="347" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="312" y1="374" x2="319" y2="368" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="319" y1="402" x2="329" y2="402" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="311" y1="440" x2="319" y2="440" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="237" y1="374" x2="230" y2="368" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="230" y1="402" x2="220" y2="402" />
            <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="238" y1="440" x2="230" y2="440" />
            <g data-spirit-id="left-eyes">
              <circle cx="256" cy="408" r="4" />
              <circle cx="296" cy="408" r="4" />
            </g>
            <circle data-spirit-id="left-mouth" cx="275" cy="438" r="7" />
          </g>
          <g data-spirit-id="left-pot">
            <polygon fill="#FFDF54" points="295,497 286,534 307,534 317,497" />
            <polygon fill="#FFDF54" points="314,505 236,505 234,497 315.5,497" />
            <polygon fill="#E2AF13" points="294.5,500.1 293.1,505 314,505 316,497" />
            <path fill="#FFFFFF" d="M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z" />
            <path fill="#FFDF54" d="M322.3,497h-27.8v-39.5h27.8c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z" />
            <path fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" d="M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z" />
          </g>
        </g>
        <line fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="159" y1="534" x2="651" y2="534" />
        <g data-spirit-id="bubble">
          <circle fill="#D1FFFF" cx="198" cy="235" r="62" />
          <path fill="#7FF4FF" d="M228.2,180.3c8,10.4,12.8,23.5,12.8,37.7c0,34.2-27.8,62-62,62c-10.6,0-20.5-2.6-29.2-7.3c11.3,14.8,29.2,24.3,49.2,24.3c34.2,0,62-27.8,62-62C261,211.3,247.7,190.8,228.2,180.3z" />
          <path fill="#7FF4FF" d="M226.8,183.8c7.5,9.8,12,22.1,12,35.4c0,32.2-26.1,58.3-58.3,58.3c-9.9,0-19.3-2.5-27.5-6.9c10.7,13.9,27.4,22.9,46.3,22.9c32.2,0,58.3-26.1,58.3-58.3C257.7,213,245.2,193.6,226.8,183.8z" />
        </g>
        <g data-spirit-id="burst">
          <g data-spirit-id="burst-strokes">
            <line data-spirit-id="bust-stroke-4" fill="none" stroke="#000000" strokeWidth="5" strokeLinecap="round" strokeMiterlimit="10" x1="437" y1="192" x2="437" y2="110" />
            <line data-spirit-id="bust-stroke-3" fill="none" stroke="#000000" strokeWidth="5" strokeLinecap="round" strokeMiterlimit="10" x1="437.5" y1="360" x2="437.5" y2="278" />
            <line data-spirit-id="bust-stroke-2" fill="none" stroke="#000000" strokeWidth="5" strokeLinecap="round" strokeMiterlimit="10" x1="480.2" y1="234.8" x2="562.2" y2="234.8" />
            <line data-spirit-id="bust-stroke-1" fill="none" stroke="#000000" strokeWidth="5" strokeLinecap="round" strokeMiterlimit="10" x1="312.2" y1="235.2" x2="394.2" y2="235.2" />
          </g>
          <g data-spirit-id="burst-bubbles">
            <circle data-spirit-id="burst-bubble-3" fill="#36EA96" cx="455.5" cy="215.5" r="9" />
            <circle data-spirit-id="burst-bubble-2" fill="#5BD0FB" cx="394.5" cy="206.5" r="6" />
            <circle data-spirit-id="burst-bubble-1" fill="#5BD0FB" cx="394.5" cy="266.5" r="6" />
          </g>
        </g>
      </StyledSVG>
    </CactusContainer>
  );
};

export default Cactus; 