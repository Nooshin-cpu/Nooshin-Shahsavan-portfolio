import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    --background: ${({ theme }) => theme.background};
    --background-rgb: ${({ theme }) => theme.backgroundRgb};
    --text: ${({ theme }) => theme.text};
    --text-rgb: ${({ theme }) => theme.textRgb};
    --accent1: ${({ theme }) => theme.accent1};
    --accent1-rgb: ${({ theme }) => theme.accent1Rgb};
    --accent2: ${({ theme }) => theme.accent2};
    --accent2-rgb: ${({ theme }) => theme.accent2Rgb};
    --cardBackground: ${({ theme }) => theme.cardBackground};
    --cardBackground-rgb: ${({ theme }) => theme.cardBackgroundRgb};
    --headerBackground: ${({ theme }) => theme.headerBackground};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text);
    transition: ${({ theme }) => theme.transition};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: var(--background);
  }

  section {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: 'Inter', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container for consistent width */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Responsive breakpoints */
  @media (max-width: 768px) {
    .container {
      padding: 0 0.5rem;
    }
  }
`; 