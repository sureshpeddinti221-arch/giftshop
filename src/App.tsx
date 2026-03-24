import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Occasions from './pages/Occasions';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import OurStory from './pages/OurStory';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
