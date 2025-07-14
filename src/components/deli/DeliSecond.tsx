import React from "react";
import styled from "styled-components";
import video from "../../assets/deli/deli2.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 900px) {
    height: auto;
    padding: 18px 0 12px 0;
    margin: 0;
  }
  @media (max-width: 600px) {
    height: auto;
    padding: 8px 0 4px 0;
    margin: 0;
  }
`;

const VideoContainer = styled.div`
  width: 70vw;
  max-width: 1100px;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 100vw;
    max-width: 100vw;
    aspect-ratio: 16/9;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    aspect-ratio: 16/9;
    margin-bottom: 1.2rem;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: block;
  box-sizing: border-box;
`;

const FullWrapper = styled.div`
  width: 100%;
  height: 100vh;
  // ... existing styles ...
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 2.2rem auto 2.2rem auto;
  text-align: center;
`;

const AccentLine = styled.div`
  color: #b48a3b;
  font-size: 1.02rem;
  margin: 1.5rem auto 0 auto;
  text-align: center;
  letter-spacing: 0.01em;
  width: auto;
  white-space: nowrap;
  overflow-x: auto;
`;

const DeliSecond: React.FC = () => (
  <Section>
    <FullWrapper>
    <VideoContainer>
      <StyledVideo
        src={video}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        aria-label="Delicato video"
      />
    </VideoContainer>
      <Description>
        This project was a rewarding opportunity to combine my passion for art history with design. It allowed me to revisit favorite references like Art Through the Ages by Helen Gardner and The Story of Art by Ernst Gombrich.For this project, I was responsible for developing the entire brand identity from logo, color palette, and typography to final mockups.
      </Description>
      <AccentLine>
        Aim➝ Inspiration from classical Roman architecture ➝ Timeless brand identity ➝ Blend of historical elegance and modern design
      </AccentLine>
    </FullWrapper>
  </Section>
);

export default DeliSecond; 