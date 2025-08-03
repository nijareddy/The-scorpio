import React from 'react';
import './index.css';

const CustomizeComponent = ({
  setTshirtColor,
  size,
  setSize,
  tshirtType,
  setTshirtType,
}) => {
  return (
    <div className="options-section">
      <h3>Customization Options</h3>

      {/* T-shirt Color */}
      <label>T-shirt Color</label>
      <div className="color-options">
        {['#ffffff', '#000000', '#ff0000', '#0000ff', '#008000', '#808080'].map(color => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => setTshirtColor(color)}
          ></button>
        ))}
      </div>

      {/* T-shirt Type */}
      <label>T-shirt Type</label>
      <div className="type-options">
        {[
          { name: 'Round Neck', img: '/images/round.png' },
          { name: 'Polo', img: '/images/polo.png' },
          { name: 'V-Neck', img: '/images/vneck.png' },
        ].map(type => (
          <button
            key={type.name}
            className={`type-button ${tshirtType === type.name ? 'active' : ''}`}
            onClick={() => setTshirtType(type.name)}
          >
            <img src={type.img} alt={type.name} />
            <span>{type.name}</span>
          </button>
        ))}
      </div>

      {/* Size */}
      <label>Size</label>
      <select value={size} onChange={e => setSize(e.target.value)}>
        {['XS', 'S', 'M', 'L', 'XL'].map(sz => <option key={sz}>{sz}</option>)}
      </select>
      <a href="#" className="size-guide">Size Guide</a>

      {/* Quantity and Pricing */}
      <div className="quantity-section">
        <label>Quantity</label>
        <div className="quantity-box">
          <button>-</button>
          <input type="number" min="1" defaultValue="1" />
          <button>+</button>
        </div>

        <div className="price-summary">
          <p>Base price: <b>₹ 1900</b></p>
          <p>Quantity: <b>x1</b></p>
          <p>Total: <b className="total-price">₹ 1900</b></p>
          <p className="delivery-note">Estimated delivery: 5–7 business days</p>
        </div>

        <div className="action-buttons">
          <button className="save-button">💾 Save Design</button>
          <button className="cart-button">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeComponent;
