import React from "react";
import styled from "styled-components";
import typeVideo from "../../assets/veen/vv.mp4";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 60vw;
    margin-right: 0;
    align-items: center;
    box-sizing: border-box;
    overflow-x: hidden;
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
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    max-height: 60vw;
    object-fit: contain;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const RightTextBlock = styled.div`
  flex: none;
  width: 20vw;
  min-width: 270px;
  max-width: 380px;
  height: 44vw;
  max-height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #fff;
  @media (max-width: 1100px) {
    width: 90vw;
    max-width: 96vw;
    height: auto;
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
  color: #fff;
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
  color: #ccc;
  font-weight: 400;
  line-height: 1.5;
  max-width: 370px;
`;

const VeenMuck6: React.FC = () => (
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
        <TopLabel>Type</TopLabel>
        <Title>Typography</Title>
        <BodyText>
          <StyledLabel>Challenge</StyledLabel>
          Select typography that supports the brand's friendly and trustworthy personality — while being clean and functional across digital and print platforms.<br/><br/>
          <StyledLabel>Solution</StyledLabel>
          I chose two main fonts:<br/><br/>
          Primary Typeface: A modern, slightly rounded font that echoes the curves found in the logo — making the identity feel cohesive and soft.<br/><br/>
          Secondary Typeface: A clean, readable sans-serif ideal for body text in brochures, website copy, and captions. Together, they ensure both emotional warmth and clarity.
        </BodyText>
      </RightTextBlock>
    </ContentRow>
  </Section>
);

export default VeenMuck6;