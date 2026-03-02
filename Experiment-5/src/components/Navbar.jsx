import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppContext } from '../context/AppContext';
import '../styles.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          �️ ShopHub
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/analytics">Analytics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                🛒 Cart ({cartCount})
              </Link>
            </li>
          </ul>

          <div className="nav-icons">
            <button className="icon-btn" onClick={toggleTheme} title="Toggle Theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
