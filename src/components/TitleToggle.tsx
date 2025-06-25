import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ToggleContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const TitleText = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.theme.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.backgroundHover};
  }
`;

interface TitleToggleProps {
  titles: string[];
  onTitleChange?: (title: string) => void;
}

const TitleToggle: React.FC<TitleToggleProps> = ({ titles, onTitleChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (onTitleChange) {
      onTitleChange(titles[currentIndex]);
    }
  }, [currentIndex, titles, onTitleChange]);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % titles.length);
  };

  return (
    <ToggleContainer
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <TitleText
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {titles[currentIndex]}
        </TitleText>
      </AnimatePresence>
    </ToggleContainer>
  );
};

export default TitleToggle; 