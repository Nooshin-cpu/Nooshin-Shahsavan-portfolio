import React from "react";
import styled from "styled-components";
import colorVideo from "../../assets/deli/deli5.mp4";

const FullWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
`;

const GridContainer = styled.div`
  width: 70vw;
  max-width: 1200px;
  min-height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4vw;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 98vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    margin-top: 4vw;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  background: #dddddd;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TopLabel = styled.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888888;
  margin-bottom: 0.35em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 400;
  color: #111;
  margin: 0 0 2rem 0;
  line-height: 1.07;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

const BodyText = styled.p`
  font-size: 1.06rem;
  color: #504f51;
  font-weight: 400;
  line-height: 1.54;
  margin: 0;
  max-width: 620px;
  @media (max-width: 900px) {
    max-width: 100vw;
  }
`;

const DeliFifth: React.FC = () => (
  <FullWrapper>
    <GridContainer>
      <TextContainer>
        <TopLabel>Color</TopLabel>
        <Title>Palette</Title>
        <BodyText>
          The color palette is warm and inviting, with a focus on creating a sense of comfort and trust. The primary colors are soft and gentle, while the secondary colors add a playful touch. The palette is designed to be versatile and work well across different applications, from print to digital. The colors are chosen to evoke feelings of warmth, safety, and creativity, aligning with the brand's values and vision.
        </BodyText>
      </TextContainer>
      <VideoWrapper>
        <VideoContainer>
          <StyledVideo autoPlay loop muted playsInline>
            <source src={colorVideo} type="video/mp4" />
          </StyledVideo>
        </VideoContainer>
      </VideoWrapper>
    </GridContainer>
  </FullWrapper>
);

export default DeliFifth; 