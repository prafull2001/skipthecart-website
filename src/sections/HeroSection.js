// src/sections/HeroSection.js
import React from 'react';
import Button from '../components/Button';
import theme from '../theme';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: theme.colors.text }}>
            Shop Smarter.<br />Save Better.
          </h1>
          <p className="text-xl mb-8" style={{ color: theme.colors.secondaryText }}>
            SkipTheCart helps you shop mindfully by showing how new items fit with what you already own. No more duplicates, no more regrets—just smart choices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-auto">
              <Button variant="primary" onClick={() => window.location.href = '#download'}>
                Download App
              </Button>
            </div>
            <div className="w-full sm:w-auto">
              <Button variant="secondary" onClick={() => window.location.href = '#how-it-works'}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <img 
            src="/api/placeholder/375/750" 
            alt="SkipTheCart App Screenshot" 
            className="rounded-2xl shadow-2xl mx-auto border border-gray-200"
            style={{ maxHeight: '75vh' }}
          />
          <div 
            className="absolute inset-0 rounded-2xl opacity-30"
            style={{ 
              background: `radial-gradient(circle at top right, ${theme.colors.primary}, transparent 70%)`,
              zIndex: -1,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;