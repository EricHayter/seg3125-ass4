import React from 'react';

function CartPage({ cart, navigate }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="alert alert-info p-4 text-center" style={{fontSize:'1.15rem', maxWidth: 500, margin: '0 auto'}}>
          <h4 className="mb-3">Your cart is empty!</h4>
          <p className="mb-3">You haven't added any parts yet. Head back to the main page to browse and add your favorite PC components!</p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/')}>Browse Parts</button>
        </div>
      ) : (
        <>
          <table className="table align-middle mb-4">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>Total: <span className="text-success">${total.toFixed(2)}</span></h4>
            <button className="btn btn-success btn-lg fw-bold" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
