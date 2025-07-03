// src/components/ProductSection.js
import React, { useRef } from 'react';
import ProductCard from '../../components/ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './index.css';



const ProductSection = ({ titleComponent, products }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
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
            <ProductCard key={index} {...item} />
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
