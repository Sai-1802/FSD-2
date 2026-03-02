import { useContext, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../redux/slices/cartSlice';
import { AppContext } from '../context/AppContext';

const Cart = () => {
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // useMemo for total price calculation
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const bgColor = theme === 'light' ? '#fff' : '#2d2d2d';
  const textColor = theme === 'light' ? '#212529' : '#f8f9fa';
  const borderColor = theme === 'light' ? '#dee2e6' : '#495057';

  if (cartItems.length === 0) {
    return (
      <div className="container-fluid py-5 text-center">
        <h1 className="mb-4">🛒 Shopping Cart</h1>
        <div
          className="card"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            border: `1px solid ${borderColor}`,
            borderRadius: '12px',
            padding: '60px 20px',
          }}
        >
          <h3>Your cart is empty</h3>
          <p className="mt-3">Add items to your cart to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-5">
      <h1 className="mb-4">🛒 Shopping Cart</h1>

      <div className="row">
        <div className="col-lg-8">
          <div
            className="card"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              border: `1px solid ${borderColor}`,
              borderRadius: '12px',
            }}
          >
            <div className="card-body">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                    borderBottom: index < cartItems.length - 1 ? `1px solid ${borderColor}` : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                    <div>
                      <h5 style={{ marginBottom: '5px' }}>{item.title}</h5>
                      <p style={{ color: '#667eea', fontSize: '1.2rem', marginBottom: 0 }}>
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: theme === 'light' ? '#e9ecef' : '#495057',
                          border: 'none',
                          color: textColor,
                        }}
                        onClick={() =>
                          dispatch(updateQuantity({
                            id: item.id,
                            quantity: Math.max(1, item.quantity - 1),
                          }))
                        }
                      >
                        −
                      </button>
                      <span style={{ padding: '0 15px', fontWeight: 'bold' }}>
                        {item.quantity}
                      </span>
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: theme === 'light' ? '#e9ecef' : '#495057',
                          border: 'none',
                          color: textColor,
                        }}
                        onClick={() =>
                          dispatch(updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          }))
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div
            className="card"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              border: `1px solid ${borderColor}`,
              borderRadius: '12px',
              position: 'sticky',
              top: '100px',
            }}
          >
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Subtotal:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Shipping:</span>
                  <span>$0.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Tax:</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <hr style={{ borderColor }} />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                <span>Total:</span>
                <span style={{ color: '#667eea' }}>
                  ${(cartTotal * 1.1).toFixed(2)}
                </span>
              </div>

              <button
                className="btn btn-custom w-100 mb-2"
                onClick={() => alert('✅ Checkout functionality coming soon!')
                }
              >
                Proceed to Checkout
              </button>

              <button
                className="btn btn-outline-danger w-100"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
