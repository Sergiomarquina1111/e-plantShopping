# 🌴 Paradise Nursery

A React shopping application for a fictional plant nursery. Browse aromatic, medicinal, and air-purifying plants, add them to a cart, adjust quantities, and see a running total.

## Features

- Product listing grouped into three categories
- Add to cart (button disables once a plant is in the cart)
- Cart page with increase / decrease quantity, delete item, clear cart
- Live cart count in the header and per-item and grand totals
- Responsive layout
- Cart state managed with `useReducer` and React Context

## Tech Stack

- React 18
- Vite
- Vitest + Testing Library

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm test         # run unit tests
```

## Project Structure

```
src/
├── components/   # Header, ProductCard, CartItem
├── context/      # CartContext (state + reducer)
├── data/         # plant and category data
├── pages/        # ProductListingPage, CartPage
├── App.jsx
└── main.jsx
```

## License

MIT
