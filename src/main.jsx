// FILE: src/main.jsx
// Description: Entry point of the React application for Vite.
// It imports global styles and renders the main App component.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Import global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);