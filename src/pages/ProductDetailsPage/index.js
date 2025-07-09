import React from 'react'
import NavBar from '../../components/NavBar'
import ProductItemDetails from '../../components/ProductDetailsItem'
import SimilarProductItem from '../../components/SimilarProductItem'

const products = [
  {
    imageUrl: '/images/product1.jpg',
    title: 'Executive Blazer',
    price: 1800,
  },
  {
    imageUrl: '/images/product1.jpg',
    title: 'Formal Trousers',
    price: 1200,
  },
  {
    imageUrl: '/images/product1.jpg',
    title: 'Premium Shirt',
    price: 1100,
  },
  {
    imageUrl: '/images/product1.jpg',
    title: 'Designer Tie',
    price: 800,
  },
]; 

const ProductDetailsPage = () => {
  return (
    <div>
        <NavBar/>
        <ProductItemDetails/>
        <SimilarProductItem products={products}/>
    </div>
  )
}

export default ProductDetailsPage
