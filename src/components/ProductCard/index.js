import React from 'react';
import './index.css';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  offer,
  isNew,
  inStock,
  isWishlisted,
  handleAddToWishlist,
  handleRemoveFromWishlist,
}) => {
  const navigate = useNavigate();

  const handleWishlistToggle = (e) => {
    e.stopPropagation(); // Prevents click from triggering navigation
    if (isWishlisted && typeof handleRemoveFromWishlist === 'function') {
      handleRemoveFromWishlist(title);
    } else if (!isWishlisted && typeof handleAddToWishlist === 'function') {
      handleAddToWishlist(title);
    }
  };

  const handleCardClick = () => {
    navigate(`/product-details`); // Or use product ID if available
  };

  return (
    <div
      className={`product-card ${inStock ? '' : 'out-of-stock'}`}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {isNew && <div className="product-badge">NEW</div>}

      <div className="wishlist-icon" onClick={handleWishlistToggle}>
        {isWishlisted ? (
          <FaHeart className="wishlist-icon-filled" />
        ) : (
          <FiHeart className="wishlist-icon-outline" />
        )}
      </div>

      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        {!inStock && (
          <div className="out-of-stock-overlay">
            <div className="out-of-stock-text">Out of Stock</div>
          </div>
        )}
      </div>

      <div className="product-details">
        <h4 className="product-title">{title}</h4>

        <div className="price-section">
          <span className="current-price">{price}</span>
          <span className="original-price">{originalPrice}</span>
          <span className="discount">{offer}</span>
        </div>

        <button
          className="add-to-cart-btn"
          disabled={!inStock}
          onClick={(e) => e.stopPropagation()} // Prevent navigation on button click
          style={{ cursor: inStock ? 'pointer' : 'not-allowed' }}
        >
          <FiShoppingCart style={{ marginRight: '4px', fontSize: '14px' }} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
