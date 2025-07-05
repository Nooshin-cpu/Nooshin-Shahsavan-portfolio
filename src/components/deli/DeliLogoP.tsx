import React, { useState } from "react";
import styled from "styled-components";

// Import only the specific images for the carousel
import img1 from '../../assets/deli/d1.png';
import img2 from '../../assets/deli/d2.png';
import img3 from '../../assets/deli/d3.png';
import img4 from '../../assets/deli/d4.png';

const images = [img1, img2, img3, img4];

const BG = styled.div`
  width: 100vw;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9b835d;
  box-sizing: border-box;
`;

const CarouselGlass = styled.div`
  width: 70vw;
  max-width: 1200px;
  min-height: 320px;
  background: rgba(255,255,255,0.85);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(155, 131, 93, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid #9b835d;
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

const ArrowButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin: 0 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
  color: #9b835d;
  box-shadow: 0 2px 8px rgba(155,131,93,0.08);
  transition: background 0.18s, box-shadow 0.18s, color 0.18s;
  outline: none;
  border: 2px solid transparent;
  &:hover, &:focus {
    background: #9b835d;
    color: #fff;
    border: 2px solid #fff;
    box-shadow: 0 4px 16px rgba(155,131,93,0.12);
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
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(155, 131, 93, 0.08);
  border: 1.5px solid #9b835d;
  transition: transform 0.18s, box-shadow 0.18s;
  flex: 0 0 auto;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(155, 131, 93, 0.13);
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

const Dots = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.7rem;
`;

const Dot = styled.button<{active: boolean}>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${({active}) => active ? '#9b835d' : 'rgba(0,0,0,0.13)'};
  transition: background 0.18s;
  cursor: pointer;
  outline: none;
  &:hover, &:focus {
    background: #9b835d;
  }
`;

function DeliLogoP() {
  const [startIdx, setStartIdx] = useState(0);
  const numVisible = 3;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 700;
  const visibleCount = isMobile ? 2 : numVisible;

  const totalGroups = Math.ceil(images.length / visibleCount);
  const currentGroup = Math.floor(startIdx / visibleCount);

  const handlePrev = () => {
    setStartIdx((prev) => (prev - visibleCount + images.length) % images.length);
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + visibleCount) % images.length);
  };

  const goToGroup = (groupIdx: number) => {
    setStartIdx((groupIdx * visibleCount) % images.length);
  };

  // Get visible images in a circular way
  const getVisibleImages = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(images[(startIdx + i) % images.length]);
    }
    return arr;
  };

  return (
    <BG>
      <ArrowButton aria-label="Previous" onClick={handlePrev}>
        <span aria-hidden="true">&#8592;</span>
      </ArrowButton>
      <CarouselGlass>
        <ImagesRow>
          {getVisibleImages().map((img, idx) => (
            <ImgCard key={img + idx}>
              <Img src={img} alt={`carousel-${idx}`} loading="lazy" />
            </ImgCard>
          ))}
        </ImagesRow>
        <Dots>
          {Array.from({ length: totalGroups }).map((_, i) => (
            <Dot
              key={i}
              active={i === currentGroup}
              onClick={() => goToGroup(i)}
              aria-label={`Go to slide group ${i + 1}`}
            />
          ))}
        </Dots>
      </CarouselGlass>
      <ArrowButton aria-label="Next" onClick={handleNext}>
        <span aria-hidden="true">&#8594;</span>
      </ArrowButton>
    </BG>
  );
}

export default DeliLogoP;