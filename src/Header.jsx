import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">PC Component Picker</a>
        <form className="d-flex mx-auto" style={{ maxWidth: 400, width: '100%' }}>
          <input className="form-control me-2" type="search" placeholder="Search for components..." aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <button className="btn btn-primary position-relative ms-2" type="button" aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 4l1.25 6.5h7.22l1.25-6.5H3.14zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
          </svg>
          <span className="visually-hidden">Cart</span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
