import React from "react";
import styled from "styled-components";

import img1 from '../../assets/veen/v1.png';
import img2 from '../../assets/veen/v2.jpeg';
import img3 from '../../assets/veen/v3.png';
import img4 from '../../assets/veen/v4.jpg';

const images = [img1, img2, img3, img4];

const BG = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
`;

const Title = styled.h2`
  width: 100%;
  text-align: left;
  color: #181818;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 2.5rem 0 2rem 0;
  letter-spacing: 0.04em;
`;

const CarouselGlass = styled.div`
  width: 70vw;
  max-width: 1200px;
  min-height: 320px;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  position: relative;
  transition: min-height .2s;
  @media (max-width: 700px) {
    min-height: 180px;
    padding: 1.2rem 0.5rem;
  }
`;

const ImagesRow = styled.div`
  display: flex;
  gap: 2.2vw;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

const ImgCard = styled.div`
  width: 260px;
  height: 260px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(80, 79, 81, 0.08);
  border: 1.5px solid #9ed4d1;
  transition: transform 0.18s, box-shadow 0.18s;
  flex: 0 0 auto;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
  }
  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
    border-radius: 0.7rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const Explanation = styled.p`
  font-size: 1rem;
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 2.2rem auto 0 auto;
  text-align: left;
`;

function VeenLogoP() {
  return (
    <BG id="veen-logo-explorations">
      <Title>Logo Explorations</Title>
      <CarouselGlass>
        <ImagesRow>
          {images.map((img, idx) => (
            <ImgCard key={img + idx}>
              <Img src={img} alt={`logo-${idx + 1}`} loading="lazy" />
            </ImgCard>
          ))}
        </ImagesRow>
      </CarouselGlass>
      <Explanation>
        Through this approach, I successfully addressed both sides of the design: incorporating a recognizable camera shape and embedding symbolic elements that reflect the concept of family. None of these choices were accidental; they are all grounded in semiotics.
      </Explanation>
    </BG>
  );
}

export default VeenLogoP; 