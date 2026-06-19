import React from "react";
import styled from "styled-components";
import logoSketch from "../../assets/veen/scatch.jpg";

const MinimalSection = styled.section`
  #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 700;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: center;
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 2.2rem 0;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 0 2.2rem 0;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`;

const SectionLabel = styled.span`
  display: block;
  font-size: 1rem;
  color:rgb(160, 160, 160);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35em;
  text-align: center;
`;

const BodyText = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #222;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 2.2rem 0;
  text-align: center;
`;

const Highlight = styled.span`
  color: #9ed4d1;
  font-weight: 600;
`;

const VeenThird: React.FC = () => (
  <MinimalSection id="veen-logo">
    <Title>Logo Design</Title>
    <Description>
    Based on the brand’s values and target audience families and children, with an emphasis on conveying warm and comforting vibes I considered several key points. The client preferred a <Highlight>wordmark</Highlight> combined with a <Highlight>photography-related symbol</Highlight>. On the other hand, I also needed to visually reflect the brand’s core values: <Highlight>family</Highlight> and <Highlight>warmth</Highlight>. 
    </Description>
    <ImageWrapper>
      <StyledImg src={logoSketch} alt="Logo Sketch" />
    </ImageWrapper>
    <SectionLabel>To achieve this...</SectionLabel>
    <BodyText>
    I simplified the shape of a camera into a clean, graphic form and placed it at the center of the word “VEEN,” replacing the two <Highlight>“E”</Highlight>s with the camera shape. This created a strong visual connection between the brand name and photography.
    </BodyText>
    <SectionLabel>To reinforce the concept of family,</SectionLabel>
    <BodyText>
        I used a <Highlight>square</Highlight> shape(<Highlight>camera body</Highlight>) to represent <Highlight>home</Highlight> and security , and added a <Highlight>circle</Highlight> inside the square, symbolizing <Highlight>family</Highlight>, <Highlight>love</Highlight> , and <Highlight>the flow of life</Highlight> also resembling the camera <Highlight>lens</Highlight> .<br/><br/>
      Secondary Logo: A minimal <Highlight>V+N</Highlight> monogram, derived from the main logo, designed for versatile use in stickers, watermarks, and small-scale branding.
    </BodyText>
  </MinimalSection>
);

export default VeenThird;















