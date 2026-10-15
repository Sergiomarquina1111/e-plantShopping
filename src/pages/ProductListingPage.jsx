import { categories, plants } from '../data/plants.js';
import ProductCard from '../components/ProductCard.jsx';

export default function ProductListingPage() {
  return (
    <main className="page">
      <h1>Our Plants</h1>
      {categories.map((category) => (
        <section key={category.id} className="category">
          <h2>{category.name}</h2>
          <p className="category-description">{category.description}</p>
          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category.id)
              .map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
