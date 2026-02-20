import React from 'react';
import CardComponent from '../Components/CardComponent';

const Projects = () => {
  return (
    <div className="container-fluid">
      {/* Header Section */}
      <div className="row py-5" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
        <div className="col-12 text-center text-white">
          <h1 className="display-3">Our Portfolio</h1>
          <p className="lead">Discover our latest projects and innovations</p>
        </div>
      </div>

      {/* Project Categories */}
      <div className="row py-5">
        <div className="col-12 text-center mb-5">
          <h2 className="text-white">Project Categories</h2>
        </div>
        <div className="col-md-3 mb-4">
          <div className="text-center text-white">
            <div className="mb-3" style={{fontSize: '3rem', color: '#667eea'}}>🌐</div>
            <h4>Web Development</h4>
            <p>Modern web applications</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="text-center text-white">
            <div className="mb-3" style={{fontSize: '3rem', color: '#43e97b'}}>📱</div>
            <h4>Mobile Apps</h4>
            <p>iOS & Android solutions</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="text-center text-white">
            <div className="mb-3" style={{fontSize: '3rem', color: '#f093fb'}}>🤖</div>
            <h4>AI & Machine Learning</h4>
            <p>Intelligent automation</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="text-center text-white">
            <div className="mb-3" style={{fontSize: '3rem', color: '#ffd700'}}>☁️</div>
            <h4>Cloud Solutions</h4>
            <p>Scalable infrastructure</p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="row py-5">
        <div className="col-12 text-center mb-5">
          <h2 className="text-white">Featured Projects</h2>
        </div>
        <div className="col-lg-6 mb-4">
          <CardComponent 
            title="E-Commerce Revolution" 
            content="A next-generation e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless payment integration. Serving over 1M+ customers worldwide."
            gradient="bg-gradient-green"
          />
        </div>
        <div className="col-lg-6 mb-4">
          <CardComponent 
            title="Smart City Dashboard" 
            content="IoT-enabled city management system that monitors traffic, energy consumption, and public services. Implemented in 15+ cities with 30% efficiency improvement."
            gradient="bg-gradient-pink"
          />
        </div>
        <div className="col-lg-6 mb-4">
          <CardComponent 
            title="Healthcare Analytics Platform" 
            content="Advanced medical data analysis system using machine learning to predict patient outcomes and optimize treatment plans. Trusted by 200+ hospitals globally."
            gradient="bg-gradient-teal"
          />
        </div>
        <div className="col-lg-6 mb-4">
          <CardComponent 
            title="Financial Trading Bot" 
            content="Automated cryptocurrency trading system with advanced algorithms and risk management. Generated 150% ROI for our clients in the past year."
            gradient="bg-gradient-orange"
          />
        </div>
      </div>

      {/* Project Stats */}
      <div className="row py-5" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'}}>
        <div className="col-12 text-center mb-5">
          <h2 className="text-white">Project Impact</h2>
        </div>
        <div className="col-md-3 text-center mb-4">
          <h1 className="display-4 text-white" style={{color: '#4facfe'}}>500+</h1>
          <h5 className="text-white">Projects Completed</h5>
        </div>
        <div className="col-md-3 text-center mb-4">
          <h1 className="display-4 text-white" style={{color: '#43e97b'}}>50M+</h1>
          <h5 className="text-white">Users Impacted</h5>
        </div>
        <div className="col-md-3 text-center mb-4">
          <h1 className="display-4 text-white" style={{color: '#f093fb'}}>99.9%</h1>
          <h5 className="text-white">Uptime Achieved</h5>
        </div>
        <div className="col-md-3 text-center mb-4">
          <h1 className="display-4 text-white" style={{color: '#ffd700'}}>25+</h1>
          <h5 className="text-white">Awards Won</h5>
        </div>
      </div>
    </div>
  );
};

export default Projects;