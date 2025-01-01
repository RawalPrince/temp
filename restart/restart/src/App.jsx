import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="warning-box">
        <div className="warning-icon">⚠️</div>
        <h1>Are you sure you want to start over?</h1>
        <p>
          All items/meals in your order will be removed. This cannot be undone.
        </p>
        <div className="button-group">
          <button className="cancel-button">Cancel</button>
          <button className="confirm-button">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default App;
