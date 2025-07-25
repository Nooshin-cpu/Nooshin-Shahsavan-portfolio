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

interface MenuWorkProps {
  titleColor?: string;
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
    link: '/work/fun',
    description: 'School Projects',
    alt: 'School Projects',
  },
];

const MenuWork: React.FC<MenuWorkProps> = ({ titleColor = '#000000' }) => {
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
      <h2 className="menu-work-title" style={{ color: titleColor }}>Next Project</h2>
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
      {/* Removed scroll-to-top button */}
    </div>
  );
};

export default MenuWork;