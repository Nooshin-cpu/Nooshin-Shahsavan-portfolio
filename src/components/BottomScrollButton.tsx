import React from 'react';

const BottomScrollButton: React.FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
    document.body.scrollTop = document.body.scrollHeight;
  };

  return (
    <button
      onClick={scrollToBottom}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') scrollToBottom();
      }}
      aria-label="Scroll to bottom"
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
        <polyline points="9,11 14,16 19,11" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default BottomScrollButton; 