import { useCart } from '../context/CartContext.jsx';
import CartItem from '../components/CartItem.jsx';

export default function CartPage({ onContinueShopping }) {
  const { items, totalCost, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="page cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <button className="btn" onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </main>
    );
  }

  return (
    <main className="page cart-page">
      <h1>Your Cart</h1>
      <div className="cart-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        <p>Total items: {totalItems}</p>
        <p className="total-cost">
          Total: <span data-testid="total-cost">${totalCost.toFixed(2)}</span>
        </p>
        <div className="cart-actions">
          <button className="btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
          <button className="btn btn-secondary" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="btn" disabled>
            Checkout (coming soon)
          </button>
        </div>
      </div>
    </main>
  );
}
