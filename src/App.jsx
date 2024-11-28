import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Suspense, lazy } from 'react';
const ProductList = lazy(() => import('./Components/ProductList'));
const Cart = lazy(() => import('./Components/Cart'));
const ProductDetail = lazy(() => import('./Components/ProductDetail'));
const NotFound = lazy(() => import('./Components/NotFound'));

function App() {
  
return (
  <Router>
    <Header />
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