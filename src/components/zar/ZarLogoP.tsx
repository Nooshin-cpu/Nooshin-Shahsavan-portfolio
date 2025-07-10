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

const ImagesRow = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const ImgCard = styled.div`
  width: 260px;
  height: 260px;
  background: #f7f7f7;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 2px solid rgb(163, 73, 198);
  flex: 0 0 auto;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: rgb(163, 73, 198);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

function ZarLogoP() {
  return (
    <MinimalSection>
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

export default ZarLogoP;