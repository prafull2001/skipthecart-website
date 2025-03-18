// src/components/Button.js
import React from 'react';
import theme from '../theme';

const Button = ({ children, variant = 'primary', onClick, disabled = false }) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: disabled ? `${theme.colors.primary}80` : theme.colors.primary,
          color: 'white',
          border: 'none',
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          border: `1.5px solid ${theme.colors.primary}`,
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          border: 'none',
          padding: '8px 16px',
          height: 'auto',
        };
      default:
        return {
          backgroundColor: theme.colors.primary,
          color: 'white',
          border: 'none',
        };
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-xl transition-all duration-200 font-semibold text-center w-full flex items-center justify-center"
      style={{
        height: variant === 'text' ? 'auto' : theme.layout.buttonHeight,
        ...getButtonStyles(),
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export default Button;