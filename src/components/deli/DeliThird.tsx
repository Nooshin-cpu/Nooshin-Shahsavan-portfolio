import React from "react";
import styled from "styled-components";
import brandImg from "../../assets/deli/brand.jpg";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 80vh;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: left;
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 520px;
  margin: 0 0 2.2rem 0;
  text-align: left;
`;

const Highlight = styled.span`
  color: #b48a3b;
  font-weight: 400;
`;

const ImageWrapper = styled.div`
  width: 420px;
  max-width: 90vw;
  margin: 0 0 2.2rem 0;
  border-radius: 18px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
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