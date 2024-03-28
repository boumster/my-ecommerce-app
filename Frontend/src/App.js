import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productpage from './component/Productpage/Productpage';
import LoginPage from './component/LoginPage/LoginPage';
import HomePage from './component/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Productpage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
