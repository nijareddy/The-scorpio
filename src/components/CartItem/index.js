import React from 'react'
import { FaRegTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import './index.css'


const CartItem = ({item,handleQuantityChange,handleRemove}) => {
   
  

    return (
        <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
                <h4>{item.name}</h4>
                <p className='size'>Size: {item.size}</p>
                <p className="price">₹{item.price.toLocaleString('en-IN')}</p>
            </div>
            <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, -1)}><FaMinus /></button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}><FaPlus /></button>
            </div>
            <button className="delete-btn" onClick={() => handleRemove(item.id)}><FaRegTrashAlt /></button>
        </div>
    )
}
export default CartItem
