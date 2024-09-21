import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import Sidebar from './components/Sidebar'; 
import ResourceGrid from './components/ResourceGrid';

import './App.css'; // Optional: Create a CSS file to manage layout

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Banner />
        <ProductSection />
        <ResourceGrid />
      </div>
    </div>
  );
};

export default App;
