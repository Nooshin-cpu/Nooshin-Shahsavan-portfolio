import React from "react";
import styled from "styled-components";

const images: string[] = [
  new URL('../../assets/deli/d1.png', import.meta.url).href,
  new URL('../../assets/deli/d2.jpg', import.meta.url).href,
  new URL('../../assets/deli/d3.png', import.meta.url).href,
  new URL('../../assets/deli/d4.png', import.meta.url).href,
];

const MinimalSection = styled.section`
  #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
  @media (max-width: 900px) {
    padding: 80px clamp(1rem, 3vw, 2rem) 60px;
  }
  @media (max-width: 600px) {
    padding: 60px clamp(0.75rem, 2vw, 1.5rem) 40px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const ImagesRow = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`;

const ImgCard = styled.div`
  width: 260px;
  height: 260px;
  background: #f7f7f7;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  flex: 0 0 auto;
  border: 2px solid #b48a3b;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: #b48a3b;
  }
  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 98vw;
    max-height: 98vw;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

function DeliLogoP() {
  return (
    <MinimalSection id="deli-logo">
      <Title>Logo Explorations</Title>
      <ImagesRow>
        {images.map((img, idx) => (
          <ImgCard key={img + idx}>
            <Img src={img} alt={`logo-exploration-${idx}`} loading="lazy" />
          </ImgCard>
        ))}
      </ImagesRow>
    </MinimalSection>
  );
}

export default DeliLogoP;