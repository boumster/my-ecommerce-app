// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({addToCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                console.log('Response:', response);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    console.log('Products:', products);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product, index) => (
                    <ProductItem key={index} product={product} addToCart={addToCart}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
