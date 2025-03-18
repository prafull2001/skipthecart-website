// src/sections/TestimonialsSection.js
import React from 'react';
import Testimonial from '../components/Testimonial';
import theme from '../theme';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I've saved over $500 in just two months by avoiding duplicate purchases. This app pays for itself!",
      author: "Jessica T.",
      role: "Fashion Enthusiast"
    },
    {
      quote: "As someone who shops a lot online, SkipTheCart has been a game-changer for organizing my wardrobe and making smarter choices.",
      author: "Michael R.",
      role: "Tech Professional"
    },
    {
      quote: "The visual comparison feature is brilliant. It's like having a personal stylist who knows your entire closet.",
      author: "Samantha K.",
      role: "Creative Director"
    }
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: theme.colors.secondaryBackground }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text }}>What Our Users Say</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.secondaryText }}>
            Discover how SkipTheCart has helped people shop more mindfully and save money.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;