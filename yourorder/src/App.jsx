import React, { useState } from 'react';
import './App.css';

function App() {
  const [order, setOrder] = useState([
    { name: 'Crispy Veggie Burger', price: 100, quantity: 1 },
    { name: 'Regular Duke Combo', price: 109.01, quantity: 1 },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedOrder = [...order];
    updatedOrder[index].quantity = newQuantity;
    setOrder(updatedOrder);
  };

  const handleRemoveItem = (index) => {
    const updatedOrder = [...order];
    updatedOrder.splice(index, 1);
    setOrder(updatedOrder);
  };

  const handleRemoveOrder = () => {
    setOrder([]); // Clear the entire order array
  };

  const handleOrderMore = () => {
    setOrder([...order, { name: 'New Item', price: 50, quantity: 1 }]);
  };

  const handleCompleteOrder = () => {
    // Implement logic to handle order completion (e.g., send order to server)
    console.log('Order Completed:', order);
  };

  return (
    <div className="container">
      <h1>Your Order</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>Rs.{item.price.toFixed(2)}</td>
              <td>
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))} 
                />
              </td>
              <td>Rs.{(item.price * item.quantity).toFixed(2)}</td>
              <td><button onClick={() => handleRemoveItem(index)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <h2>Total: Rs.{order.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</h2>
      </div>
      <div className="buttons">
        <button onClick={handleRemoveOrder}>Remove Order</button>
        <button onClick={handleOrderMore}>Order More</button>
        <button onClick={handleCompleteOrder}>Complete Order</button>
      </div>
    </div>
  );
}

export default App;