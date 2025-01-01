import React from "react";
import "./App.css";

const SuggestionPage = () => {
  const suggestions = [
    { name: "Piri Piri Spice Mix", price: "₹23.81", image: "piri-piri.jpg" },
    { name: "Medium Fries", price: "₹117.14", image: "fries.jpg" },
    { name: "Veg Pizza McPuff", price: "₹54.29", image: "mcpuff.jpg" },
    { name: "Medium Coke", price: "₹115.24", image: "coke.jpg" },
    { name: "Hot Fudge Soft Serve", price: "₹46.57", image: "soft-serve.jpg" },
  ];

  const handleNotToday = () => {
    alert("No items selected.");
  };

  return (
    <div className="suggestion-page">
      <h1>May we suggest?</h1>
      <div className="suggestion-grid">
        {suggestions.slice(0, 4).map((item, index) => (
          <div key={index} className="suggestion-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button className="not-today-button" onClick={handleNotToday}>
        Not Today
      </button>
    </div>
  );
};

export default SuggestionPage;
