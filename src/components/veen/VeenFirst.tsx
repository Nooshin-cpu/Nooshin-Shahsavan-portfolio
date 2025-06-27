import React from "react";
import styled from "styled-components";
import story from "../../assets/veen/story.mp4";

const FullWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #9ed4d1;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    min-height: 60vw;
    padding: 0;
  }
`;

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #9ed4d1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  @media (max-width: 900px) {
    min-height: 60vw;
    padding: 0;
  }
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

const TopLabels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 0.35em;
`;

const TopLabel = styled.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888888;
  margin-bottom: 0.35em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const SubLabel = styled.div`
  font-size: 1rem;
  color: #504f51;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MainTextBlock = styled.div`
  margin-top: 0;
`;

const BigTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 400;
  color: #111;
  margin: 0 0 2rem 0;
  line-height: 1.07;
  letter-spacing: -1px;
  text-transform: uppercase;
  @media (max-width: 900px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
`;

const OverviewText = styled.p`
  font-size: 1.06rem;
  color: #504f51;
  font-weight: 400;
  line-height: 1.54;
  margin: 0;
  max-width: 620px;
  @media (max-width: 900px) {
    max-width: 100vw;
    font-size: 0.98rem;
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
    width: 100vw;
    max-width: 100vw;
    height: auto;
    margin-bottom: 3vw;
    min-width: 0;
    padding: 0 2vw;
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
    width: 87vw;
    height: 70vw;
    max-width: 97vw;
    max-height: none;
    background: transparent;
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
    width: 100vw;
    height: auto;
    max-height: 60vw;
    object-fit: contain;
  }
`;

const InfoText = styled.div`
  color: #717070;
  font-size: 0.80rem;
  font-weight: 400;
  margin-top: 1.6vw;
  margin-right: 0;
  text-align: left;
  line-height: 1.28;
  align-self: flex-start;
  @media (max-width: 900px) {
    margin-top: 2vw;
    text-align: left;
    font-size: 0.93rem;
    padding: 0 2vw;
    align-self: flex-start;
  }
`;

const VeenFirst: React.FC = () => (
  <FullWrapper>
    <Section>
      <ContentRow>
        {/* Left Labels */}
        <LeftCol>
          <TopLabels>
            <TopLabel>Veen</TopLabel>
            <SubLabel>Brand identity / Photography</SubLabel>
          </TopLabels>
          <MainTextBlock>
            <BigTitle>Project Overview</BigTitle>
            <OverviewText>
              VEEN Studio is a newly established photography brand based in Vancouver, specializing in family and child photography. The goal of this project was to create a professional, heartfelt brand identity that reflects warmth, trust, creativity, and joy.
              I was responsible for designing a logo system, selecting a color palette, choosing typography, and creating social media content to establish a strong and cohesive brand presence.
            </OverviewText>
          </MainTextBlock>
        </LeftCol>

        {/* Video and Info */}
        <VideoCol>
          <VideoFrame>
            <StyledVideo
              src={story}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              aria-label="Veen project video"
            />
          </VideoFrame>
          <InfoText>
            Role: Brand Designer<br />
            Tools: (Adobe Illustrator, After Effects, Photoshop)<br />
            Timeline: 2 weeks<br />
            Year: 2024
          </InfoText>
        </VideoCol>
      </ContentRow>
    </Section>
  </FullWrapper>
);

export default VeenFirst;