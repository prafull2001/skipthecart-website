// src/components/StepCard.js
import React from 'react';
import theme from '../theme';

const StepCard = ({ number, title, description, image }) => (
  <div className="flex flex-col md:flex-row items-center mb-12 md:mb-20">
    <div className={`md:w-1/2 mb-6 md:mb-0 ${number % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:pr-8'}`}>
      <div 
        className="inline-block rounded-full py-1 px-3 text-sm font-semibold mb-2"
        style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primaryDark }}
      >
        STEP {number}
      </div>
      <h3 className="text-2xl font-bold mb-3" style={{ color: theme.colors.text }}>{title}</h3>
      <p className="text-lg" style={{ color: theme.colors.secondaryText }}>{description}</p>
    </div>
    <div className={`md:w-1/2 ${number % 2 === 0 ? 'md:order-1' : ''}`}>
      <img 
        src={image || `/api/placeholder/500/375`}
        alt={`Step ${number}: ${title}`}
        className="rounded-xl shadow-lg w-full h-auto object-cover"
      />
    </div>
  </div>
);

export default StepCard;