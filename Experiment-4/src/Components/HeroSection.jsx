import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-white py-5" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
      <div className="container text-center">
        <h1 className="display-2 mb-4">Transform Your Business</h1>
        <p className="lead mb-4">Unlock the power of data-driven insights with our cutting-edge dashboard platform</p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="mb-4">Join thousands of companies worldwide who trust our platform to drive their success. From startups to Fortune 500 companies, we provide the tools you need to make informed decisions and accelerate growth.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-light btn-lg px-4 py-2 me-3 mb-2">Start Free Trial</button>
          <button className="btn btn-outline-light btn-lg px-4 py-2 mb-2">Watch Demo</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;