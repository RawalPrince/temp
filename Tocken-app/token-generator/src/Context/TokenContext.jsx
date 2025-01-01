import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [tokenNumber, setTokenNumber] = useState(0);

  // Load the token number from localStorage when the app loads
  useEffect(() => {
    const savedToken = localStorage.getItem('tokenNumber');
    if (savedToken) {
      setTokenNumber(parseInt(savedToken, 10));
    }
  }, []);

  // Update the token number and save it to localStorage
  const incrementToken = () => {
    const newToken = tokenNumber + 1;
    setTokenNumber(newToken);
    localStorage.setItem('tokenNumber', newToken);
  };

  const resetToken = () => {
    setTokenNumber(0);
    localStorage.setItem('tokenNumber', 0);
  };

  return (
    <TokenContext.Provider value={{ tokenNumber, incrementToken, resetToken }}>
      {children}
    </TokenContext.Provider>
  );
};
