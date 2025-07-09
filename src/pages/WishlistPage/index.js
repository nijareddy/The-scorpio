
import React, { useState } from 'react';
import Navbar from '../../components/NavBar';
import ProductSection from '../../components/ProductSection';

const initialWishlist = [
  {
    image: '/images/product1.jpg',
    title: 'Elegant Blazer - Charcoal Gray',
    price: '₹2,499',
    originalPrice: '₹3,299',
    offer: '24% OFF',
    isNew: true,
    inStock: true,
    isWishlisted: true,
    handleAddToWishlist: () => console.log('Added Elegant Blazer'),
    handleRemoveFromWishlist: () => console.log('Removed Elegant Blazer'),
  },
  {
    image: '/images/product1.jpg',
    title: 'Slim Fit Formal Shirt - Sky Blue',
    price: '₹1,199',
    originalPrice: '₹1,599',
    offer: '25% OFF',
    isNew: false,
    inStock: true,
    isWishlisted: true,
    handleAddToWishlist: () => console.log('Added Slim Fit Formal Shirt'),
    handleRemoveFromWishlist: () => console.log('Removed Slim Fit Formal Shirt'),
  },
  {
    image: '/images/product1.jpg',
    title: "Women's Power Suit - Crimson Red",
    price: '₹2,999',
    originalPrice: '₹3,999',
    offer: '25% OFF',
    isNew: true,
    inStock: false,
    isWishlisted: true,
    handleAddToWishlist: () => console.log("Added Women's Power Suit"),
    handleRemoveFromWishlist: () => console.log("Removed Women's Power Suit"),
  },
  {
    image: '/images/product2.jpg',
    title: 'Stretch Fit Trousers - Black',
    price: '₹1,499',
    originalPrice: '₹1,899',
    offer: '21% OFF',
    isNew: false,
    inStock: true,
    isWishlisted: true,
    handleAddToWishlist: () => console.log('Added Stretch Fit Trousers'),
    handleRemoveFromWishlist: () => console.log('Removed Stretch Fit Trousers'),
  },
  {
    image: '/images/product2.jpg',
    title: 'Chic Jumpsuit - Olive Green',
    price: '₹1,899',
    originalPrice: '₹2,499',
    offer: '24% OFF',
    isNew: true,
    inStock: false,
    isWishlisted: true,
    handleAddToWishlist: () => console.log('Added Chic Jumpsuit'),
    handleRemoveFromWishlist: () => console.log('Removed Chic Jumpsuit'),
  }
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
