import { describe, it, expect } from 'vitest';
import reducer, {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  selectTotalItems,
  selectTotalAmount,
} from './CartSlice.jsx';

const lavender = { id: 'lavender', name: 'Lavender', price: 10 };
const mint = { id: 'mint', name: 'Mint', price: 5 };

describe('cart slice', () => {
  it('adds a new item with quantity 1', () => {
    const state = reducer(undefined, addToCart(lavender));
    expect(state.items).toEqual([{ ...lavender, quantity: 1 }]);
  });

  it('increments quantity when adding an existing item', () => {
    let state = reducer(undefined, addToCart(lavender));
    state = reducer(state, addToCart(lavender));
    expect(state.items[0].quantity).toBe(2);
  });

  it('increases and decreases quantity', () => {
    let state = reducer(undefined, addToCart(lavender));
    state = reducer(state, increaseQuantity('lavender'));
    expect(state.items[0].quantity).toBe(2);
    state = reducer(state, decreaseQuantity('lavender'));
    expect(state.items[0].quantity).toBe(1);
  });

  it('removes the item when quantity drops to 0', () => {
    let state = reducer(undefined, addToCart(lavender));
    state = reducer(state, decreaseQuantity('lavender'));
    expect(state.items).toEqual([]);
  });

  it('removes a specific item', () => {
    let state = reducer(undefined, addToCart(lavender));
    state = reducer(state, addToCart(mint));
    state = reducer(state, removeFromCart('lavender'));
    expect(state.items.map((i) => i.id)).toEqual(['mint']);
  });

  it('clears the cart', () => {
    let state = reducer(undefined, addToCart(lavender));
    state = reducer(state, clearCart());
    expect(state.items).toEqual([]);
  });

  it('computes total items and total amount', () => {
    let state = reducer(undefined, addToCart(lavender));
    state = reducer(state, addToCart(lavender));
    state = reducer(state, addToCart(mint));
    const root = { cart: state };
    expect(selectTotalItems(root)).toBe(3);
    expect(selectTotalAmount(root)).toBe(25);
  });
});
