import React, { useRef, useState, useContext, useCallback } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import DotGrid from '../components/DotGrid.tsx';




import ProjectGrid from '../components/ProjectGrid';
import { DefaultTheme } from '../styles/theme';
import RecentWorks from '../components/RecentWorks';
import StickyMenu from '../components/StickyMenu';
import Cactus2 from '../components/Cactus2';
// import Footer from '../components/Footer'; // Not used, ClassicFooter is used below
import HeaderRecentWork from '../components/HeaderRecentWork';
import MenuProjects from '../components/MenuProjects';
import UxHome from '../components/UxHome';
import FunHome from '../components/FunHome';
import { ClassicFooter } from '../components/Footer';
import RotatingText from '../components/RotatingText';


// Styled-components
const PageWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: #191c24;
  position: relative;
`;

const StickyMenuContainer = styled.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  
  @media (max-width: 768px) {
    left: 1rem;
    top: auto;
    bottom: 2rem;
    transform: none;
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #191c24;
  position: relative;
  padding-top: 80px;
`;

const HeroOverlay = styled.div<{ $isBlurred: boolean }>`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  z-index: 1;
  pointer-events: none;
  backdrop-filter: ${({ $isBlurred }) => $isBlurred ? 'blur(4px)' : 'none'};
  transition: backdrop-filter 0.3s ease;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
  z-index: 3;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`;

const NameAndRolesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  z-index: 3;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const NameContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 3;
`;

const NamePopup = styled(motion.div)<{ $x: number; $y: number }>`
  position: fixed;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  z-index: 9999;
  pointer-events: none;
  background: transparent;
`;

const StyledNameText = styled(RotatingText)`
  font-weight: 900;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  color: #ffffff;
  line-height: 1.1;
  position: relative;
  z-index: 3;
  cursor: pointer;
  margin-bottom: 0.5em;

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 5vw, 3rem);
  }
`;

const AnimatedRolesContainer = styled(motion.div)`
  position: relative;
  display: inline-block;
  padding: 1.2rem 2.2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.32);
  transition: all 0.3s ease;
  min-width: 220px;
  text-align: left;
  z-index: 3;
  margin-top: 1.2rem;

  & > * {
    font-size: 2rem !important;
    line-height: 1.2;
    font-weight: 600;
    text-align: center;
    color: #e0e0e0;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.38);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    min-width: 180px;
    margin-top: 1rem;

    & > * {
      font-size: 1.5rem !important;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    min-width: 160px;

    & > * {
      font-size: 1.3rem !important;
    }
  }
`;

const ProjectsSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem 0;
  background: #191c24;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`;

const FallingTextSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #191c24;
  position: relative;
  z-index: 5;
  padding: 4rem 0;
`;

const FallingTextContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 6;
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 11;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4CAF50;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 12;
`;

const CactusSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #191c24;
  position: relative;
  z-index: 5;
  padding: 4rem 0;
`;

const Home: React.FC = () => {
  const theme = useContext(ThemeContext) as DefaultTheme;
  const dotGridRef = useRef<{ triggerShockwave: (pageX: number, pageY: number) => void }>(null);
  const rolesTextRef = useRef<HTMLDivElement>(null);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringName, setIsHoveringName] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<'branding' | 'uxui' | 'funproj'>('branding');

  // Debounced hide for popup to avoid flicker
  const hoverTimeout = useRef<number | null>(null);

  const roles = ['Graphic designer', 'Brand designer', 'UX/UI designer'];
  const name = ['NOOSHIN SHAHSAVAN!'];

  // Define menu items for StickyMenu
  const menuItems = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "work", name: "Work" },
    { id: "contact", name: "Contact" }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleNameMouseMove = (e: React.MouseEvent) => {
    if (isHoveringName) setPopupPosition({ x: e.clientX, y: e.clientY });
  };

  const handleNameMouseEnter = (e: React.MouseEvent) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHoveringName(true);
    setPopupPosition({ x: e.clientX, y: e.clientY });
  };

  const handleNameMouseLeave = () => {
    // Debounce to prevent flicker
    hoverTimeout.current = window.setTimeout(() => setIsHoveringName(false), 100);
  };

  const handleRolesTextChange = useCallback(() => {
    if (dotGridRef.current && rolesTextRef.current) {
      const rect = rolesTextRef.current.getBoundingClientRect();
      const pageX = rect.left + rect.width / 2 + window.scrollX;
      const pageY = rect.top + rect.height / 2 + window.scrollY;
      dotGridRef.current.triggerShockwave(pageX, pageY);
    }
  }, []);

  return (
    <PageWrapper>
      <StickyMenuContainer>
        <StickyMenu />
      </StickyMenuContainer>
      
      <HeroSection onMouseMove={handleMouseMove}>
        <DotGrid
          ref={dotGridRef}
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%', zIndex: 0,
          }}
          dotSize={5}
          gap={15}
          baseColor="#ffffff"
          activeColor="#4CAF50"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          maxSpeed={5000}
          speedTrigger={100}
        />
        <HeroOverlay $isBlurred={isHoveringText} />
        <HeroContent>
          <LeftContent>
            <NameAndRolesContainer>
              <NameContainer
                onMouseEnter={handleNameMouseEnter}
                onMouseLeave={handleNameMouseLeave}
                onMouseMove={handleNameMouseMove}
              >
                <StyledNameText
                  texts={name}
                  onTextChange={handleRolesTextChange}
                />
                {/* Removed NamePopup to eliminate transparent square on hover */}
              </NameContainer>
              <AnimatedRolesContainer
                ref={rolesTextRef}
              >
                <RotatingText
                  texts={roles}
                  onTextChange={handleRolesTextChange}
                  auto={true}
                  rotationInterval={3000}
                  staggerDuration={0.1}
                  staggerFrom="center"
                />
              </AnimatedRolesContainer>
            </NameAndRolesContainer>
          </LeftContent>
          <RightContent>
            {/* Removed HoverImage on name hover as requested */}
          </RightContent>
        </HeroContent>
      </HeroSection>

  
    
      <MenuProjects selected={selectedProject} onSelect={setSelectedProject} />
      <HeaderRecentWork text="Recent Projects" />
      {selectedProject === 'branding' && <RecentWorks />}
      {selectedProject === 'uxui' && <UxHome setSelectedProject={setSelectedProject} />}
      {selectedProject === 'funproj' && <FunHome setSelectedProject={setSelectedProject} />}
      <CactusSection>
        <Cactus2 />
      </CactusSection>
      <ClassicFooter />
    </PageWrapper>
  );
};

export default Home;