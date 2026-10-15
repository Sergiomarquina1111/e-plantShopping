import { createContext, useContext, useReducer, useMemo } from 'react';

const CartContext = createContext(null);

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((item) => item.id === action.plant.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.plant, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id);
    case 'UPDATE_QUANTITY': {
      const quantity = Math.max(0, Math.floor(action.quantity));
      if (quantity === 0) {
        return state.filter((item) => item.id !== action.id);
      }
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity } : item
      );
    }
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  const value = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalCost = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    return {
      items,
      totalItems,
      totalCost: Math.round(totalCost * 100) / 100,
      addItem: (plant) => dispatch({ type: 'ADD_ITEM', plant }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', id }),
      updateQuantity: (id, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', id, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      isInCart: (id) => items.some((item) => item.id === id),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
