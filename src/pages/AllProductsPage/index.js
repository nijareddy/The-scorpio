import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductSection from '../../components/ProductSection';
import NavBar from '../../components/NavBar';
import './index.css';

const categoryFilters = [
  'Suits',
  'Blazers',
  'Trousers',
  'Accessories',
  'Uniforms',
  'T-Shirts',
  'Shirts',
  'Watches',
  'Formal Pants',
  'Shoes',
];

const allProducts = [
  // Suits
  {
    image: '/images/product2.jpg',
    title: 'Formal 3-Piece Suit - Black',
    category: 'Suits',
    type: '3-piece',
    price: '₹5,499',
    originalPrice: '₹7,999',
    offer: '31% OFF',
    isNew: true,
    inStock: true,
    isWishlisted: false,
  },
  {
    image: '/images/product2.jpg',
    title: 'Casual 2-Piece Suit - Gray',
    category: 'Suits',
    type: '2-piece',
    price: '₹3,899',
    originalPrice: '₹5,999',
    offer: '35% OFF',
    isNew: false,
    inStock: true,
    isWishlisted: false,
  },

  // Blazers
  {
    image: '/images/blazer.png',
    title: 'Slim Fit Blazer - Navy',
    category: 'Blazers',
    type: '1-piece',
    price: '₹2,499',
    originalPrice: '₹3,499',
    offer: '29% OFF',
    isNew: false,
    inStock: true,
    isWishlisted: false,
  },

  // Trousers
  {
    image: '/images/product1.jpg',
    title: 'Stretch Fit Trousers - Black',
    category: 'Trousers',
    type: '1-piece',
    price: '₹1,499',
    originalPrice: '₹1,999',
    offer: '25% OFF',
    isNew: false,
    inStock: true,
    isWishlisted: false,
  },

  // Accessories
  {
    image: '/images/belt.png',
    title: 'Leather Belt - Brown',
    category: 'Accessories',
    type: '1-piece',
    price: '₹799',
    originalPrice: '₹1,199',
    offer: '33% OFF',
    isNew: true,
    inStock: true,
    isWishlisted: false,
  },

  // Uniforms
  {
    image: '/images/uniform.png',
    title: 'School Uniform - Boys',
    category: 'Uniforms',
    type: '2-piece',
    price: '₹1,299',
    originalPrice: '₹1,799',
    offer: '28% OFF',
    isNew: false,
    inStock: true,
    isWishlisted: false,
  },

  // T-Shirts
  {
    image: '/images/round.png',
    title: 'Graphic Tee - Blue',
    category: 'T-Shirts',
    type: '1-piece',
    price: '₹899',
    originalPrice: '₹1,199',
    offer: '25% OFF',
    isNew: true,
    inStock: true,
    isWishlisted: false,
  },

  // Shirts
  {
    image: '/images/shirt.png',
    title: 'Classic White Shirt',
    category: 'Shirts',
    type: '1-piece',
    price: '₹999',
    originalPrice: '₹1,499',
    offer: '33% OFF',
    isNew: true,
    inStock: true,
    isWishlisted: false,
  },

  // Watches
  {
    image: '/images/watch.jpg',
    title: 'Silver Dial Watch',
    category: 'Watches',
    type: '1-piece',
    price: '₹2,199',
    originalPrice: '₹3,299',
    offer: '33% OFF',
    isNew: true,
    inStock: true,
    isWishlisted: false,
  },

  // Formal Pants
  {
    image: '/images/formal pants.png',
    title: 'Formal Pants - Gray',
    category: 'Formal Pants',
    type: '1-piece',
    price: '₹1,299',
    originalPrice: '₹1,799',
    offer: '27% OFF',
    isNew: false,
    inStock: true,
    isWishlisted: false,
  },

  // Shoes
  {
    image: '/images/shoes.png',
    title: 'Black Leather Shoes',
    category: 'Shoes',
    type: '1-pair',
    price: '₹2,999',
    originalPrice: '₹4,499',
    offer: '33% OFF',
    isNew: true,
    inStock: true,
    isWishlisted: false,
  },
];

const AllProductsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preselectedCategory = queryParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState(preselectedCategory ? [preselectedCategory] : []);
  const [sortOrder, setSortOrder] = useState('high-to-low');

  useEffect(() => {
    if (preselectedCategory) {
      setSelectedCategories([preselectedCategory]);
    }
  }, [preselectedCategory]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  let filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesCategory && product.inStock;
  });

  if (sortOrder === 'low-to-high') {
    filteredProducts.sort(
      (a, b) => parseInt(a.price.slice(1).replace(',', '')) - parseInt(b.price.slice(1).replace(',', ''))
    );
  } else {
    filteredProducts.sort(
      (a, b) => parseInt(b.price.slice(1).replace(',', '')) - parseInt(a.price.slice(1).replace(',', ''))
    );
  }

  const groupedByCategory = categoryFilters.map((category) => ({
    category,
    products: filteredProducts.filter((p) => p.category === category),
  }));

  return (
    <>
      <NavBar />
      <div className="products-page">
        <aside className="filter-sidebar">
          <h3>Category</h3>
          {categoryFilters.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryToggle(cat)}
              />
              {cat}
            </label>
          ))}
          <button onClick={handleClearFilters}>Clear Filters</button>
        </aside>

        <div className="all-products-section">
          <div className="products-header">
            <h2>All Products</h2>
            <div className="sort-wrapper">
              <label htmlFor="sort">Sort by</label>
              <select id="sort" value={sortOrder} onChange={handleSortChange}>
                <option value="high-to-low">Price (High–Low)</option>
                <option value="low-to-high">Price (Low–High)</option>
              </select>
            </div>
          </div>

          {groupedByCategory.map(({ category, products }) =>
            products.length > 0 ? (
              <ProductSection key={category} titleComponent={category} products={products} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default AllProductsPage;
