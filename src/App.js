// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import TestimonialsSection from './sections/TestimonialsSection';
import DownloadSection from './sections/DownloadSection';
import NewsletterSignup from './components/NewsletterSignup';
import EnhancedFeaturesSection from './sections/EnhancedFeaturesSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      {/* <FeaturesSection /> */}
      <EnhancedFeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadSection />
      {/* <NewsletterSignup /> */}
      <Footer />
    </div>
  );
}

export default App;