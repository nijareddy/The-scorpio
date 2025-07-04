import React from 'react';
import './index.css';

const ProductDetailsItem = () => {
  return (
    <div className="product-page">
      {/* Left: Product Image Gallery */}
      <div className="image-section">
        <img
          className="main-image"
          src="/images/product2.jpg"
          alt="Main product"
        />
        <div className="thumbnail-row">
          <img
            className="thumbnail selected"
            src="/images/product2.jpg"
            alt="Thumb 1"
          />
          <div className="thumbnail placeholder">Product view 2</div>
          <img
            className="thumbnail"
            src="/images/products1.jpg"
            alt="Thumb 3"
          />
          <img
            className="thumbnail"
            src="/images/products1.jpg"
            alt="Thumb 4"
          />
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="details-section">
        <h2>Check Blazer Paired With Trouser</h2>
        <div className="rating">⭐⭐⭐⭐⭐ <span>(128 reviews)</span></div>

        <div className="price-box">
          <span className="current-price">₹2,500</span>
          <span className="original-price">₹3,200</span>
          <span className="discount-tag">22% OFF</span>
        </div>

        <div className="section">
          <p>Color</p>
          <div className="color-options">
            {['black', 'navy', 'white', 'maroon', 'gray'].map((c) => (
              <span key={c} style={{ backgroundColor: c }} className="color-dot"></span>
            ))}
          </div>
        </div>

        <div className="section">
          <p>Size</p>
          <div className="size-options">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
              <button key={s}>{s}</button>
            ))}
          </div>
        </div>

        <div className="section">
          <p>Quantity</p>
          <div className="quantity-box">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <button className="add-to-cart">🛒 Add to Cart</button>
        <button className="wishlist">♡ Add to Wishlist</button>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
