// src/theme.js
// Theme configuration based on the iOS app color scheme

const theme = {
    colors: {
      primary: 'rgb(187, 143, 206)',       // Light Purple
      primaryDark: 'rgb(157, 113, 176)',   // Darker Purple
      primaryLight: 'rgb(217, 183, 226)',  // Lighter Purple
      background: 'white',
      secondaryBackground: 'rgb(248, 248, 248)',
      text: 'rgba(0, 0, 0, 0.8)',
      secondaryText: 'rgba(0, 0, 0, 0.6)',
      placeholderText: 'rgba(0, 0, 0, 0.4)',
      success: 'green',
      error: 'red',
      warning: 'orange',
    },
    spacing: {
      xxsmall: '4px',
      xsmall: '8px',
      small: '12px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
      xxlarge: '48px',
    },
    layout: {
      cornerRadius: '12px',
      smallCornerRadius: '8px',
      buttonHeight: '52px',
      horizontalPadding: '24px',
    }
  };
  
  export default theme;