// src/pages/HomePage.js
import React from 'react';
import NavBar from '../../components/NavBar';
import HeroCarousel from '../../components/HeroCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselData = [
  {
    image: '/images/carousel1.jpg',
    heading: 'Style is a way to say who you are without having to speak',
    subText: 'Elegant formal wear for every occasion'
  },
  {
    image: '/images/carousel2.jpg',
    heading: 'Redefine your elegance with every outfit',
    subText: 'Tailored premium formals just for you'
  },
  {
    image: '/images/carousel3.jpg',
    heading: 'Command attention, wear confidence',
    subText: 'Formal wear that speaks volumes'
  },
  {
    image: '/images/carousel4.jpg',
    heading: 'Classic formals for the modern you',
    subText: 'Timeless pieces, impeccable quality'
  }
];

const HomePage = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <HeroCarousel slides={carouselData} />
    </div>
  );
};

export default HomePage;
