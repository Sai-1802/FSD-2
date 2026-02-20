import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { state, toggleTheme } = useContext(AppContext);
  return (
    <button className="btn btn-sm btn-outline-light ms-2" onClick={toggleTheme}>
      {state.theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
