import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ImageContainer = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  z-index: 1;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  transform: translate(-50%, -50%);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: transparent;
  border: ${({ theme }) => 
    theme.background === '#FEF86A' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
  };
`;

interface HoverImageProps {
  imageUrl: string;
  isVisible: boolean;
  mousePosition: { x: number; y: number };
}

const HoverImage: React.FC<HoverImageProps> = ({ imageUrl, isVisible, mousePosition }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Center the image on the cursor
    setPosition({
      x: mousePosition.x,
      y: mousePosition.y,
    });
  }, [mousePosition]);

  return (
    <AnimatePresence>
      {isVisible && (
        <ImageContainer
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={imageUrl} alt="Profile" />
        </ImageContainer>
      )}
    </AnimatePresence>
  );
};

export default HoverImage; 