import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeSection = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ResumeContent = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  background: ${({ theme }) => theme.accent1};
  color: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Resume: React.FC = () => {
  return (
    <ResumeSection>
      <ResumeContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: 'var(--accent1)', fontSize: '2.5rem', marginBottom: '2rem' }}
        >
          Resume
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: 'var(--text)', fontSize: '1.1rem', lineHeight: '1.8' }}
        >
          Download my resume to learn more about my experience and skills.
        </motion.p>
        <DownloadButton
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Download Resume
        </DownloadButton>
      </ResumeContent>
    </ResumeSection>
  );
};

export default Resume; 