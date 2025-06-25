import React, { createContext, useContext } from 'react';

interface FlipCardContextType {
  isFlipped: boolean;
}

export const FlipCardContext = createContext<FlipCardContextType | undefined>(undefined);

export const useFlipCardContext = () => {
  const context = useContext(FlipCardContext);
  if (context === undefined) {
    throw new Error('useFlipCardContext must be used within a FlipCardContext.Provider');
  }
  return context;
}; 