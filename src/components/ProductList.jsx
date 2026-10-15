import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../redux/CartSlice.jsx';
import { categories, plants } from '../data/plants.js';
import PlantThumbnail from './PlantThumbnail.jsx';

// Shows every plant grouped by category. Each card has an "Add to Cart"
// button that is disabled once the plant is in the cart.
export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // True when the plant with this id is already in the cart.
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="page">
      <h1>Our Plants</h1>
      {categories.map((category) => {
        // Only the plants that belong to this category.
        const categoryPlants = plants.filter(
          (plant) => plant.category === category.id
        );

        return (
          <section key={category.id} className="category">
            <h2>{category.name}</h2>
            <p className="category-description">{category.description}</p>
            <div className="product-grid">
              {categoryPlants.map((plant) => {
                const added = isInCart(plant.id);
                return (
                  <article key={plant.id} className="product-card">
                    <PlantThumbnail color={plant.color} name={plant.name} />
                    <h3>{plant.name}</h3>
                    <p className="description">{plant.description}</p>
                    <div className="product-footer">
                      <span className="price">${plant.price.toFixed(2)}</span>
                      <button
                        className="btn"
                        disabled={added}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {added ? 'Added ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
