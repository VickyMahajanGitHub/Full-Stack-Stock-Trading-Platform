import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing_page/home/HomePage';
    import PricingPage from './Landing_page/pricing/PricingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <HomePage />
      <PricingPage />
   
  </React.StrictMode>
);


