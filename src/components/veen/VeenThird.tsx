import React from "react";
import styled from "styled-components";
import logo1 from "../../assets/veen/veenlogo1.jpg";
import logo2 from "../../assets/veen/veenlogo-2.jpg";
import logo3 from "../../assets/veen/veenlogo-3.jpg";

import strategyImg from "../../assets/veen/scatch.jpg";

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
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    width: 98vw;
    min-height: 40vw;
    padding: 0 2vw;
  }
`;

const TextBlock = styled.div`
  min-width: 320px;
  max-width: 460px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
`;

const Title = styled.h2`
  font-size: 2.3rem;
  font-weight: 400;
  color: #504f51;
  margin: 0 0 1rem 0;
  line-height: 1.07;
  letter-spacing: -1.2px;
`;

const Desc = styled.p`
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

const ImgBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-width: 320px;
  flex: 1 1 0;
  max-width: 480px;
  height: 100%;
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    margin-bottom: 3vw;
    min-width: 0;
    padding: 0 2vw;
  }
`;

const Img = styled.img`
  width: 32vw;
  height: auto;
  max-width: 420px;
  object-fit: contain;
  background: #dddddd;
  display: block;
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 97vw;
    max-height: 60vw;
    object-fit: contain;
    background: transparent;
  }
`;

const VeenThird: React.FC = () => (
  <FullWrapper>
    <Section>
      <ContentRow>
        <ImgBlock>
          <Img src={strategyImg} alt="scetck" />
        </ImgBlock>
        <TextBlock>
          <TopLabels>
            <TopLabel>LOGO</TopLabel>
          </TopLabels>
          <MainTextBlock>
            <BigTitle>DESIGN</BigTitle>
            <Desc>
              The logo needed to feel personal and memorable, while also being versatile and professional. I began by researching competitors in the photography space, especially those focused on families and children. Most successful logos used rounded, friendly shapes, often incorporating a camera motif. From there, I explored several sketches and landed on two versions:
✨  Primary Logo
A full logo featuring the word "VEEN" with a hidden camera graphic inside the letters , a little visual surprise that makes people say, "Oh, I see it!" The center circle symbolizes both a camera lens and the unbreakable bond of family.
✨  Secondary Logo
A compact monogram featuring the letters V + N, perfect for stickers, watermarks, and social media. Simple, clean, and easily recognizable.
            </Desc>
          </MainTextBlock>
        </TextBlock>
      </ContentRow>
    </Section>
  </FullWrapper>
);

export default VeenThird;















