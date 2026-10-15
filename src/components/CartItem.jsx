import { useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/CartSlice.jsx';
import PlantThumbnail from './PlantThumbnail.jsx';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <PlantThumbnail color={item.color} name={item.name} />
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>Unit price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button
          aria-label={`Decrease ${item.name}`}
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          −
        </button>
        <span data-testid={`qty-${item.id}`}>{item.quantity}</span>
        <button
          aria-label={`Increase ${item.name}`}
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>
      </div>
      <div className="cart-item-subtotal">
        Total: ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Delete
      </button>
    </div>
  );
}
