import React, { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/McDonald's_Logo.svg"
          alt="McDonald's Logo"
          className="logo"
        />
      </header>

      {/* Dish Information */}
      <div className="dish-info">
        <h1 className="dish-name">Crispy Veggie Burger + Regular Coke Combo</h1>
        <p className="dish-price">₹199.05</p>
      </div>

      {/* Images Section */}
      <div className="images-section">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/150"
            alt="Crispy Veggie Burger"
            className="dish-image"
          />
          <p>Crispy Veggie Burger</p>
          <button className="customize-button">Customize</button>
        </div>
        <div className="image-container">
          <img
            src="https://via.placeholder.com/100"
            alt="Regular Coke"
            className="dish-image"
          />
          <p>Small Coke</p>
          <button className="customize-button">Customize</button>
        </div>
      </div>

      {/* Quantity and Add to Order */}
      <div className="order-section">
        <div className="quantity-controls">
          <button className="quantity-button" onClick={decreaseQuantity}>
            -
          </button>
          <input type="text" className="quantity-input" value={quantity} readOnly />
          <button className="quantity-button" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <button className="add-to-order">Add to Order</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <button className="footer-button">Cancel Item</button>
        <button className="footer-button">Start Over</button>
        <button className="footer-button">Accessibility</button>
      </footer>
    </div>
  );
}

export default App;
