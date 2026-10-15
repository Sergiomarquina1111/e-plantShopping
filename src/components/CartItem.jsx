import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/CartSlice.jsx';
import PlantThumbnail from './PlantThumbnail.jsx';

// One row in the cart: thumbnail, name, unit price, quantity controls,
// line total, and a delete button.
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
          onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
          }
        >
          −
        </button>
        <span data-testid={`qty-${item.id}`}>{item.quantity}</span>
        <button
          aria-label={`Increase ${item.name}`}
          onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
          }
        >
          +
        </button>
      </div>
      <div className="cart-item-subtotal">
        Total: ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(removeItem(item.id))}
      >
        Delete
      </button>
    </div>
  );
}

// Cart-wide summary shown below the list: item count and total amount.
export function CartTotal({ totalItems, totalAmount }) {
  return (
    <div className="cart-summary">
      <p>Total items: {totalItems}</p>
      <p className="total-cost">
        Total amount: <span data-testid="total-cost">${totalAmount.toFixed(2)}</span>
      </p>
    </div>
  );
}
