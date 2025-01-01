import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>Take a Seat or Pick Up at Counter?</h1>
        <p className="subtitle">Choose your preferred option</p>
      </header>
      <div id="button-container">
        <button className="custom-button">
          <div className="button-content">
            <span className="button-icon">🍽️</span>
            <span className="button-text">Table Service</span>
          </div>
        </button>
        <button className="custom-button">
          <div className="button-content">
            <span className="button-icon">🛍️</span>
            <span className="button-text">Pick Up at Counter</span>
          </div>
        </button>
      </div>
      <footer className="footer">
        <button className="footer-button">Start Over</button>
        <button className="footer-button">Accessibility</button>
      </footer>
    </div>
  );
};

export default App;
