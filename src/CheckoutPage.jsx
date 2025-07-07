import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutPage({ cart, onPlaceOrder }) {
  const [form, setForm] = useState({ name: '', email: '', address: '', cardNumber: '', cardExpiry: '', cardCVC: '' });
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState({ rating: '', comments: '' });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onPlaceOrder();
  };

  if (cart.length === 0 && !submitted) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-info p-4" style={{fontSize:'1.2rem', maxWidth: 500, margin: '0 auto'}}>
          <h4 className="mb-3">Your cart is empty!</h4>
          <p className="mb-3">Looks like you haven't added any parts yet. Browse our wide selection of PC components and start building your dream machine!</p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/')}>Browse Parts</button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container py-5 text-center">
        <div className="d-flex justify-content-end" style={{maxWidth: 900, margin: '0 auto'}}>
          <button className="btn btn-outline-primary mb-3" onClick={() => navigate('/')}>Back to Home</button>
        </div>
        <h2 className="mb-4">Thank you for your order!</h2>
        <p>Your order has been placed and a confirmation email will be sent to you.</p>
        {!feedbackSubmitted ? (
          <div className="mt-5 mx-auto" style={{maxWidth: 420}}>
            <div className="card shadow-sm border-primary" style={{ padding: '2.5rem', maxWidth: 420 }}>
              <h4 className="mb-3 text-primary">We value your feedback!</h4>
              <form onSubmit={e => { e.preventDefault(); setFeedbackSubmitted(true); }} style={{ padding: '1.5rem 0.5rem' }}>
                <div className="mb-5">
                  <label className="form-label">How would you rate your experience?</label>
                  <div className="d-flex justify-content-center gap-2 mb-2">
                    {[1,2,3,4,5].map(num => (
                      <button
                        type="button"
                        key={num}
                        className={`btn btn-outline-warning${feedback.rating === String(num) ? ' active' : ''}`}
                        style={{fontSize:'1.5rem', fontWeight:700, borderRadius:'50%', width:48, height:48, borderWidth:2}}
                        onClick={() => setFeedback(f => ({...f, rating: String(num)}))}
                        aria-label={`Rate ${num}`}
                      >
                        {num}★
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <label className="form-label">Additional comments (optional):</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={feedback.comments}
                    onChange={e => setFeedback(f => ({...f, comments: e.target.value}))}
                    placeholder="Let us know what you liked or what could be improved!"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg mt-2 w-100">Submit Feedback</button>
              </form>
            </div>
          </div>
        ) : (
          <div className="alert alert-success mt-5 mx-auto" style={{maxWidth:420, fontSize:'1.15rem'}}>
            <strong>Thank you for your feedback!</strong><br />We appreciate your input and hope to see you again soon.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Checkout</h1>
      <div className="row g-4">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <h4 className="mb-3">Shipping Information</h4>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea className="form-control" name="address" value={form.address} onChange={handleChange} required />
            </div>
            <hr className="my-4" />
            <h4 className="mb-3">Payment Information</h4>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" className="form-control" name="cardNumber" value={form.cardNumber} onChange={handleChange} required pattern="[0-9]{13,19}" maxLength={19} placeholder="1234 5678 9012 3456" />
            </div>
            <div className="row">
              <div className="col-6 mb-3">
                <label className="form-label">Expiry (MM/YY)</label>
                <input type="text" className="form-control" name="cardExpiry" value={form.cardExpiry} onChange={handleChange} required pattern="(0[1-9]|1[0-2])\/\d{2}" placeholder="MM/YY" maxLength={5} />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">CVC</label>
                <input type="text" className="form-control" name="cardCVC" value={form.cardCVC} onChange={handleChange} required pattern="[0-9]{3,4}" maxLength={4} placeholder="123" />
              </div>
            </div>
            <button type="submit" className="btn btn-success btn-lg mt-2">Place Order</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">Order Summary</h4>
            <ul className="list-group mb-3">
              {cart.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <h5 className="text-end">Total: <span className="text-success">${total.toFixed(2)}</span></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
