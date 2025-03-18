// src/sections/HowItWorksSection.js
import React from 'react';
import StepCard from '../components/StepCard';
import theme from '../theme';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Add Your Wardrobe",
      description: "Take photos of your clothing or upload existing ones. Our app organizes them by category, color, and style.",
      image: "/api/placeholder/500/375"
    },
    {
      number: 2,
      title: "Shop Normally",
      description: "Browse your favorite online stores as usual. When you add items to your cart, SkipTheCart works in the background.",
      image: "/api/placeholder/500/375"
    },
    {
      number: 3,
      title: "Review Insights",
      description: "Before you checkout, see how items in your cart compare to what you already own. Get alerts for duplicates and similar items.",
      image: "/api/placeholder/500/375"
    },
    {
      number: 4,
      title: "Make Mindful Decisions",
      description: "Choose what to buy based on actual wardrobe needs, not impulse. Track your savings and reduce closet clutter.",
      image: "/api/placeholder/500/375"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text }}>How SkipTheCart Works</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.secondaryText }}>
            Getting started with SkipTheCart is easy. Follow these simple steps to shop smarter.
          </p>
        </div>
        
        <div className="mt-12">
          {steps.map((step) => (
            <StepCard 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;