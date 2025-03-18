// src/components/Testimonial.js
import React from 'react';
import theme from '../theme';

const Testimonial = ({ quote, author, role }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="mb-4">
      <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8v12H0V14c0-5.5 4.5-10 10-10v4zm12 0v12H12V14c0-5.5 4.5-10 10-10v4z"></path>
      </svg>
    </div>
    <p className="mb-4 italic" style={{ color: theme.colors.secondaryText }}>{quote}</p>
    <div>
      <p className="font-semibold" style={{ color: theme.colors.text }}>{author}</p>
      <p className="text-sm" style={{ color: theme.colors.secondaryText }}>{role}</p>
    </div>
  </div>
);

export default Testimonial;