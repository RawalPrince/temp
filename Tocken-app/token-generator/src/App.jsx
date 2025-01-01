import React from 'react';
import { TokenProvider } from './Context/TokenContext.jsx';
import CustomerView from './CustomerView';
import ManagementView from './ManagementView';
import './App.css';

const App = () => {
  return (
    <TokenProvider>
      <div className="app-container">
        <CustomerView />
        <ManagementView />
      </div>
    </TokenProvider>
  );
};

export default App;
