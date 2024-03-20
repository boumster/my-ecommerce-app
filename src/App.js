import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productpage from './component/Productpage/Productpage';
import Login from './component/Login/Login';
import HomePage from './component/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Productpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
