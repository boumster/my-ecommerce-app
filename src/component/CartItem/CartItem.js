// CartItem.js
import React from 'react';
import './CartItem.css';

export default function CartItem({ item, removeFromCart }) {
  const { id, name, price, quantity } = item;
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={name} className="image" />
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    </div>
  );
}
