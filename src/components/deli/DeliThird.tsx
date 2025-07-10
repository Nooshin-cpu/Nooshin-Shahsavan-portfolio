import React from "react";
import styled from "styled-components";
import brandImg from "../../assets/deli/brand.jpg";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 80vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 520px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`;

const Highlight = styled.span`
  color: #b48a3b;
  font-weight: 400;
`;

const ImageWrapper = styled.div`
  width: 420px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 18px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const DeliThird: React.FC = () => (
  <MinimalSection>
    <Title>Brand Strategy</Title>
    <Description>
      Since the core values of this company were based on embracing the grandeur of <Highlight>classical columns</Highlight>, which are widely recognized <Highlight>symbols</Highlight> of that era, I needed to design a logo that would serve as a bridge between the <Highlight>classical</Highlight> and contemporary eras. This project was an exciting opportunity for me to explore my passion for art history, allowing me to revisit some of my favorite books, including <i>Art Through the Ages</i> by Helen Gardner and <i>The Story of Art</i> by Ernst Gombrich. After extensive research and study, I decided to draw inspiration from the <Highlight>iconic classical columns</Highlight>. At the same time, I carefully selected colors that reflected the essence and spirit of that period, ensuring that the design stayed true to both historical and modern sensibilities. The final logo is <Highlight>minimal</Highlight>, <Highlight>elegant</Highlight>, and makes use of <Highlight>positive and negative</Highlight> space. A subtle <Highlight>break</Highlight> in the lower curved line represents the <Highlight>separation and connection</Highlight> between classical and modern eras.
    </Description>
    <ImageWrapper>
      <Img src={brandImg} alt="Brand Strategy Visual" />
    </ImageWrapper>
  </MinimalSection>
);

export default DeliThird; 