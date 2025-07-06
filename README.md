# Miłosz Słowiński - Personal Resume Website

A modern, responsive personal resume website built with React and styled with a beautiful coffee flat-white theme.

## Features

- ✨ Modern React application
- 🎨 Coffee flat-white color scheme
- 📱 Fully responsive design
- 🚀 Fast and lightweight
- 🎯 Clean and professional layout
- 📋 Project showcase with skills
- 🔄 Interactive project toggle

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MilzorV/MilzorV.github.io.git
cd MilzorV.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To build the app for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Adding Projects

Edit the `src/App.js` file to add your own projects:

```jsx
<ProjectCard
  name="Your Project Name"
  date="January 2024 - March 2024"
  skills="React, Node.js, MongoDB"
  description="Description of your project and what you accomplished."
/>
```

### Styling

The website uses CSS custom properties for easy theming. Main colors are defined in `src/index.css`:

- `--flat-white`: Main background color
- `--coffee-brown`: Primary text color
- `--latte`: Secondary background color
- `--espresso`: Dark accent color
- `--cappuccino`: Border and accent color
- `--mocha`: Secondary text color
- `--cream`: Card background color
- `--steam`: Light accent color

## Deployment

This website is configured for GitHub Pages deployment. There are two ways to deploy:

### Automatic Deployment (Recommended)
1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://milzorv.github.io`

### Manual Deployment
If you prefer to deploy manually:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

### GitHub Pages Setup
Make sure your repository settings are configured for GitHub Pages:
1. Go to your repository Settings
2. Navigate to Pages section
3. Set Source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save the settings

## Technologies Used

- React 18
- CSS3 with custom properties
- Inter font family
- Responsive design principles

## License

This project is open source and available under the [MIT License](LICENSE).
