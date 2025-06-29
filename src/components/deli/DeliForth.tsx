import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/deli/deli8.jpg";

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

const DeliForth: React.FC = () => (
  <Section>
    <ContentRow>
      <TextBlock>
        <TopLabels>
          <TopLabel>Logo</TopLabel>
        </TopLabels>
        <MainTextBlock>
          <BigTitle>Design</BigTitle>
          <Desc>
          "Delicato" is an Italian word meaning "delicate" in English. This word conveys a sense of elegance and refinement. As I previously mentioned, I drew inspiration from classical Roman columns to reflect this delicacy. After designing the column shape, I simplified it as much as possible, transforming it into a balance of positive and negative space, ultimately integrating it with the letter "D."
While the presence of the column evokes the architecture of the classical era, I introduced a subtle break in the lower curved line to symbolize a distinction between the classical and modern styles.
This gap represents the inevitable separation created by time, even as the two periods remain interconnected. Through this logo, I aim to illustrate the fusion of these eras while acknowledging the distance between them.

          </Desc>
        </MainTextBlock>
      </TextBlock>
      <ImgBlock>
        <Img src={logoImg} alt="Logo Design" />
      </ImgBlock>
    </ContentRow>
  </Section>
);

export default DeliForth; 