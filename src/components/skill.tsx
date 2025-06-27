import React from "react";

// All icon paths relative to /src/assets/about/
const skillIcons = [
  { src: "after.png", alt: "After Effects" },      // 1 (adobe)
  { src: "indesign.png", alt: "InDesign" },        // 2 (adobe)
  { src: "illustrator.png", alt: "Illustrator" },  // 3 (adobe)
  { src: "photoshop.png", alt: "Photoshop" },      // 4 (adobe)
  { src: "pre.png", alt: "Premiere" },             // 5 (adobe)
  { src: "figma.png", alt: "Figma" },              // 6 (not used in this layout)
  { src: "react.png", alt: "React" },              // 7 (smallest)
  { src: "html.png", alt: "HTML" },                // 8 (smallest)
  { src: "css.png", alt: "CSS" },                  // 9 (smallest)
  { src: "excel.png", alt: "Excel" },              // 10 (second)
  { src: "word.png", alt: "Word" },                // 11 (second)
  { src: "power.png", alt: "PowerPoint" },         // 12 (second)
];

// Circle groupings
const adobeIdxs = [0, 1, 2, 3, 4, 5];         // 6 icons, biggest circle
const officeIdxs = [10, 9, 11];            // Excel, CSS, Word (see below)
const codeIdxs = [7, 8, 6];                // HTML, CSS, React (see below)

// Make the circles bigger
const OUTER_RADIUS = 340;
const MIDDLE_RADIUS = 220;
const INNER_RADIUS = 110;

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
              src={`/src/assets/about/${skillIcons[idx].src}`}
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
              src={`/src/assets/about/${skillIcons[idx].src}`}
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
              src={`/src/assets/about/${skillIcons[idx].src}`}
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
  width: 100vw;
  height: 120vh;
  min-height: 1100px;
  overflow: hidden;
  background: #191c24;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
@media (max-width: 900px) {
  .skill-bubbles-outer {
    height: 90vh;
    min-height: 600px;
  }
}
@media (max-width: 600px) {
  .skill-bubbles-outer {
    height: 70vh;
    min-height: 400px;
  }
}
.skills-title {
  position: absolute;
  top: 3.5%;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 2.8rem;
  letter-spacing: 0.08em;
  z-index: 10;
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  pointer-events: none;
}
@media (max-width: 900px) {
  .skills-title {
    font-size: 2rem;
  }
}
@media (max-width: 600px) {
  .skills-title {
    font-size: 1.2rem;
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
  width: 680px; height: 680px;
  border-width: 3.2px;
}
.orbit-middle {
  width: 440px; height: 440px;
  border-width: 2.2px;
}
.orbit-inner {
  width: 220px; height: 220px;
  border-width: 1.6px;
}
@media (max-width: 900px) {
  .orbit-outer { width: 420px; height: 420px; }
  .orbit-middle { width: 270px; height: 270px; }
  .orbit-inner { width: 120px; height: 120px; }
}
@media (max-width: 600px) {
  .orbit-outer { width: 220px; height: 220px; }
  .orbit-middle { width: 140px; height: 140px; }
  .orbit-inner { width: 60px; height: 60px; }
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
  width: 112px; height: 112px;
  border-radius: 50%;
  box-shadow: 0 10px 44px 0 rgba(0, 0, 0, 0.5);
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
  .bubble { width: 64px; height: 64px; }
}
@media (max-width: 600px) {
  .bubble { width: 36px; height: 36px; }
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