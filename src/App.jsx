import { useState } from 'react';
import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header.jsx';
import ProductListingPage from './pages/ProductListingPage.jsx';
import CartPage from './pages/CartPage.jsx';
import './App.css';

export default function App() {
  const [page, setPage] = useState('products');

  return (
    <CartProvider>
      <Header page={page} onNavigate={setPage} />
      {page === 'products' ? (
        <ProductListingPage />
      ) : (
        <CartPage onContinueShopping={() => setPage('products')} />
      )}
    </CartProvider>
  );
}
