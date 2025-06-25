import React from 'react';
import styled from 'styled-components';
import logo1 from '../../assets/zar/logo-zar-1.png';
import logo2 from '../../assets/zar/zar-logo.mp4';
import logo3 from '../../assets/zar/logo-zar-2.png';

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
  }
`;

const MediaLayout = styled.div`
  position: relative;
  width: 580px;
  height: 420px;
  @media (max-width: 900px) {
    width: 94vw;
    height: 80vw;
    min-width: 0;
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

const ZarThird: React.FC = () => (
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
            {"\n"}The primary logo features a custom-designed wordmark “ZAR” with elegant, elongated letterforms that blend modern minimalism with a subtle nod to classical calligraphy. The sharp angles and fluid curves symbolize both precision and beauty—reflecting the premium nature of the saffron brand.
           
            {"\n"}Submark
            {"\n"}The submark introduces a stylized saffron flower illustration entwinedwith organic lines, surrounded by the words “ZAR,” “SAFFRON,” “PREMIUM,” andthe year “1988.” This mark emphasizes authenticity and heritage, adding anartisanal touch that celebrates tradition and craftsmanship.
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
            aria-label="zar Logo 2"
          />
          <Img2 src={logo3} alt="zar Logo 3" />
        </MediaLayout>
      </RightCol>
    </ContentRow>
  </Section>
);

export default ZarThird;