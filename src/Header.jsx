import React from 'react';

function Header() {
  return (
    <>
      {/* Main Header/Navbar - full width */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top w-100" style={{ width: '100vw' }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold px-3 py-2 rounded-2" href="#" style={{
            background: '#fff',
            color: '#fff',
            fontSize: '1.7rem',
            letterSpacing: '1px',
          }}>PC Component Picker</a>
          <form className="d-flex mx-auto" style={{ maxWidth: 400, width: '100%' }}>
            <input className="form-control me-2" type="search" placeholder="Search for components..." aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          <button className="btn btn-light position-relative ms-2" type="button" aria-label="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 4l1.25 6.5h7.22l1.25-6.5H3.14zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            </svg>
            <span className="visually-hidden">Cart</span>
          </button>
        </div>
      </nav>
      {/* Category Bar - full width, under header */}
      <div className="bg-light py-2 px-3 d-flex justify-content-center align-items-center w-100" style={{ fontSize: '1rem', fontWeight: 600, width: '100vw' }}>
        <div className="d-flex gap-4 flex-wrap">
          <a href="#ram" className="text-primary text-decoration-none category-link px-2 py-1 fw-bold">RAM</a>
          <a href="#gpu" className="text-info text-decoration-none category-link px-2 py-1 fw-bold">GPU's</a>
          <a href="#cpu" className="text-danger text-decoration-none category-link px-2 py-1 fw-bold">CPU's</a>
          <a href="#psu" className="text-success text-decoration-none category-link px-2 py-1 fw-bold">PSU</a>
          <a href="#cases" className="text-secondary text-decoration-none category-link px-2 py-1 fw-bold">Cases</a>
          <a href="#misc" className="text-dark text-decoration-none category-link px-2 py-1 fw-bold">Misc.</a>
        </div>
      </div>
    </>
  );
}

export default Header;
