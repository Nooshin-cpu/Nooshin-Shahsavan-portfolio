import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AudioButton = styled(motion.button)`
  background: linear-gradient(135deg, #36e6ec 0%, #459ea0 100%);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(54, 230, 236, 0.3);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(54, 230, 236, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const AudioIcon = styled.div<{ isPlaying: boolean }>`
  width: 20px;
  height: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 20px;
    background: white;
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 12px solid white;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    transition: all 0.3s ease;
  }

  ${props => props.isPlaying && `
    &::before {
      width: 3px;
      height: 20px;
      animation: audio-wave 1s ease-in-out infinite;
    }

    &::after {
      border-left: 6px solid white;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
    }
  `}

  @keyframes audio-wave {
    0%, 100% { height: 20px; }
    50% { height: 12px; }
  }
`;

const AudioControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SpeedControl = styled.select`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: #36e6ec;
  }

  option {
    background: #191c24;
    color: white;
  }
`;

const VoiceControl = styled.select`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #36e6ec;
  }

  option {
    background: #191c24;
    color: white;
  }
`;

const StatusText = styled.span`
  color: #36e6ec;
  font-size: 0.9rem;
  font-weight: 500;
`;

interface TextToSpeechProps {
  text: string;
  title?: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text, title = "About Me" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [status, setStatus] = useState('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      setIsSupported(true);
      
      // Load available voices
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
        
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
    } else {
      setStatus('Text-to-speech is not supported in this browser');
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
      setStatus('Audio stopped');
    } else {
      // Start playing
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Configure voice settings
      utterance.rate = speed;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      // Use the selected voice
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      // Event handlers
      utterance.onstart = () => {
        setIsPlaying(true);
        setStatus('Reading...');
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setStatus('Finished reading');
      };

      utterance.onerror = (event) => {
        setIsPlaying(false);
        setStatus('Error: ' + event.error);
      };

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    if (isPlaying && speechRef.current) {
      // Restart with new speed
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = newSpeed;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => {
        setIsPlaying(true);
        setStatus('Reading...');
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setStatus('Finished reading');
      };

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isSupported) {
    return (
      <div style={{ color: '#ff6b6b', fontSize: '0.9rem', marginBottom: '1rem' }}>
        Text-to-speech is not supported in this browser
      </div>
    );
  }

  return (
    <AudioControls>
      <AudioButton
        onClick={handlePlayPause}
        disabled={!isSupported}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={isPlaying ? 'Stop audio' : 'Play audio'}
      >
        <AudioIcon isPlaying={isPlaying} />
      </AudioButton>
      
      <VoiceControl 
        value={selectedVoice?.name || ''} 
        onChange={(e) => {
          const voice = voices.find(v => v.name === e.target.value);
          setSelectedVoice(voice || null);
        }}
        disabled={!isSupported || voices.length === 0}
      >
        {voices
          .sort((a, b) => {
            // Prioritize Microsoft Zira
            if (a.name.includes('Microsoft Zira - English (United States)')) return -1;
            if (b.name.includes('Microsoft Zira - English (United States)')) return 1;
            if (a.name.includes('Zira')) return -1;
            if (b.name.includes('Zira')) return 1;
            return 0;
          })
          .map((voice) => {
            // Create cleaner display names
            let displayName = voice.name;
            if (voice.name.includes('Microsoft Zira - English (United States)')) {
              displayName = 'Zira (Female)';
            } else if (voice.name.includes('Zira')) {
              displayName = 'Zira';
            } else if (voice.name.includes('David')) {
              displayName = 'David (Male)';
            } else if (voice.name.includes('Mark')) {
              displayName = 'Mark (Male)';
            } else if (voice.name.includes('Samantha')) {
              displayName = 'Samantha (Female)';
            } else if (voice.name.includes('Victoria')) {
              displayName = 'Victoria (Female)';
            } else if (voice.name.includes('Karen')) {
              displayName = 'Karen (Female)';
            } else if (voice.name.includes('Tessa')) {
              displayName = 'Tessa (Female)';
            } else if (voice.name.includes('Alice')) {
              displayName = 'Alice (Female)';
            } else {
              // For other voices, show a simplified name
              displayName = voice.name.split(' ')[0] + (voice.name.includes('Female') ? ' (Female)' : ' (Male)');
            }
            
            return (
              <option key={voice.name} value={voice.name}>
                {displayName}
              </option>
            );
          })}
      </VoiceControl>
      
      <SpeedControl 
        value={speed} 
        onChange={(e) => handleSpeedChange(Number(e.target.value))}
        disabled={!isSupported}
      >
        <option value={0.5}>0.5x</option>
        <option value={0.75}>0.75x</option>
        <option value={1}>1x</option>
        <option value={1.25}>1.25x</option>
        <option value={1.5}>1.5x</option>
        <option value={2}>2x</option>
      </SpeedControl>
      
      {status && <StatusText>{status}</StatusText>}
    </AudioControls>
  );
};

export default TextToSpeech; 