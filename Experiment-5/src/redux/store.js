import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import analyticsReducer from './slices/analyticsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    analytics: analyticsReducer,
  },
});

export default store;
