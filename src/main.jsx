import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18+
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');  // Get the root element
const root = createRoot(rootElement);  // Create the root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
