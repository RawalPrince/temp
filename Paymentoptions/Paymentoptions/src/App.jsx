import React, { useState } from 'react';
import './App.css';
import visarupay from './assets/visarupay.jpg';
import upi from './assets/upi.png';
import macd from './assets/macd.jpeg';
import phonepay from './assets/phonepay.jpeg';

function CardSelection() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardType) => {
    setSelectedCard(cardType);
  };

  return (
    <div className="card-selection-container">
      <h2>Select your card type</h2>
      <div className="card-options">
        <div className="card-option" onClick={() => handleCardClick('visa')}>
          <img src={visarupay} alt="Visa" />
        </div>
        <div className="card-option" onClick={() => handleCardClick('upi')}>
          <img src={upi} alt="UPI" />
        </div>
        <div className="card-option" onClick={() => handleCardClick('macd')}>
          <img src={macd} alt="Paytm" />
        </div>
        <div className="card-option" onClick={() => handleCardClick('phonepay')}>
          <img src={phonepay} alt="PhonePay" />
        </div>
      </div>
      <button onClick={() => setSelectedCard(null)}>Back</button>
    </div>
  );
}

export default CardSelection;
