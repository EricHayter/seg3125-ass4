import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductPage from './ProductPage';
import Header from './Header';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <Header onSearch={setSearchText} />
      <Routes>
        <Route path="/" element={<ProductList searchText={searchText} />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
