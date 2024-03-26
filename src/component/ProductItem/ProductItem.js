// ProductItem.js
import React, { useState } from 'react';
import './ProductItem.css';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
      <img src={product.image} alt={product.name} className="image" />
      <h3>{product.name}</h3>
      <p>{showDetails ? product.description : ''}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
