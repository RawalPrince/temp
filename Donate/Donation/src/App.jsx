import React from "react";
import "./App.css"; // Add custom styling here

const DonationPage = () => {
  return (
    <div className="donation-container">
      <div className="donation-box">
        <img
          src="https://via.placeholder.com/50" // Replace with the actual logo/image
          alt="RMHC Logo"
          className="donation-logo"
        />
        <h2>Would you like to donate to Ronald McDonald House?</h2>
        <p>
          Ronald McDonald House Charities support programs that directly improve
          the health and well-being of children.
        </p>
        <div className="donation-options">
          <button className="donation-button yellow">Round-up ₹0.99</button>
          <p>Or</p>
          <button className="donation-button">Donate ₹10.00</button>
          <button className="donation-button not-today">Not Today</button>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
