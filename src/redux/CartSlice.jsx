import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

/**
 * Sums quantity * unit price across all cart items.
 * Returns a number rounded to 2 decimal places.
 */
export function calculateTotalAmount(items) {
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  return Math.round(total * 100) / 100;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds a plant; increments quantity if it is already in the cart.
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find((item) => item.id === plant.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    // Removes an item entirely by id.
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Sets an item's quantity; a quantity of 0 or less removes the item.
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
        return;
      }
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity = quantity;
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectTotalItems = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalAmount = (state) =>
  calculateTotalAmount(state.cart.items);

export default cartSlice.reducer;
