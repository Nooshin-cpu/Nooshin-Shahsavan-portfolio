import React from 'react';
import styled from 'styled-components';
import logo1 from '../../assets/sbsimg/s-logo1.png';
import logo2 from '../../assets/sbsimg/s-logo2.mp4';
import logo3 from '../../assets/sbsimg/s-logo3.png';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fdd7bb;
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
  white-space: pre-line;
  @media (max-width: 900px) {
    max-width: 100vw;
    font-size: 0.98rem;
  }
`;

const RightCol = styled.div`
  flex: 1 1 0;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  @media (max-width: 900px) {
    min-width: 0;
    align-items: center;
    width: 100vw;
    padding: 0 2vw;
    margin-bottom: 2vw;
  }
`;

const MediaLayout = styled.div`
  position: relative;
  width: 580px;
  height: 420px;
  @media (max-width: 900px) {
    width: 94vw;
    height: 60vw;
    min-width: 0;
    max-width: 100vw;
  }
`;

const Img1 = styled.img`
  position: absolute;
  top: 0;
  left: 230px;
  width: 180px;
  height: 180px;
  object-fit: contain;
  @media (max-width: 900px) {
    position: static;
    width: 45vw;
    height: 22vw;
    display: block;
    margin: 0 auto 2vw auto;
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  left: 0;
  top: 130px;
  width: 400px;
  height: 320px;
  object-fit: contain;
  @media (max-width: 900px) {
    position: static;
    width: 85vw;
    height: 34vw;
    display: block;
    margin: 0 auto 2vw auto;
  }
`;

const Img2 = styled.img`
  position: absolute;
  left: 370px;
  top: 250px;
  width: 180px;
  height: 180px;
  object-fit: contain;
  @media (max-width: 900px) {
    position: static;
    width: 45vw;
    height: 22vw;
    display: block;
    margin: 0 auto;
  }
`;

const SbsSecond: React.FC = () => (
  <Section>
    <ContentRow>
      {/* Left Text */}
      <LeftCol>
        <TopLabels>
          <TopLabel>Logo</TopLabel>
        </TopLabels>
        <MainTextBlock>
          <BigTitle>Design</BigTitle>
          <OverviewText>
            {"\n"}Primary Logo
            {"\n"}This is a typographic logo that directly uses the font "Gyst Variable" and represents the brand in written.
            {"\n"}Secondary Logo This is a graphic logo created using the brand's initials: S, B, S. It appears most frequently across various design elements such as clothing items, business cards, shopping bags, and clothing boxes. This logo forms a key part of the brand's identity. Its design incorporates curved shapes that symbolize dance, which reflects the brand's target audience: party-goers.
            {"\n"}Submark
            {"\n"}As shown in the image, this version is specifically designed for packaging purposes.
          </OverviewText>
        </MainTextBlock>
      </LeftCol>

      {/* Right Media */}
      <RightCol>
        <MediaLayout>
          <Img1 src={logo1} alt="S.B.S Logo 1" />
          <StyledVideo
            src={logo2}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            aria-label="S.B.S Logo 2"
          />
          <Img2 src={logo3} alt="S.B.S Logo 3" />
        </MediaLayout>
      </RightCol>
    </ContentRow>
  </Section>
);

export default SbsSecond;