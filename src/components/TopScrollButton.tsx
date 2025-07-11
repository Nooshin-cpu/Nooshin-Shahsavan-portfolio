import React from 'react';

const TopScrollButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') scrollToTop();
      }}
      aria-label="Scroll to top"
      style={{
        width: 56,
        height: 56,
        background: '#fff',
        border: '2.5px solid #000',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
        transition: 'background 0.18s, border-color 0.18s, transform 0.18s',
        margin: '0 8px',
      }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="13" stroke="black" strokeWidth="2.5" fill="white" />
        <polyline points="9,17 14,12 19,17" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default TopScrollButton; 