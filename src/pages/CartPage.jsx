import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  selectCartItems,
  selectTotalAmount,
  selectTotalItems,
} from '../redux/CartSlice.jsx';
import CartItem, { CartTotal } from '../components/CartItem.jsx';

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalItems = useSelector(selectTotalItems);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  if (items.length === 0) {
    return (
      <main className="page cart-page">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/products" className="btn">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="page cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <CartTotal totalItems={totalItems} totalAmount={totalAmount} />
      <div className="cart-actions">
        <Link to="/products" className="btn btn-secondary">Continue Shopping</Link>
        <button className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
        <button className="btn" onClick={() => setCheckoutMessage('Checkout is Coming Soon!')}>
          Checkout
        </button>
      </div>
      {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
    </main>
  );
}
