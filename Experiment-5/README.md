# �️ ShopHub - Advanced E-Commerce Platform

A modern e-commerce platform with Redux Toolkit, Context API, performance optimization using useMemo, and React Router for multi-page navigation.

## ✨ Features

### ✅ Redux Toolkit Implementation
- **Store Configuration**: Centralized store using `configureStore`
- **Cart Slice**: Actions for `addItem`, `removeItem`, `updateQuantity`, `clearCart`
- **Analytics Slice**: Actions for `addTask`, `toggleTask`, `deleteTask`
- **State Management**: Efficient global state handling for complex data

### ✅ Context API Integration
- **Theme Management**: Light/Dark mode toggle using Context
- **User Profile**: Mock user data stored in global context
- **Provider Pattern**: AppProvider wraps the entire application

### ✅ Performance Optimization
- **useMemo Hook**: Calculates cart total price only when items change
- **useMemo in Analytics**: Optimizes task completion statistics
- **Prevents Unnecessary Re-renders**: Derived data computed efficiently

### ✅ React Router (Multi-Page)
- **Home** - Product showcase with hero section
- **Projects** - Portfolio of featured projects
- **Contact** - Contact form with user information
- **Analytics** - Task dashboard with Redux state
- **Cart** (Advanced Feature) - Shopping cart with Redux & useMemo

### ✅ UI/UX Features
- Responsive Bootstrap design
- Light/Dark theme switching
- Gradient buttons and cards
- Smooth animations and transitions
- Mobile-friendly navigation

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation with theme toggle
│   ├── Footer.jsx              # App footer
│   ├── CardComponent.jsx       # Product card with dispatch
│   ├── HeroSection.jsx         # Hero banner
│   ├── ThemeToggle.jsx         # Theme switcher component
│   └── Dashboard/
│       └── Analytics.jsx       # Analytics page (Redux + useMemo)
│
├── context/
│   └── AppContext.jsx          # Theme & User context provider
│
├── redux/
│   ├── store.js                # Redux store configuration
│   └── slices/
│       ├── cartSlice.js        # Cart state (3+ actions)
│       └── analyticsSlice.js   # Analytics state (3+ actions)
│
├── pages/
│   ├── Home.jsx                # Home page with products
│   ├── Projects.jsx            # Projects showcase
│   ├── Contact.jsx             # Contact form page
│   └── Cart.jsx                # Shopping cart system
│
├── App.jsx                     # Main app with routing
├── main.jsx                    # React entry point
├── index.css                   # Global styles
└── styles.css                  # Component styles
```

## 🎯 Key Requirements Met

### Redux Toolkit
```javascript
// cartSlice.js with 4 actions
- addItem: Add product to cart
- removeItem: Remove product from cart
- updateQuantity: Update item quantity
- clearCart: Clear entire cart
```

### Context API
```javascript
// AppContext.jsx
- theme: Light/Dark mode
- user: Current user profile
- toggleTheme(): Switch themes
- updateUser(): Update user data
```

### useMemo Optimization
```javascript
// Cart.jsx - Calculates total price
const cartTotal = useMemo(() => {
  return cartItems.reduce((total, item) => 
    total + item.price * item.quantity, 0);
}, [cartItems]);

// Analytics.jsx - Calculates stats
const analytics = useMemo(() => ({
  completed: completedCount,
  pending: totalTasks - completedCount,
  completionRate: ((completedCount / totalTasks) * 100).toFixed(1),
}), [completedCount, totalTasks]);
```

### React Router
- 5 pages total (Home, Projects, Contact, Analytics, **Cart - NEW**)
- Navbar links to all routes
- Dynamic routing with useParams ready

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
# Clone or download the project
cd Experiment-5

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Dependencies

- **react** (^19.2.0)
- **react-dom** (^19.2.0)
- **react-router-dom** (^7.13.0)
- **@reduxjs/toolkit** (^2.11.2)
- **react-redux** (^9.2.0)
- **bootstrap** (^5.3.8)

## 🎨 Features Showcase

### Cart Page (Advanced Feature)
- ✅ Redux state for cart items
- ✅ useDispatch for adding/removing items
- ✅ useSelector to read cart state
- ✅ useMemo for total price calculation
- ✅ Quantity management with actions
- ✅ Order summary with tax calculation

### Analytics Dashboard
- ✅ Task management with Redux
- ✅ Completion statistics with useMemo
- ✅ Toggle and delete tasks
- ✅ Visual progress tracking

### Theme Switching
- ✅ Context API for theme state
- ✅ Light/Dark mode toggle in navbar
- ✅ Persistent theme across pages
- ✅ Styled components adapt to theme

## 🌐 How to Deploy on Vercel

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Deploy! Your URL format: `{uid}-5-{your-name}.vercel.app`

## 📸 Screenshots

Screenshots are available in the `/screenshots` folder:
- Home page with products
- Cart page with Redux state
- Analytics dashboard
- Light/Dark theme versions

## 🧾 ShopHub Features Summary

| Feature | Status |
|---------|--------|
| Redux Toolkit Store | ✅ Implemented |
| Cart Slice (4 actions) | ✅ Implemented |
| Analytics Slice (3 actions) | ✅ Implemented |
| Context API (Theme + User) | ✅ Implemented |
| useMemo (Cart Total) | ✅ Implemented |
| useMemo (Analytics Stats) | ✅ Implemented |
| React Router (5 pages) | ✅ Implemented |
| Cart Page (Advanced) | ✅ NEW FEATURE |
| Theme Switching | ✅ Implemented |
| Responsive Design | ✅ Implemented |

## 📚 Learning Outcomes

By completing this project, you'll understand:
- ✅ Redux Toolkit basics and best practices
- ✅ Creating slices with reducers and actions
- ✅ Using useDispatch and useSelector hooks
- ✅ Context API for global state management
- ✅ Performance optimization with useMemo
- ✅ Multi-page routing with React Router
- ✅ Building scalable React applications

## 🤝 Contributing

Feel free to fork this project and add more features!

## 📝 License

This project is open source and available under the MIT License.

---

**Platform**: ShopHub - Advanced E-Commerce  
**Build Date**: March 2, 2026  
**Status**: ✅ Complete and Ready for Deployment
