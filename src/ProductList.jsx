import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Corsair Vengeance 16GB RAM',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    sale: '10% OFF',
    category: 'RAM',
  },
  {
    id: 2,
    name: 'NVIDIA RTX 4070 Graphics Card',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    sale: null,
    category: 'Graphics Cards',
  },
  {
    id: 3,
    name: 'Intel Core i7-13700K CPU',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
    sale: '15% OFF',
    category: 'CPU',
  },
  {
    id: 4,
    name: 'EVGA 750W Power Supply',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    sale: null,
    category: 'Power Supplies',
  },
  {
    id: 5,
    name: 'NZXT H510 Case',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80',
    sale: '5% OFF',
    category: 'Cases',
  },
  {
    id: 6,
    name: 'Noctua NF-A12 Fan',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    sale: null,
    category: 'Misc.',
  },
];

const categories = [
  { label: 'All', value: 'All' },
  { label: 'RAM', value: 'RAM' },
  { label: 'Graphics Cards', value: 'Graphics Cards' },
  { label: "CPU's", value: 'CPU' },
  { label: 'Power Supplies', value: 'Power Supplies' },
  { label: 'Cases', value: 'Cases' },
  { label: 'Misc.', value: 'Misc.' },
];

function ProductList({ selectedCategory = 'All', onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    if (onCategoryChange) onCategoryChange(cat);
  };

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) =>
          p.category === activeCategory ||
          (activeCategory === "CPU's" && p.category === 'CPU')
        );

  return (
    <>
      {/* Category Bar */}
      <div className="bg-secondary bg-opacity-25 py-2 px-3 d-flex justify-content-center align-items-center w-100" style={{ fontSize: '1rem', fontWeight: 600, width: '100vw' }}>
        <div className="d-flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`category-link text-dark bg-transparent text-decoration-none px-2 py-1 fw-bold rounded-2 btn btn-link${activeCategory === cat.value ? ' text-primary' : ''}`}
              style={{ outline: 'none', boxShadow: 'none' }}
              onClick={() => handleCategoryClick(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      {/* Product Cards */}
      <div className="container py-4">
        <div className="row g-4">
          {filteredProducts.map(product => (
            <div className="col-md-4 col-lg-3" key={product.id}>
              <div className="card h-100 shadow-sm position-relative">
                {product.sale && (
                  <span className="badge bg-danger position-absolute top-0 end-0 m-2" style={{zIndex:2}}>{product.sale}</span>
                )}
                <img src={product.image} className="card-img-top" alt={product.name} style={{height:'180px',objectFit:'cover'}} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text fw-bold mb-2">${product.price.toFixed(2)}</p>
                  <button className="btn btn-primary mt-auto">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
