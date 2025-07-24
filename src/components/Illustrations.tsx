import React from 'react';
import g4 from '../assets/fun/g4.jpg';
import g2 from '../assets/fun/g2.jpg';
import g1 from '../assets/fun/g1.png';
import p1 from '../assets/fun/p1.png';
import p2 from '../assets/fun/p2.jpg';
import g3 from '../assets/fun/g3.png';

const styles = `
.illustrations-section {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto 1rem auto;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.illustrations-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: rgb(249, 249, 249);
  margin-bottom: 3.2rem;
  letter-spacing: 0.04em;
  text-align: center;
}
.illustrations-grid {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 900px;
}
.illustrations-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}
.illustration-item {
  width: 100%;
  aspect-ratio: 1/1.5;
  background: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(60,60,90,0.07);
  position: relative;
}
.illustration-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.illustration-text {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  z-index: 2;
}
@media (max-width: 900px) {
  .illustrations-grid {
    max-width: 98vw;
    gap: 0.7rem;
  }
  .illustrations-row {
    gap: 0.7rem;
  }
}
@media (max-width: 600px) {
  .illustrations-title {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .illustrations-grid {
    gap: 0.5rem;
  }
  .illustrations-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .illustration-item {
    border-radius: 7px;
  }
  .illustration-text {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
}
`;

const Illustrations: React.FC = () => (
  <section className="illustrations-section">
    <style>{styles}</style>
    <div className="illustrations-title">Illustrations and Graphics</div>
    <div className="illustrations-grid">
      {/* Row 1 */}
      <div className="illustrations-row">
        <div className="illustration-item">
          <img src={g4} alt="Illustration 1" />
        </div>
        <div className="illustration-item">
          <img src={g3} alt="Illustration 2" />
        </div>
      </div>
      
      {/* Row 2 */}
      <div className="illustrations-row">
        <div className="illustration-item">
          <img src={g1} alt="Illustration 3" />
        </div>
        <div className="illustration-item">
          <img src={g2} alt="Illustration 4" />
        </div>
      </div>
      
      {/* Row 3 */}
      <div className="illustrations-row">
        <div className="illustration-item">
          <img src={p2} alt="Before" />
          <div className="illustration-text">Before</div>
        </div>
        <div className="illustration-item">
          <img src={p1} alt="After" />
          <div className="illustration-text">After</div>
        </div>
      </div>
    </div>
  </section>
);

export default Illustrations; 