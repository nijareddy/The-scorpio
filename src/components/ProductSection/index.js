
import React, { useRef } from 'react';
import ProductCard from '../../components/ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './index.css';

const ProductSection = ({ titleComponent, products, fromWishlist = false, handleRemove }) => {
  const scrollRef = useRef(null);

 const scrollLeft = () => {
  const cardWidth = scrollRef.current.querySelector('.product-card')?.offsetWidth || 320; // fallback
  scrollRef.current.scrollBy({ left: -cardWidth - 20, behavior: 'smooth' }); // 20 = gap
};

const scrollRight = () => {
  const cardWidth = scrollRef.current.querySelector('.product-card')?.offsetWidth || 320;
  scrollRef.current.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
};
  return (
    <section className="product-section">
      <h2 className="section-title">{titleComponent}</h2>
      <div className="product-slider-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="product-slider" ref={scrollRef}>
          {products.map((item, index) => (
            <ProductCard
              key={index}
              {...item}
              discount={item.discount || item.offer}
              handleRemoveFromWishlist={fromWishlist ? handleRemove : undefined}
            />
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
