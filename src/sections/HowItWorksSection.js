import React from 'react';
import theme from '../theme';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Add Your Wardrobe",
      description: "Take photos of your clothing or upload existing ones. Our app organizes them by category, color, and style.",
      image: "/api/placeholder/500/375",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <path d="M21 8V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V7H21V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      number: 2,
      title: "Shop Normally",
      description: "Browse your favorite online stores as usual. When you add items to your cart, SkipTheCart works in the background.",
      image: "/api/placeholder/500/375",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <path d="M3 6H5L9 17H19.2L22 9H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      number: 3,
      title: "Review Insights",
      description: "Before you checkout, see how items in your cart compare to what you already own. Get alerts for duplicates and similar items.",
      image: "/api/placeholder/500/375",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <path d="M10 10C10 11.1046 9.10457 12 8 12C6.89543 12 6 11.1046 6 10C6 8.89543 6.89543 8 8 8C9.10457 8 10 8.89543 10 10Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      number: 4,
      title: "Make Mindful Decisions",
      description: "Choose what to buy based on actual wardrobe needs, not impulse. Track your savings and reduce closet clutter.",
      image: "/api/placeholder/500/375",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M17 3L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  // Visual connector dots for mobile
  const ConnectorDots = () => (
    <div className="flex flex-col items-center mx-auto w-px md:hidden">
      <div className="h-8 w-px bg-gray-200"></div>
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="h-8 w-px bg-gray-200"></div>
    </div>
  );

  return (
    <section id="how-it-works" className="py-16 md:py-24" style={{ backgroundColor: theme.colors.secondaryBackground }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text }}>How SkipTheCart Works</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.secondaryText }}>
            Getting started with SkipTheCart is easy. Follow these simple steps to shop smarter.
          </p>
        </div>
        
        {/* Visual connector for desktop */}
        <div className="hidden md:block relative h-full">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 z-0"></div>
        </div>
        
        {/* Step Cards */}
        <div className="space-y-6 md:space-y-0 relative">
          {steps.map((step, index) => {
            const isEvenStep = step.number % 2 === 0;
            
            return (
              <React.Fragment key={step.number}>
                <div className={`md:grid md:grid-cols-2 md:gap-8 md:items-center md:mb-24 relative z-10`}>
                  {/* Image side - changes position based on even/odd */}
                  <div className={`${isEvenStep ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="rounded-xl overflow-hidden shadow-md mb-6 md:mb-0">
                      <div className="relative">
                        <img 
                          src={step.image} 
                          alt={`Step ${step.number}: ${step.title}`}
                          className="w-full h-64 md:h-auto object-cover"
                        />
                        <div className="absolute inset-0" style={{ 
                          background: `linear-gradient(${isEvenStep ? '-45deg' : '45deg'}, ${theme.colors.primary}10, ${theme.colors.primaryDark}30)` 
                        }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content side */}
                  <div className={`${isEvenStep ? 'md:order-1' : 'md:order-2'} md:px-6`}>
                    {/* Step number circle for desktop */}
                    <div className="hidden md:flex md:items-center md:justify-center md:absolute md:left-1/2 md:-translate-x-1/2" style={{ 
                      top: index === 0 ? '0' : '',
                      bottom: index === steps.length - 1 ? '0' : '',
                      top: index !== 0 && index !== steps.length - 1 ? '50%' : '', 
                      transform: index !== 0 && index !== steps.length - 1 ? 'translate(-50%, -50%)' : '' 
                    }}>
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold z-10"
                        style={{ 
                          backgroundColor: theme.colors.primary,
                          color: 'white',
                          border: '3px solid white',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div 
                        className="flex items-center justify-center w-14 h-14 rounded-full mr-4 md:mr-6 shrink-0"
                        style={{ 
                          backgroundColor: `${theme.colors.primaryLight}40`,
                          color: theme.colors.primary
                        }}
                      >
                        {step.icon}
                      </div>
                      
                      <div>
                        <div 
                          className="inline-block rounded-full py-1 px-3 text-xs font-semibold mb-2"
                          style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primaryDark }}
                        >
                          STEP {step.number}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: theme.colors.text }}>
                          {step.title}
                        </h3>
                        <p className="text-base md:text-lg" style={{ color: theme.colors.secondaryText }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connector dots for mobile (except after last item) */}
                {index < steps.length - 1 && (
                  <ConnectorDots />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;