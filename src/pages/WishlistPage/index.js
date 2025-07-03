import React from 'react'
import Navbar from '../../components/NavBar'
import ProductSection from '../../components/ProductSection'

const allProducts = [
    { title: "Limited Edition Blazer", price: '₹2800', originalPrice: '₹3500', discount: "20% OFF", image: '/images/product1.jpg', inStock: false },
    { title: "Formal Shirt", price: '₹1200', originalPrice: '₹1500', discount: "20% OFF", image: '/images/product1.jpg', inStock: true },
    // Add more products here
];

const outOfStockProducts = allProducts.filter(product => !product.inStock);

const trendingProducts = [
  {
    image: '/images/product1.jpg',
    title: 'Executive Blazer - Navy Blue',
    price: '₹1,800',
    originalPrice: '₹2,300',
    offer: '22% OFF',
    isNew: false,
    inStock:true

  },
  {
    image: '/images/product2.jpg',
    title: 'Classic Formal Shirt - White',
    price: '₹1,200',
    originalPrice: '₹1,500',
    offer: '20% OFF',
    isNew: false,
    inStock:true
  }, {
    image: '/images/product2.jpg',
    title: 'Classic Formal Shirt - White',
    price: '₹1,200',
    originalPrice: '₹1,500',
    offer: '20% OFF',
    isNew: false,
    inStock:true
  }, {
    image: '/images/product2.jpg',
    title: 'Classic Formal Shirt - White',
    price: '₹1,200',
    originalPrice: '₹1,500',
    offer: '20% OFF',
    isNew: false,
    inStock:true
  },
  {
    image: '/images/product1.jpg',
    title: "Women's Power Suit - Black",
    price: '₹2,200',
    originalPrice: '₹2,800',
    offer: '21% OFF',
    isNew: false,
    inStock:true
  },
  {
    image: '/images/product2.jpg',
    title: 'Designer Trousers - Slim Fit',
    price: '₹1,500',
    originalPrice: '₹1,900',
    offer: '21% OFF',
    isNew: false,
    inStock:true
  }
];

const WishlistPage = () => {
    return (
        <div>
            <Navbar />
            <ProductSection titleComponent={<span style={{ textAlign: "left", color: "#036", fontWeight: "700", fontSize: "34px", alignSelf: "start" }}>My Wishlist</span>} products={trendingProducts} />
            <ProductSection
                titleComponent="Out of Stock"
                products={outOfStockProducts}
            />

        </div>
    )
}

export default WishlistPage




