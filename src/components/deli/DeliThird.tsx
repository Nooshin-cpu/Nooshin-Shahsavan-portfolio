import React from "react";
import styled from "styled-components";
import strategyImg from "../../assets/deli/deli3.jpg";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
  height: 60vh;
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
  max-width: 450px;
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

const DeliThird: React.FC = () => (
  <Section>
    <ContentRow>
      <TextBlock>
        <TopLabels>
          <TopLabel>Brand</TopLabel>
        </TopLabels>
        <MainTextBlock>
          <BigTitle>Strategy</BigTitle>
          <Desc>
          Since the core values of this company were based on embracing the grandeur of classical Roman art while maintaining a modern identity, I needed to design a logo that would serve as a bridge between the classical and contemporary eras. This project was an exciting opportunity for me to explore my passion for art history, allowing me to revisit some of my favorite books, including *Art Through the Ages* by Helen Gardner and *The Story of Art* by Ernst Gombrich. After extensive research and study, I decided to draw inspiration from the iconic classical columns, which are widely recognized symbols of that era. At the same time, I carefully selected colors that reflected the essence and spirit of that period, ensuring that the design stayed true to both historical and modern sensibilities.
          </Desc>
        </MainTextBlock>
      </TextBlock>
      <ImgBlock>
        <Img src={strategyImg} alt="Brand Strategy Visual" />
      </ImgBlock>
    </ContentRow>
  </Section>
);

export default DeliThird; 