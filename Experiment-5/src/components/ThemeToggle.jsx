import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 15px',
        borderRadius: '8px',
        border: 'none',
        background: theme === 'light' ? '#ffd700' : '#1a1a1a',
        color: theme === 'light' ? '#000' : '#fff',
        cursor: 'pointer',
        fontSize: '1.2rem',
      }}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;
