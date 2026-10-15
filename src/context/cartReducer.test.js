import { describe, it, expect } from 'vitest';
import { cartReducer } from './CartContext.jsx';

const lavender = { id: 'lavender', name: 'Lavender', price: 10 };

describe('cartReducer', () => {
  it('adds a new item with quantity 1', () => {
    const state = cartReducer([], { type: 'ADD_ITEM', plant: lavender });
    expect(state).toEqual([{ ...lavender, quantity: 1 }]);
  });

  it('increments quantity when adding an existing item', () => {
    let state = cartReducer([], { type: 'ADD_ITEM', plant: lavender });
    state = cartReducer(state, { type: 'ADD_ITEM', plant: lavender });
    expect(state[0].quantity).toBe(2);
  });

  it('removes an item', () => {
    let state = cartReducer([], { type: 'ADD_ITEM', plant: lavender });
    state = cartReducer(state, { type: 'REMOVE_ITEM', id: 'lavender' });
    expect(state).toEqual([]);
  });

  it('removes the item when quantity is set to 0', () => {
    let state = cartReducer([], { type: 'ADD_ITEM', plant: lavender });
    state = cartReducer(state, { type: 'UPDATE_QUANTITY', id: 'lavender', quantity: 0 });
    expect(state).toEqual([]);
  });

  it('clears the cart', () => {
    let state = cartReducer([], { type: 'ADD_ITEM', plant: lavender });
    state = cartReducer(state, { type: 'CLEAR_CART' });
    expect(state).toEqual([]);
  });
});
