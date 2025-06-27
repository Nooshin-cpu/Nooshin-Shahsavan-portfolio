import React from "react";
import styled from "styled-components";
import strategyImg from "../../assets/veen/brand-strategy.png";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
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
  min-width: 320px;
  flex: 1 1 0;
  max-width: 480px;
  height: 100%;
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

const Img = styled.img`
  width: 32vw;
  height: 100%;
  max-width: 420px;
  max-height: none;
  object-fit: cover;
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

const VeenSecond: React.FC = () => (
  <Section>
    <ContentRow>
      <TextBlock>
        
          <TopLabel>Brand</TopLabel>
          
        
        <MainTextBlock>
          <BigTitle>Strategy</BigTitle>
          <Desc>
            Before jumping into design, I sat down with the client to learn about her values and vision. We discussed what she wanted her brand to feel like — safe, warm, family-centered, creative, and trustworthy. These values guided every design decision. I wanted the brand to feel like a soft hug — joyful and modern, but also grounded and calm. The end result is a visual identity that speaks to loving families, makes people smile, and builds instant connection.
          </Desc>
        </MainTextBlock>
      </TextBlock>
      <ImgBlock>
        <Img src={strategyImg} alt="Brand Strategy Visual" />
      </ImgBlock>
    </ContentRow>
  </Section>
);

export default VeenSecond;






