import React from 'react';
import styled from 'styled-components';
import deli4 from '../../assets/deli/deli4.mp4';
import deli5 from '../../assets/deli/deli5.mp4';

const Section = styled.section`
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  box-sizing: border-box;
`;

const GridContainer = styled.div`
  width: 100vw;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 2rem;
  box-sizing: border-box;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 900px) {
    max-width: 100vw;
    aspect-ratio: 1 / 1;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
  box-sizing: border-box;
`;

const DeliGrid: React.FC = () => {
  return (
    <Section>
      <GridContainer>
        <VideoWrapper>
          <VideoContainer>
            <StyledVideo
              src={deli4}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              aria-label="Deli video 4"
            />
          </VideoContainer>
        </VideoWrapper>
        <VideoWrapper>
          <VideoContainer>
            <StyledVideo
              src={deli5}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              aria-label="Deli video 5"
            />
          </VideoContainer>
        </VideoWrapper>
      </GridContainer>
    </Section>
  );
};

export default DeliGrid; 