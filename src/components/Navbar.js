// src/components/Navbar.js
import React, { useState } from 'react';
import theme from '../theme';
import NavLink from './NavLink';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl" role="img" aria-label="shopping bag">🛍️</span>
          <span className="text-xl font-bold" style={{ color: theme.colors.text }}>SkipTheCart</span>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#download">Download</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-2 bg-white border-t">
          <div className="flex flex-col space-y-3 px-6">
            <NavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</NavLink>
            <NavLink href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</NavLink>
            <NavLink href="#download" onClick={() => setMobileMenuOpen(false)}>Download</NavLink>
            <NavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;