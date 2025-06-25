import { DefaultTheme as StyledDefaultTheme } from 'styled-components';

export interface DefaultTheme extends StyledDefaultTheme {
  background: string;
  backgroundRgb: string;
  text: string;
  textRgb: string;
  accent1: string;
  accent1Rgb: string;
  accent2: string;
  accent2Rgb: string;
  cardBackground: string;
  cardBackgroundRgb: string;
  headerBackground: string;
  transition: string;
  border: string;
  isDarkMode: boolean;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundRgb: string;
    text: string;
    textRgb: string;
    accent1: string;
    accent1Rgb: string;
    accent2: string;
    accent2Rgb: string;
    cardBackground: string;
    cardBackgroundRgb: string;
    headerBackground: string;
    transition: string;
    border: string;
    isDarkMode: boolean;
  }
}

export const lightTheme: DefaultTheme = {
  background: '#FEF86A',
  backgroundRgb: '254, 248, 106',
  text: '#000000',
  textRgb: '0, 0, 0',
  accent1: '#4CAF50',
  accent1Rgb: '76, 175, 80',
  accent2: '#2196F3',
  accent2Rgb: '33, 150, 243',
  cardBackground: '#ffffff',
  cardBackgroundRgb: '255, 255, 255',
  headerBackground: 'rgba(254, 248, 106, 0.9)',
  transition: 'all 0.3s ease',
  border: '#cccccc',
  isDarkMode: false,
};

export const darkTheme: DefaultTheme = {
  background: '#121212',
  backgroundRgb: '18, 18, 18',
  text: '#ffffff',
  textRgb: '255, 255, 255',
  accent1: '#4CAF50',
  accent1Rgb: '76, 175, 80',
  accent2: '#2196F3',
  accent2Rgb: '33, 150, 243',
  cardBackground: '#1a1a1a',
  cardBackgroundRgb: '26, 26, 26',
  headerBackground: 'rgba(18, 18, 18, 0.9)',
  transition: 'all 0.3s ease',
  border: '#444444',
  isDarkMode: true,
}; 