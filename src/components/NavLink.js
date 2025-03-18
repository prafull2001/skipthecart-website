// src/components/NavLink.js
import React from 'react';
import theme from '../theme';

const NavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-base hover:text-opacity-70 transition-all"
    style={{ color: theme.colors.primaryDark }}
  >
    {children}
  </a>
);

export default NavLink;