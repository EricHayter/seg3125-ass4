import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './ProductList';

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mt-5">Product not found.</div>;
  }

  return (
    <div className="container py-5">
      <button className="btn btn-link mb-4 d-flex align-items-center px-0" style={{fontSize:'1.1rem'}} onClick={() => navigate(-1)}>
        <span style={{fontSize:'1.5rem', marginRight:'0.5rem'}}>&larr;</span> Back
      </button>
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
          <img src={product.image} className="img-fluid rounded shadow" alt={product.name} style={{maxHeight:'350px', objectFit:'cover'}} />
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-none">
            <div className="card-body px-0">
              <h2 className="card-title mb-3" style={{fontWeight:'bold', fontSize:'2rem', color:'#1a237e'}}>{product.name}</h2>
              <p className="card-text fw-bold mb-2" style={{fontSize:'2rem', color:'#d32f2f', fontWeight:'bold'}}>${product.price.toFixed(2)}</p>
              {product.sale && <span className="badge bg-danger mb-3" style={{fontSize:'1rem'}}>{product.sale}</span>}
              <p className="card-text mb-1"><strong>Category:</strong> {product.category}</p>
              {/* Product Specs */}
              {product.specs && (
                <div className="mb-3">
                  <h6 className="fw-bold mb-2" style={{color:'#1976d2'}}>Specifications:</h6>
                  <ul className="list-group list-group-flush mb-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key} className="list-group-item px-0 py-1 border-0 d-flex justify-content-between align-items-center" style={{background:'transparent'}}>
                        <span style={{fontWeight:600, textTransform:'capitalize'}}>{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span>{String(value)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="d-flex flex-column gap-3 mt-4">
                <button className="btn btn-primary btn-lg fw-bold" style={{width:'100%', fontSize:'1.25rem', letterSpacing:'0.5px', boxShadow:'0 2px 8px rgba(33,150,243,0.15)'}} onClick={() => addToCart(product)}>Add to Cart</button>
                <button className="btn btn-success btn-lg fw-bold" style={{width:'100%', fontSize:'1.25rem', letterSpacing:'0.5px', boxShadow:'0 2px 8px rgba(76,175,80,0.15)'}} onClick={() => { addToCart(product); navigate('/cart'); }}>Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
