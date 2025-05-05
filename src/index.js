import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing_page/home/HomePage';
import PricingPage from './Landing_page/pricing/PricingPage';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import Signup from './Landing_page/signup/Signup';
import AboutPage from './Landing_page/about/AboutPage';
import ProductPage from './Landing_page/product/ProductPage';
import SupportPage from './Landing_page/support/SupportPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/> }/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      
   
  </React.StrictMode>
);


