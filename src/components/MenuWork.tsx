import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MenuWork.css';
import sbsImg from '../assets/sbsimg/s-88.png';
import deliImg from '../assets/deli/deli9.jpg';
import veenImg from '../assets/veen/mveen5.png';
import zarImg from '../assets/zar/box-2.jpg';
import workdayImg from '../assets/work/workday-phone.png';
import foodImg from '../assets/food/foodhome.png';
import funImg from '../assets/fun/funhome.jpg';

interface WorkItem {
  image: string;
  link: string;
  description: string;
  alt: string;
}

const workItems: WorkItem[] = [
  {
    image: sbsImg,
    link: '/work/sbs',
    description: 'SBS',
    alt: 'SBS Work',
  },
  {
    image: deliImg,
    link: '/work/delicato',
    description: 'Delicato',
    alt: 'Deli Project',
  },
  {
    image: veenImg,
    link: '/work/veen',
    description: 'Veen',
    alt: 'Veen Shop',
  },
  {
    image: zarImg,
    link: '/work/zar',
    description: 'Zar',
    alt: 'Zar Gallery',
  },
  {
    image: workdayImg,
    link: '/work/workday',
    description: 'Workday App',
    alt: 'Workday App',
  },
  {
    image: foodImg,
    link: '/work/UX-UI-2',
    description: 'SaveFood App',
    alt: 'saveFood App',
  },
  {
    image: funImg,
    link: '/work/FUN PROJECT',
    description: 'FUN PROJ',
    alt: 'FUN PROJECTS',
  },
];

const MenuWork: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Find the index of the current page (if any)
  const currentIdx = workItems.findIndex(
    (item) => location.pathname.startsWith(item.link)
  );

  // Move the current page's cube to the front
  const orderedItems =
    currentIdx > -1
      ? [workItems[currentIdx], ...workItems.filter((_, i) => i !== currentIdx)]
      : workItems;

  const handleCubeClick = (link: string) => {
    navigate(link);
    setOpen(false); // close menu on navigation
    window.scrollTo(0, 0);
  };

  return (
    <div className="menu-work-container">
      <h2 className="menu-work-title">Choose Next work to see</h2>
      {/* Hamburger button for mobile */}
      <button
        className={`menu-hamburger${open ? ' open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="menu-work-overlay"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      {/* Overlay menu for mobile */}
      <div
        id="menu-work-overlay"
        className={`menu-work-overlay${open ? ' show' : ''}`}
        tabIndex={-1}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div className="menu-work-overlay-content" onClick={e => e.stopPropagation()}>
          <div className="menu-work-overlay-scroll-fade">
            <div className="menu-work-grid">
              {orderedItems.map((item, idx) => (
                <div
                  key={item.link}
                  className={`menu-work-cube${idx === 0 ? ' active' : ''}`}
                  onClick={() => handleCubeClick(item.link)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Go to ${item.alt}`}
                >
                  <div className="menu-work-img-wrapper">
                    <img src={item.image} alt={item.alt} className="menu-work-img" />
                    <div className="menu-work-desc">
                      <span>{item.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Desktop grid (always visible) */}
      <div className="menu-work-grid desktop-only">
        {orderedItems.map((item, idx) => (
          <div
            key={item.link}
            className={`menu-work-cube${idx === 0 ? ' active' : ''}`}
            onClick={() => handleCubeClick(item.link)}
            tabIndex={0}
            role="button"
            aria-label={`Go to ${item.alt}`}
          >
            <div className="menu-work-img-wrapper">
              <img src={item.image} alt={item.alt} className="menu-work-img" />
              <div className="menu-work-desc">
                <span>{item.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="menu-work-top-btn"
        title="Scroll to top"
        tabIndex={0}
        role="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      >
        <span className="menu-work-top-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="2.5" fill="black" />
            <polyline points="9,17 14,12 19,17" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MenuWork;