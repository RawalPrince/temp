import React, { useContext } from 'react';
import { TokenContext } from './Context/TokenContext';

const ManagementView = () => {
  const { incrementToken, resetToken } = useContext(TokenContext);

  return (
    <div className="view-container">
      <h2>Management View</h2>
      <button onClick={incrementToken}>Mark Order as Ready</button>
      <button onClick={resetToken}>Reset Token</button>
    </div>
  );
};

export default ManagementView;
