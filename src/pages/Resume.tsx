import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

// ─── Styled Components ────────────────────────────────────────────────────────
const PageWrap = styled.section`
  padding: 4rem 2rem 6rem;
  max-width: 860px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 18px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.07);
  padding: 3rem 3.5rem;
  @media (max-width: 600px) { padding: 2rem 1.4rem; }
`;

const Name = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900;
  color: #0d0d0d;
  letter-spacing: -0.03em;
  margin: 0 0 0.3rem;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #555;
  margin: 0 0 0.2rem;
`;

const SubTitle = styled.p`
  font-size: 0.88rem;
  color: #888;
  margin: 0 0 0.6rem;
`;

const ContactLine = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 2rem;
  line-height: 1.6;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ebebeb;
  margin: 1.8rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #0d0d0d;
  margin: 0 0 1rem;
`;

const Body = styled.p`
  font-size: 0.92rem;
  color: #444;
  line-height: 1.78;
  margin: 0 0 0.8rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 0.6rem;
`;

const SkillLabel = styled.span`
  font-size: 0.82rem;
  font-weight: 700;
  color: #111;
`;

const SkillText = styled.span`
  font-size: 0.82rem;
  color: #555;
`;

const JobBlock = styled.div`
  margin-bottom: 1.8rem;
`;

const JobTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: #0d0d0d;
  margin: 0 0 0.15rem;
`;

const JobMeta = styled.p`
  font-size: 0.8rem;
  color: #888;
  margin: 0 0 0.6rem;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Bullet = styled.li`
  font-size: 0.88rem;
  color: #444;
  line-height: 1.65;
`;

const DownloadBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  background: #0d0d0d;
  color: #fff;
  padding: 0.75rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: background 0.2s;
  &:hover { background: #333; }
`;

// ─── Component ────────────────────────────────────────────────────────────────
const Resume: React.FC = () => (
  <PageWrap>
    <SEO
      title="Resume | Nooshin Shahsavan – Graphic Designer & Visual Content Creator"
      description="Professional resume of Nooshin Shahsavan — Graphic Designer, Visual Content Creator, Photographer and Videographer based in Vancouver, BC."
      keywords="resume, CV, Nooshin Shahsavan, graphic designer, photographer, videographer, marketing design, motion graphics"
      image="/src/assets/logoweb.png"
    />

    <Card
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Header ── */}
      <Name>Nooshin Shahsavan</Name>
      <Title>Graphic Designer | Visual Content Creator</Title>
      <SubTitle>Marketing Design · Photography · Videography · Motion Graphics</SubTitle>
      <ContactLine>
        Vancouver, BC &nbsp;|&nbsp; 604-500-5515 &nbsp;|&nbsp; sn.shahsavan@gmail.com
      </ContactLine>

      <Divider />

      {/* ── Summary ── */}
      <SectionTitle>Professional Summary</SectionTitle>
      <Body>
        Creative Graphic Designer and Visual Content Creator with 5+ years of experience producing
        integrated marketing content across digital, print, social media, photography, and video.
        Experienced collaborating with marketing teams to deliver engaging, brand-consistent campaigns
        while capturing professional photography and videography using DSLR cameras for promotional
        campaigns, events, and branded content. Skilled in Adobe Creative Suite, visual storytelling,
        branding, motion graphics, and content production, with a proven ability to manage multiple
        projects and deliver creative solutions in fast-paced environments.
      </Body>

      <Divider />

      {/* ── Skills ── */}
      <SectionTitle>Technical &amp; Creative Skills</SectionTitle>
      <SkillCategory>
        <SkillLabel>Creative: </SkillLabel>
        <SkillText>Graphic Design, Brand Identity, Marketing Campaign Design, Visual Storytelling, Typography, Layout Design, Print Production, Motion Graphics</SkillText>
      </SkillCategory>
      <SkillCategory>
        <SkillLabel>Photography &amp; Video: </SkillLabel>
        <SkillText>DSLR Photography, Product Photography, Portrait Photography, Family Photography, Event Photography, Event Videography, Photo Editing, Video Production, Video Editing</SkillText>
      </SkillCategory>
      <SkillCategory>
        <SkillLabel>Marketing: </SkillLabel>
        <SkillText>Content Creation, Social Media Marketing, Email Marketing, Digital Marketing, Brand Consistency, Basic SEO, Content Management Systems (CMS)</SkillText>
      </SkillCategory>
      <SkillCategory>
        <SkillLabel>Software: </SkillLabel>
        <SkillText>Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom, Figma, Canva, CapCut, WordPress, Webflow</SkillText>
      </SkillCategory>

      <Divider />

      {/* ── Experience ── */}
      <SectionTitle>Professional Experience</SectionTitle>

      <JobBlock>
        <JobTitle>Freelance Graphic Designer — British Columbia Institute of Technology (BCIT)</JobTitle>
        <JobMeta>December 2025 – Present</JobMeta>
        <BulletList>
          <Bullet>Lead the visual design of BCIT marketing campaigns by creating posters, flyers, digital signage, social media graphics, stickers, and promotional materials across print and digital platforms.</Bullet>
          <Bullet>Produce engaging marketing videos and motion graphics that support awareness campaigns and increase audience engagement.</Bullet>
          <Bullet>Partner with stakeholders to develop cohesive visual communications while maintaining BCIT brand standards.</Bullet>
        </BulletList>
      </JobBlock>

      <JobBlock>
        <JobTitle>Graphic Designer &amp; Marketing Assistant — Genomii.ai</JobTitle>
        <JobMeta>Vancouver, BC &nbsp;|&nbsp; March 2026 – June 2026</JobMeta>
        <BulletList>
          <Bullet>Designed integrated marketing assets including social media graphics, promotional materials, email campaigns, presentations, and branded content aligned with campaign objectives.</Bullet>
          <Bullet>Produced and edited engaging photo and video content using DSLR cameras, Adobe Premiere Pro, After Effects, and CapCut for digital marketing initiatives.</Bullet>
          <Bullet>Developed motion graphics, AI-assisted animations, and visual assets that increased audience engagement across digital platforms.</Bullet>
          <Bullet>Collaborated with marketing team members to maintain brand consistency while successfully managing multiple creative projects in a fast-paced environment.</Bullet>
        </BulletList>
      </JobBlock>

      <JobBlock>
        <JobTitle>Graphic Design Intern – Marketing Team — British Columbia Institute of Technology (BCIT)</JobTitle>
        <JobMeta>August 2025 – November 2025</JobMeta>
        <BulletList>
          <Bullet>Designed creative assets including LinkedIn videos, email banners, event invitations, digital signage, social media graphics, Christmas campaigns, and print collateral.</Bullet>
          <Bullet>Assisted with photography and video production for marketing campaigns, promotional content, and campus events.</Bullet>
          <Bullet>Collaborated with the marketing team to support integrated campaigns across digital, print, web, and email while ensuring consistent brand identity.</Bullet>
        </BulletList>
      </JobBlock>

      <JobBlock>
        <JobTitle>Graphic Designer, Photographer &amp; Visual Content Creator — SBS Clothing &amp; VEEN Studio</JobTitle>
        <JobMeta>Vancouver, BC &nbsp;|&nbsp; 2023 – 2024</JobMeta>
        <BulletList>
          <Bullet>Collaborated with local businesses to develop brand identities and create marketing assets for digital, print, and social media campaigns.</Bullet>
          <Bullet>Planned and executed product, portrait, family, and event photography using DSLR cameras, producing professional visual content for branding and promotional campaigns.</Bullet>
          <Bullet>Captured and edited promotional videos, behind-the-scenes content, Instagram Reels, and short-form social media videos using Adobe Premiere Pro, After Effects, and CapCut.</Bullet>
          <Bullet>Managed projects from concept development through final delivery while working directly with clients to achieve their marketing and branding objectives.</Bullet>
        </BulletList>
      </JobBlock>

      <JobBlock>
        <JobTitle>Graphic Designer — G_ART Collection</JobTitle>
        <JobMeta>Tehran, Iran &nbsp;|&nbsp; 2018 – 2022</JobMeta>
        <BulletList>
          <Bullet>Developed brand identities, product packaging, marketing collateral, and promotional materials across digital and print platforms.</Bullet>
          <Bullet>Designed advertising graphics and social media content that strengthened brand visibility and customer engagement.</Bullet>
          <Bullet>Prepared production-ready artwork while collaborating with marketing and production teams to ensure quality and brand consistency.</Bullet>
        </BulletList>
      </JobBlock>

      <JobBlock>
        <JobTitle>Computer Graphics Instructor</JobTitle>
        <JobMeta>2018 – 2023</JobMeta>
        <BulletList>
          <Bullet>Delivered practical instruction in Adobe Creative Suite, branding, typography, composition, colour theory, and visual communication.</Bullet>
          <Bullet>Mentored students through hands-on creative projects while strengthening design thinking and technical skills.</Bullet>
          <Bullet>Recognized with the Outstanding Instructor Award from the Ministry of Education (2022).</Bullet>
        </BulletList>
      </JobBlock>

      <Divider />

      {/* ── Education ── */}
      <SectionTitle>Education</SectionTitle>
      <JobBlock>
        <JobTitle>New Media Design &amp; Web Development Diploma</JobTitle>
        <JobMeta>British Columbia Institute of Technology (BCIT), 2025</JobMeta>
      </JobBlock>
      <JobBlock>
        <JobTitle>Master of Art Research</JobTitle>
      </JobBlock>
      <JobBlock>
        <JobTitle>Bachelor of Visual Communication</JobTitle>
      </JobBlock>

      <Divider />

      {/* ── Achievements ── */}
      <SectionTitle>Achievements</SectionTitle>
      <BulletList>
        <Bullet>Outstanding Instructor Award — Ministry of Education (2022)</Bullet>
        <Bullet>Increased BCIT Energy Awareness Campaign engagement by 40%</Bullet>
        <Bullet>Experience delivering integrated marketing campaigns across digital, print, photography, video, and social media.</Bullet>
      </BulletList>

      <DownloadBtn
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Download Full Resume (PDF)
      </DownloadBtn>
    </Card>
  </PageWrap>
);

export default Resume;
