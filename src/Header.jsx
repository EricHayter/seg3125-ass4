import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header({ onSearch }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(search);
  };

  return (
    <>
      {/* Main Header/Navbar - full width */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top w-100" style={{ width: '100vw' }}>
        <div className="container-fluid position-relative">
          <button className="navbar-brand tech-title fw-bold px-3 py-2 rounded-2 d-flex align-items-center gap-2 btn btn-link p-0 border-0 position-absolute start-0" style={{background:'none', left:0}} onClick={() => navigate('/')}> 
            <span role="img" aria-label="logo" style={{ fontSize: '2.2rem', lineHeight: 1 }}>
              🖥️
            </span>
            Precision Parts
          </button>
          <div className="w-100 d-flex justify-content-center">
            <form className="d-flex" style={{ maxWidth: 400, width: '100%' }} onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for components..."
                aria-label="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
          <button className="btn btn-light position-absolute end-0" type="button" aria-label="Shopping Cart" onClick={() => navigate('/cart')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 4l1.25 6.5h7.22l1.25-6.5H3.14zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            </svg>
            <span className="visually-hidden">Cart</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
