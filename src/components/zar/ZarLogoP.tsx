import React from "react";
import styled from "styled-components";
import img1 from '../../assets/zar/logo1.jpeg';
import img2 from '../../assets/zar/logo2.jpg';
import img3 from '../../assets/zar/logo3.jpg';
import img4 from '../../assets/zar/logo4.png';
import img5 from '../../assets/zar/logo5.png';

const images = [img1, img2, img3, img4, img5];

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 60vh;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  font-weight: 700;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: left;
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
    gap: 0.7rem;
    margin-bottom: 1rem;
  }
`;

const ImgCard = styled.div`
  width: 260px;
  height: 260px;
  background: #fafaf8;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  border: 2px solid rgb(163, 73, 198);
  flex: 0 0 auto;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: rgb(163, 73, 198);
  }
  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 320px;
    max-height: 320px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: transparent;
`;

const ZarLogoP: React.FC = () => (
  <MinimalSection>
    <Title>Logo Process</Title>
    <ImagesRow>
      {images.map((src, idx) => (
        <ImgCard key={idx}>
          <Img src={src} alt={`Zar logo process ${idx + 1}`} />
        </ImgCard>
      ))}
    </ImagesRow>
  </MinimalSection>
);

export default ZarLogoP;