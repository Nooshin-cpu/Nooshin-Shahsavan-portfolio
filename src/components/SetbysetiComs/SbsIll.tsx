import React from "react";
import styled from "styled-components";
import capIntroVideo from "../../assets/sbsimg/cap-intro2.mp4";


const Section = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #000;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentRow = styled.div`
  width: 70vw;
  max-width: 1200px;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    width: 98vw;
    min-height: 40vw;
    padding: 0 2vw;
  }
`;

const LeftCol = styled.div`
  min-width: 320px;
  max-width: 460px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 4vw;
  @media (max-width: 900px) {
    max-width: 100vw;
    margin-right: 0;
    margin-bottom: 4vw;
    min-width: 0;
    padding: 0 2vw;
  }
`;

const RightCol = styled.div`
  flex: 1 1 0;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    min-width: 0;
    align-items: center;
    width: 100vw;
    padding: 0 2vw;
    margin-bottom: 2vw;
  }
`;

const MediaBox = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 400px;
    height: 400px;
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 70%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  background: transparent;
  z-index: 1;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const MainTextBlock = styled.div`
  margin-top: 0;
`;

const SbsIll: React.FC = () => (
  <Section>
    <ContentRow>
      <LeftCol>
        <MainTextBlock>
          <span style={{ display: 'block', fontSize: '1.01rem', fontWeight: 600, color: '#888', marginBottom: '0.25em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Illustration</span>
          <span style={{ display: 'block', fontSize: '2.3rem', fontWeight: 400, color: '#fff', margin: '0 0 1.8rem 0', lineHeight: 1.07, letterSpacing: '-1px' }}>Style</span>
          <span style={{ display: 'block', fontSize: '1rem', color: '#504f51', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35em' }}>Challenge</span>
          Create graphics that reflect (freedom, movement, and dance), while matching the logo's shape and Gen Z's emotional vibe.
          <span style={{ display: 'block', fontSize: '1rem', color: '#504f51', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '1.2em 0 0.35em 0' }}>Solution</span>
          For the clothing graphics, I used curved lines to represent freedom, movement, and rhythm. These curves also visually connect with the form of the logo, which appears in every design — maintaining strong harmony between the brand mark and the graphics.
          <br />
          The illustrated characters have neutral, almost emotionless faces, inspired by Gen Z. This generation often appears tired, withdrawn, or avoiding emotional expression, and I reflected that by designing characters who visually embody this detached energy — staying true to the brand's cultural relevance.
        </MainTextBlock>
      </LeftCol>
      <RightCol>
        <MediaBox>
          <StyledVideo
            src={capIntroVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            aria-label="Cap intro video"
          />
        
        </MediaBox>
      </RightCol>
    </ContentRow>
  </Section>
);

export default SbsIll;