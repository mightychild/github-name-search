import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button className="theme-toggle" onClick={toggleDarkMode}>
      {darkMode ? <FiSun /> : <FiMoon />}
      {darkMode ? ' Light Mode' : ' Dark Mode'}
    </button>
  );
}

export default ThemeToggle;