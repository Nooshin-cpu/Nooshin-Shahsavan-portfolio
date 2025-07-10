import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  padding: 2rem 0 1.5rem 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
  margin-top: 2rem;
`;

const Email = styled.a`
  color: #222;
  font-size: 1.08rem;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: color 0.18s;
  &:hover {
    color: #b48a3b;
    text-decoration: underline;
  }
`;

export const ClassicFooter: React.FC = () => (
  <footer style={{ width: '100vw', padding: '2rem 0 1.5rem 0', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #eee', marginTop: '2rem' }}>
    <p style={{ color: '#222', fontSize: '0.9rem', fontWeight: 400, margin: 0, lineHeight: 1.5 }}>
      © 2025 NOOSHIN SHAHSAVN | Designed & developed by me using React 🤍
    </p>
  </footer>
);

export const EmailFooter: React.FC = () => (
    <FooterContainer>
    <Email href="mailto:nooshin-shahsavan.ca@gmail.com">nooshin-shahsavan.ca@gmail.com</Email>
    </FooterContainer>
  );