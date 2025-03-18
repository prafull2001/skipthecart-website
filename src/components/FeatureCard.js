// src/components/FeatureCard.js
import React from 'react';
import theme from '../theme';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-4xl mb-4" style={{ color: theme.colors.primary }}>{icon}</div>
    <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text }}>{title}</h3>
    <p style={{ color: theme.colors.secondaryText }}>{description}</p>
  </div>
);

export default FeatureCard;