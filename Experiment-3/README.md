# Bootstrap Dashboard with React Router

## Experiment 3 - Multi-Page Navigation

This project extends the previous Bootstrap dashboard by implementing React Router for seamless navigation between multiple pages.

## Features Implemented

✅ **React Router Integration**
- Installed and configured `react-router-dom`
- Set up BrowserRouter in main.jsx
- Created Routes for Home, Projects, and Contact pages

✅ **Navigation**
- Updated Navbar component with React Router Link components
- Smooth navigation between pages without page reload
- Responsive navbar with Bootstrap styling

✅ **Page Structure**
- **Home Page**: Features section with stats, testimonials
- **Projects Page**: Portfolio showcase with project categories and featured projects
- **Contact Page**: Contact form with business hours and FAQ section

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with React Router Links
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   └── CardComponent.jsx
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Projects.jsx        # Portfolio page
│   └── Contact.jsx         # Contact page
├── App.jsx                 # Routes configuration
└── main.jsx                # BrowserRouter setup
```

## Installation & Setup

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Technologies Used

- React 19.2.0
- React Router DOM 7.1.3
- Bootstrap 5.3.8
- Vite 7.2.4

## Key Changes from Previous Version

1. Added React Router for client-side routing
2. Converted Navbar from state-based to route-based navigation
3. Implemented proper page separation with Routes
4. Maintained consistent design across all pages
