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
  }
}

export const normalTheme: DefaultTheme = {
  background: '#191c24',
  backgroundRgb: '25, 28, 36',
  text: '#ffffff',
  textRgb: '255, 255, 255',
  accent1: '#4CAF50',
  accent1Rgb: '76, 175, 80',
  accent2: '#2196F3',
  accent2Rgb: '33, 150, 243',
  cardBackground: '#2a2f3a',
  cardBackgroundRgb: '42, 47, 58',
  headerBackground: 'rgba(25, 28, 36, 0.9)',
  transition: 'all 0.3s ease',
  border: '#3a3f4a',
}; 