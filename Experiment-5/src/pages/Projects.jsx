import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Projects = () => {
  const { theme } = useContext(AppContext);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with Redux state management',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      image: '🛍️',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Real-time analytics dashboard with performance optimization',
      tech: ['React', 'Chart.js', 'Redux', 'useMemo'],
      image: '📊',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with context API',
      tech: ['React', 'Context', 'Firebase', 'Bootstrap'],
      image: '✅',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with light/dark theme switching',
      tech: ['React', 'CSS3', 'React Router', 'Context'],
      image: '💼',
    },
  ];

  const bgColor = theme === 'light' ? '#fff' : '#2d2d2d';
  const textColor = theme === 'light' ? '#212529' : '#f8f9fa';

  return (
    <div className="container-fluid py-5">
      <h1 className="mb-4">🚀 Featured Projects</h1>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6">
            <div
              className="card"
              style={{
                backgroundColor: bgColor,
                color: textColor,
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}
            >
              <div className="card-body">
                <h3 style={{ fontSize: '2.5rem' }}>{project.image}</h3>
                <h5 className="card-title mt-3">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div style={{ marginTop: '20px' }}>
                  <div style={{ marginBottom: '15px' }}>
                    <strong>Technologies:</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge"
                        style={{ backgroundColor: '#667eea', color: '#fff' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="btn btn-custom mt-4"
                  style={{ width: '100%' }}
                  onClick={() => alert('Project details coming soon!')}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px' }}>
        <h2>💡 Key Features Demonstrated</h2>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div
              style={{
                padding: '20px',
                backgroundColor: bgColor,
                borderRadius: '8px',
                borderLeft: '4px solid #667eea',
              }}
            >
              <h5>📦 Redux Toolkit Integration</h5>
              <p>Efficient state management with slices and thunks</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div
              style={{
                padding: '20px',
                backgroundColor: bgColor,
                borderRadius: '8px',
                borderLeft: '4px solid #764ba2',
              }}
            >
              <h5>🎯 Context API Usage</h5>
              <p>Global state for theme, authentication, and user data</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div
              style={{
                padding: '20px',
                backgroundColor: bgColor,
                borderRadius: '8px',
                borderLeft: '4px solid #28a745',
              }}
            >
              <h5>⚡ Performance Optimization</h5>
              <p>useMemo hooks for calculating derived state</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div
              style={{
                padding: '20px',
                backgroundColor: bgColor,
                borderRadius: '8px',
                borderLeft: '4px solid #ffc107',
              }}
            >
              <h5>🔀 React Router</h5>
              <p>Multi-page application with clean routing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
