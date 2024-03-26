// Cart.js
import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

export default function Cart({ cart = [], removeFromCart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}
