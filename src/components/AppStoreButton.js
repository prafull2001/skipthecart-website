// src/components/AppStoreButton.js
import React from 'react';
import theme from '../theme';

const AppStoreButton = ({ platform }) => {
  const isApple = platform === 'apple';

  return (
    <button 
      className="bg-white text-center py-3 px-6 rounded-xl flex items-center justify-center transition-all hover:shadow-md"
      style={{ color: theme.colors.primaryDark }}
    >
      <div className="mr-3">
        {isApple ? (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3 0C16.3 0 10.2 0.1 10.2 7.6C10.2 7.6 15.1 7.1 16.3 0ZM19.9 8.9C19.4 9.4 17.7 10.4 17.7 12.7C17.7 15.3 19.9 16.3 20 16.3C20 16.3 19.1 18.8 17.3 18.8C16.5 18.8 15.9 18.4 15.1 18.4C14.2 18.4 13.5 18.8 12.9 18.8C11.2 18.8 9.3 16.4 9.3 13.4C9.3 10.4 11 9 12.2 9C13 9 13.7 9.5 14.4 9.5C15 9.5 15.7 9 16.7 9C17 9 18.5 9 19.9 8.9ZM20.9 5C20.9 5.8 20.5 6.7 20 7.4C19.5 8 18.7 8.6 17.9 8.5C17.9 7.7 18.3 6.8 18.9 6.2C19.5 5.5 20.3 5 20.9 5Z"/>
          </svg>
        ) : (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.609 1.814L13.792 12l-10.183 10.186c-2.04-2.203-2.04-5.634 0-7.837l3.637-3.643L3.609 7.062c-2.04-2.202-2.04-5.634 0-7.837l3.637-3.643-3.637 3.639zm18.705 10.186l-3.637 3.643 3.637 3.637c2.04-2.203 2.04-5.634 0-7.837l-3.637-3.643 3.637-3.639c2.04-2.202 2.04-5.634 0-7.837l-3.637 3.643 3.637 3.643c2.04 2.203 2.04 5.634 0 7.837z" />
          </svg>
        )}
      </div>
      <div className="text-left">
        <div className="text-xs">Download on the</div>
        <div className="text-lg font-semibold">{isApple ? 'App Store' : 'Google Play'}</div>
      </div>
    </button>
  );
};

export default AppStoreButton;