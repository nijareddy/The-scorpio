
import React from 'react';
import './index.css';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  isNew,inStock
}) => {  
  return (  
    <div className={`product-card ${inStock ?  '' : 'out-of-stock' }`}>
      {isNew && <div className="product-badge">NEW</div>}
      <div className="wishlist-icon">
        <FiHeart />
      </div>

      <img src={image} alt={title} className="product-image" />

      <div className="product-details">
        <h4 className="product-title">{title}</h4>

        <div className="price-section">
          <span className="current-price">{price}</span>
          <span className="original-price">{originalPrice}</span>
          <span className="discount">{discount} OFF</span>
        </div>

        <button
          className="add-to-cart-btn">
          <FiShoppingCart style={{marginRight:"4px",fontSize:"14px"}}/> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
