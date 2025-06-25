import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from { 
    transform: translate3d(0, 0, 0);
  }
  to { 
    transform: translate3d(0, 200px, 0);
  }
`;

const Container = styled.div`
  width: 180%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  margin: 0 auto;
  transform: scale(0.6);
  transform-origin: center center;
`;

const CactusWrapper = styled.div`
  animation: ${bounce} 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5,0.05,1,.5);
  animation-iteration-count: infinite;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: auto;
  max-height: 100%;
`;

const CactusAnimation: React.FC = () => {
  return (
    <Container>
      <CactusWrapper>
        <StyledSVG
          version="1.1"
          viewBox="0 0 833 637"
        >
          <style type="text/css">
            {`
              .st0{fill:#1ABC9C;}
              .st1{fill:#16A085;}
              .st2{fill:none;stroke:#000000;stroke-width:6;stroke-miterlimit:10;}
              .st3{fill:none;stroke:#000000;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
              .st4{display:none;}
              .st5{display:inline;fill:#FFFFFF;}
              .st6{fill:#E2AF13;}
              .st7{fill:#F1C40F;}
            `}
          </style>
          <g id="left-cactus">
            <g id="left-body_1_">
              <path className="st0" d="M305.5,459.5c0,0,13-42,13-66s-27-37-44-37s-44,13-44,37s13,66,13,66H305.5z"/>
              <path className="st1" d="M286,360c0,0,15,10,20,25s-12,74-12,74h11c0,0,19-57.7,12-76.3C310,364,286,360,286,360z"/>
              <path className="st2" d="M305.5,459.5c0,0,13-42,13-66s-27-37-44-37s-44,13-44,37s13,66,13,66H305.5z"/>
              <line className="st3" x1="275" y1="356" x2="275" y2="347"/>
              <line className="st3" x1="312" y1="374" x2="319" y2="368"/>
              <line className="st3" x1="319" y1="402" x2="329" y2="402"/>
              <line className="st3" x1="311" y1="440" x2="319" y2="440"/>
              <line className="st3" x1="237" y1="374" x2="230" y2="368"/>
              <line className="st3" x1="230" y1="402" x2="220" y2="402"/>
              <line className="st3" x1="238" y1="440" x2="230" y2="440"/>
              <g id="left-eyes">
                <circle cx="256" cy="408" r="4"/>
                <circle cx="296" cy="408" r="4"/>
              </g>
              <circle id="left-mouth" cx="275" cy="438" r="7"/>
            </g>
            <g id="left-pot_1_">
              <g className="st4">
                <polygon className="st5" points="234.7,497 245,537 305,537 316.3,497"/>
              </g>
              <polygon className="st6" points="295,497 286,534 307,534 317,497"/>
              <polygon className="st7" points="314,505 236,505 234,497 315.5,497"/>
              <polygon className="st6" points="294.5,500.1 293.1,505 314,505 316,497"/>
              <g>
                <path d="M314.1,497l-9.6,34h-57.9l-9.6-34H314.1 M322,491h-93l13,46h67L322,491L322,491z"/>
              </g>
              <path className="st7" d="M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32
                C326,495.3,324.3,497,322.3,497z"/>
              <path className="st6" d="M322.3,497h-27.8v-39.5h27.8c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z"/>
              <path className="st2" d="M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32
                C326,495.3,324.3,497,322.3,497z"/>
            </g>
          </g>
        </StyledSVG>
      </CactusWrapper>
    </Container>
  );
};

export default CactusAnimation; 