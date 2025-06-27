// src/components/HeroCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './index.css';

const HeroCarousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />, 
    nextArrow: <SampleNextArrow />,
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
         
          borderRadius: '50%',
          left: '20px',
          zIndex: 5,
        }}
        onClick={onClick}
      >
        <FaChevronLeft color="#fff" />
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          right: '20px',
          zIndex: 5,
        }}
        onClick={onClick}
      >
        <FaChevronRight color="#fff" />
      </div>
    );
  }

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
            <div className="carousel-text">
              <h1>{slide.heading}</h1>
              <p>{slide.subText}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
