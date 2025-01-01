import React, { useContext } from 'react';
import { TokenContext } from './Context/TokenContext';

const CustomerView = () => {
  const { tokenNumber } = useContext(TokenContext);

  return (
    <div className="view-container">
      <h2>Customer View</h2>
      <p>Your Token: {String(tokenNumber).padStart(3, '0')}</p>
    </div>
  );
};

export default CustomerView;
