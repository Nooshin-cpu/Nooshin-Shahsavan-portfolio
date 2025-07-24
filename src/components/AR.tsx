import React from 'react';
import vrVideo from '../assets/fun/vr.mp4';

const styles = `
.ar-section {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto 2rem auto;
  padding: 2.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ar-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: rgb(249, 249, 249);
  margin-bottom: 2.2rem;
  letter-spacing: 0.04em;
  text-align: center;
}
.ar-video-container {
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  background: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(60,60,90,0.07);
}
.ar-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 900px) {
  .ar-video-container {
    max-width: 98vw;
  }
}
@media (max-width: 600px) {
  .ar-title {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .ar-video-container {
    border-radius: 7px;
  }
}
`;

const AR: React.FC = () => (
  <section className="ar-section">
    <style>{styles}</style>
    <div className="ar-title">AR/VR</div>
    <div className="ar-video-container">
      <video 
        src={vrVideo} 
        controls 
        playsInline 
        className="ar-video"
        style={{background:'#000'}}
      />
    </div>
  </section>
);

export default AR; 