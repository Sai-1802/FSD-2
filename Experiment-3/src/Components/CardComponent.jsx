import React from 'react';

const CardComponent = ({ title, content, gradient = 'bg-gradient-purple' }) => {
  const gradientStyles = {
    'bg-gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'bg-gradient-orange': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'bg-gradient-blue': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'bg-gradient-green': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'bg-gradient-pink': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'bg-gradient-teal': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  };

  return (
    <div 
      className="card text-white" 
      style={{
        background: gradientStyles[gradient],
        border: 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default CardComponent;