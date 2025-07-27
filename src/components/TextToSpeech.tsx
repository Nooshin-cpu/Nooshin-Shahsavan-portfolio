import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AudioButton = styled(motion.button)<{ $isPlaying: boolean }>`
  position: relative;
  background: ${({ $isPlaying }) => $isPlaying ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${({ $isPlaying }) => $isPlaying ? '#000000' : '#ffffff'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  cursor: pointer;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({ $isPlaying }) => $isPlaying 
    ? '0 8px 32px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
    : '0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)'
  };
  margin-bottom: 1rem;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const AudioIcon = styled.div<{ $isPlaying: boolean }>`
  font-size: 1.45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => props.$isPlaying && `
    animation: pulse 1s ease-in-out infinite;
  `}

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;





interface TextToSpeechProps {
  text: string;
  title?: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text, title = "About Me" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      setIsSupported(true);
      
      // Load available voices and select the best female voice
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        
        // Auto-select Microsoft Zira as the preferred female voice
        const preferredVoice = availableVoices.find(voice => 
          voice.name.includes('Microsoft Zira - English (United States)')
        );
        
        // Fallback to any Zira voice if the specific one isn't found
        const ziraVoice = availableVoices.find(voice => 
          voice.name.includes('Zira')
        );
        
        // Fallback to any female voice
        const femaleVoice = availableVoices.find(voice => 
          voice.name.includes('female') || 
          voice.name.includes('Female') ||
          voice.name.includes('Samantha') ||
          voice.name.includes('Victoria') ||
          voice.name.includes('Karen') ||
          voice.name.includes('Tessa') ||
          voice.name.includes('Alice')
        );
        
        if (preferredVoice) {
          setSelectedVoice(preferredVoice);
        } else if (ziraVoice) {
          setSelectedVoice(ziraVoice);
        } else if (femaleVoice) {
          setSelectedVoice(femaleVoice);
        } else if (availableVoices.length > 0) {
          setSelectedVoice(availableVoices[0]);
        }
      };
      
      // Load voices immediately if available
      loadVoices();
      
      // Also listen for voices to load (some browsers load them asynchronously)
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!isSupported) return;

    if (isPlaying) {
      // Stop playing
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // Start playing
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Configure voice settings
      utterance.rate = 1; // Fixed speed at 1x
      utterance.pitch = 1;
      utterance.volume = 1;
      
      // Use the selected voice
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      // Event handlers
      utterance.onstart = () => {
        setIsPlaying(true);
      };

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };



  return (
    <AudioButton
      $isPlaying={isPlaying}
      onClick={handlePlayPause}
      disabled={!isSupported}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isPlaying ? 'Stop audio' : 'Play audio'}
    >
      <AudioIcon $isPlaying={isPlaying}>
        {isPlaying ? '❚❚' : '▶'}
      </AudioIcon>
    </AudioButton>
  );
};

export default TextToSpeech; 