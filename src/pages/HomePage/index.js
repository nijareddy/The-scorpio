import React from 'react';
import NavBar from '../../components/NavBar';
import HeroCarousel from '../../components/HeroCarousel';
import ProductSection from '../../components/ProductSection';
import CategoryCarousel from '../../components/CategoryCarousel';
import Footer from '../../components/Footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

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
const trendingProducts = [
  {
    image: '/images/product1.jpg',
    title: 'Executive Blazer - Navy Blue',
    price: '₹1,800',
    originalPrice: '₹2,300',
    offer: '22% OFF',
    isNew: false

  },
  {
    image: '/images/product2.jpg',
    title: 'Classic Formal Shirt - White',
    price: '₹1,200',
    originalPrice: '₹1,500',
    offer: '20% OFF',
    isNew: false
  }, {
    image: '/images/product2.jpg',
    title: 'Classic Formal Shirt - White',
    price: '₹1,200',
    originalPrice: '₹1,500',
    offer: '20% OFF',
    isNew: false
  }, {
    image: '/images/product2.jpg',
    title: 'Classic Formal Shirt - White',
    price: '₹1,200',
    originalPrice: '₹1,500',
    offer: '20% OFF',
    isNew: false
  },
  {
    image: '/images/product1.jpg',
    title: "Women's Power Suit - Black",
    price: '₹2,200',
    originalPrice: '₹2,800',
    offer: '21% OFF',
    isNew: false
  },
  {
    image: '/images/product2.jpg',
    title: 'Designer Trousers - Slim Fit',
    price: '₹1,500',
    originalPrice: '₹1,900',
    offer: '21% OFF',
    isNew: false
  }
];
const newCollectionItems = [
  {
    image: '/images/product2.jpg',
    title: 'Modern Suit Collection - 2024',
    price: '₹2,800',
    originalPrice: '₹3,200',
    discount: '12%',
    isNew: true,
  },
  {
    image: '/images/product2.jpg',
    title: 'Elegant Evening Wear',
    price: '₹2,400',
    originalPrice: '₹2,800',
    discount: '14%',
    isNew: true,
  },
  {
    image: '/images/product2.jpg',
    title: 'Contemporary Formal Shirt',
    price: '₹1,350',
    originalPrice: '₹1,600',
    discount: '16%',
    isNew: true,
  },
  {
    image: '/images/product2.jpg',
    title: 'Professional Blazer Set',
    price: '₹2,100',
    originalPrice: '₹2,500',
    discount: '15%',
    isNew: true,
  },
];
const HomePage = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <HeroCarousel slides={carouselData} />
      <div style={{ margin: "50px",height:"100%" }}>
        <ProductSection
          titleComponent={
            <>
              Picking top <span style={{ color: '#063970', fontWeight: '700',backgroundColor:"#013a631a",padding:"5px",borderRadius:'5px' }}>TRENDING</span> collection for you
            </>
          }
          products={trendingProducts}
        />

        <ProductSection
          titleComponent={<>New Collection 2024</>}
          products={newCollectionItems}
        />

        <ProductSection
          titleComponent={<>Combo Pack Deals</>}
          products={trendingProducts}
        />
        <CategoryCarousel/>
      </div>

    <Footer/>
    </div>
  );
};

export default HomePage;
