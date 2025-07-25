import React from 'react';
import animation2dVideo from '../assets/fun/2d.mp4';

const styles = `
.animation2d-section {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto 2rem auto;
  padding: 2.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.animation2d-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: rgb(249, 249, 249);
  margin-bottom: 2.2rem;
  letter-spacing: 0.04em;
  text-align: center;
}
.animation2d-video-container {
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  background: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(60,60,90,0.07);
}
.animation2d-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 900px) {
  .animation2d-video-container {
    max-width: 98vw;
  }
}
@media (max-width: 600px) {
  .animation2d-title {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .animation2d-video-container {
    border-radius: 7px;
  }
}
`;

const Animation2D: React.FC = () => (
  <section className="animation2d-section">
    <style>{styles}</style>
    <div className="animation2d-title">2D Animation</div>
    <div className="animation2d-video-container">
      <video 
        src={animation2dVideo} 
        controls 
        className="animation2d-video"
        controlsList="nodownload"
      />
    </div>
  </section>
);

export default Animation2D; 