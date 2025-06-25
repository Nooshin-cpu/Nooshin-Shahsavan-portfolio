import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { GlobalStyles } from '../styles/GlobalStyles';

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  padding-top: 80px; // Account for fixed header
  background-color: var(--background);
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};

export default Layout; 