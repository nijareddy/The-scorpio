import React, { useState } from 'react';
import './index.css';
import NavBar from '../../components/NavBar'
import CartItem from '../../components/CartItem'


const initialItems = [
  {
    id: 1,
    name: "Premium Business Suit - Charcoal",
    size: "L",
    price: 2500,
    quantity: 1,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Executive Blazer - Navy Blue",
    size: "M",
    price: 1800,
    quantity: 2,
    image: "/images/product1.jpg",
  },
];


const CartPage = () => {
   
   const [cartItems, setCartItems] = useState(initialItems);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleQuantityChange = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
    <NavBar/>
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
               <CartItem item={item} handleQuantityChange={handleQuantityChange} handleRemove={handleRemove}/>
          ))}
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Delivery:</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
