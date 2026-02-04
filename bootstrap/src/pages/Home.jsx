import React from 'react';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Stats Section */}
      <div className="container-fluid py-5">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="text-white">
              <h1 className="display-4" style={{color: '#4facfe'}}>250K+</h1>
              <h5>Active Users</h5>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="text-white">
              <h1 className="display-4" style={{color: '#43e97b'}}>98%</h1>
              <h5>Satisfaction Rate</h5>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="text-white">
              <h1 className="display-4" style={{color: '#f093fb'}}>24/7</h1>
              <h5>Support Available</h5>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="text-white">
              <h1 className="display-4" style={{color: '#ffd700'}}>150+</h1>
              <h5>Countries Served</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-fluid py-5">
        <h2 className="text-center text-white mb-5">Our Features</h2>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <CardComponent 
              title="Real-time Analytics" 
              content="Monitor your data with live updates and interactive dashboards that provide instant insights into your business performance."
              gradient="bg-gradient-purple"
            />
          </div>
          <div className="col-lg-4 mb-4">
            <CardComponent 
              title="Advanced Security" 
              content="Enterprise-grade security with end-to-end encryption, multi-factor authentication, and compliance with industry standards."
              gradient="bg-gradient-orange"
            />
          </div>
          <div className="col-lg-4 mb-4">
            <CardComponent 
              title="Cloud Integration" 
              content="Seamlessly connect with popular cloud services and APIs. Scale your operations with our robust infrastructure."
              gradient="bg-gradient-blue"
            />
          </div>
          <div className="col-lg-4 mb-4">
            <CardComponent 
              title="AI-Powered Insights" 
              content="Leverage machine learning algorithms to predict trends, automate processes, and make data-driven decisions."
              gradient="bg-gradient-green"
            />
          </div>
          <div className="col-lg-4 mb-4">
            <CardComponent 
              title="Mobile Responsive" 
              content="Access your dashboard from any device. Our responsive design ensures optimal experience across all platforms."
              gradient="bg-gradient-pink"
            />
          </div>
          <div className="col-lg-4 mb-4">
            <CardComponent 
              title="Custom Workflows" 
              content="Build personalized workflows that match your business needs. Automate repetitive tasks and boost productivity."
              gradient="bg-gradient-teal"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container-fluid py-5" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'}}>
        <h2 className="text-center text-white mb-5">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card text-white" style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div className="card-body text-center">
                <p className="card-text">"This platform transformed our business operations. The analytics are incredible!"</p>
                <h6>- Sarah Johnson, CEO</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-white" style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div className="card-body text-center">
                <p className="card-text">"Outstanding support team and amazing features. Highly recommended!"</p>
                <h6>- Michael Chen, CTO</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-white" style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)'}}>
              <div className="card-body text-center">
                <p className="card-text">"The AI insights helped us increase our revenue by 40% in just 6 months."</p>
                <h6>- Emily Rodriguez, Director</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;