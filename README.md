# Modern React Portfolio

A modern, responsive portfolio website built with React, TypeScript, and styled-components. Features a clean, Apple-like design with dark/light mode support.

## Features

- 🎨 Modern, clean design with Apple-like aesthetics
- 🌓 Dark/Light mode with persistent preference
- 📱 Fully responsive across all devices
- ⚡ Built with React, TypeScript, and Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO-friendly with React Router
- 🎨 Styled with styled-components
- 📦 Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── styles/        # Global styles and theme
├── context/       # React context providers
├── assets/        # Images and other static assets
└── App.tsx        # Main App component
```

## Customization

### Theme

The theme can be customized in `src/styles/theme.ts`. The current theme includes:

- Light/Dark mode colors
- Accent colors
- Typography
- Spacing
- Transitions

### Adding Projects

Projects can be added by:

1. Adding a new project card in `src/pages/Work.tsx`
2. Creating a new project detail page in `src/pages/work/`
3. Adding the route in `src/App.tsx`

## Deployment

The project is configured for deployment to GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Run the build command:
```bash
npm run build
```
3. Deploy to GitHub Pages:
```bash
npm run deploy
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
