import React from 'react';
import videoSrc from '../assets/fun/straw1.MP4';
import img2 from '../assets/fun/funhome.jpg';
import img3 from '../assets/fun/straw3.png';
import img4 from '../assets/fun/straw4.jpg';
import img5 from '../assets/fun/straw5.png';
import CustomVideoPlayer from './CustomVideoPlayer';

const styles = `
.photography-section {
  width: 100vw;
  height: 200vh;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0.8rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photography-title {
  font-size: 3.5rem;
  font-weight: 700;
  color:rgb(249, 249, 249);
  margin-bottom: 1.5rem;
  letter-spacing: 0.04em;
  text-align: center;
}
.photography-description {
  font-size: 1.1rem;
  color: rgb(249, 249, 249);
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
  max-width: 600px;
  opacity: 0.9;
}
.photography-subtitle {
  font-size: 2.5rem;
  font-weight: 600;
  color: rgb(249, 249, 249);
  margin-bottom: 2.5rem;
  letter-spacing: 0.03em;
  text-align: center;
  opacity: 0.95;
}
.photo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.2rem;
  width: 100%;
  max-width: 900px;
}
.photo-grid-row2 {
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}
.photo-item {
  width: 100%;
  aspect-ratio: 4/3;
  background: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(60,60,90,0.07);
}
.photo-item.upper-row {
  aspect-ratio: 1/1.5;
}
.photo-item img, .photo-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 900px) {
  .photo-grid {
    max-width: 98vw;
    gap: 0.7rem;
  }
  .photo-grid-row2 {
    gap: 0.7rem;
  }
}
@media (max-width: 600px) {
  .photography-title {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .photo-grid {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 0.5rem;
  }
  .photo-grid-row2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  .photo-item {
    border-radius: 7px;
  }
}
`;

const Photography: React.FC = () => (
  <section className="photography-section">
    <style>{styles}</style>
    <h1 className="photography-title">School Projects</h1>
    <p className="photography-description">
      These are all school projects that showcase my interests and creative work. I'm excited to share some of my favorite pieces with you.
    </p>
    <h2 className="photography-subtitle">Photography</h2>
    <div className="photo-grid">
      <div className="photo-item upper-row">
        <CustomVideoPlayer src={videoSrc} />
      </div>
      <div className="photo-item upper-row">
        <img src={img2} alt="Straw 1" />
      </div>
      <div className="photo-grid-row2">
        <div className="photo-item"><img src={img2} alt="Straw 2" /></div>
        <div className="photo-item"><img src={img3} alt="Straw 3" /></div>
        <div className="photo-item"><img src={img4} alt="Straw 4" /></div>
        <div className="photo-item"><img src={img5} alt="Straw 5" /></div>
      </div>
    </div>
  </section>
);

export default Photography; 