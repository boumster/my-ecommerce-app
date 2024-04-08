//productpage.js
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import { useAuth } from '../Auth/Auth';
import LoginForm from '../LoginForm/LoginForm';

import './ProductPage.css';

export default function ProductPage() {
  const { auth } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    console.log(savedCart);
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      saveCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      saveCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.map(item =>
      item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  function saveCart(updatedCart) {
    console.log(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  return (
    <>
      {auth.getAuth() ? (
        <div>
          <Header />
          <table>
            <tr className='product-row'>
              <td><ProductList addToCart={addToCart} /></td>
              <td style={{ verticalAlign: 'top' }}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
            </tr>
          </table>
          <Footer />
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
