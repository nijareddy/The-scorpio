
import React, { useState } from 'react';
import Navbar from '../../components/NavBar';
import ProductSection from '../../components/ProductSection';

const initialWishlist = [
  {
    image: '/images/product1.jpg',
    title: 'Executive Blazer - Navy Blue',
    price: '₹1,800',
    originalPrice: '₹2,300',
    offer: '22% OFF',
    isNew: false,
    inStock: false,
  },
  {
    image: '/images/product2.jpg',
    title: 'Classic Formal Shirt - White',
    price: '₹1,200',
    originalPrice: '₹1,500',
    offer: '20% OFF',
    isNew: false,
    inStock: true,
  },
  {
    image: '/images/product1.jpg',
    title: "Women's Power Suit - Black",
    price: '₹2,200',
    originalPrice: '₹2,800',
    offer: '21% OFF',
    isNew: false,
    inStock: true,
  },
];


const WishlistPage = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const outOfStockProducts = wishlist.filter(product => !product.inStock);

  const handleRemoveFromWishlist = (titleToRemove) => {
    setWishlist(prev =>
      prev.filter(product => product.title !== titleToRemove)
    );
  };
  const inStockProducts = wishlist.filter(product => product.inStock === true)

  return (
    <div>
      <Navbar />
      <ProductSection
        titleComponent={
          <span
            style={{
              textAlign: 'left',
              color: '#036',
              fontWeight: '700',
              fontSize: '34px',
              alignSelf: 'start',
            }}
          >
            My Wishlist
          </span>
        }
        products={inStockProducts}
        fromWishlist={true}
        handleRemove={handleRemoveFromWishlist}
      />

      <ProductSection
        titleComponent="Out of Stock"
        products={outOfStockProducts}
      />
    </div>
  );
};

export default WishlistPage;
