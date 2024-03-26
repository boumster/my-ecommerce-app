// CartItem.js
import React from 'react';

const CartItem = ({ item, removeItem }) => {
  const { id, name, price, quantity } = item;
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
