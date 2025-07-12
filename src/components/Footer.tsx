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
  
  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem 1rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem 0.8rem 0.8rem;
    margin-top: 1rem;
  }
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
  
  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ClassicFooterContainer = styled.footer`
  width: 100vw;
  padding: 2rem 0 1.5rem 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
  margin-top: 2rem;
  
  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem 1rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem 0.8rem 0.8rem;
    margin-top: 1rem;
  }
`;

const ClassicFooterText = styled.p`
  color: #222;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
  text-align: center;
  
  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ClassicFooter: React.FC = () => (
  <ClassicFooterContainer>
    <ClassicFooterText>
      © 2025 NOOSHIN SHAHSAVN | Designed & developed by me using React 🤍
    </ClassicFooterText>
  </ClassicFooterContainer>
);

export const EmailFooter: React.FC = () => (
    <FooterContainer>
    <Email href="mailto:nooshin-shahsavan.ca@gmail.com">nooshin-shahsavan.ca@gmail.com</Email>
    </FooterContainer>
  );