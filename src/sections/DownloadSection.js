// src/sections/DownloadSection.js
import React from 'react';
import AppStoreButton from '../components/AppStoreButton';
import theme from '../theme';

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div style={{ 
          color: 'white',
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
          borderRadius: theme.layout.cornerRadius,
          padding: '3rem 2rem',
        }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Shop Smarter?</h2>
          <p className="text-xl mb-8">
            Download SkipTheCart today and start making mindful purchasing decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <AppStoreButton platform="apple" />
            <AppStoreButton platform="android" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;