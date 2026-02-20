import React, { useContext, useMemo } from 'react';
import { AppContext } from '../context/AppContext';

function Cart() {
  const { state, dispatch, totalItems, totalPrice } = useContext(AppContext);

  // memoize list items rendering to avoid unnecessary rerender
  const renderedItems = useMemo(() => {
    return state.cart.map(item => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        {item.name} x {item.qty}
        <span>${(item.price * item.qty).toFixed(2)}</span>
      </li>
    ));
  }, [state.cart]);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return (
    <div className="container py-4">
      <h2>Your Cart</h2>
      {state.cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">{renderedItems}</ul>
          <div className="d-flex justify-content-between">
            <strong>Total Items:</strong>
            <span>{totalItems}</span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <strong>Total Price:</strong>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="btn btn-danger" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
