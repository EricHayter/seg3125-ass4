import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import Header from './Header';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState('');
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        setPopupMsg(`${product.name} quantity increased in cart!`);
        setShowPopup(true);
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        setPopupMsg(`${product.name} added to cart!`);
        setShowPopup(true);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handlePlaceOrder = () => {
    setCart([]);
  };

  // Hide popup after 2 seconds
  React.useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      <Header onSearch={setSearchText} cart={cart} />
      {showPopup && (
        <div style={{position:'fixed',top:80,right:20,zIndex:2000}}>
          <div className="alert alert-success shadow-lg fade show" role="alert" style={{minWidth:250, fontWeight:'bold', fontSize:'1.1rem'}}>
            {popupMsg}
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<ProductList searchText={searchText} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} navigate={navigate} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} onPlaceOrder={handlePlaceOrder} />} />
      </Routes>
    </>
  );
}

export default App;
