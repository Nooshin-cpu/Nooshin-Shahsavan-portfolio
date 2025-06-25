import React from "react";
import styled from "styled-components";
import pinkiVideo from "../../assets/sbsimg/pinki.mp4";

const FullWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #ffffff;
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
  @media (max-width: 900px) {
    max-width: 100vw;
  }
`;

const VideoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  background: transparent;
  border: none;
  box-shadow: none;
  object-fit: cover;
  display: block;
`;

const InfoText = styled.div`
  color: #717070;
  font-size: 0.80rem;
  font-weight: 400;
  margin-top: 1.6vw;
  margin-right: 8vw;
  text-align: left;
  line-height: 1.28;
  @media (max-width: 900px) {
    margin-top: 2vw;
    margin-right: 0;
    text-align: left;
    font-size: 0.93rem;
  }
`;

const SbsFirst: React.FC = () => (
  <FullWrapper>
    <Section>
      <ContentRow>
        {/* Left Labels */}
        <LeftCol>
          <TopLabels>
            <TopLabel>S.B.S</TopLabel>
            <SubLabel>Brand identity / Printing</SubLabel>
          </TopLabels>
          <MainTextBlock>
            <BigTitle>Project Overview</BigTitle>
            <OverviewText>
              S.B.S Based in Vancouver, S.B.S is a fresh and fearless clothing brand made for the middle class partygoer. Designed for 20- to 30-year-olds who just want to have a good time, S.B.S stands for effortless style and carefree vibes. Life's too short to stress — and S.B.S is here to prove that fashion doesn't have to be fancy to be fun. Easy to wear, easy to enjoy, and always ready for a good time. For this collection, I created custom graphics for S.B.S, a casual streetwear brand based in Vancouver that celebrates freedom, fun, and not taking life too seriously. The designs were intended for partygoers—people who want to dress casually, feel expressive, and look effortlessly cool.
            </OverviewText>
          </MainTextBlock>
        </LeftCol>

        {/* Video and Info */}
        <VideoCol>
          <VideoFrame>
            <StyledVideo
              src={pinkiVideo}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              aria-label="S.B.S project video"
            />
          </VideoFrame>
          <InfoText>
            Role: Graphic Designer<br />
            Tools: (Adobe Illustrator, After Effects, Photoshop)<br />
            Timeline: 3 weeks<br />
            Year: 2023
          </InfoText>
        </VideoCol>
      </ContentRow>
    </Section>
  </FullWrapper>
);

export default SbsFirst;