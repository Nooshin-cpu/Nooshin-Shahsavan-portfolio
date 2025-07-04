import React from "react";
import styled from "styled-components";
import typeVideo from "../../assets/zar/zar-type.mp4";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
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
    width: 100%;
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
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 4vw;
    min-width: 0;
    padding: 0 2vw;
  }
`;

const VideoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 320px;
  flex: 1 1 0;
  max-width: 480px;
  height: 100%;
  justify-content: flex-start;
  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: 3vw;
    min-width: 0;
    padding: 0 2vw;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const VideoFrame = styled.div`
  width: 32vw;
  height: 100%;
  max-width: 420px;
  max-height: none;
  background: #dddddd;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: none;
    background: transparent;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  box-shadow: none;
  object-fit: cover;
  display: block;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
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

const ZarType: React.FC = () => (
  <Section>
    <ContentRow>
      <VideoCol>
        <VideoFrame>
          <StyledVideo
            src={typeVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            aria-label="Typography video"
          />
        </VideoFrame>
      </VideoCol>
      <RightTextBlock>
        <TopLabel>TYPE</TopLabel>
        <Title>FACE</Title>
        <BodyText>
          <StyledLabel>Challenge</StyledLabel>
          Find a type system that captures both elegance and relatability, expressing ZAR's luxury positioning while staying warm and personal.<br/><br/>
          <StyledLabel>Solution</StyledLabel>
          Primary Typeface: Amandine — Elegant and finely curved, Amandine gives the brand its luxurious tone, perfect for headlines, product names, and packaging. It echoes the visual softness of saffron threads and classical Persian detail.<br/><br/>
          Secondary Typeface: Housechks — A handwritten script used in storytelling and informal messaging, this font brings a human, warm feeling to the brand — reminiscent of passing saffron through generations.<br/>
          Together, these fonts balance refinement and approachability, giving ZAR a unique personality that is both timeless and emotional.
        </BodyText>
      </RightTextBlock>
    </ContentRow>
  </Section>
);

export default ZarType;