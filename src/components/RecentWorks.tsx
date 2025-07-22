import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import sbsHomeVideo from '../assets/home/sbs-home.mp4';
import deli12Img from '../assets/home/deli12.jpg';
import veenHomeVideo from '../assets/home/veen-home.mp4';
import box2Img from '../assets/zar/box-2.jpg';

// Images and videos should be placed in src/assets/home
const items = [
  {
    type: "video",
    src: sbsHomeVideo,
    label: "Branding/Print",
    
    details: [
      { label: "Project Title:", value: "S.B.S" },
      { label: "Description:", value: " S.B.S is a clothing brand based in Vancouver. Their goal is to design affordable fashion for partygoers. I designed their logo, print materials, and social media visuals. " },
      { label: "Timeline", value: "3 weeks" },
      { label: "Year", value: "2023" },
    ],
  },
  {
    type: "image",
    src: deli12Img,
    label: "Branding",
    
    details: [
      { label: "Project Title:", value: "Delicato" },
      { label: "Description:", value: "Delicato is a small interior design company from Italy that relies on classical architecture in its designs. " },
      { label: "Timeline", value: "2 weeks" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    type: "image",
    src: box2Img,
    label: "Branding",
    
    details: [
      { label: "Project Title:", value: "Zar" },
      { label: "Description:", value: "Zar is an Iranian saffron product that started its activity in 1988. I worked on their branding and packaging design." },
      { label: "Timeline", value: "2 weeks" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    type: "video",
    src: veenHomeVideo,
    label: "Branding",
    
    details: [
      { label: "Project Title", value: "Veen " },
      { label: "Description:", value: "Veen is a photography studio based in Vancouver, targeting families and children. I handled their social media and branding." },
      { label: "Timeline", value: "2 weeks" },
      { label: "Year", value: "2024" },
    ],
  },
];

const styles = `
.recent-works-title {
  font-size: 2.8rem;
  color: #ffffff;
  margin-top: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: 'Montserrat', 'Arial', sans-serif;
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
@media (max-width: 900px) {
  .recent-works-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 24px;
    padding: 24px 0;
  }
  .recent-works-title {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }
}
@media (max-width: 600px) {
  .recent-works-grid {
    gap: 16px;
    padding: 12px 0;
  }
  .work-item {
    min-width: 0;
    border-radius: 6px;
  }
  .recent-works-title {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
  }
  .work-label {
    font-size: 0.85rem;
    top: 10px;
    left: 10px;
  }
  .work-info-box {
    font-size: 0.85rem;
    padding: 10px 10px;
    left: 8px;
    right: 8px;
    bottom: 8px;
  }
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
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
}
.work-item:hover {
  box-shadow: 0 12px 60px rgba(0,0,0,0.3);
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
  transform: scale(1.15);
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
  background: none;
  border-radius: 6px;
  border: none;
  box-shadow: none;
  padding: 6px 8px;
  font-size: 0.92rem;
  z-index: 2;
  pointer-events: auto;
  opacity: 1;
  transition: none;
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  color: #23243a;
  text-align: left;
  align-items: flex-end;
  justify-content: flex-end;
  letter-spacing: 0.01em;
}
@media (max-width: 600px) {
  .work-info-box {
    font-size: 0.78rem;
    padding: 4px 4px;
    gap: 0.3em;
  }
  .work-info-line {
    font-size: 0.78rem;
    max-width: 80px;
    padding: 1.5px 4px;
    border-radius: 4px;
  }
}
.work-info-box span {
  display: block;
  margin-bottom: 2px;
  font-size: 1rem;
}
.work-info-box span b {
  font-weight: 700;
}
.work-info-line {
  background: rgba(255,255,255,0.62);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-radius: 8px;
  border: 1.2px solid rgba(200,200,220,0.18);
  box-shadow: 0 1px 4px rgba(60,60,90,0.07), 0 0 0 1px rgba(255,255,255,0.13) inset;
  padding: 2px 12px;
  margin-bottom: 0;
  font-size: clamp(0.7rem, 2.5vw, 0.92rem);
  font-weight: 400;
}
@media (max-width: 600px) {
  .work-info-line {
    font-size: clamp(0.65rem, 3vw, 0.78rem);
    padding: 1.5px 7px;
    border-radius: 4px;
  }
}
.work-info-meta {
  display: flex;
  flex-direction: row;
  gap: 0.7em;
  margin-top: 2px;
}
@media (max-width: 600px) {
  .work-info-line {
    font-size: 0.85rem;
    max-width: 140px;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .work-info-meta {
    flex-direction: column;
    gap: 2px;
  }
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
  transform: scale(1.15);
}
.work-media.cover-fit {
  object-fit: cover !important;
  width: 100%;
  height: 100%;
  background: #fff;
}
`;

const overlayToString = (details: { label: string, value: string }[], link: string) => (
  <div style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.5' }}>
    <div><b>Project Title:</b> {details[0].value}</div>
    <div><b>Description:</b> {details[1].value}</div>
    <div><b>Timeline:</b> {details[2].value}</div>
    <div><b>Year:</b> {details[3].value}</div>
    <Link to={link} className="cta-button">
      View
      <span className="cta-arrow" aria-hidden="true">
        <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
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

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
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

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.4,
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
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.08}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="8px"
          >
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
              <div className="work-info-box">
                <div className="work-info-line"><b>Project Title:</b> {items[0].details[0].value}</div>
                <div className="work-info-line"><b>Timeline:</b> {items[0].details[2].value}</div>
                <div className="work-info-line"><b>Year:</b> {items[0].details[3].value}</div>
              </div>
            </Link>
          </Tilt>
        </motion.div>
        
        {/* Top right: Delicato */}
        <motion.div variants={itemVariants}>
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.08}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="8px"
          >
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
              <div className="work-info-box">
                <div className="work-info-line"><b>Project Title:</b> {items[1].details[0].value}</div>
                <div className="work-info-line"><b>Timeline:</b> {items[1].details[2].value}</div>
                <div className="work-info-line"><b>Year:</b> {items[1].details[3].value}</div>
              </div>
            </Link>
          </Tilt>
        </motion.div>
        
        {/* Bottom left: Workday */}
        <motion.div variants={itemVariants}>
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.08}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="8px"
          >
            <Link to="/work/zar" className="work-item" tabIndex={0}>
              <div className="work-label">{items[2].label}</div>
              <div className="work-media-container">
                {items[2].type === "image" ? (
                  <img
                    src={items[2].src}
                    alt={items[2].label}
                    className="work-media cover-fit"
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
              <div className="work-info-box">
                <div className="work-info-line"><b>Project Title:</b> {items[2].details[0].value}</div>
                <div className="work-info-line"><b>Timeline:</b> {items[2].details[2].value}</div>
                <div className="work-info-line"><b>Year:</b> {items[2].details[3].value}</div>
              </div>
            </Link>
          </Tilt>
        </motion.div>
        
        {/* Bottom right: Veen */}
        <motion.div variants={itemVariants}>
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.08}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="8px"
          >
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
              <div className="work-info-box">
                <div className="work-info-line"><b>Project Title:</b> {items[3].details[0].value}</div>
                <div className="work-info-line"><b>Timeline:</b> {items[3].details[2].value}</div>
                <div className="work-info-line"><b>Year:</b> {items[3].details[3].value}</div>
              </div>
            </Link>
          </Tilt>
        </motion.div>
      </motion.div>
    </>
  );
};

export default RecentWorks;