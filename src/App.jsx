// Import necessary libraries and components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

// Lazy load components for optimized performance
import { Suspense, lazy } from 'react';
const ProductList = lazy(() => import('./Components/ProductList'));
const Cart = lazy(() => import('./Components/Cart'));
const ProductDetail = lazy(() => import('./Components/ProductDetail'));
const NotFound = lazy(() => import('./Components/NotFound'));

// Main application component
function App() {
  
return (
  // Router wraps the entire application to enable routing
  <Router>
        {/* Display header on all pages */}
    <Header />
       {/* Suspense provides a fallback, while lazy components are loading */}
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Footer />
  </Router>
);
}

export default App;