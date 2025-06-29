import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background: #191c24;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 10;
  position: relative;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2025 NOOSHIN SHAHSAVN | Designed & developed by me using React 🩵
      </FooterText>
    </FooterContainer>
  );
};

export default Footer; 