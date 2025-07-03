import React from "react";
import styled from "styled-components";
import typeVideo from "../../assets/deli/deli7.mp4";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`;

const ContentRow = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: 6vw;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2vw;
  }
`;

const VideoBlock = styled.div`
  flex: none;
  width: 66vw;
  height: 50vw;
  max-width: 1080px;
  max-height: 720px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  margin-right: 1vw;
  @media (max-width: 1100px) {
    width: 96vw;
    height: 60vw;
    margin-right: 0;
    max-width: 96vw;
    max-height: 60vw;
    align-items: center;
  }
`;

const StyledVideo = styled.video`
  width: 70%;
  height: 70%;
  object-fit: fill;
  background: transparent;
  border: none;
  box-shadow: none;
  display: block;
  margin-bottom: 0;
`;

const RightTextBlock = styled.div`
  flex: none;
  width: 20vw;
  min-width: 270px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #fff;
  margin-bottom: 0;
  @media (max-width: 1100px) {
    width: 90vw;
    max-width: 96vw;
    margin-top: 2vw;
    justify-content: flex-start;
  }
`;

const TopLabel = styled.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.25em;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 400;
  color: #111;
  margin: 0 0 1.8rem 0;
  line-height: 1.07;
  letter-spacing: -1px;
`;

const StyledLabel = styled.span`
  display: block;
  font-size: 1rem;
  color: #504f51;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35em;
`;

const BodyText = styled.div`
  font-size: 1rem;
  color: #504f51;
  font-weight: 400;
  line-height: 1.5;
  max-width: 370px;
`;

const DeliType: React.FC = () => (
  <Section>
    <ContentRow>
      <VideoBlock>
        <StyledVideo
          src={typeVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          aria-label="Typography video"
        />
      </VideoBlock>
      <RightTextBlock>
        <TopLabel>TYPE</TopLabel>
        <Title>FACE</Title>
        <BodyText>
          <StyledLabel>Challenge</StyledLabel>
          Find a balance between modern legibility and emotional warmth in typefaces that feel refined but friendly.Select fonts that reflect the luxurious elegance of classical architecture, while remaining clean and usable for modern websites and apps.<br/><br/>
          <StyledLabel>Solution</StyledLabel>
          For the primary typeface, I chose Gyst Variable  a refined, elegant serif that subtly echoes the curves and structure of classical architecture. Its luxurious aesthetic feels perfectly in tune with the brand’s roots in Roman-inspired design, while its modern features make it highly adaptable.

As a secondary typeface, I used Roc Grotesk, a clean, highly legible sans-serif. It’s ideal for web and app interfaces, offering clear readability while still feeling modern and well-balanced next to the primary font. Together, this type pairing supports both emotional tone and practical function  just like the interiors Delicato designs.
        </BodyText>
      </RightTextBlock>
    </ContentRow>
  </Section>
);

export default DeliType; 