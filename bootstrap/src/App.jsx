import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App