# Bootstrap Dashboard with React Router (Experiment 4 Extension)

## Experiment 4 - Context, Reducer & Performance

This project is an extension of the Experiment 3 dashboard. It introduces global state management with React Context and useReducer, performance improvements using useMemo, and adds a new Cart page demonstrating these features.

## Features Implemented

✅ **React Router Integration**
- Installed and configured `react-router-dom`
- Set up BrowserRouter in main.jsx
- Created Routes for Home, Projects, Contact, and Cart pages

✅ **Global State with Context & Reducer**
- `AppContext` provides theme & cart state throughout the app
- `useReducer` manages cart actions (add, remove, update quantity, clear)
- Theme toggler component switches between light/dark modes

✅ **Performance Optimization**
- `useMemo` calculates derived values (total items/price) and memoizes cart item rendering

✅ **New Page**
- **Cart.jsx**: shows cart contents, uses reducer actions, displays summary stats with memoized computations

✅ **Design**
- Maintained consistent Bootstrap styling from Experiment 3
- Added theme-specific styles (.theme-light / .theme-dark)
- Responsive layout across pages

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
4. Added Context API provider and global state for theme/cart
5. Created reducer with at least three actions (ADD, REMOVE, CLEAR)
6. Used useMemo to optimize cart computations and component rendering
7. Introduced a new Cart page demonstrating state management
8. Added theme toggler and light/dark UI modes
9. Updated navbar with cart badge and theme toggle
