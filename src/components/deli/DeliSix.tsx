import React from "react";
import styled from "styled-components";
import typeVideo from "../../assets/deli/deli6.mp4";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
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

const DeliSix: React.FC = () => (
  <Section>
    <GridContainer>
      <TextContainer>
        <TopLabel>Type</TopLabel>
        <Title>Face</Title>
        <BodyText>
          The typography is modern and friendly, with a focus on readability and warmth. The primary typeface is a sans-serif font that is clean and contemporary, while the secondary typeface adds a playful touch. The typography is designed to be versatile and work well across different applications, from headlines to body text. The font choices reflect the brand's values of warmth, safety, and creativity, creating a cohesive and engaging visual identity.
        </BodyText>
      </TextContainer>
      <VideoWrapper>
        <VideoContainer>
          <StyledVideo autoPlay loop muted playsInline>
            <source src={typeVideo} type="video/mp4" />
          </StyledVideo>
        </VideoContainer>
      </VideoWrapper>
    </GridContainer>
  </Section>
);

export default DeliSix; 