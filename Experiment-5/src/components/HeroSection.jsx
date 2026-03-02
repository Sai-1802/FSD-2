import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const HeroSection = () => {
  const { theme } = useContext(AppContext);

  const bgColor = theme === 'light'
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';

  return (
    <section
      style={{
        background: bgColor,
        color: '#fff',
        padding: '80px 20px',
        textAlign: 'center',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Welcome to ShopHub
        </h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '30px', opacity: 0.9 }}>
          Advanced State Management with Redux Toolkit & Context API
        </p>
        <button
          className="btn btn-light"
          style={{ padding: '12px 30px', fontSize: '1.1rem' }}
        >
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
