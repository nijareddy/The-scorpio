import React, { useState,useEffect } from 'react';
import './index.css';

const categories = [
  {
    title: 'Formal Accessories',
    subtitle: 'Complete your professional look',
    image:'/images/watch.jpg' ,
  },
  {
    title: 'Premium Business Suits',
    subtitle: 'Executive collection for modern professionals',
    image: '/images/watch.jpg' ,
  },
  {
    title: 'Uniform - Boys',
    subtitle: 'Formal school uniform set',
    image: '/images/watch.jpg' ,
  },
];


const CategoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };
 useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <button className="nav-arrow left" onClick={prevSlide}>❮</button>
      <div className="card-wrapper">
        {categories.map((item, index) => {
          let className = 'carousel-card';
          if (index === currentIndex) className += ' active';
          else if (index === (currentIndex - 1 + categories.length) % categories.length) className += ' left';
          else if (index === (currentIndex + 1) % categories.length) className += ' right';
          else className += ' hidden';

          return (
            <div className={className} key={index}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="nav-arrow right" onClick={nextSlide}>❯</button>

      <div className="dots">
        {categories.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;

