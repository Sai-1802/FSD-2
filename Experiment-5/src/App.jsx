import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppProvider, AppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Analytics from './components/Dashboard/Analytics';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles.css';

const AppContent = () => {
  const { theme } = useContext(AppContext);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#f8f9fa' : '#212529',
      color: theme === 'light' ? '#212529' : '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
}

export default App;
