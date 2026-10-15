import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ plant }) {
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(plant.id);

  return (
    <article className="product-card">
      <div className="product-image" aria-hidden="true">
        {plant.image}
      </div>
      <h3>{plant.name}</h3>
      <p className="description">{plant.description}</p>
      <div className="product-footer">
        <span className="price">${plant.price.toFixed(2)}</span>
        <button
          className="btn"
          disabled={inCart}
          onClick={() => addItem(plant)}
        >
          {inCart ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}
