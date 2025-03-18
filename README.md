# SkipTheCart Website

This is the official website for SkipTheCart, a mobile app that helps users shop more mindfully by comparing cart items with their existing wardrobe.

## Project Structure

The project follows a modular component-based architecture:

```
src/
├── components/      # Reusable UI components
├── sections/        # Page sections composed of components
├── theme.js         # Global theme configuration
├── App.js           # Main application component
└── index.js         # Entry point
```

## Components

- **Button**: Customizable button component with primary, secondary, and text variants
- **Navbar**: Responsive navigation with mobile menu 
- **FeatureCard**: Displays app features with icon, title, and description
- **StepCard**: Displays how-to steps with alternating layout
- **Testimonial**: Displays user testimonials in a card format
- **Footer**: Site footer with links and social icons
- **NewsletterSignup**: Email newsletter signup form
- **AppStoreButton**: Download buttons for app stores

## Theme

The theme is based on the SkipTheCart iOS app's color scheme, featuring:

- Light purple primary color
- Consistent spacing scales
- Consistent typography

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Available Scripts

- `npm start`: Run the development server
- `npm test`: Launch the test runner
- `npm run build`: Build the app for production
- `npm run eject`: Eject from Create React App

## Technologies Used

- React
- TailwindCSS 
- CSS-in-JS for theme-based styling

## Deployment

The website can be deployed to your preferred hosting platform:

1. Build the production version:
   ```
   npm run build
   ```
2. Deploy the contents of the `build` folder

## License

All rights reserved. This codebase is proprietary and confidential.