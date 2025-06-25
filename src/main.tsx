import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Remove any existing root element if it exists
const existingRoot = document.getElementById('root');
if (existingRoot) {
  existingRoot.innerHTML = '';
}

// Create new root and render app
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 