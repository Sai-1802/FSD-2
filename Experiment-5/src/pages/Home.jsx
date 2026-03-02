import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';

const Home = () => {
  const { theme } = useContext(AppContext);

  const products = [
    {
      id: 1,
      title: 'React Course',
      description: 'Learn React fundamentals and advanced concepts',
      price: 99,
      icon: '⚛️',
    },
    {
      id: 2,
      title: 'Redux Mastery',
      description: 'Master state management with Redux Toolkit',
      price: 79,
      icon: '🎯',
    },
    {
      id: 3,
      title: 'Web Design',
      description: 'Modern UI/UX design principles and practices',
      price: 89,
      icon: '🎨',
    },
    {
      id: 4,
      title: 'JavaScript Pro',
      description: 'Advanced JavaScript patterns and techniques',
      price: 109,
      icon: '📚',
    },
    {
      id: 5,
      title: 'Node.js Backend',
      description: 'Build scalable backend applications',
      price: 119,
      icon: '🚀',
    },
    {
      id: 6,
      title: 'Web Performance',
      description: 'Optimize and scale web applications',
      price: 99,
      icon: '⚡',
    },
  ];

  return (
    <div>
      <HeroSection />

      <div className="container-fluid py-5">
        <h2 className="mb-4">🏆 Featured Products</h2>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-md-6 col-lg-4">
              <CardComponent {...product} />
            </div>
          ))}
        </div>
      </div>

      <section
        style={{
          backgroundColor: theme === 'light' ? '#f8f9fa' : '#1a1a1a',
          padding: '60px 20px',
          margin: '40px 0',
        }}
      >
        <div className="container-fluid">
          <h2 className="mb-4 text-center">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-3 text-center mb-4">
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>🎓</h3>
              <h5>Expert Instructors</h5>
              <p>Learn from industry professionals</p>
            </div>
            <div className="col-md-3 text-center mb-4">
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>💰</h3>
              <h5>Affordable Pricing</h5>
              <p>Best value for your investment</p>
            </div>
            <div className="col-md-3 text-center mb-4">
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>🏅</h3>
              <h5>Certification</h5>
              <p>Recognized industry certificates</p>
            </div>
            <div className="col-md-3 text-center mb-4">
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>🤝</h3>
              <h5>Community Support</h5>
              <p>Active community and peer learning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
