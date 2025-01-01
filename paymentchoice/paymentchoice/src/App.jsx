import React from 'react';
import './App.css'; // Include CSS for styling
import PayHereImage from './assets/PayHere.png'; // Correct way to import the image

function PaymentInterface() {
  return (
    <div className="payment-interface">
      <h1>Where would you like to pay?</h1>
      <div className="payment-options">
        <div className="option">
          <button className="icon-button">
            <img src={PayHereImage} alt="Pay Here Icon" className="button-image" />
          </button>
        </div>

        <div className="or-section">
          <p>Or</p>
        </div>

        <div className="option">
          <button className="pay-counter">Pay at the Counter</button>
        </div>
      </div>

      <div className="navigation-buttons">
        <button className="back-button">Back</button>
      </div>

      <footer className="footer-buttons">
        <div className="right-footer">
          <button className="start-over">Start Over</button>
          <button className="accessibility">Accessibility</button>
        </div>
      </footer>
    </div>
  );
}

export default PaymentInterface;
