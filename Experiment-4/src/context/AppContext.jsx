import React, { createContext, useReducer, useMemo } from 'react';
import appReducer, { initialState } from '../reducer/appReducer';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // memoize derived values to avoid unnecessary recalcs
  const memoizedValues = useMemo(() => {
    const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
    return { totalItems, totalPrice };
  }, [state.cart]);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, toggleTheme, ...memoizedValues }}>
      {children}
    </AppContext.Provider>
  );
}
