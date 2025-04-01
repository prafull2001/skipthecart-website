import React, { useState } from 'react';
import theme from '../theme';

const EnhancedFeaturesSection = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState('wardrobe');
  
  // Feature categories
  const categories = [
    {
      id: 'wardrobe',
      title: 'Smart Wardrobe Management',
      description: 'Organize, analyze, and optimize your clothing collection'
    },
    {
      id: 'insights',
      title: 'Insights',
      description: 'Track your financial and environmental impact'
    },
    {
      id: 'privacy',
      title: 'Privacy Focused',
      description: 'Your data stays on your device, always'
    }
  ];
  
  // Features organized by category
  const features = {
    wardrobe: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10" strokeWidth="1.5">
            <path d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V21H4V5Z" />
            <path d="M4 12H20" />
            <path d="M12 5V19" />
            <path d="M8 8H10" />
            <path d="M8 16H10" />
            <path d="M14 16H16" />
            <path d="M14 8H16" />
          </svg>
        ),
        title: "Digital Wardrobe",
        description: "Create a digital inventory of your clothing with photos for easy comparison when shopping online."
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10" strokeWidth="1.5">
            <path d="M3 6H5L7 19H17L19 6H21" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 11C9 11 10 13 12 13C14 13 15 11 15 11" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="8" r="1" />
            <circle cx="15" cy="8" r="1" />
          </svg>
        ),
        title: "Cart Analysis",
        description: "Automatically analyzes items in your cart and compares them to what you already own."
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10" strokeWidth="1.5">
            <circle cx="10" cy="10" r="7" />
            <path d="M16 16L22 22" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 10H13" strokeLinecap="round" />
            <path d="M10 7V13" strokeLinecap="round" />
          </svg>
        ),
        title: "Similarity Detection",
        description: "Identifies duplicates and similar items in your wardrobe to prevent unnecessary purchases."
      }
    ],
    insights: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10" strokeWidth="1.5">
            <path d="M12 2V6" strokeLinecap="round" />
            <path d="M12 18V22" strokeLinecap="round" />
            <path d="M4.93 4.93L7.76 7.76" strokeLinecap="round" />
            <path d="M16.24 16.24L19.07 19.07" strokeLinecap="round" />
            <path d="M2 12H6" strokeLinecap="round" />
            <path d="M18 12H22" strokeLinecap="round" />
            <path d="M4.93 19.07L7.76 16.24" strokeLinecap="round" />
            <path d="M16.24 7.76L19.07 4.93" strokeLinecap="round" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        ),
        title: "Financial Savings",
        description: "Track how much money you've saved by skipping unnecessary purchases and making mindful choices."
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10" strokeWidth="1.5">
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
            <path d="M8 12C8 12 10 15 12 15C14 15 16 12 16 12C16 12 14 9 12 9C10 9 8 12 8 12Z" />
            <path d="M12 5V7" strokeLinecap="round" />
            <path d="M12 17V19" strokeLinecap="round" />
            <path d="M5 12H7" strokeLinecap="round" />
            <path d="M17 12H19" strokeLinecap="round" />
          </svg>
        ),
        title: "Environmental Impact",
        description: "Visualize your contribution to sustainability through reduced waste and lowered carbon footprint."
      }
    ],
    privacy: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10" strokeWidth="1.5">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
            <path d="M8 11L11 14L16 9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "Privacy Focused",
        description: "Your wardrobe data stays on your device. We respect your privacy and never share your personal information."
      }
    ]
  };

  // Animation utility class
  const getAnimationClass = (index) => {
    return `animate-fade-in-${index % 3}`;
  };

  // Custom animations
  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-0 {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .animate-fade-in-1 {
      animation: fadeInUp 0.6s 0.2s ease-out forwards;
      opacity: 0;
    }
    .animate-fade-in-2 {
      animation: fadeInUp 0.6s 0.4s ease-out forwards;
      opacity: 0;
    }
  `;

  return (
    <section id="features" className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: theme.colors.secondaryBackground }}>
      <style>{animationStyles}</style>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text }}>Smart Shopping Features</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.secondaryText }}>
            Explore how SkipTheCart transforms shopping into a smarter, greener experience.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className="m-2 px-6 py-3 rounded-full font-medium transition-all duration-300 text-center"
              style={{
                backgroundColor: activeTab === category.id ? theme.colors.primary : 'white',
                color: activeTab === category.id ? 'white' : theme.colors.secondaryText,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Category Description */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold mb-2" style={{ color: theme.colors.text }}>
            {categories.find(cat => cat.id === activeTab).title}
          </h3>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: theme.colors.secondaryText }}>
            {categories.find(cat => cat.id === activeTab).description}
          </p>
        </div>
        
        {/* Features Display */}
        <div className="mt-8">
          {activeTab === 'wardrobe' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.wardrobe.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${getAnimationClass(index)}`}
                >
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                    style={{ backgroundColor: `${theme.colors.primaryLight}50`, color: theme.colors.primary }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: theme.colors.text }}>{feature.title}</h3>
                  <p style={{ color: theme.colors.secondaryText }}>{feature.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'insights' && (
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {features.insights.map((feature, index) => (
                  <div 
                    key={index}
                    className={`p-8 border-b md:border-b-0 md:last:border-l ${getAnimationClass(index)}`}
                    style={{ borderColor: '#f0f0f0' }}
                  >
                    <div className="flex items-start">
                      <div 
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-6 shrink-0"
                        style={{ backgroundColor: `${theme.colors.primaryLight}50`, color: theme.colors.primary }}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3" style={{ color: theme.colors.text }}>{feature.title}</h3>
                        <p style={{ color: theme.colors.secondaryText }}>{feature.description}</p>
                        
                        {/* Progress indicator */}
                        {index === 0 && (
                          <div className="mt-4">
                            <div className="text-sm font-medium mb-1" style={{ color: theme.colors.text }}>
                              Average savings: $75/month
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full" 
                                style={{ width: '65%', backgroundColor: theme.colors.primary }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          <div className="mt-4">
                            <div className="text-sm font-medium mb-1" style={{ color: theme.colors.text }}>
                              Carbon footprint reduction: 15kg/month
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full" 
                                style={{ width: '40%', backgroundColor: '#4CAF50' }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Combined Stats Display */}
              <div 
                className="p-6 text-center"
                style={{ backgroundColor: `${theme.colors.primaryLight}30` }}
              >
                <p className="font-medium" style={{ color: theme.colors.primaryDark }}>
                  Our users have collectively saved over $2.5M and prevented 120 tons of textile waste!
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'privacy' && (
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto text-center animate-fade-in-0">
              <div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                style={{ backgroundColor: `${theme.colors.primaryLight}50`, color: theme.colors.primary }}
              >
                {features.privacy[0].icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.colors.text }}>
                {features.privacy[0].title}
              </h3>
              <p className="text-lg mb-6" style={{ color: theme.colors.secondaryText }}>
                {features.privacy[0].description}
              </p>
              <div 
                className="p-4 rounded-lg max-w-md mx-auto"
                style={{ backgroundColor: `${theme.colors.primaryLight}30` }}
              >
                <p className="font-medium" style={{ color: theme.colors.primaryDark }}>
                  Your data, your control—always secure.
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile Indicator Dots */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: activeTab === category.id ? theme.colors.primary : '#e0e0e0',
                  transform: activeTab === category.id ? 'scale(1.5)' : 'scale(1)'
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeaturesSection;