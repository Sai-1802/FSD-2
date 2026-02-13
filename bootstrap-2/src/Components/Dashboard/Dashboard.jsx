import React, { useState } from 'react';
import Analytics from './Analytics';
import Settings from './Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Dashboard</span>
          <div className="navbar-nav">
            <button 
              className={`nav-link btn btn-link ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
            <button 
              className={`nav-link btn btn-link ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>
        </div>
      </nav>

      <div className="content">
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'settings' && <Settings />}
      </div>
    </div>
  );
};

export default Dashboard;