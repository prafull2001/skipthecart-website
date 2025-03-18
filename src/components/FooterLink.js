// src/components/FooterLink.js
import React from 'react';
import theme from '../theme';

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:underline transition-colors duration-300" style={{ color: theme.colors.secondaryText }}>
      {children}
    </a>
  </li>
);

export default FooterLink;