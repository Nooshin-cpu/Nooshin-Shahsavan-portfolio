import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: transparent; // No background for the image container itself
  padding: 5px; // Further reduced padding
  border-radius: 8px;
  /* Set a fixed max size around 200px for the image container */
  max-width: 220px; /* Slightly larger than image size to account for padding/border */
  max-height: 220px; /* Slightly larger than image size */
  width: auto;
  height: auto;
  overflow: hidden;
  position: relative;

  /* Ensure it doesn't get too large on any screen */
  @media (min-width: 768px) {
     max-width: 220px;
     max-height: 220px;
  }
`;

const ModalImage = styled.img`
  display: block;
  max-width: 100%; /* Image scales within the container */
  max-height: 100%; /* Image scales within the container */
  object-fit: contain; /* Ensures the whole image is visible */
  border-radius: 4px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 20px; /* Slightly smaller button */
  height: 20px; /* Slightly smaller button */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem; /* Slightly smaller font */
  font-weight: bold;
  color: #333;
  z-index: 1010;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={e => e.stopPropagation()}
          >
            <ModalImage src={imageUrl} alt="User Photo" />
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default ImageModal; 