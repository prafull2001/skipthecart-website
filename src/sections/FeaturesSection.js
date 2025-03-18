// src/sections/FeaturesSection.js
import React from 'react';
import FeatureCard from '../components/FeatureCard';
import theme from '../theme';

const FeaturesSection = () => {
  const features = [
    {
      icon: "📱",
      title: "Digital Wardrobe",
      description: "Create a digital inventory of your clothing with photos for easy comparison when shopping online."
    },
    {
      icon: "👕",
      title: "Cart Analysis",
      description: "Automatically analyzes items in your cart and compares them to what you already own."
    },
    {
      icon: "🔍",
      title: "Similarity Detection",
      description: "Identifies duplicates and similar items in your wardrobe to prevent unnecessary purchases."
    },
    {
      icon: "💰",
      title: "Savings Tracker",
      description: "See how much money you've saved by skipping unnecessary purchases."
    },
    {
      icon: "🌈",
      title: "Style Coordination",
      description: "Suggests how new items will coordinate with your existing wardrobe."
    },
    {
      icon: "🔒",
      title: "Privacy Focused",
      description: "Your wardrobe data stays on your device. We respect your privacy."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24" style={{ backgroundColor: theme.colors.secondaryBackground }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text }}>Smart Shopping Features</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.secondaryText }}>
            SkipTheCart comes packed with features designed to make your shopping experience smarter and more mindful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;