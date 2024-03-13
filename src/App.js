import React from 'react';
import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Component/Navbar/About';
import Login from './Component/Navbar/Login';
import DownloadPage from './Component/Navbar/DownloadPage';
import FileUpload from './Component/FileUpload';
import PasswordGen from './Component/PasswordGen/PasswordGen';
import Payment from './Component/Payment/Payment';
import Cart from './Component/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/cart" element={<Cart />} />
        <Route path="/password" element={<PasswordGen/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/" element={<FileUpload />} />
        <Route path="/about/cart/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
