import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    accent1: string;
    accent2: string;
    cardBackground: string;
  }
}