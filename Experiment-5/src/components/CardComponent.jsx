import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const CardComponent = ({ id, title, description, price, icon }) => {
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      id,
      title,
      price,
      icon,
    }));
    alert(`✅ ${title} added to cart!`);
  };

  const bgColor = theme === 'light' ? '#fff' : '#2d2d2d';
  const textColor = theme === 'light' ? '#212529' : '#f8f9fa';

  return (
    <div
      className="card card-custom"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <div className="card-body p-4">
        <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
          {icon}
        </div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
            ${price}
          </span>
          <button
            className="btn btn-custom btn-sm"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
