import React from 'react';
import './index.css';

const SimilarProductItem = ({ products }) => {
  return (
    <div className="similar-products-grid">
      {products.map((productItem, index) => (
        <div className="similar-product-card" key={index}>
          <img src={productItem.imageUrl} alt={productItem.title} className="similar-product-image" />
          <p className="similar-product-title">{productItem.title}</p>
          <p className="similar-product-price">₹{productItem.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SimilarProductItem;