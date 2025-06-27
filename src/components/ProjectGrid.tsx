import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import media files
import veenVideo from '../assets/home/veen-home.mp4';
import veenImage from '../assets/home/veen-home.jpg';
import sbsVideo from '../assets/home/sbs-home.mp4';
import delicatoImage from '../assets/home/deli-home.png';
import zarImage from '../assets/home/zar-home.jpg';

// Import software icons
import photoshopIcon from '../assets/home/photoshop.png';
import illustratorIcon from '../assets/home/illustrator.png';
import aftereffectsIcon from '../assets/home/after-effects.png';
import figmaIcon from '../assets/home/figma.png';
import premiereIcon from '../assets/home/premiere-pro.png';
import indesignIcon from '../assets/home/indesign.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  width: 100%;
  position: relative;
  z-index: 13;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ProjectCard = styled(Link)`
  position: relative;
  aspect-ratio: 16/9;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  min-height: 450px;
  display: block;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const CardMedia = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.8s ease;
  }

  &:hover {
    img, video {
      transform: scale(1.1);
    }
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: #ffffff;
  transform: translateY(0);
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    opacity: 0.9;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const SoftwareColumn = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 70px;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 0;
  z-index: 14;
  border-radius: 0 20px 20px 0;
`;

const SoftwareIconContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SoftwareIcon = styled.img`
  width: 32px;
  height: 32px;
  opacity: 0.9;
  transition: all 0.3s ease;

  ${SoftwareIconContainer}:hover & {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const projects = [
  {
    id: 'veen',
    title: 'Veen',
    subtitle: 'Brand Identity & Design',
    media: {
      type: 'video',
      src: veenVideo,
      poster: veenImage
    },
    path: '/work/veen',
    software: [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Illustrator', icon: illustratorIcon },
      { name: 'Premiere Pro', icon: premiereIcon },
      { name: 'After Effects', icon: aftereffectsIcon },
      { name: 'InDesign', icon: indesignIcon }
    ]
  },
  {
    id: 'sbs',
    title: 'SBS',
    subtitle: 'Brand Strategy & Visual Design',
    media: {
      type: 'video',
      src: sbsVideo,
      poster: sbsVideo // Using first frame as poster
    },
    path: '/work/sbs',
    software: [
      { name: 'Illustrator', icon: illustratorIcon },
      { name: 'Photoshop', icon: photoshopIcon },
      { name: 'After Effects', icon: aftereffectsIcon }
    ]
  },
  {
    id: 'delicato',
    title: 'Delicato',
    subtitle: 'Packaging & Brand Design',
    media: {
      type: 'image',
      src: delicatoImage
    },
    path: '/work/delicato',
    software: [
      { name: 'Photoshop', icon: photoshopIcon },
      { name: 'Illustrator', icon: illustratorIcon },
      { name: 'After Effects', icon: aftereffectsIcon }
    ]
  },
  {
    id: 'zar',
    title: 'Zar',
    subtitle: 'Digital Brand Experience',
    media: {
      type: 'image',
      src: zarImage
    },
    path: '/work/zar',
    software: [
      { name: 'Illustrator', icon: illustratorIcon },
      { name: 'After Effects', icon: aftereffectsIcon },
      { name: 'Photoshop', icon: photoshopIcon }
    ]
  }
];

const ProjectGrid: React.FC = () => {
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(card, 
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <GridContainer>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          to={project.path}
          className="project-card"
          onMouseEnter={() => setHoveredCard(project.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardMedia>
            {project.media.type === 'video' ? (
              <video
                src={project.media.src}
                poster={project.media.poster}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={project.media.src}
                alt={project.title}
              />
            )}
          </CardMedia>
          <CardContent>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </CardContent>
          {hoveredCard === project.id && (
            <SoftwareColumn
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {project.software.map((software) => (
                <SoftwareIconContainer key={software.name}>
                  <SoftwareIcon
                    src={software.icon}
                    alt={software.name}
                  />
                </SoftwareIconContainer>
              ))}
            </SoftwareColumn>
          )}
        </ProjectCard>
      ))}
    </GridContainer>
  );
};

export default ProjectGrid; 