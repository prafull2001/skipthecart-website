// src/components/SocialIcon.js
import React from 'react';
import theme from '../theme';

const SocialIcon = ({ children }) => (
  <a 
    href="#" 
    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300"
    style={{ 
      backgroundColor: theme.colors.primary,
      color: 'white',
    }}
  >
    {children}
  </a>
);

export default SocialIcon;