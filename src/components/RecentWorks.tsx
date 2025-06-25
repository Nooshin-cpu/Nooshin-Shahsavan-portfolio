import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sbsHomeVideo from '../assets/home/sbs-home.mp4';
import deli12Img from '../assets/home/deli12.jpg';
import veenHomeVideo from '../assets/home/veen-home.mp4';
import workdayPhoneImg from '../assets/work/workday-phone.png';

// Images and videos should be placed in src/assets/home
const items = [
  {
    type: "video",
    src: sbsHomeVideo,
    label: "Branding",
    
    details: [
      { label: "Role", value: "Brand Designer" },
      { label: "Tools", value: "Adobe Illustrator, Photoshop" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    type: "image",
    src: deli12Img,
    label: "Branding",
    
    details: [
      { label: "Role", value: "Brand Designer" },
      { label: "Tools", value: "Adobe Illustrator, Photoshop" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    type: "image",
    src: workdayPhoneImg,
    label: "Branding",
    
    details: [
      { label: "Role", value: "Brand Designer" },
      { label: "Tools", value: "Adobe Illustrator, Photoshop" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    type: "video",
    src: veenHomeVideo,
    label: "Branding",
    
    details: [
      { label: "Role", value: "Brand Designer" },
      { label: "Tools", value: "Adobe Illustrator, Photoshop" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Year", value: "2024" },
    ],
  },
];

const styles = `
.recent-works-title {
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: -0.02em;
}
.recent-works-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 0;
}
.work-item {
  position: relative;
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 200px;
}
.work-label {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  font-size: 1rem;
  font-weight: 400;
  color: #222;
  letter-spacing: 0.04em;
  background: transparent;
  pointer-events: none;
}
.work-media-container {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.work-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.work-item:hover .work-media {
  transform: scale(1.05);
}
.center-main-text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2.5rem;
  transform: translate(-50%, -50%);
  color: #222;
  opacity: 1;
  z-index: 1;
  font-weight: 400;
  pointer-events: none;
  letter-spacing: 0.01em;
}
.work-info-box {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  background: #fff;
  border-radius: 8px;
  padding: 16px 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  font-size: 1rem;
  z-index: 2;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.2s;
}
.work-info-box span {
  display: block;
  margin-bottom: 2px;
  font-size: 1rem;
}
.work-info-box span b {
  font-weight: 700;
}
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  z-index: 10;
}
.overlay-content {
  opacity: 0;
  transition: opacity 0.5s 0.25s;
  color: #222;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  padding: 30px 30px;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
}
.work-item:hover .overlay,
.work-item:focus-within .overlay {
  opacity: 1;
  pointer-events: auto;
}
.work-item:hover .overlay-content,
.work-item:focus-within .overlay-content {
  opacity: 1;
}
.work-item:hover .work-info-box,
.work-item:focus-within .work-info-box {
  display: none;
}
.work-media.workday-fit {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background: #fff;
  padding: 10%;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}
.work-item:hover .work-media.workday-fit {
  transform: scale(1.05);
}
`;

const detailsToString = (details: { label: string, value: string }[]) => (
  <>
    <span><b>Role:</b> {details[0].value}</span>
    <span><b>Tools:</b> {details[1].value}</span>
    <span><b>Timeline:</b> {details[2].value}</span>
    <span><b>Year:</b> {details[3].value}</span>
  </>
);

const overlayToString = (details: { label: string, value: string }[]) => (
  <div>
    <div><b>Role:</b> {details[0].value}</div>
    <div><b>Tools:</b> {details[1].value}</div>
    <div><b>Timeline:</b> {details[2].value}</div>
    <div><b>Year:</b> {details[3].value}</div>
  </div>
);

const RecentWorks: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <style>{styles}</style>
      <motion.div 
        className="recent-works-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top left: SBS */}
        <motion.div variants={itemVariants}>
          <Link to="/work/sbs" className="work-item" tabIndex={0}>
            <div className="work-label">{items[0].label}</div>
            <div className="work-media-container">
              {items[0].type === "image" ? (
                <img src={items[0].src} alt={items[0].label} className="work-media" />
              ) : (
                <video
                  src={items[0].src}
                  className="work-media"
                  controls={false}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </div>
            <div className="overlay">
              <div className="overlay-content">
                {overlayToString(items[0].details)}
              </div>
            </div>
          </Link>
        </motion.div>
        
        {/* Top right: Delicato */}
        <motion.div variants={itemVariants}>
          <Link to="/work/delicato" className="work-item" tabIndex={0}>
            <div className="work-label">{items[1].label}</div>
            <div className="work-media-container">
              {items[1].type === "image" ? (
                <img src={items[1].src} alt={items[1].label} className="work-media" />
              ) : (
                <video
                  src={items[1].src}
                  className="work-media"
                  controls={false}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </div>
            <div className="overlay">
              <div className="overlay-content">
                {overlayToString(items[1].details)}
              </div>
            </div>
          </Link>
        </motion.div>
        
        {/* Bottom left: Workday */}
        <motion.div variants={itemVariants}>
          <Link to="/work/workday" className="work-item" tabIndex={0}>
            <div className="work-label">{items[2].label}</div>
            <div className="work-media-container">
              {items[2].type === "image" ? (
                <img
                  src={items[2].src}
                  alt={items[2].label}
                  className="work-media workday-fit"
                />
              ) : (
                <video
                  src={items[2].src}
                  className="work-media"
                  controls={false}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </div>
            <div className="overlay">
              <div className="overlay-content">
                {overlayToString(items[2].details)}
              </div>
            </div>
          </Link>
        </motion.div>
        
        {/* Bottom right: Veen */}
        <motion.div variants={itemVariants}>
          <Link to="/work/veen" className="work-item" tabIndex={0}>
            <div className="work-label">{items[3].label}</div>
            <div className="work-media-container">
              {items[3].type === "image" ? (
                <img src={items[3].src} alt={items[3].label} className="work-media" />
              ) : (
                <video
                  src={items[3].src}
                  className="work-media"
                  controls={false}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </div>
            <div className="overlay">
              <div className="overlay-content">
                {overlayToString(items[3].details)}
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default RecentWorks;