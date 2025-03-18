// src/components/NewsletterSignup.js
import React, { useState } from 'react';
import theme from '../theme';
import Button from './Button';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Here you would typically integrate with an email service
    alert(`Thank you for subscribing with: ${email}`);
  };

  return (
    <div className="py-16 text-center" style={{ backgroundColor: theme.colors.primaryLight }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text }}>Stay Updated</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: theme.colors.secondaryText }}>
          Sign up for our newsletter to receive updates, tips for mindful shopping, and exclusive offers.
        </p>
        
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-3 rounded-lg"
            style={{ 
              border: `1px solid ${theme.colors.primaryDark}`,
              outline: 'none',
            }}
          />
          <Button variant="primary" onClick={handleSubscribe}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;