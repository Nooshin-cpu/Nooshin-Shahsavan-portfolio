import React from "react";
import styled from "styled-components";

// Import only the specific images for the carousel
import img1 from '../../assets/sbsimg/s1.png';
import img2 from '../../assets/sbsimg/s2.png';
import img3 from '../../assets/sbsimg/s3.png';
import img4 from '../../assets/sbsimg/s4.png';
import img5 from '../../assets/sbsimg/8s.png';


const images = [img1, img2, img3, img4, img5, ];

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
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
  width: 280px;
  height: 280px;
  background: #fff;
  border-radius: 1.2rem;
  border: 2px solid #e4572e;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  flex: 0 0 auto;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
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

const Img = styled.img`  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const Highlight = styled.span`
  color: #e4572e;
  font-weight: 400;
`;

function SbsLogoP() {
  return (
    <MinimalSection>
      <Title>Logo Design Process</Title>
      <Description>Exploring logo concepts and refinements.</Description>
      <Description>
        I noticed a natural <Highlight>connection</Highlight> between the shape of the body and the <Highlight>curves</Highlight> of the letter <Highlight>"S"</Highlight>, which led me to explore how movement could be integrated into the typography. Using the motion and energy from the image, I stylized the letters <Highlight>S.B.S</Highlight> into a unified, dynamic form. The final logo features curved lines that suggest motion and emotional freedom, making the mark feel alive and expressive.
      </Description>
      <Description>
        The result is a logo that combines all three <Highlight>brand initials</Highlight> (<Highlight>S.B.S</Highlight>) into a single, fluid design that works seamlessly across clothing graphics and brand applications.
      </Description>
        <ImagesRow>
        {images.map((img, idx) => (
            <ImgCard key={img + idx}>
            <Img src={img} alt={`logo-process-${idx}`} loading="lazy" />
            </ImgCard>
          ))}
        </ImagesRow>
    </MinimalSection>
  );
}

export default SbsLogoP;
