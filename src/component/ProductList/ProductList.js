// ProductList.js
import React from 'react';
import ProductItem from '../ProductItem/ProductItem.js';
import product from '../../data/product.js';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {product.map((product, index) => (
        <ProductItem key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;