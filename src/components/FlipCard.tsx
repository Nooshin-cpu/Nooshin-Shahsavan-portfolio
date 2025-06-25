import React, { useState, useContext, ReactNode } from 'react';
import styled, { ThemeContext, DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { FlipCardContext } from '../context/FlipCardContext'; // Import FlipCardContext
import SpotlightCard from './SpotlightCard'; // Import SpotlightCard
// import './SpotlightCard.css'; // Keep or remove this import based on need - will keep for now for pseudo-elements and h3 style

const CardContainer = styled(motion.div)`
  width: 100%;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;

  &:hover {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='30'><rect width='100' height='30' rx='5' fill='rgba(0,0,0,0.9)'/><text x='50' y='20' font-family='Arial' font-size='12' fill='white' text-anchor='middle'>Click me</text></svg>") 16 16, auto;
  }
`;

const CardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: #000000;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  background: #000000;
  color: #000000;
`;

// Removed CardFront styled component definition
// const CardFront = styled(CardFace)<{ theme: DefaultTheme }>`
//   /* Styles for the front face */
//   background: ${({ theme }) => theme.background === '#FEF86A' ? '#f39c12' : theme.cardBackground}; /* Apply theme-aware background */
//   color: ${({ theme }) => theme.text}; /* Ensure text color is theme-aware */
//   z-index: 2; /* Ensure front is above back initially */
//   transform: rotateY(0deg); /* Explicitly set initial rotation */
//   padding: 2rem; /* Keep internal padding for content spacing */

//   /* Styles for the h3 inside the front face - inheriting color from CardFront */
//   h3 {
//     font-size: 1.8rem;
//     color: inherit; /* Inherit color from CardFront (theme.text) */
//   }
// `;

const CardBack = styled(CardFace)<{ theme: DefaultTheme }>`
  background: #000000;
  color: #000000;
  transform: rotateY(180deg);
  opacity: 1;
  visibility: visible;

  ul {
    list-style: none;
    padding: 0;
    text-align: left;
    li {
      margin-bottom: 0.5rem;
      color: #000000;
    }
  }
`;

const HoverText = styled(motion.span)<{ $x: number; $y: number }>`
  position: fixed;
  top: ${props => props.$y + 15}px; /* Add small offset from cursor */
  left: ${props => props.$x + 15}px; /* Add small offset from cursor */
  transform: translate(0, 0); /* Remove the -50% transform to keep it closer to cursor */
  font-size: 0.9rem; /* Slightly smaller font */
  color: #ffffff;
  pointer-events: none;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.9);
  padding: 0.3rem 0.6rem; /* Smaller padding */
  border-radius: 4px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = useContext(ThemeContext) as DefaultTheme;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer
      onClick={handleClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <CardInner
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <SpotlightCard 
          className={'front-face-spotlight'}
          style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              background: '#000000',
              color: '#000000',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)',
              zIndex: 2,
          }}
        >
          <div style={{ color: '#ffffff' }}>
            {frontContent}
          </div>
        </SpotlightCard>

        <CardBack>
          <FlipCardContext.Provider value={{ isFlipped }}>
            {backContent}
          </FlipCardContext.Provider>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

// Removed displayName comment

export default FlipCard; 