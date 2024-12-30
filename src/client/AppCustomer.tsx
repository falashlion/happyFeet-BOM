import React from "react";
import { Routes, Route } from "react-router-dom";
import homePage from "./pages/home";
import ProductPage from "./pages/products";
import Cart from "./pages/Cart";

const AppCustomer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppCustomer;
