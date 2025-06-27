import React from "react";
import styled from "styled-components";
import strategyImg from "../../assets/zar/moodboard-zar.png";

const Section = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  padding: 2rem 0;
`;

const ContentRow = styled.div`
  width: 70vw;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 98vw;
    padding: 0 0.5rem;
  }
`;

const TextBlock = styled.div`
  min-width: 220px;
  max-width: 460px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: 4vw;
  box-sizing: border-box;
  @media (max-width: 900px) {
    max-width: 100vw;
    margin-right: 0;
    margin-bottom: 2vw;
    padding: 0 0.5rem;
  }
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
  align-items: flex-end;
  justify-content: flex-end;
  min-width: 220px;
  flex: 1 1 0;
  max-width: 480px;
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 900px) {
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    height: auto;
    margin-bottom: 2vw;
    padding: 0 0.5rem;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: cover;
  background: #dddddd;
  display: block;
  border-radius: 12px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    width: 97vw;
    max-width: 97vw;
    height: auto;
    min-height: 180px;
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

const ZarSecond: React.FC = () => (
  <Section>
    <ContentRow>
      <TextBlock>
        
          <TopLabel>Brand</TopLabel>
          
        
        <MainTextBlock>
          <BigTitle>Strategy</BigTitle>
          <Desc>
          ZAR's brand strategy is built on the fusion of heritage and modernity. The core idea is to position saffron not just as a spice, but as a luxury cultural experience. By emphasizing authenticity, elegance, and Persian roots, the brand aims to connect emotionally with both traditional consumers and a new generation of global customers who value quality and story-driven products .The strategy focuses on three key pillars: Cultural Authenticity – Highlighting ZAR's Persian origin through storytelling, visuals, and design elements that reflect the history and beauty of saffron Premium Positioning  Using high-end packaging, refined typography, and a sophisticated color palette to communicate quality and exclusivity. Modern Appeal – Blending minimal design with rich cultural cues to attract modern consumers who appreciate aesthetics, transparency, and meaningful branding .ZAR aims to standout in the global spice market by being more than a product it's a symbol of tradition, beauty, and luxury.


          </Desc>
        </MainTextBlock>
      </TextBlock>
      <ImgBlock>
        <Img src={strategyImg} alt="Brand Strategy Visual" />
      </ImgBlock>
    </ContentRow>
  </Section>
);

export default ZarSecond;






