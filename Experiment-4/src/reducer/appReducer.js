export const initialState = {
  theme: 'dark',
  cart: [] // each item: { id, name, price, qty }
};

function appReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_TO_CART':
      // add item or increment qty
      const existing = state.cart.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map(i =>
            i.id === action.payload.id
              ? { ...i, qty: i.qty + (action.payload.qty || 1) }
              : i
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: action.payload.qty || 1 }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(i => i.id !== action.payload.id)
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'UPDATE_QTY':
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
        )
      };
    default:
      return state;
  }
}

export default appReducer;
