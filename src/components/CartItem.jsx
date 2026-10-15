import { useCart } from '../context/CartContext.jsx';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image" aria-hidden="true">
        {item.image}
      </div>
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)} each</p>
      </div>
      <div className="quantity-controls">
        <button
          aria-label={`Decrease ${item.name}`}
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          −
        </button>
        <span data-testid={`qty-${item.id}`}>{item.quantity}</span>
        <button
          aria-label={`Increase ${item.name}`}
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <div className="cart-item-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button
        className="btn btn-danger"
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
}
