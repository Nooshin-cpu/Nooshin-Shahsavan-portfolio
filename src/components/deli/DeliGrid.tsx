import React from 'react';
import styled from 'styled-components';
import deli4 from '../../assets/deli/deli4.mp4';
import deli5 from '../../assets/deli/deli5.mp4';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const GridContainer = styled.div`
  width: 100vw;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  width: 70%;
  height: 70%;
  max-width: 500px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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