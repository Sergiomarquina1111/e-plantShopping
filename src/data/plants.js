export const categories = [
  {
    id: 'aromatic',
    name: 'Aromatic Plants',
    description: 'Fragrant plants that fill your home with natural scent.',
  },
  {
    id: 'medicinal',
    name: 'Medicinal Plants',
    description: 'Herbs with long-standing traditional uses.',
  },
  {
    id: 'purifying',
    name: 'Air-Purifying Plants',
    description: 'Plants that help improve indoor air quality.',
  },
];

// Each plant has a `color` used for its thumbnail.
export const plants = [
  // Aromatic
  { id: 'lavender', name: 'Lavender', category: 'aromatic', price: 12.99, color: '#8e6bbf', description: 'Calming scent and purple blooms. Loves sun.' },
  { id: 'jasmine', name: 'Jasmine', category: 'aromatic', price: 15.5, color: '#6aa84f', description: 'Sweet fragrance from delicate white flowers.' },
  { id: 'rosemary', name: 'Rosemary', category: 'aromatic', price: 9.99, color: '#3d7a4a', description: 'Woody, pine-like aroma for the kitchen windowsill.' },
  { id: 'basil', name: 'Basil', category: 'aromatic', price: 7.5, color: '#4caf50', description: 'Sweet, peppery leaves perfect for cooking.' },
  { id: 'lemon-balm', name: 'Lemon Balm', category: 'aromatic', price: 8.75, color: '#9ccc65', description: 'Bright lemon scent, great for teas.' },
  { id: 'gardenia', name: 'Gardenia', category: 'aromatic', price: 19.0, color: '#e8e8d8', description: 'Creamy white blooms with a rich perfume.' },
  // Medicinal
  { id: 'aloe', name: 'Aloe Vera', category: 'medicinal', price: 11.0, color: '#7cb342', description: 'Soothing gel for minor burns and skin irritation.' },
  { id: 'peppermint', name: 'Peppermint', category: 'medicinal', price: 8.5, color: '#2e7d32', description: 'Refreshing leaves for teas and digestive comfort.' },
  { id: 'echinacea', name: 'Echinacea', category: 'medicinal', price: 13.75, color: '#e91e63', description: 'Coneflower traditionally used to support immunity.' },
  { id: 'chamomile', name: 'Chamomile', category: 'medicinal', price: 9.25, color: '#ffd54f', description: 'Daisy-like flowers brewed into a gentle tea.' },
  { id: 'thyme', name: 'Thyme', category: 'medicinal', price: 8.0, color: '#558b2f', description: 'Small leaves with a classic savory flavor.' },
  { id: 'sage', name: 'Sage', category: 'medicinal', price: 9.5, color: '#9e9d24', description: 'Silvery-green leaves valued in traditional remedies.' },
  // Air-purifying
  { id: 'snake-plant', name: 'Snake Plant', category: 'purifying', price: 18.0, color: '#33691e', description: 'Nearly indestructible and great at filtering air.' },
  { id: 'peace-lily', name: 'Peace Lily', category: 'purifying', price: 16.25, color: '#43a047', description: 'Elegant white blooms and strong air-cleaning ability.' },
  { id: 'spider-plant', name: 'Spider Plant', category: 'purifying', price: 10.0, color: '#66bb6a', description: 'Fast-growing and pet-friendly.' },
  { id: 'pothos', name: 'Pothos', category: 'purifying', price: 12.0, color: '#2e7d32', description: 'Trailing vine that thrives in low light.' },
  { id: 'boston-fern', name: 'Boston Fern', category: 'purifying', price: 14.5, color: '#388e3c', description: 'Lush fronds that add humidity and freshness.' },
  { id: 'rubber-plant', name: 'Rubber Plant', category: 'purifying', price: 21.0, color: '#1b5e20', description: 'Glossy, bold leaves that make a statement.' },
];
