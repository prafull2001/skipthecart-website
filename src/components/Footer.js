// src/components/Footer.js
import React from 'react';
import theme from '../theme';
import SocialIcon from './SocialIcon';
import FooterLink from './FooterLink';

const Footer = () => (
  <footer style={{ backgroundColor: theme.colors.secondaryBackground }} className="py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl" role="img" aria-label="shopping bag">🛍️</span>
            <span className="text-xl font-bold" style={{ color: theme.colors.text }}>SkipTheCart</span>
          </div>
          <p className="mb-4" style={{ color: theme.colors.secondaryText }}>
            Shop smarter. Save better.
          </p>
          <div className="flex space-x-4">
            <SocialIcon>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.5 0-1.792.721-1.792 1.771v2.311h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.954 4.569c-.885.389-1.83.652-2.825.771 1.015-.604 1.794-1.561 2.163-2.701-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.561-3.591-1.561-2.717 0-4.92 2.203-4.92 4.918 0 .383.043.761.129 1.12-4.09-.207-7.712-2.165-10.141-5.139-.422.721-.666 1.561-.666 2.457 0 1.704.869 3.21 2.192 4.093-.807-.028-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.373 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.624-.03-.927-.086.626 1.957 2.445 3.38 4.599 3.42-1.688 1.322-3.811 2.105-6.119 2.105-.398 0-.79-.023-1.175-.069 2.178 1.397 4.768 2.212 7.548 2.212 9.057 0 14.009-7.502 14.009-14.007 0-.214-.005-.426-.015-.638.961-.689 1.795-1.55 2.455-2.528z"/>
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </SocialIcon>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4" style={{ color: theme.colors.text }}>Resources</h4>
          <ul className="space-y-2">
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4" style={{ color: theme.colors.text }}>Company</h4>
          <ul className="space-y-2">
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Press Kit</FooterLink>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4" style={{ color: theme.colors.text }}>Contact</h4>
          <ul className="space-y-2">
            <FooterLink href="mailto:skipthecartapp@gmail.com">skipthecartapp@gmail.com</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Partnerships</FooterLink>
            <FooterLink href="#">Feedback</FooterLink>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-12 pt-8 text-center">
        <p style={{ color: theme.colors.secondaryText }}>© {new Date().getFullYear()} SkipTheCart. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;