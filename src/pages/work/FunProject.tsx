import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import SEO from '../../components/SEO';
import TopScrollButton from '../../components/TopScrollButton';
import { EmailFooter } from '../../components/Footer';
import FunProjectStickyMenu from '../../components/FunProjectStickyMenu';

// Import all project assets
import videoSrc from '../../assets/fun/straw1.MP4';
import funhome from '../../assets/fun/funhome.jpg';
import straw3 from '../../assets/fun/straw3.png';
import straw4 from '../../assets/fun/straw4.jpg';
import straw5 from '../../assets/fun/straw5.png';
import g4 from '../../assets/fun/g4.jpg';
import g2 from '../../assets/fun/g2.jpg';
import g1 from '../../assets/fun/g1.png';
import p1 from '../../assets/fun/p1.png';
import p2 from '../../assets/fun/p2.jpg';
import g3 from '../../assets/fun/g3.png';
import vrVideo from '../../assets/fun/vr.mp4';
import animation2dVideo from '../../assets/fun/2D.mp4';
import CustomVideoPlayer from '../../components/CustomVideoPlayer';
import LazyVideo from '../../components/LazyVideo';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const PageBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-top: 60px;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }
  html {
    overflow-x: hidden;
  }
`;

const SectionTitle = styled.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #181818;
  margin: 3rem 0 2rem 0;
  letter-spacing: -1.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 2px;
  }
`;

const ProjectSection = styled.section`
  width: 100vw;
  min-height: auto;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 40px 0;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 900px) {
    padding: 40px 0 30px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0 20px 0;
  }
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #181818 0%, #374151 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: -2px;
  text-align: center;
  animation: ${scaleIn} 1s ease-out;
  
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const MainDescription = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 4rem;
  text-align: center;
  line-height: 1.7;
  max-width: 700px;
  font-weight: 400;
  
  @media (max-width: 900px) {
    font-size: 1.1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const CategoryDescription = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  font-weight: 500;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  text-align: center;
  
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

// Modern Asymmetrical Grid
const ModernGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 0 0.8rem;
  }
`;

const ModernCard = styled.div<{ 
  gridArea: string; 
  aspectRatio?: string;
  category?: string;
}>`
  grid-area: ${props => props.gridArea};
  aspect-ratio: ${props => props.aspectRatio || '1/1'};
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => {
    const delays = ['0s', '1s', '2s', '3s', '4s', '5s'];
    return delays[Math.floor(Math.random() * delays.length)];
  }};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${props => {
        const colors = {
          photography: 'rgba(239, 68, 68, 0.1)',
          illustrations: 'rgba(59, 130, 246, 0.1)',
          arvr: 'rgba(139, 92, 246, 0.1)',
          animation: 'rgba(16, 185, 129, 0.1)'
        };
        return colors[props.category as keyof typeof colors] || 'rgba(0, 0, 0, 0.05)';
      }}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    img, video {
      transform: scale(1.08);
    }
  }
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  
  @media (max-width: 600px) {
    border-radius: 20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-6px) scale(1.02);
    }
  }
`;

const VideoCard = styled(ModernCard)`
  &::after {
    content: '▶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const IllustrationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.8rem;
  }
`;

const IllustrationCard = styled(ModernCard)`
  aspect-ratio: 1/1.3;
  position: relative;
  z-index: 10;
  
  &::after {
    content: '${props => props.category === 'before' ? 'Before' : props.category === 'after' ? 'After' : ''}';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    z-index: 2;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    border-radius: 0;
    transform: none;
    box-shadow: none;
    
    &::before {
      opacity: 0;
    }
    
    &::after {
      opacity: 1;
      top: 30px;
    }
    
    img {
      object-fit: contain;
      transform: none;
    }
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  animation: ${float} 6s ease-in-out infinite;
  
  @media (max-width: 900px) {
    max-width: 98vw;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    border-radius: 16px;
  }
`;

const FunProject = () => (
  <>
    <PageBg>
      <SEO 
        title="School Projects | Nooshin Shahsavan - Creative Portfolio"
        description="Explore Nooshin Shahsavan's school projects featuring photography, illustrations, AR/VR experiences, and 2D animations showcasing creative skills and innovative design thinking."
        keywords="school projects, photography, illustrations, AR/VR, 2D animation, creative portfolio, Nooshin Shahsavan, design projects"
        image="/src/assets/fun/funhome.jpg"
      />
      <GlobalStyle />
      <FunProjectStickyMenu />
      
      {/* Main Overview Section */}
      <ProjectSection>
        <MainTitle>School Projects</MainTitle>
        <MainDescription>
          These are all school projects that showcase my interests and creative work. I'm excited to share some of my favorite pieces with you.
        </MainDescription>
      </ProjectSection>
      
      {/* Photography Section */}
      <ProjectSection id="fun-photography">
        <SectionTitle>Photography</SectionTitle>
        <CategoryDescription>
          Exploring the art of visual storytelling through photography, capturing moments and creating compelling narratives.
        </CategoryDescription>
        <ModernGrid>
          <VideoCard gridArea="1 / 2 / 3 / 5" aspectRatio="1/1.4" category="photography">
            <LazyVideo
              src={videoSrc}
              controls
              controlsList="nodownload"
              objectFit="cover"
              style={{ width: '100%', height: '100%' }}
              aria-label="Photography showcase video"
            />
          </VideoCard>
          <ModernCard gridArea="1 / 5 / 3 / 8" aspectRatio="1/1.4" category="photography">
            <img src={funhome} alt="Photography 1" />
          </ModernCard>
          <ModernCard gridArea="3 / 1 / 4 / 3" aspectRatio="2/1" category="photography">
            <img src={funhome} alt="Photography 2" />
          </ModernCard>
          <ModernCard gridArea="3 / 3 / 4 / 5" aspectRatio="2/1" category="photography">
            <img src={straw3} alt="Photography 3" />
          </ModernCard>
          <ModernCard gridArea="3 / 5 / 4 / 7" aspectRatio="2/1" category="photography">
            <img src={straw4} alt="Photography 4" />
          </ModernCard>
          <ModernCard gridArea="3 / 7 / 4 / 9" aspectRatio="2/1" category="photography">
            <img src={straw5} alt="Photography 5" />
          </ModernCard>
        </ModernGrid>
      </ProjectSection>
      
      {/* Illustrations Section */}
      <ProjectSection id="fun-illustrations">
        <SectionTitle>Illustrations & Graphics</SectionTitle>
        <CategoryDescription>
          Creative illustrations and graphic design work showcasing artistic skills and visual communication.
        </CategoryDescription>
        <IllustrationGrid>
          <IllustrationCard gridArea="1 / 1 / 2 / 2" category="illustrations">
            <img src={g4} alt="Illustration 1" />
          </IllustrationCard>
          <IllustrationCard gridArea="1 / 2 / 2 / 3" category="illustrations">
            <img src={g3} alt="Illustration 2" />
          </IllustrationCard>
          <IllustrationCard gridArea="1 / 3 / 2 / 4" category="illustrations">
            <img src={g1} alt="Illustration 3" />
          </IllustrationCard>
          <IllustrationCard gridArea="1 / 4 / 2 / 5" category="illustrations">
            <img src={g2} alt="Illustration 4" />
          </IllustrationCard>
          <IllustrationCard gridArea="2 / 2 / 3 / 3" category="before">
            <img src={p2} alt="Before" />
          </IllustrationCard>
          <IllustrationCard gridArea="2 / 3 / 3 / 4" category="after">
            <img src={p1} alt="After" />
          </IllustrationCard>
        </IllustrationGrid>
      </ProjectSection>
      
      {/* AR/VR Section */}
      <ProjectSection id="fun-ar-vr">
        <SectionTitle>AR/VR Experience</SectionTitle>
        <CategoryDescription>
          Immersive technology projects exploring augmented and virtual reality experiences.
        </CategoryDescription>
        <VideoContainer>
          <CustomVideoPlayer src={vrVideo} />
        </VideoContainer>
      </ProjectSection>
      
      {/* 2D Animation Section */}
      <ProjectSection id="fun-animation">
        <SectionTitle>2D Animation</SectionTitle>
        <CategoryDescription>
          Creative animation work demonstrating motion design and storytelling through animated graphics.
        </CategoryDescription>
        <VideoContainer>
          <LazyVideo
            src={animation2dVideo}
            controls
            controlsList="nodownload"
            objectFit="cover"
            style={{ width: '100%', height: '100%' }}
            aria-label="2D Animation video"
          />
        </VideoContainer>
      </ProjectSection>
      <EmailFooter />
    </PageBg>
    <TopScrollButton />
  </>
);

export default FunProject;
