import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

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

const ResumeText = styled.div`
  color: var(--text);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const Resume: React.FC = () => {
  return (
    <ResumeSection>
      <SEO 
        title="Resume | Nooshin Shahsavan - Professional Experience"
        description="View Nooshin Shahsavan's professional resume and experience in graphic design, brand design, and UX/UI design. Download CV and view qualifications."
        keywords="resume, CV, Nooshin Shahsavan, graphic designer, professional experience, qualifications, skills"
        image="/src/assets/logoweb.png"
      />
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
        
        <ResumeText>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 style={{ color: 'var(--accent1)', marginBottom: '0.5rem', fontSize: '2rem' }}>Nooshin Shahsavan</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text)', fontSize: '1rem' }}>
              <strong>Graphic Designer – Creative | Detail Oriented | Marketing-social media</strong><br/>
              Vancouver, BC | 604.500.5515 | Nooshin.shahsavan.ca@.com
            </p>
            
            <h4 style={{ color: 'var(--accent1)', marginBottom: '0.5rem', marginTop: '2rem' }}>PROFILE SUMMARY</h4>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Creative and detail-oriented Graphic Designer with over 3 years of experience producing high-quality print and digital assets. Skilled in layout production, file preparation, proofing, and managing multi-version (zoning) marketing materials to ensure accuracy and brand consistency. Proficient in Adobe Creative Suite (InDesign, Illustrator, Photoshop, Acrobat) and Figma, with a strong eye for typography and visual consistency. Experienced collaborating with cross-functional teams—including marketing, photography, merchandising, and external vendors—to deliver final print- and digital-ready files on time.
            </p>
            
            <h4 style={{ color: 'var(--accent1)', marginBottom: '0.5rem' }}>SKILLS</h4>
            <ul style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              <li>Adobe InDesign, Illustrator, Photoshop, Acrobat</li>
              <li>Print Production & File Preparation</li>
              <li>Layout Design & Typography</li>
              <li>Proofing & Versioning (Zoning)</li>
              <li>Digital Media & Branding</li>
              <li>Motion Graphics (Adobe After Effects)</li>
              <li>Time Management & Multitasking</li>
              <li>Collaboration & Communication</li>
              <li>Attention to Detail & Accuracy</li>
            </ul>
            
            <h4 style={{ color: 'var(--accent1)', marginBottom: '0.5rem' }}>RELEVANT WORK EXPERIENCE</h4>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Freelance Graphic Designer</strong> | Self-employed | Apr 2023 - Present
              </p>
              <ul style={{ marginLeft: '1rem', lineHeight: '1.6' }}>
                <li>Produced digital and print-ready layouts for marketing materials, including social media ads, banners, and branded assets.</li>
                <li>Designed infographics, motion graphics (Adobe After Effects), and promotional visuals, contributing to a 50% increase in engagement for clients.</li>
                <li>Ensured accuracy and visual consistency across multiple versions and formats of deliverables.</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Graphic Designer</strong> | GART brand | Apr 2018 – Jun 2022
              </p>
              <ul style={{ marginLeft: '1rem', lineHeight: '1.6' }}>
                <li>Designed brochures, catalogs, and promotional print materials aligned with brand guidelines using Adobe InDesign, Illustrator, and Photoshop.</li>
                <li>Managed layout production and final file preparation for international exhibitions and digital marketing campaigns.</li>
                <li>Served as a final checkpoint for creative outputs, proofing marketing materials and verifying accuracy of zoning (multi-version) documents.</li>
                <li>Liaised closely with marketing, photography, merchandising teams, and external vendors to produce print- and digital-ready files on time.</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Computer Graphic Teacher</strong> | Parvin Etesami Art School | Sep 2012 – Jun 2022
              </p>
              <ul style={{ marginLeft: '1rem', lineHeight: '1.6' }}>
                <li>Instructed students on Adobe Photoshop, Illustrator, After Effects, and Figma with emphasis on practical design and production skills.</li>
                <li>Developed lesson plans, provided individual mentorship, and assessed student projects to support creative growth.</li>
              </ul>
            </div>
            
            <h4 style={{ color: 'var(--accent1)', marginBottom: '0.5rem' }}>EDUCATION</h4>
            <ul style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              <li><strong>New Media Design Diploma</strong> | BCIT, Downtown, BC | May 2025</li>
              <li><strong>Master's degree in art research</strong> | Azad University, Tehran, Iran | Feb 2014</li>
              <li><strong>Bachelor's degree in visual communication</strong> | Kamalolmolk, Noshahr, Iran | Feb 2011</li>
            </ul>
          </motion.div>
        </ResumeText>
        
        <DownloadButton
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Download Full Resume (PDF)
        </DownloadButton>
      </ResumeContent>
    </ResumeSection>
  );
};

export default Resume; 