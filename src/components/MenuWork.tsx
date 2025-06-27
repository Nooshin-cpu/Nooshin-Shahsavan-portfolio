import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MenuWork.css';

interface WorkItem {
  image: string;
  link: string;
  description: string;
  alt: string;
}

const workItems: WorkItem[] = [
  {
    image: '/src/assets/sbsimg/s-88.png',
    link: '/work/sbs',
    description: 'SBS: Innovative branding & design solutions.',
    alt: 'SBS Work',
  },
  {
    image: '/src/assets/deli/deli9.jpg',
    link: '/work/delicato',
    description: 'Deli: Modern restaurant web experience.',
    alt: 'Deli Project',
  },
  {
    image: '/src/assets/veen/mveen5.png',
    link: '/work/veen',
    description: 'Veen: E-commerce for sustainable products.',
    alt: 'Veen Shop',
  },
  {
    image: '/src/assets/zar/box-2.jpg',
    link: '/work/zar',
    description: 'Zar: Artistic visual design gallery.',
    alt: 'Zar Gallery',
  },
  {
    image: '/src/assets/work/workday-phone.png',
    link: '/work/workday',
    description: 'Workday: Employee self-service portal.',
    alt: 'Workday App',
  },
  {
    image: '/src/assets/project6.png',
    link: '/work/project6',
    description: 'Project 6: Description here.',
    alt: 'Project 6',
  },
  {
    image: '/src/assets/project6.png',
    link: '/work/project6',
    description: 'Project 6: Description here.',
    alt: 'Project 6',
  },
];

const MenuWork: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    // Scroll to top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className="menu-work-container">
      <h2 className="menu-work-title">Choose Next work to see</h2>
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