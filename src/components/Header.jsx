import { useCart } from '../context/CartContext.jsx';

export default function Header({ page, onNavigate }) {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="brand" onClick={() => onNavigate('products')}>
        🌴 Paradise Nursery
      </div>
      <nav className="nav">
        <button
          className={page === 'products' ? 'active' : ''}
          onClick={() => onNavigate('products')}
        >
          Plants
        </button>
        <button
          className={page === 'cart' ? 'active' : ''}
          onClick={() => onNavigate('cart')}
          aria-label="Cart"
        >
          Cart (<span data-testid="cart-count">{totalItems}</span>)
        </button>
      </nav>
    </header>
  );
}
