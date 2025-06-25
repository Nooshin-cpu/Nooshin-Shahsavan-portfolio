import React from "react";
import styled from "styled-components";
import typeVideo from "../../assets/veen/vv.mp4";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
`;

const ContentRow = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 6vw;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 2vw;
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
  width: 50%;
  height: 50%;
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
  color: #fff;
  margin: 0 0 1.8rem 0;
  line-height: 1.07;
  letter-spacing: -1px;
`;

const BodyText = styled.div`
  font-size: 1rem;
  color: #ccc;
  font-weight: 400;
  line-height: 1.5;
  max-width: 370px;
`;

const VeenType: React.FC = () => (
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
          The typography for Veen is elegant and sophisticated, reflecting the brand's premium and timeless character. The primary typeface is refined and modern, creating a luxurious presence that resonates with discerning consumers. The typography system combines classic serif fonts with contemporary sans-serif elements, ensuring both readability and visual distinction.
        </BodyText>
      </RightTextBlock>
    </ContentRow>
  </Section>
);

export default VeenType;