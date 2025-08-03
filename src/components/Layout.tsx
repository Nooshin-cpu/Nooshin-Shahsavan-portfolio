import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA0LTEwVDE1OjU2OjQ3KzA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgc3RFdnQ6d2hlbj0iMjAyNC0wNC0xMFQxNTo1Njo0NyswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FAZTgBw54cr/upn/vCptEQA0xCMxM4ZGxI9cmQcA5sJgCsBJTjiletnMD6MqAFmyI04+Hbo7cQ8A0GYMpgDM2cxJ1cvi+Fuql4X3VAFYmP0xPYL+KKZHUSdDAYAkDKYANMzMadXL4vgTAIZVgPw5NoS+8cOboQBAlhlMAUjulBOrJ46sAGTXjojYHcffCn3SiVAAoB0YTAFoKSeMq8d+rArvrALUyyMxPYLuDiMoAJBTBlMA2trMswAXx/Tp1SVxfGj1NADQ7k68Cv96TA+gL/hIEgDA2RlMAeAUJ4ysl0XEQEy/vzoQngkA0nlh5ofxEwCgwQymAFAnJzwXcGxwXXXCf784YRqQDcdGz2NX3o/9d9feAQAyxGAKABlxwuAaMf2EQMz88ZIwukJqx8bO12P6lGfE9CnPCIMnAEBbMZgCQBs6ZXw99rRAxPTzAhGeGKD97YiIYyPmj2b+czSOj52uswMAcFoGUwBgzsql6okj7JI4eXw9dir2xD/2kS0ijn+E6JjXT/njY1fUIyJiaHjw4QAAgCYzmAIALa9cqq4/y18+21875tSRd66uWsA/e6JHFvDPnjo+nskZR0gDJQAARPz/FWHRF6/F5pIAAAAASUVORK5CYII=" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};

export default Layout; 