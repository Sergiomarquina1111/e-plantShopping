import { describe, it, expect } from 'vitest';
import reducer, {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  calculateTotalAmount,
  selectTotalItems,
  selectTotalAmount,
} from './CartSlice.jsx';

const lavender = { id: 'lavender', name: 'Lavender', price: 10 };
const mint = { id: 'mint', name: 'Mint', price: 5 };

describe('cart slice', () => {
  it('addItem adds a new item with quantity 1', () => {
    const state = reducer(undefined, addItem(lavender));
    expect(state.items).toEqual([{ ...lavender, quantity: 1 }]);
  });

  it('addItem increments quantity for an existing item', () => {
    let state = reducer(undefined, addItem(lavender));
    state = reducer(state, addItem(lavender));
    expect(state.items[0].quantity).toBe(2);
  });

  it('updateQuantity sets the quantity', () => {
    let state = reducer(undefined, addItem(lavender));
    state = reducer(state, updateQuantity({ id: 'lavender', quantity: 4 }));
    expect(state.items[0].quantity).toBe(4);
  });

  it('updateQuantity removes the item when quantity is 0', () => {
    let state = reducer(undefined, addItem(lavender));
    state = reducer(state, updateQuantity({ id: 'lavender', quantity: 0 }));
    expect(state.items).toEqual([]);
  });

  it('removeItem removes only the given item', () => {
    let state = reducer(undefined, addItem(lavender));
    state = reducer(state, addItem(mint));
    state = reducer(state, removeItem('lavender'));
    expect(state.items.map((i) => i.id)).toEqual(['mint']);
  });

  it('clearCart empties the cart', () => {
    let state = reducer(undefined, addItem(lavender));
    state = reducer(state, clearCart());
    expect(state.items).toEqual([]);
  });

  it('calculateTotalAmount sums quantity times price', () => {
    const items = [
      { ...lavender, quantity: 2 },
      { ...mint, quantity: 1 },
    ];
    expect(calculateTotalAmount(items)).toBe(25);
  });

  it('selectors report total items and total amount', () => {
    let state = reducer(undefined, addItem(lavender));
    state = reducer(state, addItem(lavender));
    state = reducer(state, addItem(mint));
    const root = { cart: state };
    expect(selectTotalItems(root)).toBe(3);
    expect(selectTotalAmount(root)).toBe(25);
  });
});
