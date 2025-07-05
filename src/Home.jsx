import React from 'react';

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">PC Component Picker</h1>
        <p className="lead">Build your dream PC by selecting the best components!</p>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="CPUs" />
            <div className="card-body">
              <h5 className="card-title">Processors (CPUs)</h5>
              <p className="card-text">Choose from the latest and greatest CPUs for your build.</p>
              <a href="#" className="btn btn-primary">Shop CPUs</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="GPUs" />
            <div className="card-body">
              <h5 className="card-title">Graphics Cards (GPUs)</h5>
              <p className="card-text">Find the perfect GPU for gaming, design, or productivity.</p>
              <a href="#" className="btn btn-primary">Shop GPUs</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="Motherboards" />
            <div className="card-body">
              <h5 className="card-title">Motherboards</h5>
              <p className="card-text">Select a compatible motherboard for your components.</p>
              <a href="#" className="btn btn-primary">Shop Motherboards</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
