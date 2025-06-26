import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import photoshopSVG from '../assets/icons/photoshop.svg';
import illustratorSVG from '../assets/icons/illustrator.svg';
import indesignSVG from '../assets/icons/indesign.svg';
import premiereSVG from '../assets/icons/premiere.svg';
import aftereffectsSVG from '../assets/icons/aftereffects.svg';
import figmaSVG from '../assets/icons/figma.svg';
import { FaHtml5, FaCss3Alt, FaReact, FaWordpress } from 'react-icons/fa';
import { SiMicrosoftword, SiMicrosoftexcel, SiGoogledocs } from 'react-icons/si';

const categories = [
  {
    name: 'Visual Language',
    color: '#31A8FF',
    skills: [
      { name: 'Photoshop', icon: <img src={photoshopSVG} alt="Photoshop" /> },
      { name: 'Illustrator', icon: <img src={illustratorSVG} alt="Illustrator" /> },
      { name: 'InDesign', icon: <img src={indesignSVG} alt="InDesign" /> },
      { name: 'Premiere Pro', icon: <img src={premiereSVG} alt="Premiere Pro" /> },
      { name: 'After Effects', icon: <img src={aftereffectsSVG} alt="After Effects" /> },
      { name: 'Figma', icon: <img src={figmaSVG} alt="Figma" /> },
    ],
  },
  {
    name: 'Productivity',
    color: '#43B02A',
    skills: [
      { name: 'Word', icon: <SiMicrosoftword title="Word" color="#185ABD" /> },
      { name: 'Excel', icon: <SiMicrosoftexcel title="Excel" color="#217346" /> },
      { name: 'Google Docs', icon: <SiGoogledocs title="Google Docs" color="#4285F4" /> },
    ],
  },
  {
    name: 'Web Development',
    color: '#F16529',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 title="HTML5" color="#E44D26" /> },
      { name: 'CSS3', icon: <FaCss3Alt title="CSS3" color="#1572B6" /> },
      { name: 'React', icon: <FaReact title="React" color="#61DAFB" /> },
      { name: 'WordPress', icon: <FaWordpress title="WordPress" color="#21759B" /> },
    ],
  },
];

const float = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.08); }
  100% { transform: translateY(0) scale(1); }
`;

const BubbleCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  min-height: 320px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Bubble = styled(motion.div)<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.3s, z-index 0.3s;
  z-index: 1;
  animation: ${float} 3.5s ease-in-out infinite;
  will-change: transform;
  &:hover, &:focus {
    z-index: 10;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  }
`;

const IconWrap = styled.div`
  font-size: 2.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0 auto 0.2rem auto;
  img {
    width: 44px;
    height: 44px;
    object-fit: contain;
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.12));
  }
`;

const SkillLabel = styled(motion.div)`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-align: center;
  margin-top: 0.2rem;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  white-space: nowrap;
  background: rgba(0,0,0,0.7);
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
`;

const CategoryLabel = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin: 2.5rem 0 1.2rem 0.5rem;
  letter-spacing: 0.02em;
`;

const AnimatedSkillBubbles: React.FC = () => {
  return (
    <div>
      {categories.map((cat) => (
        <div key={cat.name}>
          <CategoryLabel>{cat.name}</CategoryLabel>
          <BubbleCloud>
            {cat.skills.map((skill, i) => (
              <Bubble
                key={skill.name}
                color={cat.color}
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                tabIndex={0}
              >
                <IconWrap>{skill.icon}</IconWrap>
                <SkillLabel
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {skill.name}
                </SkillLabel>
              </Bubble>
            ))}
          </BubbleCloud>
        </div>
      ))}
    </div>
  );
};

export default AnimatedSkillBubbles; 