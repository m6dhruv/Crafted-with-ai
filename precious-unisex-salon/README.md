# Precious Unisex Salon Website

A modern, elegant website for Precious Unisex Salon with a black, gold, and red color scheme.

## Features

- Modern and elegant design with black, gold, and red color scheme
- Responsive layout for all device sizes
- Interactive UI elements with smooth animations
- Service showcase with filtering options
- Client testimonials with carousel
- WhatsApp direct booking button
- Gallery section
- Contact information with location details
- FAQ section with accordion

## Tech Stack

- React.js
- Tailwind CSS
- Framer Motion for animations
- React Router for navigation
- React Icons for UI icons
- React Slick for carousels

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd precious-unisex-salon
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
precious-unisex-salon/
├── public/                 # Static assets
│   ├── logo.svg            # Salon logo
│   └── favicon.svg         # Website favicon
├── src/                    # Source code
│   ├── assets/             # Assets used in the project
│   │   └── images/         # Optimized images for the website
│   ├── components/         # React components
│   │   ├── layout/         # Layout components (navbar, footer)
│   │   ├── sections/       # Page sections
│   │   └── ui/             # Reusable UI components
│   ├── pages/              # Page components
│   ├── data/               # Static data files
│   ├── App.jsx             # Application entry point
│   ├── index.css           # Global styles
│   └── main.jsx            # React initialization
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## Color Scheme

- Primary: Black (#0a0a0a, #121212, #1a1a1a)
- Accent: Gold (#d4952f, #c37d25, #a16122)
- Highlight: Red (#dc2626, #b91c1c, #991b1b)
- Text: White and various grays

## WhatsApp Integration

This website uses direct WhatsApp integration for appointment booking:

- Floating WhatsApp button for easy access
- Direct booking links on service cards
- Pre-filled service-specific messages for quicker communication
- No backend required - ideal for small businesses

## Customization

- Colors can be adjusted in `tailwind.config.js`
- Global styles are defined in `src/index.css`
- Animations are handled by Framer Motion
- WhatsApp number can be updated in the WhatsAppButton and WhatsAppLink components

## License

[MIT License](LICENSE)

## Acknowledgments

- Design inspiration from premium salon websites
- Images from Pexels
- Icons from React Icons
