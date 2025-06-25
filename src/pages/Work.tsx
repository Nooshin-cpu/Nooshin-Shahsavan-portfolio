import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FlowingMenu from '../components/FlowingMenu';

// Import work images
import work1 from '../assets/work/work1.png';
import work3 from '../assets/work/work3.png';
import work6 from '../assets/work/work6.png';
import work4 from '../assets/work/work4.png';
import work5 from '../assets/work/work5.png';
  import work7 from '../assets/work/work7.png';
  import workday from '../assets/work/workday.png';

const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #060606;
  position: relative;
  padding: 0;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const WorkSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const WorkGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled(motion(Link))`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.accent1};
  position: relative;
  overflow: hidden;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${({ theme }) => theme.accent2};
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const AnimationContainer = styled(motion.div)`
  width: 100%;
  height: 400px;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  position: relative;
  background: transparent;
  overflow: visible;
  transform: scale(0.8);
  transform-origin: center center;

  @media (max-width: 768px) {
    transform: scale(0.6);
  }
`;

const Work: React.FC = () => {
  const menuItems = [
    { 
      link: '/work/sbs', 
      text: 'SBS Project', 
      image: work1 
    },
    { 
      link: '/work/veen', 
      text: 'Veen Project', 
      image: work3 
    },
    { 
      link: '/work/delicato', 
      text: 'Delicato Project', 
      image: work6 
    },
    { 
      link: '/work/zar', 
      text: 'Zar Project', 
      image: work4
    },
    { 
      link: '/work/workday', 
      text: 'workday-UX/UI', 
      image: 'workday-phone' 
    },
    { 
      link: '/work/project6', 
      text: 'Project Six', 
      image: 'https://picsum.photos/600/400?random=6' 
    },
    { 
      link: '/work/project7', 
      text: 'Project Seven', 
      image: 'https://picsum.photos/600/400?random=7' 
    },
    { 
      link: '/work/project8', 
      text: 'Project Eight', 
      image: 'https://picsum.photos/600/400?random=8' 
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'SBS Project',
      description: 'A comprehensive branding and design project focusing on creating a modern and impactful visual identity.',
      path: '/work/sbs',
    },
    {
      id: 2,
      title: 'Veen Project',
      description: 'A sophisticated branding project creating an elegant and timeless visual identity with premium aesthetics.',
      path: '/work/veen',
    },
    {
      id: 3,
      title: 'Delicato Project',
      description: 'A creative branding and packaging design project emphasizing artisanal craftsmanship and premium quality.',
      path: '/work/delicato',
    },
    {
      id: 4,
      title: 'Zar Project',
      description: 'An innovative branding and digital design project combining contemporary aesthetics with cultural elements.',
      path: '/work/zar',
    }
  ];

  return (
    <>
      <HeroSection>
        <MenuContainer>
          <FlowingMenu items={menuItems} />
        </MenuContainer>
      </HeroSection>

      <WorkSection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: 'var(--accent1)', fontSize: '2.5rem', marginBottom: '2rem' }}
        >
          Featured Projects
        </motion.h2>
        <WorkGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              to={project.path}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectImage />
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectContent>
            </ProjectCard>
          ))}
        </WorkGrid>
      </WorkSection>
    </>
  );
};

export default Work; 