import React from "react";
import styled from "styled-components";
import story from "../../assets/deli/deli1.mp4";

const FullWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background:rgb(255, 255, 255);
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background:rgb(255, 255, 255);
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
    width: 98vw;
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
`;

const OverviewText = styled.p`
  font-size: 1.06rem;
  color: #504f51;
  font-weight: 400;
  line-height: 1.54;
  margin: 0;
  max-width: 620px;
  white-space: pre-line;
  @media (max-width: 900px) {
    max-width: 100vw;
  }
`;

const VideoCol = styled.div`
  flex: 1 1 0;
  min-width: 320px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  @media (max-width: 900px) {
    max-width: 100vw;
    align-items: center;
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
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const InfoText = styled.div`
  font-size: 0.8rem;
  color: #717070;
  font-weight: 400;
  line-height: 1.6;
  text-align: right;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const DeliFirst: React.FC = () => (
  <FullWrapper>
    <Section>
      <ContentRow>
        {/* Left Labels */}
        <LeftCol>
          <TopLabels>
            <TopLabel>Delicato</TopLabel>
            <SubLabel>Brand identity </SubLabel>
          </TopLabels>
          <MainTextBlock>
            <BigTitle>Project Overview</BigTitle>
            <OverviewText>
            Delicato is a small interior design company from Italy that relies on classical architecture in its designs. The core value of this brand is to create spaces that blend the richness of historical elements with modern aesthetics.
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

export default DeliFirst; 