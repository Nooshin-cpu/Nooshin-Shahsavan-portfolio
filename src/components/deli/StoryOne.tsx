import React from 'react';
import styled from 'styled-components';
import storyVideo from '../../assets/deli/story-1-deli.mp4';

const FullWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
`;

const StoryOne: React.FC = () => (
  <FullWrapper>
    <StyledVideo
      src={storyVideo}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      aria-label="Deli Story One Video"
    />
  </FullWrapper>
);

export default StoryOne; 