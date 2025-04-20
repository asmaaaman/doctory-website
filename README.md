# Doctory Website

A modern, accessible medical appointment booking platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Doctor Cards**: Browse detailed doctor profiles with information about specializations, experience, locations, and availability
- **Appointment Booking**: Book appointments with doctors through an intuitive booking interface
- **Filtering System**: Filter doctors by specialization and availability
- **Accessibility**: Fully accessible interface with ARIA attributes, keyboard navigation, and screen reader support
- **Responsive Design**: Optimized for all device sizes

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Testing**: Vitest with React Testing Library
- **Build Tool**: Vite

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asmaaaman/doctory-website.git
   cd doctory-website
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Environment Setup

The project uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=http://localhost:3000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Development Workflow

1. Create a new branch for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

3. Push your branch and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

## Testing

Run the test suite:

```bash
yarn test
# or
npm test
```

For test coverage:

```bash
yarn test:coverage
# or
npm run test:coverage
```

## Project Structure

```
doctory-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── data/            # Mock data and types
│   ├── store/           # State management
│   ├── __tests__/       # Test files
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── .vscode/             # VS Code configuration
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── vitest.config.ts     # Vitest configuration
```

## Accessibility Features

- Semantic HTML structure
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- High contrast text
- Descriptive alt text for images

## AI Tools Used in Development

This project was developed with assistance from AI tools:

- **Cursor IDE**: Used for code generation, refactoring, and accessibility improvements
- **Claude AI**: Assisted with component design, accessibility implementation, and documentation
- **GitHub Copilot**: Provided code suggestions and helped with TypeScript type definitions

The AI tools were particularly helpful for:

- Implementing ARIA attributes for better screen reader support
- Optimizing keyboard navigation
- Generating comprehensive test cases
- Creating semantic HTML structure
- Writing documentation

## Known Limitations

- **Mock Data**: The application currently uses mock data instead of a real backend API
- **Authentication**: User authentication is not implemented
- **Responsive Design**: Some components may not be fully optimized for mobile devices
- **Browser Compatibility**: Limited testing on older browsers
- **Performance**: No performance optimization for large datasets

## Next Steps

- **Backend Integration**: Connect to a real API for doctor data and appointments
- **User Authentication**: Implement user registration and login
- **Payment Processing**: Add payment gateway integration for consultation fees
- **Real-time Availability**: Implement real-time updates for doctor availability
- **Advanced Filtering**: Add more filter options (price range, rating, etc.)
- **Internationalization**: Add support for multiple languages
- **Dark Mode**: Implement a dark mode theme
- **Performance Optimization**: Implement code splitting and lazy loading
- **Accessibility Audit**: Conduct a comprehensive accessibility audit
- **End-to-End Testing**: Add Cypress or Playwright for E2E testing

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI components inspired by modern medical platforms
