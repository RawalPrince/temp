import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Make sure React Router is imported
import App from './App'; // Ensure your App component is in the right location
import './styles/styles.css'; // Your styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Make sure there's a div with id "root" in your index.html

root.render(
  <Router>
    <App />
  </Router>
);
