import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import AboutUs from './components/AboutUs.jsx';
import CartPage from './pages/CartPage.jsx';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="landing">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Bring a little paradise home, one plant at a time.</p>
        <button className="btn btn-large" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}
