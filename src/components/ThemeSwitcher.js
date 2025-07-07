import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="theme-switcher">
      <div className="theme-options">
        <button
          className={`theme-option ${currentTheme === 'auto' ? 'active' : ''}`}
          onClick={() => onThemeChange('auto')}
          title="Automatic (follows system)"
        >
          <span className="theme-label">Auto</span>
        </button>
        
        <button
          className={`theme-option ${currentTheme === 'light' ? 'active' : ''}`}
          onClick={() => onThemeChange('light')}
          title="Light theme"
        >
          <span className="theme-label">Light</span>
        </button>
        
        <button
          className={`theme-option ${currentTheme === 'dark' ? 'active' : ''}`}
          onClick={() => onThemeChange('dark')}
          title="Dark theme"
        >
          <span className="theme-label">Dark</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher; 