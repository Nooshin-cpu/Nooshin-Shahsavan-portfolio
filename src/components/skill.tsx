import React from "react";
import afterPng from '../assets/about/after.png';
import indesignPng from '../assets/about/indesign.png';
import illustratorPng from '../assets/about/illustrator.png';
import photoshopPng from '../assets/about/photoshop.png';
import prePng from '../assets/about/pre.png';
import figmaPng from '../assets/about/figma.png';
import reactPng from '../assets/about/react.png';
import htmlPng from '../assets/about/html.png';
import cssPng from '../assets/about/css.png';
import excelPng from '../assets/about/excel.png';
import wordPng from '../assets/about/word.png';
import powerPng from '../assets/about/power.png';

// All icon paths relative to /src/assets/about/
const skillIcons = [
  { src: afterPng, alt: "After Effects" },      // 1 (adobe)
  { src: indesignPng, alt: "InDesign" },        // 2 (adobe)
  { src: illustratorPng, alt: "Illustrator" },  // 3 (adobe)
  { src: photoshopPng, alt: "Photoshop" },      // 4 (adobe)
  { src: prePng, alt: "Premiere" },             // 5 (adobe)
  { src: figmaPng, alt: "Figma" },              // 6 (not used in this layout)
  { src: reactPng, alt: "React" },              // 7 (smallest)
  { src: htmlPng, alt: "HTML" },                // 8 (smallest)
  { src: cssPng, alt: "CSS" },                  // 9 (smallest)
  { src: excelPng, alt: "Excel" },              // 10 (second)
  { src: wordPng, alt: "Word" },                // 11 (second)
  { src: powerPng, alt: "PowerPoint" },         // 12 (second)
];

// Circle groupings
const adobeIdxs = [0, 1, 2, 3, 4, 5];         // 6 icons, biggest circle
const officeIdxs = [10, 9, 11];            // Excel, CSS, Word (see below)
const codeIdxs = [7, 8, 6];                // HTML, CSS, React (see below)

// Make the circles smaller
const OUTER_RADIUS = 240;
const MIDDLE_RADIUS = 160;
const INNER_RADIUS = 80;

// Helper to distribute icons around a circle (returns angle in degrees)
function getCircleAngles(count: number, rotate: number = 0) {
  return Array(count)
    .fill(0)
    .map((_, i) => ((360 / count) * i + rotate));
}

const SkillBubbles: React.FC = () => {
  // Angles for each group
  const adobeAngles = getCircleAngles(adobeIdxs.length, -90);
  const officeAngles = getCircleAngles(officeIdxs.length, 0);
  const codeAngles = getCircleAngles(codeIdxs.length, 0);

  return (
    <div className="skill-bubbles-outer">
      <h2 className="skills-title">My Skills</h2>
      {/* Orbits */}
      <div className="orbit orbit-outer" />
      <div className="orbit orbit-middle" />
      <div className="orbit orbit-inner" />
      {/* Adobe icons (outer) */}
      {adobeIdxs.map((idx, i) => (
        <div
          className="orbit-parent orbit-parent-outer"
          key={skillIcons[idx].src}
          style={{
            '--orbit-radius': `${OUTER_RADIUS}px`,
            '--orbit-rotate': `${adobeAngles[i]}deg`,
            '--orbit-dur': '38s',
            zIndex: 3,
          } as React.CSSProperties}
        >
          <div className="bubble">
            <img
              src={skillIcons[idx].src}
              alt={skillIcons[idx].alt}
              className="bubble-img"
              draggable={false}
            />
          </div>
        </div>
      ))}
      {/* Office icons (middle) */}
      {officeIdxs.map((idx, i) => (
        <div
          className="orbit-parent orbit-parent-middle"
          key={skillIcons[idx].src}
          style={{
            '--orbit-radius': `${MIDDLE_RADIUS}px`,
            '--orbit-rotate': `${officeAngles[i]}deg`,
            '--orbit-dur': '48s',
            zIndex: 3,
          } as React.CSSProperties}
        >
          <div className="bubble">
            <img
              src={skillIcons[idx].src}
              alt={skillIcons[idx].alt}
              className="bubble-img"
              draggable={false}
            />
          </div>
        </div>
      ))}
      {/* Code icons (inner) */}
      {codeIdxs.map((idx, i) => (
        <div
          className="orbit-parent orbit-parent-inner"
          key={skillIcons[idx].src}
          style={{
            '--orbit-radius': `${INNER_RADIUS}px`,
            '--orbit-rotate': `${codeAngles[i]}deg`,
            '--orbit-dur': '60s',
            zIndex: 3,
          } as React.CSSProperties}
        >
          <div className="bubble">
            <img
              src={skillIcons[idx].src}
              alt={skillIcons[idx].alt}
              className="bubble-img"
              draggable={false}
            />
          </div>
        </div>
      ))}
      <style>{`
.skill-bubbles-outer {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  overflow-x: hidden;
  background: #191c24;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10%;
  z-index: 1;
}
@media (max-width: 900px) {
  .skill-bubbles-outer {
    height: 80vh;
    min-height: 600px;
  }
}
@media (max-width: 600px) {
  .skill-bubbles-outer {
    height: 70vh;
    min-height: 500px;
  }
}
.skills-title {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 3rem;
  letter-spacing: 0.08em;
  z-index: 10;
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  margin-bottom: 2rem;
}
@media (max-width: 900px) {
  .skills-title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    top: 10%;
  }
}
@media (max-width: 600px) {
  .skills-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    top: 12%;
  }
}
.orbit {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.3);
  opacity: 0.9;
  background: none;
  box-sizing: border-box;
}
.orbit-outer {
  width: 480px; height: 480px;
  border-width: 2.4px;
  max-width: 80vw;
  max-height: 80vw;
}
.orbit-middle {
  width: 320px; height: 320px;
  border-width: 1.8px;
  max-width: 60vw;
  max-height: 60vw;
}
.orbit-inner {
  width: 160px; height: 160px;
  border-width: 1.2px;
  max-width: 40vw;
  max-height: 40vw;
}
@media (max-width: 900px) {
  .orbit-outer { width: 300px; height: 300px; }
  .orbit-middle { width: 200px; height: 200px; }
  .orbit-inner { width: 100px; height: 100px; }
}
@media (max-width: 600px) {
  .orbit-outer { width: 160px; height: 160px; }
  .orbit-middle { width: 100px; height: 100px; }
  .orbit-inner { width: 50px; height: 50px; }
}
.orbit-parent {
  position: absolute;
  left: 50%; top: 50%;
  width: 0; height: 0;
  /* Animate orbit */
  transform: translate(-50%, -50%) rotate(var(--orbit-rotate, 0deg));
  /* Animate: rotate around center */
  animation: orbit-rotate-parent var(--orbit-dur, 60s) linear infinite;
  transform-origin: center center;
  z-index: 2;
}
.orbit-parent-outer { animation-direction: normal;}
.orbit-parent-middle { animation-direction: reverse;}
.orbit-parent-inner { animation-direction: normal;}
@keyframes orbit-rotate-parent {
  100% { transform: translate(-50%, -50%) rotate(360deg);}
}
/* Place icon at edge of orbit */
.bubble {
  position: absolute;
  left: 0; top: 0;
  width: 80px; height: 80px;
  border-radius: 50%;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  display: flex; align-items: center; justify-content: center;
  background: rgba(40, 40, 40, 0.9);
  /* Move to orbit radius */
  transform: translateX(var(--orbit-radius, 0px));
  /* Bubble float effect */
  animation: bubble-float 3.8s ease-in-out infinite alternate;
  transition: box-shadow 0.25s, background 0.3s;
  cursor: pointer;
  will-change: transform, box-shadow, background;
  z-index: 3;
}
@media (max-width: 900px) {
  .bubble { width: 48px; height: 48px; }
}
@media (max-width: 600px) {
  .bubble { width: 28px; height: 28px; }
}
.bubble-img {
  width: 70%;
  height: 70%;
  object-fit: contain;
  pointer-events: none;
}
@keyframes bubble-float {
  0% { scale: 1; }
  30% { scale: 1.08; }
  60% { scale: 0.96;}
  100% { scale: 1;}
}
.bubble:hover {
  box-shadow: 0 16px 48px 0 rgba(255, 255, 255, 0.2), 0 2px 16px 0 rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg,rgb(54, 230, 236) 0%,rgb(69, 158, 160) 100%);
  transition: background 0.6s, box-shadow 0.3s;
}
      `}</style>
    </div>
  );
};

export default SkillBubbles;